sap.ui.define([
    'sap/m/MessageToast',
    'sap/ui/core/mvc/Controller',
    "sap/ui/core/Fragment"
], function(MessageToast, Controller, Fragment) {
    'use strict';
    
    return Controller.extend("demo.controller.HelloPanel", {
        onShowHello : function (){
            //Read msg from i18n model
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var sRecipient = this.getView().getModel().getProperty("/recipient/name");
			var sMsg = oBundle.getText("helloMsg", [sRecipient]);
			//show msg
			MessageToast.show(sMsg);
        },
        onOpenDialog : function (){
            //create dialog lazily
            if (!this.pDialog) {
                this.pDialog = this.loadFragment({
                    name: "demo.view.HelloDialog"
                })
            }
            this.pDialog.then(function(oDialog) {
                oDialog.open();
            })
        },
        onCloseDialog : function(){
            // note: We don't need to chain to the pDialog promise, since this event-handler
			// is only called from within the loaded dialog itself.
            this.byId("helloDialog").close();
        }
    })
});