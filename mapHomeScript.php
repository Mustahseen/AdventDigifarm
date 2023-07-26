<?php 
   require "mapHomeFunctions.php";
 
   if(isset($_POST['tree_name'])){
      $category = $_POST['tree_name'];
 
      if($category === ""){
         $products = getAllProducts();
      }else{
         $products = getProductsByCategory($category);
      }
      echo json_encode($products);
   }