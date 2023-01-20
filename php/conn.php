<?php


try{
    $conn = mysqli_connect("localhost", "root", "", "hospital");

}catch (Exception $error){
    echo $error;
}


?>