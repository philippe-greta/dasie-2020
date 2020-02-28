$(document).ready(function () {
    function initmap(long, latt) {
        mapboxgl.accessToken = 'pk.eyJ1Ijoia3JlZWwiLCJhIjoiY2s2cWF6Ym1hMG05YzNlcW93ZmJ2MjltOSJ9.5xkYxieaS2vXT506fBOgEA';
        var popup = new mapboxgl.Popup({ offset: 25 }).setHTML('<p>Bienvenue au GRETA Toulon</p>');
    
        var map = new mapboxgl.Map({
            container: 'map',
            zoom: 11,
            center: [long, latt],
            animate: true,
            duration: 1000,
            style: 'mapbox://styles/mapbox/streets-v11'
        });
    
        var marker = new mapboxgl.Marker()
            .setLngLat([long, latt])
            .setPopup(popup)
            .addTo(map);
    }
    
     const long = $('.card-side.active').attr('data-long')
    const latt = $('.card-side.active').attr('data-latt')
    initmap(long, latt)
    
    $('.card-side').click(function () {
   
        const long = $(this).attr('data-long')
        const latt = $(this).attr('data-latt')
        $('.card-side').removeClass('active')
        $(this).addClass('active')
        initmap(long, latt)
    })
})