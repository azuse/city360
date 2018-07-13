//用户操作
var userSigninURL = "php/usersignin.php";
var userSignupURL = "php/usersignup.php";

function newuser(){
    var username = $("#username")[0].value;
    var email = $("#mailaddr")[0].value;
    var password = $("#password")[0].value;
    var passwordre = $("#password-re")[0].value;
    var job;
    var jobdetail;
    if( $("[href=#signupDesigner]").hasClass("active")){
        job = 1;
        jobdetail = $("#job")[0].innerHTML;
    }
    if($("[href=#signupGov]").hasClass("active")){
        job = 2;
        jobdetail = $("#govname")[0].value;
    }
    var tel = $("#telnum")[0].value;
    var birth = "none";
    var avatar = "default";

    if(passwordre != password){
        alert("两次输入的密码不一致！");
        $("#password").addClass("invalid");
        $("#password-re").addClass("invalid");
        return;
    }
    
    var sha1password = sha1(password.toString());

    $.ajax({
        url:userSignupURL,
        type: "post",
        dataType:"text",
        async: false,
        data: {
            "nickname":username,
            "password":password,
            "email":mailaddr,
            "job":job,
            "jobdetail":jobdetail,
            "email":email,
            "tel":tel,
            "birth":birth,
            "avatar":avatar
        },
        success: function(result){
            alert("上传成功");
            $("#username")[0].value = "";
            $("#mailaddr")[0].value = "";
            $("#password")[0].value = "";
            $("#password-re")[0].value = "";
            $("#telnum")[0].value = "";
            $("#govname")[0].value = "";
        },
        error: function (XMLHttpRequest, textStatus, errorThrown){
            alert(XMLHttpRequest.status);
            alert(XMLHttpRequest.readyState);
            alert(textStatus);
        }
    });
    
}