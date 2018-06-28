({
	onFullDetails : function(component, event, helper) {
		console.log('onFullDetails from BoatDetailController.js');
		
		var navEvt = $A.get('e.force:navigateToSObject');
		console.log(navEvt);
		navEvt.setParams({"recordId" : component.get("v.boat.Id")});
		navEvt.fire();
	},
	
	doInit: function(component, event, helper) {
		var navEvt = $A.get('e.force:navigateToSObject');
		if(navEvt){
			component.set("v.oneAppEnvironment", true);
		}
		
	}
})