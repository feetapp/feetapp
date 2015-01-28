/**
 * Class to add CandleStick chart to the test charts. It is used in the Main view.
 */
Ext.define("feetapp.view.chart.ChartOHLC", {
    extend: 'Ext.chart.CartesianChart',
    type: 'chartohlc',
    requires: [
        'Ext.chart.Chart',
        'Ext.chart.series.CandleStick',
        'Ext.chart.interactions.PanZoom',
        'Ext.chart.axis.Time',
        'Ext.chart.axis.Numeric',
        'Ext.chart.series.Line',
        'feetapp.model.finance.ModelOHLC',
        'feetapp.store.finance.StoreTestOHLC',
        'feetapp.view.chart.interactions.EventCrosshair'
    ],
    config: {
        type: 'cartesian',
        store: Ext.create('feetapp.store.finance.StoreTestOHLC', {}),
        interactions: {
            type: 'eventcrosshair',
            axes: {
                left: {
                    label: {
                        fillStyle: 'white'
                    },
                    rect: {
                        fillStyle: 'brown',
                        radius: 6
                    }
                },
                bottom: {
                    label: {
                        fontSize: '14px',
                        fontWeight: 'bold'
                    }
                }
            },
            lines: {
                horizontal: {
                    strokeStyle: 'brown',
                    lineWidth: 2,
                    lineDash: [20, 2, 2, 2, 2, 2, 2, 2]
                }
            },
            listeners: {
                click: {
                    element: 'el', //bind to the underlying el property on the panel
                    fn: function(){ console.log('click el'); }
                },
                dblclick: {
                    element: 'body', //bind to the underlying body property on the panel
                    fn: function(){ console.log('dblclick body'); }
                }
            }


        },

        axes: [{
            type: 'numeric',
            position: 'left',
            fields: ['open', 'high', 'low', 'close'],
            title: {
                text: 'Sample Values',
                fontSize: 15
            },
            grid: true,
            minimum: 560,
            maximum: 640
        }, {
            type: 'time',
            position: 'bottom',
            fields: ['time'],
            fromDate: new Date('Dec 31 2009'),
            toDate: new Date('Jan 8 2010'),
            title: {
                text: 'Sample Values',
                fontSize: 15
            },
            style: {
                axisLine: false
            }
        }],
        series: {
            type: 'candlestick',
            xField: 'time',
            openField: 'open',
            highField: 'high',
            lowField: 'low',
            closeField: 'close',
            style: {
                dropStyle: {
                    fill: 'rgb(237, 123, 43)',
                    stroke: 'rgb(237, 123, 43)'
                },
                raiseStyle: {
                    fill: 'rgb(55, 153, 19)',
                    stroke: 'rgb(55, 153, 19)'
                }
            }
        }

    }
});