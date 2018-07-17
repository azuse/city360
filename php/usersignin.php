<?php
    header('Content-type: text/html;charset=UTF-8');
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

    function singin($email,$password){
        
        $db = new DB();
    	$sqlselect = "USE city360";
        $result = mysql_query($sqlselect,$db->conn);

        $sqlsetutf8 = "set names 'utf8'";
        $result = mysql_query($sqlsetutf8,$db->conn);

        $sql = "SELECT * FROM userdata WHERE BINARY email='".$email."';";
        $result = mysql_query($sql,$db->conn);
        $row = mysql_fetch_array($result);
        if(!$row){
            $temp['login']=0;
            $temp['errortype']="邮箱未注册";
            echo json_encode($temp);
            exit();
        }
        else{
            $shapassword = sha1($password.$row['salt']);
            if($shapassword == $row['password']){
                $temp['login']=1;
                $temp['nickname']=$row['nickname'];
                $temp['email']=$row['email'];
                $temp['job']=$row['job'];
                $temp['jobdetail']=$row['jobdetail'];
                $temp['tel']=$row['tel'];
                $temp['birth']=$row['birth'];
                $temp['avatar']=$row['avatar'];
                echo json_encode($temp);
            }
            else 
            $temp['login']=0;
            $temp['errortype']="密码错误";
            echo json_encode($temp);
        }
    }
    
    $time = date("Y-m-d H:s:i");
    if($_SERVER['REQUEST_METHOD']=='POST'){

        $email = $_POST['email'];
        $password = $_POST['password'];

        signin($email,$password);
    };
?>