
  function initMap(){
    const location = {lat: 51.110, lng: 17.030};
    const map = new google.maps.Map(document.getElementById("map"),{
      zoom: 12,
      center: location
    });
    const marker = new google.maps.Marker({
      position: location,
      map: map
    });
  }
