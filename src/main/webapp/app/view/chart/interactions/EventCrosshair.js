Ext.define("feetapp.view.chart.interactions.EventCrosshair", {

    extend: 'Ext.chart.interactions.Crosshair',
    type: 'eventcrosshair',
    alias: 'interaction.eventcrosshair',

    requires: [
        'Ext.window.MessageBox'
    ],

    active: null,

    point1: null,
    point2: null,
    point3: null,

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

        if (!me.active) {
            if (!me.point1)
                me.active = 'point1'
            else if (!me.point2)
                me.active = 'point2'
            else if (!me.point3)
                me.active = 'point3'
        }

        if(!me.active)return;

        if (me[me.active]) {
            surface.remove(me[me.active]);
            surface.renderFrame();
        }

        me[me.active] = Ext.create('Ext.draw.sprite.Circle', {
            type: 'circle',
            fill: 'black',
            draggable: {
                constrain: true
            },
            surface: surface,
            cx: x,
            cy: y,
            radius: 3
        });


        if (me.point1 && me.point2 && (me.active == 'point2' || me.active == 'point1')) {
            if (me.line1)  {
                surface.remove(me.line1);
            }

            var longLine =  me.getLongLine(
                me.point1.cx,
                me.point1.cy,
                me.point2.cx,
                me.point2.cy

            );


            console.log(longLine);

            me.line1 = Ext.create('Ext.draw.sprite.Line', {
                type: 'line',
                surface: surface,
                fromX: longLine.p1.x,
                fromY: longLine.p1.y,
                toX: longLine.p2.x,
                toY: longLine.p2.y
            });
            surface.add(me.line1);
        }

        surface.add(me[me.active]);
        surface.renderFrame();

        return me.callParent(arguments);
    },

    getActivePoint: function (x, y) {
        var me = this;

        for (var i = 1; i <= 3; i++) {
            var point = me['point' + i];
            if (point) {
                if (point.cx - 15 <= x && point.cx + 15 >= x) {
                    if (point.cy - 15 <= y && point.cy + 15 >= y) {
                        return 'point' + i
                    }
                }
            }
        }

        return null;

    },

    getLongLine: function(x1,y1,x2,y2){

        //
        var a = y1-y2,
        b = x2-x1,
        c = x1*y2-x2*y1,
            px1,py1,px2,py2;

        px1 = 10,
        py1 = -(c+a*px1)/b;

        py2 = 500;
        px2 = -(c+b*py2)/a;


        return {p1:{x:px1,y:py1},p2:{x:px2,y:py2}}


    }


});
