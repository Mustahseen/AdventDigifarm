<?php
    function connect(){
        $mysqli = new mysqli('localhost', 'root', '', 'digifarm');
        if($mysqli->connect_errno != 0){
         return $mysqli->connect_error;
        }else{
            $mysqli->set_charset("utf8mb4");	
        }
    return $mysqli;
    }

    function getAllProducts(){
        $mysqli = connect();
        $res = $mysqli->query("SELECT * FROM titanfarm ORDER BY RAND()");
        while($row = $res->fetch_assoc()){
           $products[] = $row;
        }
        return $products;
     }

     function getAllData(){
      $mysqli = connect();
      $res = $mysqli->query("SELECT * FROM sensorpackagedata ORDER BY RAND()");
      while($row = $res->fetch_assoc()){
         $products[] = $row;
      }
      return $products;
   }

     function getProductsByCategory($tree_name){
        $mysqli = connect();
        $res = $mysqli->query("SELECT * FROM titanfarm WHERE tree_name = '$tree_name'");
        while($row = $res->fetch_assoc()){
           $products[] = $row;
        }
        return $products;
     }