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

    function loadData($designproject){
        $db = new DB();
        
        global $dataBuf;
        $sqlselect = "USE city360";
        $result = mysql_query($sqlselect,$db->conn);
    
        $sql = "SELECT * FROM `".$designproject."` ";
        $result = mysql_query($sql,$db->conn);
        if($result == null){
            echo "error:".mysql_error($db->conn)."<br>";
        }
        //echo var_dump($result);
        $i = 0;
        while($row = mysql_fetch_array($result))
        {
            //$temp = new Item($row['UID'],$row['Uname'],$row['Note'],$row['Longitude'],$row['Latitude'],$row['Altitude'],$row['Time']);
            //先将结果放入一维数组中
            $temp["designername"] = $row['designername'];
            $temp["designertel"] = $row['designertel'];
            $temp["designproject"] = $row['designproject'];

            //获取文件部分
            $dir = "/alidata/www/phpwind/city360/fileDesign/".$designproject."/";
            $files_str = "[";
            if (file_exists($dir)){
                $files = getFile($dir);
                foreach ($files as $value) {
                    $files_str = $files_str.'"'.$value.'",';
                }
                $temp["files"] = $files;
            }
            //放入二维数组dataBuf中
            $dataBuf[$i++] = $temp;
        }
        
        
    
        //输出json格式字符串
        echo json_encode($dataBuf);        
        mysql_free_result($result);
    }

    $time = date("Y-m-d H:s:i");
    if($_SERVER['REQUEST_METHOD']=='POST'){
        loadData($_POST("designproject"));
    };

?>