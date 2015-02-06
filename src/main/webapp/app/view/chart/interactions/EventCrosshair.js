Ext.define("feetapp.view.chart.interactions.EventCrosshair", {

    extend: 'Ext.chart.interactions.Crosshair',
    type: 'eventcrosshair',
    alias: 'interaction.eventcrosshair',

    requires: [
        'Ext.window.MessageBox'
    ],

    /*Active point flag*/
    active: null,

    /*Points*/
    point1: null,
    point2: null,
    point3: null,

    /*Lines*/
    line1: null,
    line2: null,

    onGestureStart: function (e) {

        var me = this,
            chart = me.getChart(),
            surface = chart.getSurface('overlay'),
            xy = chart.getEventXY(e),
            x = xy[0],
            y = xy[1];
        me.active = me.getActivePoint(x, y);
        return me.callParent(arguments);
    },

    onGestureEnd: function (e) {

        var me = this,
            chart = me.getChart(),
            surface = chart.getSurface('overlay'),
            xy = chart.getEventXY(e),
            x = xy[0],
            y = xy[1];
        return me.callParent(arguments);
    },

    onGesture: function (e) {

        var me = this,
            chart = me.getChart(),
            surface = chart.getSurface('overlay'),
            xy = chart.getEventXY(e),
            x = xy[0],
            y = xy[1];

        //Crosole.log('x = ' + x +' , y = ' + y );

        if (!me.active) {
            if (!me.point1)
                me.active = 'point1'
            else if (!me.point2)
                me.active = 'point2'
            else if (!me.point3)
                me.active = 'point3'
        }

        if (!me.active)return;

        if (me[me.active]) {
            surface.remove(me[me.active]);
            surface.renderFrame();
        }

        me[me.active] = Ext.create('Ext.draw.sprite.Circle', {
            type: 'circle',
            fill: 'black',
            surface: surface,
            cx: x,
            cy: y,
            radius: 3
        });

        if (me.point1 && me.point2) {

            if (me.line1) {
                surface.remove(me.line1);
            }

            var visualLine = me.getVisualLine(
                me.point1.cx,
                me.point1.cy,
                me.point2.cx,
                me.point2.cy
            );

            me.line1 = Ext.create('Ext.draw.sprite.Line', {
                type: 'line',
                surface: surface,
                fromX: visualLine.p1.x,
                fromY: visualLine.p1.y,
                toX: visualLine.p2.x,
                toY: visualLine.p2.y
            });
            surface.add(me.line1);

            if (me.point3) {

                if (me.line2) {
                    surface.remove(me.line2);
                }

                var parallelLine = me.getParallelLine(
                    me.point1.cx,
                    me.point1.cy,
                    me.point2.cx,
                    me.point2.cy,
                    me.point3.cx,
                    me.point3.cy
                );

                me.line2 = Ext.create('Ext.draw.sprite.Line', {
                    type: 'line',
                    surface: surface,
                    fromX: parallelLine.p1.x,
                    fromY: parallelLine.p1.y,
                    toX: parallelLine.p2.x,
                    toY: parallelLine.p2.y
                });
                surface.add(me.line2);
            }
        }

        surface.add(me[me.active]);
        surface.renderFrame();

        return me.callParent(arguments);
    },

    getActivePoint: function (x, y) {

        var me = this;
        for (var i = 1; i <= 3; i++) {
            var point = me['point' + i];
            if (point)
                if (point.cx - 15 <= x && point.cx + 15 >= x)
                    if (point.cy - 15 <= y && point.cy + 15 >= y)
                        return 'point' + i
        }
        return null;
    },

    getVisualLine: function (x1, y1, x2, y2) {

        var a = y1 - y2,
            b = x2 - x1,
            c = x1 * y2 - x2 * y1,
            px1, py1, px2, py2,
            axesEnd = 10000,
            px1 = x2 > x1 ? 0 : axesEnd,
            py1 = -(c + a * px1) / b,
            py2 = y2 < y1 ? 0 : axesEnd,
            px2 = -(c + b * py2) / a;
        return {p1: {x: px1, y: py1}, p2: {x: px2, y: py2}}
    },

    getParallelLine: function (x1, y1, x2, y2, x3, y3) {

        var a = y1 - y2,
            b = x2 - x1,
            c = x1 * y2 - x2 * y1,
            delta = 100,
            py1, py2, xr, yr,
            py1 = -(c + a * x3) / b,
            py2 = -(c + a * (x3 + delta)) / b,
            xr = x3 + delta,
            yr = py2 - (py1 - y3);
        return this.getVisualLine(x3, y3, xr, yr)
    }

});
