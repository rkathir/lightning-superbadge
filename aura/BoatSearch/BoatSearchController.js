({
	onFormSubmit : function(component, event, helper) {
		console.log('the event0 containing formData was handled by BoatSearchController');
        var formData = event.getParam("formData");
        
        //find the child component and call the search public search method on it
        component.find("BoatSearchResults").search(formData.boatTypeId);
        
       
         
	}
})