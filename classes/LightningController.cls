public class LightningController {

    @AuraEnabled 
    public static List<BoatType__c> queryBoatType() {
        
        return [SELECT Id, Name FROM BoatType__c];
    }
}