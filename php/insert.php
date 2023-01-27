<?php
include 'insertobj.php';
$insert = new Databases();
if (isset($_POST['Patient_ID'])) {
    $data = $_POST;
    $insert->insert('anaesthesiacaselogbook', $data);
    header('location:../Anistezia.php');
}
if (isset($_POST['PROCEDURES'])) {
    $data = $_POST;
    $insert->insert('procedurelogbook', $data);
    header('location:../Anistezia.php');
}
if (isset($_POST['Anesthetic_Technique'])) {
    $data = $_POST;
    $insert->insert('technique', $data);
    header('location:../Anistezia.php');
}
if (isset($_POST['ASA'])) {
    $data = $_POST;
    $insert->insert('classification', $data);
    header('location:../Anistezia.php');
}
if(isset($_POST["TableName"])){
    $tableName=$_POST["TableName"];
    unset($_POST["TableName"]);
    $insert->insert($tableName, $_POST);
    header('Location: ' . $_SERVER['HTTP_REFERER']);

}

