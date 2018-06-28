({
	doSearch : function(component, event, helper) {
		var boatTypeId = event.getParam('arguments').boatTypeId;
		helper.onSearch(component, boatTypeId);
	},
    
    checkState: function(component, event, helper) {
        console.log(component.get("v.boats"));
    },
    
    onBoatSelect: function(component, event, helper) {
        console.log('onBoatSelect from BoatSearchResultsController.js');
        var boatId = event.getParam("boatId");
        component.set("v.selectedBoatId", boatId);
        console.log('selectedBoatId was set by the handler');
    }
})