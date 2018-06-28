({
	onSearch : function(component, boatTypeId) {
		//this is the helper function that calls the apex methods
		var action = component.get("c.getBoats");
        
        action.setParams({"boatTypeId": boatTypeId});
        action.setCallback(this, function(response) {
            var state = response.getState();
            
            if(state === "SUCCESS") {
                var boats = response.getReturnValue();
                component.set("v.boats", boats);
            }
        });
        $A.enqueueAction(action);
	}
})