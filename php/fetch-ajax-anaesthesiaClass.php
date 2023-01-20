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
    $searchQuery = " and (Patient_ID like '%" . $searchValue . "%' or 
   Age like '%" . $searchValue . "%' or 
   ASA like'%" . $searchValue . "%' ) ";
}

$sel = mysqli_query($conn, "select count(*) as allcount from classification");
$records = mysqli_fetch_assoc($sel);
$totalRecords = $records['allcount'];

$sel = mysqli_query($conn, "select count(*) as allcount from classification WHERE 1 " . $searchQuery);
$records = mysqli_fetch_assoc($sel);
$totalRecordwithFilter = $records['allcount'];


$empQuery = "select * from classification WHERE 1 " . $searchQuery . " order by id  " . $columnSortOrder . " limit " . $row . "," . $rowperpage;
$empRecords = mysqli_query($conn, $empQuery);
$data = array();

while ($row = mysqli_fetch_assoc($empRecords)) {
    $data[] = array(
        "id" => $row['id'],
        "ASA" => $row['ASA'],
        "Definition" => $row['Definition'],
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
