<?php
    ini_set('display_errors',1);
    error_reporting(E_ALL);

    class Item{
        public $nickname,$password,$email,$job,$jobdetail,$tel,$birth,$avator;
        function __construct($nickname,$password,$email,$job,$jobdetail,$tel,$birth,$avator){
            $this->nickname = $nickname;
            $this->password = $password;
            $this->email = $email;
            $this->job = $job;
            $this->jobdetail = $jobdetail;
            $this->tel = $tel;
            $this->birth = $birth;
            $this->avator = $avator;
        }
        function show_data(){
            echo "<nickname>$this->nickname</nickname>";
            echo "<password>$this->password</password>";
            echo "<email>$this->email</email>";
            echo "<job>$this->job</job>";
            echo "<jobdetail>$this->job</jobdetail>";
            echo "<tel>$this->tel</tel>";
            echo "<birth>$this->birth</birth>";
            echo "<avator>$this->avator</avator>";
        }
    }


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

    function newUserSignup($item){
        $db = new DB();
    	$sqlselect = "USE city360";
        $result = mysql_query($sqlselect,$db->conn);
        
        $salt = base64_encode(mcrypt_create_iv(32,MCRYPT_DEV_RANDOM));
        $shapassword = sha1($item->password.$salt);
        $sql = "INSERT INTO `city360data_demo`(`nickname`,`password`,`salt`,`email`,`job`,`jobdetail`,`tel`,`birth`,`avator`) VALUES ('".$item->nickname."','".$shapassword."','".$salt."','".$item->email."','".$item->job."','".$item->$jobdetail."','".$item->tel."','".$item->birth."','".$item->avator."');";
        $result = mysql_query($sql,$db->conn);
        
        if(!$result){
            echo "上传失败:".mysql_error($db->conn);
        }else{
            echo "上传成功";
        }

    }
    $time = date("Y-m-d H:s:i");
    if($_SERVER['REQUEST_METHOD']=='POST'){
    	// echo "1";
        $item = new Item($_POST['nickname'],$_POST['password'],$_POST['email'],$_POST['job'],$_POST['jobdetail'],$_POST['tel'],$_POST['birth'],$_POST['avator']);
        // echo "2";
        newUserSignup($item);
    };
?>