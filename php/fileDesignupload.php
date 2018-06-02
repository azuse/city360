<?php
$file = $_FILES['file'];//得到传输的数据
//得到文件名称
$name = $file['name'];
$username = $_POST['name'].".png";
$type = strtolower(substr($name,strrpos($name,'.')+1)); //得到文件类型，并且都转化成小写
$allow_type = array('jpg','jpeg','gif','png'); //定义允许上传的类型

//判断是否是通过HTTP POST上传的
if(!is_uploaded_file($file['tmp_name'])){
//如果不是通过HTTP POST上传的
echo "nothttpPost";
return ;
}
$upload_path = "/alidata/www/phpwind/city360/fileDesign/".$_POST['project']."/".$_POST['name']."/"; //上传文件的存放路径

$project_dir = "/alidata/www/phpwind/city360/fileDesign/".$_POST['project'];
if (!file_exists($project_dir)){
    mkdir ($project_dir,0777,true);
}

$upload_dir = "/alidata/www/phpwind/city360/fileDesign/".$_POST['project']."/".$_POST['name'];
if (!file_exists($upload_dir)){
    mkdir ($upload_dir,0777,true);
}

//开始移动文件到相应的文件夹
if(move_uploaded_file($file['tmp_name'],$upload_path.$file['name'])){
echo "Successfully!<br>";
echo $upload_path.$file['name'];
echo "<br>";
echo $_POST['name'];
}else{
echo "Failed!";
echo $username;
echo $upload_path.$file['name'];
echo "<br>";
echo $_POST['name'];
}


?>