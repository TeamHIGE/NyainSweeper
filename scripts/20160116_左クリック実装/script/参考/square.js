var Square = function() {

    var flagged = false;
    
    /**
    *���̃}�X�Ɋ��𗧂Ă�
    */
    this.setFlag = function() {
    	if(flagged){
        return false;
        }
          
        flagged = true;
        return true;
	};
    
    
    /**
    *���̃}�X��������~�낷
    */
    this.deleteFlag = function() {
        if(flagged){
        flagged = false;
        return true;
        }
        
        return false; 
     };   
 };
