/**
 * StoreTestOHLC
 */
Ext.define("feetapp.store.finance.StoreUrlTestOHLC", {
    alias: 'feetapp.store.finance.StoreUrlTestOHLC',
    requires: ['feetapp.model.finance.ModelOHLC', 'Ext.data.reader.Array'],
    extend: "Ext.data.JsonStore",
    config: {
        model: "feetapp.model.finance.ModelOHLC",
        proxy: {
            type:'ajax',
            url: '/feetapp/rest/ohlc'
        },
        autoLoad: true
    }
});