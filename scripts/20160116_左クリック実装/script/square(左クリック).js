var Square = function()

	var isOpened = false;
	
	/**
	*���N���b�N�Ń}�X���J��
	*/
	
	this.clickisOpened = function() {
		if(isOpened){
		return false;
		}

		isOpened = true;
		return true;
	};
