/*global backboneApp, Backbone*/

(function(){
	
	'use strict';
	
	backboneApp.Models.TodoModel = Backbone.Model.extend({

	    defaults: {
	        title: '',
	        completed: false
	    },
	    idAttribute : 'objectId',
	    sync : function(method, model, options){
	    	options.beforeSend = function(xhr){
	    		xhr.setRequestHeader('TDCProjectKey','aed4cc0d-9cbd-45ee-8da1-ab958e716622');
	    	};
	    	return Backbone.sync(method, model, options);
	    },
	    toggle: function () {
	        this.save({
	            completed: !this.get('completed')
	        });
	    }

	});

})();