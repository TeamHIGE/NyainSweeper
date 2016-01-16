var Square = function() {

    var flagged = false;
    
    /**
    *このマスに旗を立てる
    */
    this.setFlag = function() {
    	if(flagged){
        return false;
        }
          
        flagged = true;
        return true;
	};
    
    
    /**
    *このマスから旗を降ろす
    */
    this.deleteFlag = function() {
        if(flagged){
        flagged = false;
        return true;
        }
        
        return false; 
     };   
 };
