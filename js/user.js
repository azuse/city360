//用户操作
var userSigninURL = "php/usersignin.php";
var userSignupURL = "php/usersignup.php";

function newuser(){
    var username = $("#username")[0].value;
    var email = $("#mailaddr")[0].value;
    var password = $("#password")[0].value;
    var passwordre = $("#password-re")[0].value;

    if(!username){
        alert("请填写用户名");
        $("#username").addClass("invalid");
        return
    }
    if(!email){
        alert("请填写邮箱");
        $("#mailaddr").addClass("invalid");
        return
    }
    if(!password){
        alert("请填写密码");
        $("#password").addClass("invalid");
        return
    }
    if(!passwordre){
        alert("请填写确认密码");
        $("#password-re").addClass("invalid");
        return
    }


    var job;
    var jobdetail;
    if( $("[href=#signupDesigner]").hasClass("active")){
        job = 1;
        jobdetail = $("#job")[0].innerHTML;
        if(!jobdetail){
            alert("请填写职业");
            $("#job").addClass("invalid");
            return;
        }
    }
    if($("[href=#signupGov]").hasClass("active")){
        job = 2;
        jobdetail = $("#govname")[0].value;
        if(!jobdetail){
            alert("请填写政府机构");
            $("#govname").addClass("invalid");
            return;
        }
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
            "job":job,
            "jobdetail":jobdetail,
            "email":email,
            "tel":tel,
            "birth":birth,
            "avatar":avatar
        },
        success: function(result){
            if(result=="上传成功"){
                $("#username")[0].value = "";
                $("#mailaddr")[0].value = "";
                $("#password")[0].value = "";
                $("#password-re")[0].value = "";
                $("#telnum")[0].value = "";
                $("#govname")[0].value = "";
                showinfo("注册成功");
                setUser(username,email,avatar,job,jobdetail);
            }
            else if(result == "用户名重复"){
                $("#username").addClass("invalid");
                showinfo("用户名重复");
            }
            else if(result == "邮箱重复"){
                $("#mailaddr").addClass("invalid");
                showinfo("邮箱重复");
            }  
        },
        error: function (XMLHttpRequest, textStatus, errorThrown){
            alert(XMLHttpRequest.status);
            alert(XMLHttpRequest.readyState);
            alert(textStatus);
        }
    });
    
}

function signin(){
    
}