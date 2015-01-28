Ext.define("feetapp.view.chart.interactions.EventCrosshair", {

    extend: 'Ext.chart.interactions.Crosshair',
    type: 'eventcrosshair',
    alias: 'interaction.eventcrosshair',
    requires: [
        'Ext.window.MessageBox'
    ],

    /*
     * Creats a William %R series
     * @param {Object} [config] Configuration
     */
    constructor: function (config) {
        var me = this;
        console.log('config ' + me.config.ted);
        this.callParent(arguments);
    },

    initConfig: function (config) {
        this.callParent();
    },

    onGestureStart: function (e) {
        var me = this,
            chart = me.getChart(),
            xy = chart.getEventXY(e),
            x = xy[0],
            y = xy[1];
        console.log('onGestureStart ' + x + ' ' + y);
        return me.callParent(arguments);
    },

    onGestureEnd: function (e) {
        var me = this,
            chart = me.getChart(),
            surface = chart.getSurface('overlay'),
            xy = chart.getEventXY(e),

            x = xy[0],
            y = xy[1];
        console.log('onGestureEnd ' + x + ' ' + y);


        var sprite = Ext.create('Ext.draw.sprite.Circle', {
            type: 'circle',
            fill: 'black',
            surface: surface,
            cx: x,
            cy: y,
            radius: 5
        });


        surface.add(sprite);
        surface.renderFrame();


        Ext.Msg.alert('Точка', x + ' ' + y);

        return me.callParent(arguments);


    },

    onGesture: function (e) {

        var me = this;

        /* chart = me.getChart(),
            surface = chart.getSurface('overlay'),
            xy = chart.getEventXY(e),
            x = xy[0],
            y = xy[1]
        console.log('onGesture ' + x + ' ' + y);
        */
        return me.callParent(arguments);
    }


});
