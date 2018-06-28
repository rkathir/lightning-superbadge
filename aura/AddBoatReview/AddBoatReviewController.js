({
    doInit: function(component, event, helper) {
        //what do I want this to do initially?
        helper.onInit(component, event, helper);
        
    },
    
    onSave: function(component, event, helper) {
        var recordData = component.find("service");
        recordData.saveRecord($A.getCallback(function(saveResult) {
            if(saveResult.state === "SUCCESS") {
                //do success stuff
                var forceToast = $A.get("e.force:showToast");
                if(forceToast){
                    forceToast.setParams({"message" : "success!"});
                    forceToast.fire();
                } else {
                    alert("Successful save!");
                }
                var evt = component.getEvent("boatreviewadded");
                evt.fire();
            } else if (saveResult.state === "ERROR") {
                //do error stuff
            }
        }));
        
        
        helper.onInit(component, event, helper);
        
    },
    
    onRecordUpdated: function(component, event, helper) {
        //console.log('on record updated??');
        //this needs to write errors to the field errors attribue 
    }
})