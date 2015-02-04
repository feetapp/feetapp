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
        store: Ext.create('feetapp.store.finance.StoreUrlTestOHLC', {}),
        interactions: {
            type: 'eventcrosshair'/*,
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
            }  */


        },

        axes: [
            {
                type: 'numeric',
                position: 'left',
                fields: ['open', 'high', 'low', 'close'],
                title: {
                    text: 'Sample Values',
                    fontSize: 15
                },
                grid: true,
                minimum: 500,
                maximum: 640
            },
            {
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
            }
        ],
        series: [
            {
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
            }/* ,
            {
                type: 'line',
                //smooth:true,
                highlight: {
                    size: 7,
                    radius: 7
                },
                style: {
                    stroke: 'rgb(143,203,203)'
                },
                xField: 'time',
                yField: 'high'//,
                /*marker: {
                    type: 'path',
                    path: ['M', -2, 0, 0, 2, 2, 0, 0, -2, 'Z'],
                    stroke: 'blue',
                    lineWidth: 0
                }*/
           /* },{
                type: 'line',
                highlight: {
                    size: 7,
                    radius: 7
                },
                style: {
                    stroke: 'rgb(143,203,203)'
                },
                xField: 'time',
                yField: 'low',
                marker: {
                    type: 'path',
                    path: ['M', -2, 0, 0, 2, 2, 0, 0, -2, 'Z'],
                    stroke: 'blue',
                    lineWidth: 0
                }
            }  */

        ]

    }
});