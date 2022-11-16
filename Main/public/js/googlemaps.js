var map;
function initMap() {
var myLatlng = new google.maps.LatLng(40.713956,-74.006653);

var myOptions = {
   zoom: 8,
   center: { lat: 28.5384, lng: -81.3789 },
   mapTypeId: google.maps.MapTypeId.ROADMAP
   }
map = new google.maps.Map(document.getElementById("map"), myOptions); 

var marker = new google.maps.Marker({
draggable: true,
position: { lat: 28.5384, lng: -81.3789 }, 
map: map,
title: "Your location"
});

google.maps.event.addListener(marker, 'dragend', function (event) {
   document.getElementById("latbox").value = event.latLng.lat();
   document.getElementById("lngbox").value = event.latLng.lng();
   console.log(event.latLng.lat())
   console.log(event.latLng.lng())
});
console.log()
};

