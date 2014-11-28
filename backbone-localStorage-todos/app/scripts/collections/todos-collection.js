/*global backboneApp, Backbone*/
(function(){
	
	'use strict';
	
	backboneApp.Collections.TodosCollection = Backbone.Collection.extend({

	    //localStorage: new Backbone.LocalStorage('backbone-generator-todos'),
	    url : 'https://apis.sktelecom.com/v1/baas/data/todos',
	    sync : function(method, model, options){
	    	options.beforeSend = function(xhr){
	    		xhr.setRequestHeader('TDCProjectKey','aed4cc0d-9cbd-45ee-8da1-ab958e716622');
	    	};
	    	return Backbone.sync(method, model, options);
	    },
	    parse : function(response){
	    	return response.results;
	    },
	    initialize: function () {
	        this.model = backboneApp.Models.TodoModel;
	    }

	});

})();