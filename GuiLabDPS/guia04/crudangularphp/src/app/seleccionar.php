<?php
 header('Access-Control-Allow-Origin: *');
 header("Access-Control-Allow-Headers: Origin, X-Requested-With, ContentType, Accept");

 require("conexion.php");
 $con=retornarConexion();
 $registros=mysqli_query($con,"select codigo, descripcion, precio,proveedor,fabricante from articulos where codigo=$_GET[codigo]");


 if ($reg=mysqli_fetch_array($registros)) 
 {
 $vec[]=$reg;
 }

 $cad=json_encode($vec);
 echo $cad;
 //