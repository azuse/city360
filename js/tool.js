function showinfo(info){
    $("#infotext")[0].innerHTML = info;
    $("#infoscreen").modal("open");
}

function setUser(username,email,avatar,job,jobdetail,tel){
    sessionStorage.setItem('login',true);
    sessionStorage.setItem('username',username);
    sessionStorage.setItem('email',email);
    sessionStorage.setItem('avatar',avatar);
    sessionStorage.setItem('job',job);
    sessionStorage.setItem('jobdetail',jobdetail);
    sessionStorage.setItem('tel',tel);

    $("#btnSignup")[0].style.display = "none";
    $("#btnSignin")[0].style.display = "none";
    if(avatar == "default")$("#imgAvatar").src = "default.jpg";
    else $("#imgAvatar").src = avatar;
    $("#liAvatar")[0].style.display = "";
    $("#pUsername")[0].innerHTML = username;
    $("#pUsername")[0].style.display = "";
    $("#btnNewproject")[0].style.display = "";

}

function setUserFromSesssion(){
    if(sessionStorage.getItem('login') != "false"){
        $("#btnSignup")[0].style.display = "none";
        $("#btnSignin")[0].style.display = "none";
        if(sessionStorage.getItem('avatar') == "default")$("#imgAvatar").src = "default.jpg";
        else $("#imgAvatar").src = sessionStorage.getItem('avatar');
        $("#liAvatar")[0].style.display = "";
        $("#pUsername")[0].innerHTML = sessionStorage.getItem('username');
        $("#pUsername")[0].style.display = "";
        $("#btnNewproject")[0].style.display = "";

    }
}