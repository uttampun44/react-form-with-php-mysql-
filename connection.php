<?php

define("DB_LOCALHOST", 'localhost');
define("DB_USERNAME", 'root');
define("DB_PASSWORD", '');
define("DB_DATABASE", 'formregisteration');

$sqlConnection = mysqli_connect(DB_LOCALHOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE);

if($sqlConnection){
     ?>
        <script>
            alert("Connection Success");
        </script>
     <?php
}else{
    mysqli_connect_errno($sqlConnection);
}