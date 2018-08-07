let map;

const findMe = () => {
if (navigator.geolocation) {

} else {
  console.log('Navegador no soporta geolocalizacion');
}

const location = (position) => {
  let latitud = position.coords.latitude;
  let longitud = position.coords.longitude;
  initMap(latitud, longitud);

}
navigator.geolocation.getCurrentPosition(location, ()=> {
  console.log('Error al obtener localizacion')
});
};

const initMap =(latitud, longitud) => {
  let center = new google.maps.LatLng(latitud,longitud);
  map = new google.maps.Map(document.getElementById('map'), {
    center: center,
    zoom: 16
  });


  let request = {
    location: center,
    radius: 500,
    types: ['restaurant']

  };
  let service = new google.maps.places.PlacesService(map);
service.nearbySearch(request, callback);
}

const callback = (results, status) => {
  if(status == google.maps.places.PlacesServiceStatus.OK){
    clean();
    for (let i = 0; i < results.length; i++) {
      let filter = selectFilter();
      switch (filter) {
        case '3':
          if (results[i].rating > 3) {
            createMarker(results[i]);
          }
          break;
        case '4':
        if (results[i].opening_hours) {
          if (results[i].opening_hours.open_now == true) {
            createMarker(results[i]);
          }
        } else {
          break
        }

        break;
        default:
        createMarker(results[i]);
        break;
      }
    }
  }
}
const createMarker = (place) => {
  console.log(place);
  let placeLoc = place.geometry.location;
  let marker = new google.maps.Marker({
    map: map,
    position: placeLoc
  });
  let photos;
  let rating;
  if (place.photos) {
    photos = place.photos[0].getUrl({'maxWidth': 400, 'maxHeight': 200});
    } else {
      photos = '';
    }
    if (place.rating) {
      rating = place.rating;
    } else {
      rating = 'Sin evaluar';
    }
  let name = place.name;
  let photo = photos;
  let address = place.vicinity;
marker.addListener('click', ()=> {
modalPlace(name, photo, address, rating);
});

listPlace(name, photo, address, rating);


}

findMe();
