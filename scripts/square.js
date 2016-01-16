var Square = function(){

	var flagged = false;
	
	/**
	 *	このマスに旗を立てる
	 */
	 
	 this.setFlag= function(){
	 console.log("setFlag(square)");
	 console.log(flagged);
	 	if(flagged){
	 		return false;
	 	}
	 	flagged = true;
	 	console.log(flagged);
	 	return true;
	};
	
	/**
	 *	このマスに旗をおろす
	 */
	 
	this.deleteFlag = function(){
	console.log("deleteFlag(square)");
	console.log(flagged);
		if(flagged){
			flagged = false;
			return true;
		}
		
		console.log(flagged);
		return false;
	};
};