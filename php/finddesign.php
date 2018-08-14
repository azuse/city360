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

 if($_SERVER['REQUEST_METHOD']=='POST'){
    $db = new DB();
    $sqlselect = "USE city360";
    $result = mysql_query($sqlselect,$db->conn);
    $sqlsetutf8 = "set names 'utf8'";
    $result = mysql_query($sqlsetutf8,$db->conn);

    $sql = "SELECT * FROM  `designdatabase`";
    $result = mysql_query($sql,$db->conn);

    $codeFromUser = $_POST['code'];
    $similarityMAX = 0;
    $similarityMAXid = array(0);
    $similarity = array(0);
    $x = 0;
    while($row = mysql_fetch_array($result))
    {
        $codeFromSever = strval($row['code']);
        //echo "code user:".$codeFromUser;
        //echo "code server:".$codeFromSever;
        
        $similarity[$x] = 0;
        for($i=0;$i<strlen($codeFromSever);$i++){
            if($codeFromUser[$i] == $codeFromSever[$i])$similarity[$x]++;
        }
        $x++;
    }

    //$similarity是长度为数据库里取出来的结果行数长度的数组，记录了每一组数据的相似度
    //$similarityMAX 是临时变量，存放计算相似度最大值时的临时最大值
    //$similarityMAXid 是长度为4的数组，存放前四个相似度最大的数据的行号
    
    $similarityMAX = 0;
    for($i=0;$i<count($similarity);$i++){
        if($similarity[$i]>$similarityMAX){
            $similarityMAX = $similarity[$i];
            $similarityMAXid[0] = $i;
        }
    }
    $similarity[$similarityMAXid[0]] = -1;

    $similarityMAX = 0;
    for($i=0;$i<count($similarity);$i++){
        if($similarity[$i]>$similarityMAX){
            $similarityMAX = $similarity[$i];
            $similarityMAXid[1] = $i;
        }
    }
    $similarity[$similarityMAXid[1]] = -1;

    $similarityMAX = 0;
    for($i=0;$i<count($similarity);$i++){
        if($similarity[$i]>$similarityMAX){
            $similarityMAX = $similarity[$i];
            $similarityMAXid[2] = $i;
        }
    }
    $similarity[$similarityMAXid[2]] = -1;

    $similarityMAX = 0;
    for($i=0;$i<count($similarity);$i++){
        if($similarity[$i]>$similarityMAX){
            $similarityMAX = $similarity[$i];
            $similarityMAXid[3] = $i;
        }
    }
    $similarity[$similarityMAXid[3]] = -1;

    global $dataBuf;
    for($i=0;$i<4;$i++){
        $temp['name']=mysql_result($result,$similarityMAXid[$i],"name");
        $temp['size']=mysql_result($result,$similarityMAXid[$i],"size");
        $temp['type']=mysql_result($result,$similarityMAXid[$i],"type");
        $temp['designage']=mysql_result($result,$similarityMAXid[$i],"designage");
        $temp['outdoor']=mysql_result($result,$similarityMAXid[$i],"outdoor");
        $temp['district']=mysql_result($result,$similarityMAXid[$i],"district");
        $temp['region']=mysql_result($result,$similarityMAXid[$i],"region");
        $temp['function']=mysql_result($result,$similarityMAXid[$i],"function");
        $temp['detail']=mysql_result($result,$similarityMAXid[$i],"detail");
        $temp['img']=mysql_result($result,$similarityMAXid[$i],"img");
        $temp['code']=mysql_result($result,$similarityMAXid[$i],"code");
        $temp['similarity']=$similarity[$similarityMAXid[$i]];
        $dataBuf[$i] = $temp;
    }
    //输出json格式字符串
    echo json_encode($dataBuf);        
    mysql_free_result($result);
};
?>