var Square = function()

	var isOpened = false;
	
	/**
	*���N���b�N�Ń}�X���J��
	*/
	
	this.clickisOpened = function() {
		if(isOpened){
		return true;
		}

		isOpened = false;
		return false;
	};


-------------------------------------------------------------------------------------------------

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
