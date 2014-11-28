/*global backboneApp, Backbone*/
(function(){
	
	'use strict';
	
	backboneApp.Collections.TodosCollection = Backbone.Collection.extend({

	    //localStorage: new Backbone.LocalStorage('backbone-generator-todos'),
	    url : 'https://apis.sktelecom.com/v1/baas/data/todos',
	    parse : function(response){
	    	return response.results;
	    },
	    initialize: function () {
	        this.model = backboneApp.Models.TodoModel;
	        this.sync = backboneApp.Models.TodoModel.prototype.sync;
	    }

	});

})();