<!-- FriendswithBoats.app -->
<aura:application extends="force:slds" >
    <lightning:layout horizontalAlign="center">
    	<lightning:layoutItem >
        	<c:BoatSearch /> 
        </lightning:layoutItem>
        
        <lightning:layoutItem >
        	<c:BoatDetails />
        </lightning:layoutItem>
    	
    	<lightning:layoutItem >
    	    <c:Map />
    	</lightning:layoutItem>
    </lightning:layout>
    
    
</aura:application>