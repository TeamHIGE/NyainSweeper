var Square = function(){

	var flagged = false;
	var neko = false;
	var number = 0;
	
	/**
	 *	���̃}�X�Ɋ��𗧂Ă�
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
	 *	���̃}�X�Ɋ������낷
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
	
	/**
	 *	�˂��𖄂߂�
	 *	�˂���boolean�^�ɂ���
	 */
	
	this.buryNeko = function(){
		console.log(neko);
		return neko;
	};
	
	/**
	 *	�܂��̂˂��̐���ێ�����
	 */
	
	this.numberNeko(){
		console.log(number);
		return number;
	}
	
};