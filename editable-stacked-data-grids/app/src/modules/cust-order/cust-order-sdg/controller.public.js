import BaseController from './controller.js'

class CustOrderCustOrderSDGCtrl extends BaseController {
    constructor($scope, $injector, stateData) {
        super($scope, $injector);

        var that = this;

        // Set batch to true to allow the underlying jsdo to call the backend submit operation, if present
        this.$parentDs.options.batch = true;
        this.$model.parentGridOptions.toolbar = ["create"];
        this.$model.parentGridOptions.columns.push({
            "command": [
                "destroy"
            ],
            "title": "&nbsp;",
            "width": 250
        });
                    
        this.$model.parentGridOptions.editable = "incell";
        this.$model.childGridOptions.toolbar = ["create"];

        this.$model.parentGridOptions.messages =  this.$model.childGridOptions.messages;

        this.submitOptions = {
			click: function(e) {
                var promise;

                if (that.$parentDs.hasChanges()) {
                    if (that.$childDs.hasChanges()) {
                        // Must set autoSave to false, so that the child's sync() will not force a call to backend
                        // We want to send over all changes (both parents and childs) together when the parent
                        // datasource sync() is called
                        that.$childDs.transport.autoSave = false;
                        that.$childDs.sync();
                    }
                    
                    promise = that.$parentDs.sync();
                    promise.done( function() {   
                        console.log("Save Changes was successful");  
                    });

                    promise.fail( function(xhr) {
                        console.log("Save Changes was NOT successful");
                     });
                } else if (that.$childDs.hasChanges()) {
                    // Set autoSave to true, so that the child's sync() will trigger a CUD or submit operation sent to backend
                    that.$childDs.transport.autoSave = true;

                    promise = that.$childDs.sync();
                    promise.done( function() {
                        console.log("Save Changes was successful");  
                    });

                    promise.fail( function(xhr) {
                         console.log("Save Changes was NOT successful");
                     });

                }
			}
		};

        this.cancelOptions = {
			click: function(e) {

                if (that.$parentDs.hasChanges()) {
                    that.$parentDs.cancelChanges();
                }

                 if (that.$childDs.hasChanges()) {
                    that.$childDs.cancelChanges();
                }
			}
		};
    }

    


    // Fired when custom html section is loaded
    includeContentLoaded() {

    }

    // Fired when custom html section loading failed
    includeContentError(e) {

    }

    // Fired when view content is loaded
    onShow($scope) {
        console.log('Show');
    }

    /* Kendo event object*/
    onParentRowSelect(e) {

    }

    /* Kendo event object*/
    onChildRowSelect(e) {

    }
}

CustOrderCustOrderSDGCtrl.$inject = ['$scope', '$injector', 'stateData'];

export default CustOrderCustOrderSDGCtrl
