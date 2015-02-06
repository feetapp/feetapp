/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */




Ext.define('feetapp.view.main.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'feetapp.view.main.MainController',
        'feetapp.view.main.MainModel',
        'Ext.window.MessageBox'
    ],

    type: 'app-main',

    controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'border'
    },

    items: [{
        type: 'panel',
        bind: {
            title: 'Тест ChartOHLC'//'{name}'
        },
        region: 'west',
        html: '<ul><li>This area is commonly used for navigation.</li></ul>',
        width: 250,
        split: true,

    }, {
        region: 'center',
        type: 'tabpanel',
        items: [{
            title: 'Тест ChartOHLC',
            items: [

                {tbar: [{
    text: 'Refresh XBTUSD',
    handler: function(){
        Ext.getCmp('ohlc_chart').getStore().load()
    }
}]},
                //{html:'efef'}

                Ext.create('Ext.Container', {
                    width: 950,
                    height: 400,
                    layout: 'fit',
                    items: [
                        {  xclass: 'feetapp.view.chart.ChartOHLC'   }
                    ]
                })
            ]

        }]
    }]
});
