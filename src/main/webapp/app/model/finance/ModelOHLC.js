/**
 * ModelOHLC
 */
Ext.define("feetapp.model.finance.ModelOHLC", {
    extend: 'Ext.data.Model',
    fields: [
        'time',
        "open",
        "high",
        "low",
        "close"
    ]
});