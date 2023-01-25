
<?php
class Module{
    public $con;

public function __construct()
{
    include 'conn.php';
    $this->con = $conn;
}
public function modules_show(){

}

}

?>