<?php   
 
 class Databases{  
    public $conn;  
    public $error;  

      public function __construct()  
      {
        $this->conn = mysqli_connect("localhost", "root", "", "hospital");
      }  
      public function insert($table_name, $data)  
      {  
           $string = "INSERT INTO ".$table_name." (";            
           $string .= implode(",", array_keys($data)) . ') VALUES (';            
           $string .= "'" . implode("','", array_values($data)) . "')";  
           if(mysqli_query($this->conn, $string))  
           {  
                return true;  
           }  
           else  
           {  
                echo mysqli_error($this->conn);  
           }  
      }  
 }  
 ?>  