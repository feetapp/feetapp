Ext.define("feetapp.view.chart.interactions.EventCrosshair", {

    extend: 'Ext.chart.interactions.Crosshair',
    type: 'eventcrosshair',
    alias: 'interaction.eventcrosshair',
    config: {
        /*
         * Overbought level. Defaults to -20
         */
        ted: 'defaults'

    },

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
        console.log('onGestureStart ' + x + ' '+ y);
        return me.callParent(arguments);
    },

    onGestureEnd: function (e) {
        var me = this,
            chart = me.getChart(),
            xy = chart.getEventXY(e),
            x = xy[0],
            y = xy[1];
        console.log('onGestureEnd ' + x + ' '+ y);

        Ext.Msg.alert('Конец', x + ' '+ y);

        return me.callParent(arguments);
    },

    onGesture: function (e) {
        var me = this,
            chart = me.getChart(),
            xy = chart.getEventXY(e),
            x = xy[0],
            y = xy[1],
            axes = chart.getAxes(),
            axisX = axes[0],
            axisY = axes[1],
            axisPositionX = axisX.getPosition(),
            axisPositionY = axisY.getPosition();

        console.log('onGesture ' + x + ' '+ y + ' ' + axisPositionX  + ' ' + axisPositionY );
        return me.callParent(arguments);
    }


});
