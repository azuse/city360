<?php
    $passwd = "deleteit";

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
    
    function deleteData($id){
        $db = new DB();
    	$sqlselect = "USE city360";
        $result = mysql_query($sqlselect,$db->conn);
    	 if(!$result){
            echo "Data save fail:".mysql_error($db->conn);
        }else{
            echo "Data save successfully!!!";
        }
        $sql = "DELETE FROM `city360data_demo` WHERE `id` = ".$id;
        $result = mysql_query($sql,$db->conn);
        if(!$result){
            echo "删除失败:".mysql_error($db->conn);
        }else{
            echo "删除成功";
        }        
    }
    
    if($_SERVER['REQUEST_METHOD']=='POST'){
        // echo "1";
        if($passwd == $_POST['passwd']){
            deleteData($_POST['id']);
        }
    };

?>