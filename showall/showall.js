const downloadURL = "../php/download.php";
const uploadDesignURL = "../php/uploadDesign.php"
const downloadDesignURL = "../php/downloadDesign.php"
const fileURL = "../file/";
function onerror(){

}


function isHasImg(url){  
        var xmlHttp ;  
        if (window.ActiveXObject)  
         {  
          xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");  
         }  
         else if (window.XMLHttpRequest)  
         {  
          xmlHttp = new XMLHttpRequest();  
         }   
        xmlHttp.open("Get",url,false);  
        xmlHttp.send();  
        if(xmlHttp.status==404)  
        return false;  
        else  
        return true; 
}  

function newcard(name,author,street,tel,budget,demand,time,address,lng,lat,id,files){
    var col = document.createElement("div");
    col.className = "col s12 m6";
    var card = document.createElement("div");
    card.className = "card blue-grey darken-1 hoverable"
    var container = document.createElement("div");
    // container.className = "container";
    var row = document.createElement("div");
    row.className = "row";
    
    var namediv = document.createElement("div");
    namediv.className = "col s12 m12";
    var nameh5 = document.createElement("h5");
    nameh5.innerHTML = '<i class="material-icons prefix marginl5">title</i> ' + name;
    nameh5.className = "truncate";
    namediv.appendChild(nameh5);

    var authordiv = document.createElement("div");
    authordiv.className = "col s12 m6";
    var authorh5 = document.createElement("p");
    authorh5.innerHTML = '<i class="material-icons prefix marginl5">account_circle</i> ' + author;
    authorh5.className = "truncate";
    authordiv.appendChild(authorh5);

    var teldiv = document.createElement("div");
    teldiv.className = "col s12 m6";
    var telp = document.createElement("p");
    telp.innerHTML = '<i class="material-icons prefix marginl5">phone</i> ' + tel;
    telp.className = "truncate";
    teldiv.appendChild(telp);

    var budgetdiv = document.createElement("div");
    budgetdiv.classList = "col s12 m6";
    var budgetp = document.createElement("p");
    budgetp.innerHTML = '<i class="material-icons prefix marginl5">monetization_on</i> ' + budget;
    budgetp.className = "truncate";
    budgetdiv.appendChild(budgetp);

    var streetdiv = document.createElement("div");
    streetdiv.className = "col s12 m6";
    var streetp = document.createElement("p");
    streetp.innerHTML = '<i class="material-icons prefix marginl5">domain</i> ' + street;
    streetp.className = "truncate";
    streetdiv.appendChild(streetp);

    var demanddiv = document.createElement("div");
    demanddiv.className = "col s12 m6";
    var demandp = document.createElement("p");
    demandp.innerHTML = '<i class="material-icons prefix marginl5">star</i> ' +  demand;
    demandp.className = "truncate";
    demanddiv.appendChild(demandp);

    var addressdiv = document.createElement("div");
    addressdiv.className = "col s12 m6 truncate";
    addressdiv.innerHTML = '<p><i class="material-icons prefix marginl5">place</i> ' + address + "</p>";

    row.appendChild(namediv);
    row.appendChild(authordiv);
    row.appendChild(teldiv);
    row.appendChild(budgetdiv);
    row.appendChild(streetdiv);
    row.appendChild(demanddiv);
    row.appendChild(addressdiv);

    container.appendChild(row);

    var cardaction = document.createElement("div");
    cardaction.className = "card-action";
    var a = document.createElement('a');
    // a.href = "#detail";
    a.href = 'javascript:void(0)';
    a.onclick = function (){
        $("#detail_name")[0].innerHTML = '<i class="material-icons prefix margin14"  style="font-size:34px;">title</i>'+name;
        $("#detail_author")[0].innerHTML = '<i class="material-icons prefix margin14">account_circle</i>'+author;
        $("#detail_street")[0].innerHTML = '<i class="material-icons prefix margin14">domain</i>'+street;
        $("#detail_tel")[0].innerHTML = '<i class="material-icons prefix margin14">phone</i>'+tel;
        $("#detail_budget")[0].innerHTML = '<i class="material-icons prefix margin14">monetization_on</i>'+budget;
        $("#detail_demand")[0].innerHTML = '<i class="material-icons prefix margin14">star</i>'+demand;
        $("#detail_address")[0].innerHTML = '<i class="material-icons prefix margin14">place</i>'+address;
        $("#detail_window").modal('open');
        $("#detail_del")[0].textStatus = id;
        var map = new BMap.Map("bdmap");
        var point = new BMap.Point(lng,lat);
        var point_view = new BMap.Point(parseFloat(lng)-0.95206,parseFloat(lat)+0.52422);
        map.centerAndZoom(point,11);
        var mapType1 = new BMap.MapTypeControl({mapTypes: [BMAP_NORMAL_MAP,BMAP_HYBRID_MAP]});
        var top_left_navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_LEFT, type: BMAP_NAVIGATION_CONTROL_SMALL});
        map.addControl(mapType1);
        map.addControl(top_left_navigation);


        var marker = new BMap.Marker(point);
        map.clearOverlays();
        map.addOverlay(marker);

        $("#files-collection")[0].innerHTML = "";
        for(item in files){
            var url = "/city360/file/"+name+"/";
            url += files[item];
            var fileitem = document.createElement("a");
            fileitem.className = "collection-item";
            fileitem.href = url;
            fileitem.innerHTML = files[item];
            $("#files-collection")[0].appendChild(fileitem);
        }

        ///////////////////////上载设计数据//////////////////////////////
        $("#uploadDesignbtn")[0].onclick = function(){
            designername = $("#designername")[0].value;
            if(designername == ""){
                alert("请填写设计师姓名");
                return;
            }
            designertel = $("#designertel")[0].value;
            designporject = name;

            $.ajax({
                url: uploadDesignURL,        
                type: "post",
                dataType:"text",
                async: false,
                data: {"designproject":name,"designername":designername,"designertel":designertel},
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

            for (var item in $("#file")[0].files){
                if($("#file")[0].files[item] != undefined){
                    var fileform = new FormData($('#uploadForm'));
                    fileform.append('name',designername);
                    fileform.append('project',designporject);
                    //fileform.append('files',$("#file")[0].files[item]);
                    fileform.append('file',$("#file")[0].files[item]);
                    $.ajax({
                        url: '../php/fileDesignupload.php',
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

        ///////////////////下载已上传的设计数据///////////////////////////
        $("#showUploadDesign")[0].innerHTML = "";
        $.ajax({
            url: downloadDesignURL,        
            type: "post",
            dataType: "json",
            async: false,
            data:{"designproject":name},
            success: function(data,status){
                jsonData = eval(data);          //将data字符串转换为json数组       
                
                for(item in jsonData){
                    var div = document.createElement("div");
                    div.className = "col s12";
                    var h5 = document.createElement("h6");
                    h5.innerHTML = "作者:"+jsonData[item].designername;
                    var p = document.createElement("p");
                    p.innerHTML = "联系方式:"+jsonData[item].designertel;
                    var h6 = document.createElement("h6");
                    h6.innerHTML = "文件列表";
                    var divfile = document.createElement("div");
                    divfile.className = "collection";

                    for(i in jsonData[item].files){
                        var a = document.createElement("a");
                        a.href = "/city360/fileDesign/"+jsonData[item].designproject+"/"+jsonData[item].designername+"/"+jsonData[item].files[i];
                        a.innerHTML = jsonData[item].files[i]
                        a.className = "collection-item"
                        divfile.appendChild(a);
                    }
                    
                    div.appendChild(h5);
                    div.appendChild(p);
                    div.appendChild(h6);
                    div.appendChild(divfile);
                    div.style.marginBottom = "10px";
                    var divider = document.createElement("div");
                    divider.className = "divider col s12";
                    $("#showUploadDesign")[0].appendChild(div);
                    $("#showUploadDesign")[0].appendChild(divider);
                    
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown){
                //alert("dataajax error")
            }
        });

        /////////////////////设置一下人工智能设计的初稿////////////////////
        $("#aidesignimg")[0].src = "../aidesignimg/" + name + ".png";
        
    };
    a.innerHTML = "详情"
    cardaction.appendChild(a);



    var cardcontent = document.createElement("div");
    cardcontent.className = "card-content white-text";
    cardcontent.appendChild(container);
    var cardimg = document.createElement("div");
    cardimg.className = "card-image";
    var img = document.createElement("img");
    img.src = fileURL + name + ".png";
    cardimg.appendChild(img);
    img.onerror = function(){
        // $(this)[0].style.display = 'none';
        $(this)[0].src = '../file/default.png';
    };
    card.appendChild(cardimg);

    card.appendChild(cardcontent);
    card.appendChild(cardaction);

    col.appendChild(card);

    return col;
}

function loadData() { 
    var jsonData;

    $.ajax({
        url: downloadURL,        
        type: "get",
        dataType: "json",
        async: false,
        success: function(data,status){
            jsonData = eval(data);          //将data字符串转换为json数组       
        },
        error: function (XMLHttpRequest, textStatus, errorThrown){
            alert("dataajax error")
        }
    });
    return jsonData;
}

function deleteItem(){
    $("#delete_confirm").modal('open');
}

function uploadDesign(){
    designername = $("#designername").value;
    designertel = $("#designertel").value;

    $.ajax({
        url: uploadDesignURL,        
        type: "post",
        dataType:"text",
        async: false,
        data: {"name":name, "author": author, "street": street,"tel" : tel, "budget": budget, "demand": demand, "address": address, "lng":"0", "lat":"0"},
        success: function(result){
            alert("上传成功");
            $("#name")[0].value = "";
            $("#author")[0].value = "";
            $("#street")[0].value = "";
            $("#tel")[0].value = "";
            $("#budget")[0].value = "";
            $("#demand")[0].value = "";
            $("#address")[0].value = "";

        },
        error: function (XMLHttpRequest, textStatus, errorThrown){
            alert(XMLHttpRequest.status);
            alert(XMLHttpRequest.readyState);
            alert(textStatus);
        }
    });
}




////////////////////程序入口///////////////////////////

var data = loadData();
for (item in data) {
    var div = newcard(data[item].name,data[item].author,data[item].street,data[item].tel,data[item].budget,data[item].demand,data[item].time,data[item].address,data[item].lng,data[item].lat,data[item].id,data[item].files);
    $("#cardholder")[0].appendChild(div);
}

$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });

