({
	doInit : function(component, event, helper) {
		console.log('doInit method on BoatSearchForm cmp');
        var isEnabled = $A.get("e.force:createRecord");
        console.log('isEnabled', isEnabled);
        if(isEnabled) {
            component.set("v.createRecEventSupported", true);
        } else {
            component.set("v.createRecEventSupported", false);
        }
        // query the database for all the boat types available
        var action = component.get("c.queryBoatType");
        action.setCallback(this, function(response){
            var state = response.getState();
            if(state === "SUCCESS"){
                var boatTypes = response.getReturnValue();
                component.set("v.boatTypes", boatTypes);
            }
        
        });
        $A.enqueueAction(action);
	},
    
    onFormSubmit : function(component, event, helper) {
        console.log('onFormSubmit from BoatSearchFormController');
        //get the value of the lightning:select at the time of the search
        var boatTypeId = component.find("lightningSelect").get("v.value");
        //create an object and out the boatTypeId as on of its fields 
        var formData = {boatTypeId: boatTypeId};
        
        console.log(formData);
        //fire the event 
        var event0 = component.getEvent("formsubmit");
        event0.setParams({"formData" : formData});
        event0.fire();
        
    },
    
    createRecord : function(component, event, helper) {
        
        var createRecordEvent = $A.get("e.force:createRecord");
        var boatTypeId = component.find("lightningSelect").get("v.value");
        if(boatTypeId == ""){
            createRecordEvent.setParams({"entityApiName" : "Boat__c"});
        } else {
            createRecordEvent.setParams({"entityApiName" : "Boat__c",
                                     "defaultFieldValues" : {'BoatType__c' : boatTypeId}});
        }
        
        createRecordEvent.fire();
        
        
    }
})