<?php 

	class Item{
	    public $name,$author,$street,$tel,$budget,$demand,$address,$time,$lng,$lat;
	    function __construct($name, $author, $street, $tel, $budget, $demand, $address, $time, $lng, $lat){
	        $this->name = $name;
	        $this->author = $author;
	        $this->street = $street;
	        $this->tel = $tel;
	        $this->budget = $budget;
	        $this->demand = $demand;
	        $this->address = $address;
	        $this->time = $time;
	        $this->lng = $lng;
	        $this->lat = $lat;
	    }
	    function show_data(){
	        echo "<name>$this->name</name>";
	        echo "<author>$this->author</author>";
	        echo "<street>$this->street</street>";
	        echo "<tel>$this->tel</tel>";
	        echo "<budget>$this->budget</budget>";
	        echo "<demand>$this->damand</demand>";
	        echo "<address>$this->address</address>";
	        echo "<time>$this->time</time>";        
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
            echo "Data save fail:".mysql_error($db->conn);
        }else{
            echo "Data save successfully!!!";
        }

        if($item->lat && $item->lng)
            $sql = "INSERT INTO `city360data_demo`(`author`,`street`,`tel`,`budget`,`demand`,`time`,`address`,`lng`,`lat`) VALUES ('".$item->author."','".$item->street."','".$item->tel."','".$item->budget."','".$item->demand."','".$item->time."','".$item->address."','".$item->lng."','".$item->lat."');";
        else
            $sql = "INSERT INTO `city360data_demo`(`author`,`street`,`tel`,`budget`,`demand`,`time`,`address`,`lng`,`lat`) VALUES ('".$item->author."','".$item->street."','".$item->tel."','".$item->budget."','".$item->demand."','".$item->time."','".$item->address."','0','0');";
            
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
    	echo "1";
        $item = new Item($_POST['author'],$_POST['street'],$_POST['tel'],$_POST['budget'],$_POST['demand'],$_POST['address'],$time,$_POST['lng'],$_POST['lat']);
        echo "2";
        saveData($item);
    };
 ?>