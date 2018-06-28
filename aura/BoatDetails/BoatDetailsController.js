({
	onBoatSelected : function(component, event, helper) {
		//handleds the application event BoatSelected
		//sets the id attribute of the BoatDetails component to the id of the 
		//boat that was transmitted with the event.
		
		var boat = event.getParam("boat");
		console.log('boat', boat);
		//component.set("v.boat", boat);
		component.set('v.id', boat.Id);
		
		//the force:recordData calls an empty controller function named onRecordUpdated that is used in a later phase
		var newBoat = component.find('service').reloadRecord();
		
	},
	
	onRecordUpdated: function(component, event, helper) {
		console.log('this was run');
		//call the refresh function on the BoatReviews component
		//component.find("BoatReviews").refresh();
	},
	
	onBoatReviewAdded: function(component, event, helper) {
		//this needs to set the tag to the other one
	
		var tabset = component.find("tabset");
		tabset.set("v.selectedTabId", "boatreviewtab");
		//call the refresh function on the BoatReviews component
		//component.find("BoatReviews").refresh();
	}
})