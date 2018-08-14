<?php
    class Item{
        public $designproject,$designername,$designertel;
        function __construct($designproject,$designername,$designertel){
            $this->designproject = $designproject;
            $this->designername = $designername;
            $this->designertel = $designertel;
        }
        function show_data(){
            echo "<project>$this->designproject</project>";
            echo "<name>$this->designername</name>";
            echo "<tel>$this->designertel</tel>";    
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

    function saveData($item){
    	$db = new DB();
    	$sqlselect = "USE city360";
        $result = mysql_query($sqlselect,$db->conn);
    	 if(!$result){
            //  echo "Data save fail:".mysql_error($db->conn);
        }else{
            // echo "Data save successfully!!!";
        }
        $maketable = "CREATE TABLE `city360`.`".$item->designproject."` ( `designername` TEXT NOT NULL , `designertel` TEXT NOT NULL , `designproject` TEXT NOT NULL ,`id` INT NOT NULL AUTO_INCREMENT , PRIMARY KEY (`id`)) ENGINE = InnoDB;";
        $result = mysql_query($maketable,$db->conn);

        $sql = "INSERT INTO `".$item->designproject."`(`designername`,`designertel`,`designproject`) VALUES ('".$item->designername."','".$item->designertel."','".$item->designproject."');";
            
        // echo var_dump($this->db->conn);
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
        $item = new Item($_POST['designproject'],$_POST['designername'],$_POST['designertel']);
        // echo "2";
        saveData($item);
    };
?>