sap.ui.define([], function() {
    'use strict';
    return {
        statusText: function (sStatus) {
            var resourceBundle = this.getView().getModel("i18n").getResourceBundle();
            return resourceBundle.getText("invoiceStatus" + sStatus);
        }
    }
});