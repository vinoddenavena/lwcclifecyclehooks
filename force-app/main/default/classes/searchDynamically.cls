public class searchDynamically {
    
    @AuraEnabled(cacheable=true)
    public static List<sObject> stringtest(String inputData,String objectName,String ApiFields,String field1,String field2,String field3){
        //String test='Name,Phone';
        String[] stlist = ApiFields.split('\\,');
        
        System.debug('test....'+stlist);
        String searchQuery = 'Select '+ApiFields;
        system.debug('searchQuery line 1.........'+searchQuery);
        if(field1!='' && !stlist.contains(field1)){
            searchQuery +=','+field1;
            system.debug('searchQuery line2.........'+searchQuery);
        }
        if(field2!=''  && !stlist.contains(field2)){
            searchQuery +=','+field2;
            system.debug('searchQuery line3.........'+searchQuery);
        }
        if(field3!=''  && !stlist.contains(field3)){
            searchQuery +=','+field3;
            system.debug('searchQuery line4.........'+searchQuery);
        }
        searchQuery = searchQuery+' from '+objectName + ' Where ' ;
        system.debug('searchQuery line 5..'+searchQuery);
        if(stlist.size()>0){
            for(String s:stlist){
                searchQuery = searchQuery + s + ' like '+'\'%'+inputData+'%\''+' OR ';  
            }
        }
        system.debug('searchQuery line 6.........'+searchQuery);
        searchQuery= searchQuery.substring(0,searchQuery.lastIndexOf('OR'));
        system.debug('searchQuery line 7.........'+searchQuery);
        List<sObject> searchList = new List<sObject> ();
        if(inputData !='' && inputData != null){
            searchList = database.query(searchQuery);
            
            return searchList;
            
        }
        return searchList;
        
    }
}