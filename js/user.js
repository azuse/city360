//用户操作
var userSigninURL = "php/usersignin.php";

function newuser(){
    var username = $("username").value;
    var mailaddr = $("mailaddr").value;
    var password = $("password").value;
    var passwordre = $("password-re").value;
    
    if(passwordre != password){
        alert("两次输入的密码不一致！");
        $("password").addClass("invalid");
        $("password-re").addClass("invalid");
        return;
    }

    $.ajax({
        url:userSigninURL,
        type: "post",
        dataType:"text",
        async: false,
        data: {
            "nickname":username,
            "password":password,
            "email":mailaddr,
            ""
        },
        success: function(result){
            alert("上传成功");
            $("#designername")[0].value = "";
            $("#designertel")[0].value = "";
            

        },
        error: function (XMLHttpRequest, textStatus, errorThrown){
            alert(XMLHttpRequest.status);
            alert(XMLHttpRequest.readyState);
            alert(textStatus);
        }
    });
    
}