<?php 
    class DB{
        public $conn;
        function __construct()
        { //connect
            $dbhost = "localhost";
            $account = "root";
            $password = "7172eaf610";
            $dbname = "city360";
            
            $this->conn = mysqli_connect($dbhost,$account,$password,$dbname);        
            if (!$this->conn) {
                die('Connect Error (' . mysqli_connect_errno() . ') '. mysqli_connect_error());
            }else{
                //echo 'Connect success... ' . mysqli_get_host_info($this->conn) . "\n";
            }
        
        }
        function __destruct()
        {   //disconnect
            //mysqli_colse($this->conn);//无此函数
        }

    }

    function saveData($item){
        if($item->lat && $item->lng)
            $sql = "INSERT INTO `city360data_demo`(`author`,`street`,`tel`,`budget`,`demand`,`time`,`address`,`lng`,`lat`) VALUES ('".$item->author."','".$item->street."','".$item->tel."','".$item->budget."','".$item->demand."','".$item->time."','".$item->address."','".$item->lng."','".$item->lat."');";
        else
            $sql = "INSERT INTO `city360data_demo`(`author`,`street`,`tel`,`budget`,`demand`,`time`,`address`) VALUES ('".$item->author."','".$item->street."','".$item->tel."','".$item->budget."','".$item->demand."','".$item->time."','".$item->address."');";
            
        // echo var_dump($this->db->conn);
        $result = mysqli_query($this->db->conn,$sql);
        
        if(!$result){
            echo "Data save fail:".mysqli_error($this->db->conn);
        }else{
            echo "Data save successfully!!!";
        }
    }

    $time = date("Y-m-d H:s:i");
    if($_SERVER['REQUEST_METHOD']=='POST'){
        $item = new Item($_POST['author'],$_POST['street'],$_POST['tel'],$_POST['budget'],$_POST['demand'],$_POST['address'],$Time,$_POST['lng'],$_POST['lat']);
        
        saveData($item);
    }



 ?>