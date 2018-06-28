({
    doInit: function(component, event, helper) {
        helper.onInit(component, event, helper);
    },
    
    onUserInfoClick : function(component, event, helper) {
        console.log('the user name was clicked!');
        var userId = event.srcElement.getAttribute("data-userid");
        
        var navEvt = $A.get('e.force:navigateToSObject');
        if(navEvt) {
            navEvt.setParams({"recordId" : userId});
            navEvt.fire();
        }
        
    },
    
    onBoatReviewAdded: function(component, event, helper) {
        console.log('a boat review was added');
        component.refresh();
        
    },
    
    onRecordUpdated: function(component, event, helper) {
        component.refresh();
        
    }
})