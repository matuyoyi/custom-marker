# custom-marker
Customize your marker in leaflet's map

```

const routeLines = [
    L.polyline([latlng,...])
],
markers = [];
_.each(routeLines, function(i, routeLine) {
    const marker = L.animatedMarker(routeLine.getLatLngs(), {
    icon: bikeIcon,
    autoStart: false,
    onEnd: function() {
        $(this._shadow).fadeOut();
        $(this._icon).fadeOut(3000, function(){
            map.removeLayer(this);
        });
    };
    marker.on('click', () => {
        this.start();
        //  this.hide()  -- hide marker
        //  this.stop()  -- stop animation
    })

    map.addLayer(marker);
    markers.push(marker);
});

```