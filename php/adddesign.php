<?php
class DB{
    public $conn;
    function __construct()
    { //connect
        $dbhost = "localhost";
        $account = "root";
        $password = "misakaxindex";
        $dbname = "city360";
        
        $this->conn = mysql_connect($dbhost,$account,$password);        
        if (!$this->conn) {
            // die('Connect Error (' . mysql_connect_errno() . ') '. mysql_connect_error());
        }else{
            //echo 'Connect success... ' . mysqli_get_host_info($this->conn) . "\n";
        }
    
    }
    function __destruct()
    {   //disconnect
        //mysqli_colse($this->conn);//无此函数
    }

}

$time = date("Y-m-d H:s:i");
    if($_SERVER['REQUEST_METHOD']=='POST'){
        $db = new DB();
    	$sqlselect = "USE city360";
        $result = mysql_query($sqlselect,$db->conn);
        $sql = "INSERT INTO `designdatabase`(`name`,`shape`,`size`,`type`,`designage`,`outdoor`,`district`,`region`,`function`,`detail`,`img`) VALUES ('".$_POST['name']."','".$_POST['shape']."','".$_POST['size']."','".$_POST['type']."','".$_POST['designage']."','".$_POST['outdoor']."','".$_POST['district']."','".$_POST['region']."','".$_POST['function']."','".$_POST['detail']."','".$_FILES["file"]["name"]."');";


    };
?>