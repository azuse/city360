$('.carousel.carousel-slider').carousel({full_width: true});
 $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });

  
  $('.chips').material_chip();
  $('.chips-initial').material_chip({
    data: [{
      tag: '小米',
    }, {
      tag: '中兴',
    }, {
      tag: '华为',
    }],
  });
  $('.chips-placeholder').material_chip({
    placeholder: '输入分类并按回车',
    secondaryPlaceholder: '输入分类并按回车',
  });

  var map = new BMap.Map("bdmap");
  map.centerAndZoom(new BMap.Point(121.491126-1, 31.249719+0.5),9);
  var mapType1 = new BMap.MapTypeControl({mapTypes: [BMAP_NORMAL_MAP,BMAP_HYBRID_MAP]});
  var top_left_navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_LEFT, type: BMAP_NAVIGATION_CONTROL_SMALL});
  map.addControl(mapType1);
  map.addControl(top_left_navigation);
  var uploadcoords;

  function showInfo(e){
      uploadcoords = e.point;
      $("#coords")[0].value = "lng: " + e.point.lng + ", lat: " + e.point.lat
      map.clearOverlays();
      var marker = new BMap.Marker(e.point);
      map.addOverlay(marker);
    };
  
  map.addEventListener("click", showInfo);