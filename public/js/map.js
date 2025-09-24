    mapboxgl.accessToken = mapToken;
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v12', 
        zoom: 2, 
        center: coordinates 
    });

    
    const marker = new mapboxgl.Marker()
    .setLngLat(coordinates)
    .addTo(map);