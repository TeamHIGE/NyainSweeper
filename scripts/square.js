var Square = function(){

	var flagged = false;
	var neko = false;
	var number = 0;
	var nbsp = true;
	
	/**
	 *	ねこを埋める
	 *	ねこはboolean型にする
	 *	trueならねこがいる、falseはねこがいない
	 */
	
	this.setNeko = function(){
		if(neko){
			neko = true;
			return neko;
		}
		console.log(neko);
		return neko;
	};
	
	/**
	 *	ねこを確認する
	 */
	
	this.checkNeko = function(){
		return neko;
	}
	
	/**
	 *	まわりのねこの数を保持する
	 */
	
	this.numberNeko(){
		console.log(number);
		return number;
	}
	
	/**
	 *	空白ならtureを返す
	 *	必要ない可能性あるので、要検討
	 */
	
	this.showNbsp(){
		console.log(nbsp);
		return nbsp;
	}
	
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