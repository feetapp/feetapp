/**
 * StoreTestOHLC
 */
Ext.define("feetapp.store.finance.StoreTestOHLC", {
    alias: 'feetapp.store.finance.StoreTestOHLC',
    requires: ['feetapp.model.finance.ModelOHLC', 'Ext.data.reader.Array'],
    extend: "Ext.data.JsonStore",
    config: {
        model: "feetapp.model.finance.ModelOHLC",
        data: [
            {'time':new Date('Jan 1 2010').getTime(), 'open':600, 'high':614, 'low':578, 'close':590},
            {'time':new Date('Jan 2 2010').getTime(), 'open':590, 'high':609, 'low':580, 'close':580},
            {'time':new Date('Jan 3 2010').getTime(), 'open':580, 'high':602, 'low':578, 'close':602},
            {'time':new Date('Jan 4 2010').getTime(), 'open':602, 'high':614, 'low':586, 'close':586},
            {'time':new Date('Jan 5 2010').getTime(), 'open':586, 'high':602, 'low':565, 'close':565},
            {'time':new Date('Jan 6 2010').getTime(), 'open':586, 'high':602, 'low':565, 'close':565}
        ]
    }
});