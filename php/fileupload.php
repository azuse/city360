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
    $upload_path = "/var/www/html/city360/file/".$_POST['name']."/"; //上传文件的存放路径
    $img_path = "/var/www/html/city360/file/".$_POST['name'].".png";
    $dir = "/var/www/html/city360/file/".$_POST['name'];
    //判断文件类型是否被允许上传
    if(in_array($type, $allow_type)){
        //如果不被允许，则直接停止程序运行
        copy($file['tmp_name'], $img_path);
    }
    if (!file_exists($dir)){
        mkdir ($dir,0777,true);
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