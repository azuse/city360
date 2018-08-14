<?php
ini_set('display_errors',1);
error_reporting(E_ALL);
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
        $file = $_FILES['file'];//得到传输的数据
        //得到文件名称
        $name = $file['name'];

        $db = new DB();
    	$sqlselect = "USE city360";
        $result = mysql_query($sqlselect,$db->conn);
        $sqlsetutf8 = "set names 'utf8'";
        $result = mysql_query($sqlsetutf8,$db->conn);

        $sql = "INSERT INTO `designdatabase`(`name`,`shape`,`size`,`type`,`designage`,`outdoor`,`district`,`region`,`function`,`detail`,`img`,`code`) VALUES ('".$_POST['name']."','".$_POST['shape']."','".$_POST['size']."','".$_POST['type']."','".$_POST['designage']."','".$_POST['outdoor']."','".$_POST['district']."','".$_POST['region']."','".$_POST['function']."','".$_POST['detail']."','".$name."','".$_POST['code']."');";
        echo $sql;
        $result = mysql_query($sql,$db->conn);    
        echo $result;    
        move_uploaded_file($_FILES["file"]["tmp_name"],"/var/www/html/city360/designdataimg/" . $_FILES["file"]["name"]);

    };
?>