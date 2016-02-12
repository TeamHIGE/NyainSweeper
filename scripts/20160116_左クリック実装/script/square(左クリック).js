var Square = function()

	var isOpened = false;
	
	/**
	*左クリックでマスが開く
	*/
	
	this.clickisOpened = function() {
		if(isOpened){
		return false;
		}

		isOpened = true;
		return true;
	};
