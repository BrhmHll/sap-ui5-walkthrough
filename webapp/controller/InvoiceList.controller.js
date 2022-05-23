sap.ui.define([
    'sap/ui/core/mvc/Controller',
    "sap/ui/model/json/JSONModel",
    "../model/formatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function(Controller, JSONModel, formatter, Filter, FilterOperator) {
    'use strict';
    
    return Controller.extend("demo.controller.InvoiceList", {
        formatter: formatter,
        onInit : function (){
            var oViewModel = new JSONModel({
                currency:"EUR"
            });
            this.getView().setModel(oViewModel, "view")

            $.ajax({
                method: "GET",
                url: "http://192.168.5.20:8004/sap/opu/odata/sap/ZIHS_STUDENT_SERVICE_SRV/itstudentSet?$format=json",
                dataType: "JSON"
              }).done(function(data){console.log(data)});
            //   const url = 'http://192.168.5.20:8004/sap/opu/odata/sap/ZIHS_STUDENT_SERVICE_SRV/itstudentSet?$format=json';
            //   const model = new sap.ui.model.odata.v2.ODataModel(url);
            //   console.log(model);
        },
        onFilterInvoices : function (oEvent) {
            //build filter array
            var aFilter = [];
            var sQuery = oEvent.getParameter("query");
            if (sQuery) {
                aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
            }
            console.log(aFilter);
            //filter binding
            var oList = this.byId("invoiceList");
            var oBinding = oList.getBinding("items");
            oBinding.filter(aFilter);
        }
    })
});