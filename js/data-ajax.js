const uploadURL = "php/upload.php";
const deleteURL = "/city360/php/delete.php";
const signupURL = "/city360/php/signup.php";

function ajaxtest()
{
    var name = $("#name")[0].value;
    var author = $("#author")[0].value;
    var street = $("#street")[0].value;
    var tel = $("#tel")[0].value;
    var budget = $("#budget")[0].value;
    var demand = $("#demand")[0].value;
    var address = $("#address")[0].value;


    if (!author||!address||!tel||!demand||!name)
    {
        alert("请填写必要信息");
        $("#name").addClass("invalid");
        $("#author").addClass("invalid");
        $("#tel").addClass("invalid");
        $("#address").addClass("invalid");
        $("#demand").addClass("invalid");
        return;
    } 

    if(uploadcoords != undefined)
    {
        $.ajax({
            url: uploadURL,        
            type: "post",
            dataType:"text",
            async: false,
            data: {"name":name, "author": author, "street": street,"tel" : tel, "budget": budget, "demand": demand, "address": address, "lng":uploadcoords.lng, "lat":uploadcoords.lat},
            success: function(result){
                // alert(result);
                $("#name")[0].value = "";
                $("#author")[0].value = "";
                $("#street")[0].value = "";
                $("#tel")[0].value = "";
                $("#budget")[0].value = "";
                $("#demand")[0].value = "";
                $("#address")[0].value = "";
                $("#infotext")[0].innerHTML = "上传成功";
                $("#infoscreen").modal("open");
            },
            error: function (XMLHttpRequest, textStatus, errorThrown){
                alert(XMLHttpRequest.status);
                alert(XMLHttpRequest.readyState);
                alert(textStatus);
            }
        });
    }
    else
    {
        $.ajax({
            url: uploadURL,        
            type: "post",
            dataType:"text",
            async: false,
            data: {"name":name, "author": author, "street": street,"tel" : tel, "budget": budget, "demand": demand, "address": address, "lng":"0", "lat":"0"},
            success: function(result){
                // alert("上传成功");
                $("#name")[0].value = "";
                $("#author")[0].value = "";
                $("#street")[0].value = "";
                $("#tel")[0].value = "";
                $("#budget")[0].value = "";
                $("#demand")[0].value = "";
                $("#address")[0].value = "";
                $("#infotext")[0].innerHTML = "上传成功";
                $("#infoscreen").modal("open");
            },
            error: function (XMLHttpRequest, textStatus, errorThrown){
                alert(XMLHttpRequest.status);
                alert(XMLHttpRequest.readyState);
                alert(textStatus);
            }
        });
    }
    for (var item in $("#file")[0].files){
        if($("#file")[0].files[item] != undefined){
            var fileform = new FormData($('#uploadForm'));
            fileform.append('name',name);
            //fileform.append('files',$("#file")[0].files[item]);
            fileform.append('file',$("#file")[0].files[item]);
            $.ajax({
                url: 'php/fileupload.php',
                type: 'POST',
                cache: false,
                data: fileform,
                processData: false,
                contentType: false
            }).done(function(res) {}).fail(function(res) {});
        }
        else{
            console.log("nofile");
        }
    }

}

function deleteAjax(id){
    var passwd = $("#passwd")[0].value;
    $("#passwd")[0].value = "";
    $.ajax({
        url: deleteURL,        
        type: "post",
        dataType:"text",
        async: false,
        data: {"id":id,"passwd":passwd},
        success: function(result){
            alert(result);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown){
            alert(XMLHttpRequest.status);
            alert(XMLHttpRequest.readyState);
            alert(textStatus);
        }
    });

}

function signup(type){
    var username = $("#username")[0].value;
    var email = $("#email")[0].value;
    var passwd = $("#password")[0].value;
    var passwd_re = $("#password-re")[0].value;
    if(type == "designer"){
        var job = $("#job")[0].innerHTML;
        if(passwd_re == passwd){
            $.ajax({
                url: signupURL,        
                type: "post",
                dataType:"text",
                async: false,
                data: {
                    "username" : username,
                    "email" : email,
                    "passwd" : passwd,
                    "type" : type,
                    "job" : job
                        },
                success: function(result){
                    alert(result);
                    var data = loadData();
                    $("#cardholder")[0].innerHTML = "";
                    for (item in data) {
                        var div = newcard(data[item].name,data[item].author,data[item].street,data[item].tel,data[item].budget,data[item].demand,data[item].time,data[item].address,data[item].lng,data[item].lat,data[item].id);
                        $("#cardholder")[0].appendChild(div);
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown){
                    alert(XMLHttpRequest.status);
                    alert(XMLHttpRequest.readyState);
                    alert(textStatus);
                }
            });
        }
        else
            alert("两次输入的密码不一致");
    }
}