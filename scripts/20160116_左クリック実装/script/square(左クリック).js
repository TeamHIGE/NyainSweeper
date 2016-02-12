var Square = function()

	var openMass = false;
	
	/**
	*左クリックでマスが開く
	*/
	
	this.openMass = function() {
		if(openedMass){
		return false;
		}

		openedMass = true;
		return true;
	};
