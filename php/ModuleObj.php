<?php

include 'conn.php';
$sql = "SHOW COLUMNS FROM breast_ultra_misc";
$result = mysqli_query($conn, $sql);
while($row=mysqli_fetch_assoc($result)){
    print_r( $row["Field"]);

}

?>