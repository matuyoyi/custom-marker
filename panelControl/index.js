const PanelControl = L.Control.extend({
    initialize(options) {
        if (!options.position) {
            options.position = 'bottomright'
        }
        this.flag = false;
        this.imgUrl = options.imgUrl;
    },
    onAdd() {
        this._container = L.DomUtil.create('div', 'leaflet-control-custom');
        var legendimg = document.createElement('img');
        legendimg.src = this.imgUrl;
        legendimg.style.cursor = 'pointer';
        this._legendimg = legendimg;
        this._container.appendChild(legendimg);
        L.DomEvent.on(this._container, 'click', () => {
            this.click();
        })
        return this._container;
    },
    updateUrl() {
        this.flag = !this.flag;
        this._legendimg.src = this.imgUrl;
    }
})
