function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5,
    center: { lat: 25.7617, lng: -80.1918 },
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  

  // Create an info window to share between markers.
 

  // Create the markers.

    const marker = new google.maps.Marker({
      position:{ lat: 25.7617, lng: -80.1918 },
      map: map,
      draggable: true
    });

     const drag = google.maps.event.addListener(marker,'dragged', () => {

      console.log(lat)
    });
    console.log(drag)
  };

window.initMap = initMap;
