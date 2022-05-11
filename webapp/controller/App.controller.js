sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast',
    'sap/ui/model/json/JSONModel'
], function(Controller, MessageToast, JSONModel) {
    'use strict';
    return Controller.extend("sap.ui.demo.walktrough.App", {
        onShowHello : function () {
            // alert("Hello there!!!");
            MessageToast.show("Hello There");
        },
        onInit : function(){
            var oData = {
                recipeint : {
                    name: "UI5"

                }
            };
            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel);
        }
    })
}); 