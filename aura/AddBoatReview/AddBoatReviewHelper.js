({
    onInit : function(component, event, helper) {
        //this function need to get it w
        component.find("service").getNewRecord(
            'BoatReview__c', 
            null, 
            false, 
            $A.getCallback(function() {
                var rec = component.get("v.boatReview");
                var error = component.get("v.recordError");
                if(error || (rec === null)) {
                    console.log("Error initializing record template: " + error);
                }
                else {
                    rec.Boat__c = component.get("v.boat.Id");
                    component.set("v.boatReview", rec);
                    var toastEvent = $A.get("e.force:showToast");
                    if(toastEvent){
                        toastEvent.setParams({"message" : "successful update"});
                        toastEvent.fire();
                    } else {
                        alert("Successful update");
                    }
                    
                }
            })
        );
        
        
        
        
    }
})