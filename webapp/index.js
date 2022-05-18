sap.ui.define([
	"sap/m/Text",
	"sap/ui/core/mvc/XMLView"
], function(Text, XMLView) {
	'use strict';
	// alert("UI5 is ready!");

	XMLView.create({
		viewName: "demo.view.App"
	}).then(function (oView) {
		oView.placeAt("content");
	})

	// new Text({
	// 	text: "Hello World!"
	// }).placeAt("content");
});