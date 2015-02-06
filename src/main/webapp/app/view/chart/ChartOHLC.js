/**
 * Class to add CandleStick chart to the test charts. It is used in the Main view.
 */

var startD = new Date();
startD.setHours(0, 0, 0, 0);

var endD = new Date();
endD.setHours(23, 59, 59, 999);


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
        id:'ohlc_chart',
        store: Ext.create('feetapp.store.finance.StoreUrlTestOHLC', {
            listeners: {
                'load': {
                    fn: function (store, records, options) {

                        //console.log(store);

                        //console.log(records[0].get('time'));
                        //console.log(records[records.length-1].get('time'));


                        //chart.axes.items[0].fields = [column.dataIndex];
                        //chart.series.items[0].yField = [column.dataIndex];


                       // var s = Ext.data.StoreManager.lookup('myStore');
                       // var max = s.max(column.dataIndex);

                        var xMin =  Number.MAX_SAFE_INTEGER;
                        var xMax = 0;
                        var yMin = new Date(records[0].get('time') - (10*(records[0].get('time') - records[1].get('time'))));
                        var yMax = new Date(records[records.length-1].get('time'));

                        Ext.each(records,function(record){

                            if(xMin>record.get('low')){
                                xMin = record.get('low') ;
                            }

                            if(xMax<record.get('high')){
                                xMax = record.get('high') ;
                            }

                        });


                        var chart = Ext.getCmp('ohlc_chart');


                        chart.axes[0].setMaximum(xMax+1);
                        chart.axes[0].setMinimum(xMin-1);


                        chart.axes[1].setFromDate(yMin);
                        chart.axes[1].setToDate(yMax);


                        chart.redraw();




                    }
                }
            }
        }),
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
                minimum: 100,
                maximum: 900
            },
            {
                type: 'time',
                position: 'bottom',
                fields: ['time'],
                fromDate: startD,
                toDate: endD,
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
                /*renderer: function (storeItem, item) {
                    //this.setTitle(storeItem.get('name') + ': ' + storeItem.get('data1') + ' $');

                    console.log('ddddddddddddddddddddddddddddddddddddddd');

                },*/
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