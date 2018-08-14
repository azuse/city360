$('.carousel.carousel-slider').carousel({full_width: true});
 $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
    if(GetQueryString("fun")=="upload")
      $("#uploadscreen").modal('open');
  });
  var c1=c2=c3=c5=c6=c7="0";
  var c4="00";
  var c8=c9=c10=c11=c12=c13=c14=c15="0";
  var c16=c17=c18=c19=c20="0";
  var code;
  $('.chips').material_chip();
  $(".chip").click(function(){
       
    for(item=0;item < this.parentNode.children.length;item++){
        if(parseInt(this.id/10) == 7)continue;
        this.parentNode.children[item].style.backgroundColor = "#e4e4e4";
        this.parentNode.children[item].style.color = "rgba(0, 0, 0, 0.6)";
    }
    if(this.style.backgroundColor != "teal"){
        this.style.backgroundColor = "teal";
        this.style.color = "white";
    }
    else{
        this.style.backgroundColor = "#e4e4e4";
        this.style.color = "rgba(0, 0, 0, 0.6)";
    }
    code = c1.toString() + c2.toString() + c3.toString() + c4.toString() + c5.toString() + c6.toString() + c7.toString() + c8.toString() + c9.toString() + c10.toString()+ c11.toString()+ c12.toString()+ c13.toString()+ c14.toString()+ c15.toString();
    $("#code").val(code);
  });

  var map = new BMap.Map("bdmap");
  map.centerAndZoom(new BMap.Point(121.443186-0.95206, 31.225499+0.52422),9);
  var mapType1 = new BMap.MapTypeControl({mapTypes: [BMAP_NORMAL_MAP,BMAP_HYBRID_MAP]});
  var top_left_navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_LEFT, type: BMAP_NAVIGATION_CONTROL_SMALL});
  map.addControl(mapType1);
  map.addControl(top_left_navigation);
  var uploadcoords;

  setUserFromSesssion();



  function showInfo(e){
      uploadcoords = e.point;
      $("#coords")[0].value = "lng: " + e.point.lng + ", lat: " + e.point.lat
      map.clearOverlays();
      var marker = new BMap.Marker(e.point);
      map.addOverlay(marker);
    };
  
  map.addEventListener("click", showInfo);

  function GetQueryString(param) { //param为要获取的参数名 注:获取不到是为null  
    var currentUrl = window.location.href; //获取当前链接  
    var arr = currentUrl.split("?");//分割域名和参数界限  
    if (arr.length > 1) {  
        arr = arr[1].split("&");//分割参数  
        for (var i = 0; i < arr.length; i++) {  
            var tem = arr[i].split("="); //分割参数名和参数内容  
            if (tem[0] == param) {  
                return tem[1];  
            }  
        }  
        return null;  
    }  
    else {  
        return null;  
    }  
}  

function openSignupscreen(){
  $("#signupscreen").modal('open');
  $('ul.tabs').tabs('select_tab', 'signupDesigner');
}

function showupload(){
  $("#uploadModal")[0].style.display = "block";
  $("#aidesignModal")[0].style.display = "none";
}

function showaidesign(){
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

  $("#uploadModal")[0].style.display = "none";
  $("#aidesignModal")[0].style.display = "block";
  $("#designModal")[0].style.display = "none";
}

function showdesign(){
  $("#aidesignModal")[0].style.display = "none";
  $("#designModal")[0].style.display = "block";

  $.ajax({
    url: "php/finddesign.php",        
    type: "post",
    dataType:"text",
    async: false,
    data: {"code":code},
    success: function(result){
         //alert(result);
         jsonData = eval(result);
         $("#ai_name")[0].innerHTML = jsonData[0].name;
         $("#ai_img")[0].src = "designdataimg/"+jsonData[0].img;
         $("#ai_detail")[0].innerHTML = jsonData[0].detail;
         $("#ai_label")[0].innerHTML = "大小:"+jsonData[0].size
                                    +";形态:"+jsonData[0].shape
                                    +";属性:"+jsonData[0].type
                                    +";年限:"+jsonData[0].designage
                                    +";场所:"+jsonData[0].outdoor
                                    +";位置:"+jsonData[0].district
                                    +";环境:"+jsonData[0].region
                                    +";功能:"+jsonData[0].function;
        $("#ai_name2")[0].innerHTML = jsonData[1].name;
        $("#ai_p2")[0].innerHTML = jsonData[1].detail;
        $("#ai_img2")[0].src = "designdataimg/" + jsonData[1].img;
        $("#ai_btn2")[0].onclick = function(){
            $("#ai_name")[0].innerHTML = jsonData[1].name;
            $("#ai_img")[0].src = "designdataimg/"+jsonData[1].img;
            $("#ai_detail")[0].innerHTML = jsonData[1].detail;
            $("#ai_label")[0].innerHTML = "大小:"+jsonData[1].size
                                        +";形态:"+jsonData[1].shape
                                        +";属性:"+jsonData[1].type
                                        +";年限:"+jsonData[1].designage
                                        +";场所:"+jsonData[1].outdoor
                                        +";位置:"+jsonData[1].district
                                        +";环境:"+jsonData[1].region
                                        +";功能:"+jsonData[1].function;
            
        };

        $("#ai_name3")[0].innerHTML = jsonData[2].name;
        $("#ai_p3")[0].innerHTML = jsonData[2].detail;
        $("#ai_img3")[0].src = "designdataimg/" + jsonData[2].img;
        $("#ai_btn3")[0].onclick = function(){
            $("#ai_name")[0].innerHTML = jsonData[2].name;
            $("#ai_img")[0].src = "designdataimg/"+jsonData[2].img;
            $("#ai_detail")[0].innerHTML = jsonData[2].detail;
            $("#ai_label")[0].innerHTML = "大小:"+jsonData[2].size
                                        +";形态:"+jsonData[2].shape
                                        +";属性:"+jsonData[2].type
                                        +";年限:"+jsonData[2].designage
                                        +";场所:"+jsonData[2].outdoor
                                        +";位置:"+jsonData[2].district
                                        +";环境:"+jsonData[2].region
                                        +";功能:"+jsonData[2].function;
            
        };

        $("#ai_name4")[0].innerHTML = jsonData[3].name;
        $("#ai_p4")[0].innerHTML = jsonData[3].detail;
        $("#ai_img4")[0].src = "designdataimg/" + jsonData[3].img;
        $("#ai_btn4")[0].onclick = function(){
            $("#ai_name")[0].innerHTML = jsonData[3].name;
            $("#ai_img")[0].src = "designdataimg/"+jsonData[3].img;
            $("#ai_detail")[0].innerHTML = jsonData[3].detail;
            $("#ai_label")[0].innerHTML = "大小:"+jsonData[3].size
                                        +";形态:"+jsonData[3].shape
                                        +";属性:"+jsonData[3].type
                                        +";年限:"+jsonData[3].designage
                                        +";场所:"+jsonData[3].outdoor
                                        +";位置:"+jsonData[3].district
                                        +";环境:"+jsonData[3].region
                                        +";功能:"+jsonData[3].function;
            
        };

    },
    error: function (XMLHttpRequest, textStatus, errorThrown){
        alert(XMLHttpRequest.status);
        alert(XMLHttpRequest.readyState);
        alert(textStatus);
    }
});
}

function publish(){
    if(isLogin())
        ajaxtest();
    else
        showinfo("请先登录");
  
}

function closeAllModal(){
    $(".modal").modal("close");
}

function showallAiSelect(){
    $("#aiSelect")[0].innerHTML = $("#aiSelectFull")[0].innerHTML;
}