sap.ui.define([
	"sap/m/Text",
	"sap/ui/core/mvc/XMLView",
	"sap/ui/core/ComponentContainer"
], function(Text, XMLView, ComponentContainer) {
	'use strict';

	new ComponentContainer({
		name : "demo",
		settings: {
			id: "demo"
		},
		async : true
	}).placeAt("content")

});