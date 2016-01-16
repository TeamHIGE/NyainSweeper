var Square = function()

	var isOpened = false;
	
	/**
	*左クリックでマスが開く
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
