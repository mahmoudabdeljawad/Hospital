<?php
 class create_table{
    public $con;
    public $error;
    public function __construct()
    {
        include 'conn.php';
        $this->con = $conn;
    }
    public function table($Name){
        $sql="select * from $Name";
        $result=mysqli_query($this->con,$sql);
        echo " <thead class=thead-dark>";
        echo "<tr>";
            while($row=$result->fetch_assoc()){
                foreach($row as $key=> $value){
                echo "<th scope=col>$key</th>";
                }
            }
        echo "</tr>
            </thead>";
            echo "<tbody>";
            $result=mysqli_query($this->con,$sql);
            echo "<tr>";
            
       foreach($result->fetch_assoc() as $key=>$value) {
            echo "<td>" . $value . "</td>";
        
        }
            echo "<tr>";

        echo "</tbody>";
    }

}
