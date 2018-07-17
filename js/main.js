$('.carousel.carousel-slider').carousel({full_width: true});
 $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
    if(GetQueryString("fun")=="upload")
      $("#uploadscreen").modal('open');
  });

  
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
}

function publish(){
  ajaxtest();
  
}

function closeAllModal(){
    $(".modal").modal("close");
}

function showallAiSelect(){
    $("#aiSelect")[0].innerHTML = $("#aiSelectFull")[0].innerHTML;
}