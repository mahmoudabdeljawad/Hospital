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
        $sql="select * from $Name limit 1";
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
            $sql="select * from $Name ";
        $result=mysqli_query($this->con,$sql);
            while($row=mysqli_fetch_assoc($result)){
                echo "<tr>";   
                foreach($row as $key=>$value) {
                    
                    echo "<td>" . $value . "</td>";
                  
            
                    }
                    echo "<tr>";

            }
       

        echo "</tbody>";
    }

}
