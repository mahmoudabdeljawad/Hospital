<?php

include 'conn.php';

$draw = $_POST['draw'];
$row = $_POST['start'];
$rowperpage = $_POST['length']; // Rows display per page
$columnIndex = $_POST['order'][0]['column']; // Column index
$columnName = $_POST['columns'][$columnIndex]['data']; // Column name
$columnSortOrder = $_POST['order'][0]['dir']; // asc or desc
$searchValue = $_POST['search']['value']; 

$searchQuery = " ";
if ($searchValue != '') {
    $searchQuery = " and (id like '%" . $searchValue . "%' or 
    PROCEDURES like '%" . $searchValue . "%' or 
    Minimum_requirements like'%" . $searchValue . "%'or 
    No_Performed like'%" . $searchValue . "%' ) ";
}

$sel = mysqli_query($conn, "select count(*) as allcount from procedurelogbook");
$records = mysqli_fetch_assoc($sel);
$totalRecords = $records['allcount'];

$sel = mysqli_query($conn, "select count(*) as allcount from procedurelogbook WHERE 1 " . $searchQuery);
$records = mysqli_fetch_assoc($sel);
$totalRecordwithFilter = $records['allcount'];


$empQuery = "select * from procedurelogbook WHERE 1 " . $searchQuery . " order by id  " . $columnSortOrder . " limit " . $row . "," . $rowperpage;
$empRecords = mysqli_query($conn, $empQuery);
$data = array();

while ($row = mysqli_fetch_assoc($empRecords)) {
    $data[] = array(
        "id" => $row['id'],
        "PROCEDURES" => $row['PROCEDURES'],
        "Minimum_requirements" => $row['Minimum_requirements'],
        "No_Performed" => $row['No_Performed'],
    );
}

## Response
$response = array(
    "draw" => intval($draw),
    "iTotalRecords" => $totalRecords,
    "iTotalDisplayRecords" => $totalRecordwithFilter,
    "aaData" => $data
);

echo json_encode($response);
