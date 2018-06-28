({
	onBoatClick : function(component, event, helper) {
		console.log('onBoatClick on BoatTileController.js');
        //assumeing you need to fire either two events here or one application event
        var boat = component.get("v.boat");
        var boatSelectEvt = component.getEvent("boatselect");
        boatSelectEvt.setParams({"boatId" : boat.Id});
        boatSelectEvt.fire();
        //fire an additional new event called BoatSelected passing the selected boat of Boat__c
        var boatSelectedEvt = $A.get("e.c:BoatSelected");
        boatSelectedEvt.setParams({"boat" : boat });
        boatSelectedEvt.fire();
        
        var plotmapmarkerEvt = $A.get("e.c:PlotMapMarker");
        plotmapmarkerEvt.setParams({"sObjectId" : boat.Id,
                                    "lat" : boat.Geolocation__Latitude__s,
                                    "long" : boat.Geolocation__Longitude__s,
                                    "label" : boat.Name
        });
        plotmapmarkerEvt.fire(); 
        
	}
})