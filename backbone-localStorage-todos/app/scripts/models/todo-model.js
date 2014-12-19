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

	    	// BaaS의 Project Key  추가
	    	options.beforeSend = function(xhr){
	    		xhr.setRequestHeader('TDCProjectKey','aed4cc0d-9cbd-45ee-8da1-ab958e716622');
	    	};

	    	// BaaS에서는 시스템 칼럼이 수정 요청에 포함되면 에러가 나므로 시스템 칼럼 삭제 후 전송
	    	if(!options.attrs && method == 'update'){ 
	    		options.attrs = model.toJSON();
	    		_.each(['objectId', 'createdAt', 'updatedAt'],function(key){
	    			delete options.attrs[key];
	    		});
	    	}
	    	return Backbone.sync(method, model, options);
	    },
	    toggle: function () {
	        this.save({
	            completed: !this.get('completed')
	        });
	    }

	});

})();