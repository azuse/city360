function showinfo(info){
    $("#infotext")[0].innerHTML = info;
    $("#infoscreen").modal("open");
}

function setUser(username,email,avatar,job,jobdetail,tel){
    sessionStorage.setItem('username',username);
    sessionStorage.setItem('email',email);
    sessionStorage.setItem('avatar',avatar);
    sessionStorage.setItem('job',job);
    sessionStorage.setItem('jobdetail',jobdetail);
    sessionStorage.setItem('tel',tel);

    $("#btnSignup")[0].style.display = "none";
    $("#btnSignin")[0].style.display = "none";
    if(avatar != "default")$("#imgAvatar").src = avatar;
    $("#imgAvatar")[0].style.display = "inline";
    $("#pUsername").innerHTML = username;
    $("#pUsername")[0].style.display = "inline";
}