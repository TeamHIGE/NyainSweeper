/*
 *	�R���\�[���m�F���ֳ�Ȃ̂ŁA�̂��ɏ����܂�
 *	�iconsole.log�j
 */

var Square = function(){

	/**
	 *	�ϐ��̏����l�ɂ���
	 *	�t���O(flagged)�͗����ĂȂ�
	 *	�˂�(neko)�͂��Ȃ�
	 *	����̔L�̐�(number)��0
	 *	�}�X�͋�(nbsp)�ł���
	 *^ �}�X�͊J���Ă���
	 */
	 
	var flagged = false;
	var neko = false;
	var number = 0;
	var nbsp = true;
	var mass_status = "";
	var isOpened = false;
	
	/**
	 *	�˂��𖄂߂�
	 *	�˂���boolean�^�ɂ���
	 *	true�Ȃ�˂�������Afalse�͂˂������Ȃ�
	 */
	
	this.setNeko = function(){
		if(neko == false){
			neko = true;
			number = 99
			nbsp = false;
			return neko;
		};
		
		return neko;
	};
	
	/**
	 *	�˂����m�F����
	 *	neko��Ԃ�����
	 */
	
	this.checkNeko = function(){
		return neko;
	};
	
	/**
	 *	�܂��̂˂��̐���ێ�����
	 */
	
	this.setNumber = function(nekoNum){
		number = nekoNum;
		if(number !== 0){
			nbsp = false;
		}
		return number;
	};
	
	/**
	 *	�������m�F����
	 *	�܂��̂˂��̐���Ԃ�����
	 */
	
	this.checkNumber = function(){
		return number;
	};
	
	/**
	 *	�󔒂Ȃ�ture��Ԃ�
	 *	�K�v�Ȃ��\������̂ŁA�v����
	 */
	
	this.showNbsp = function(){
		return nbsp;
	};
	
	/**
	 *	���̃}�X�̒��g��Ԃ�
	 */
	 
	 this.getStatus = function(){
	 	console.log("nbsp = " + nbsp);
	 	console.log("number = " + number);
	 	console.log("neko = " + neko);
	 	if(nbsp){
	 		mass_status = "nbsp";
	 		return mass_status;
	 	}
	 	else if(number != 0 && number != 99){
	 		mass_status = "number";
	 		return mass_status;
	 	}
	 	else if(neko){
	 		mass_status = "neko";
	 		return mass_status;
	 	}
	 };
	 
	/**
	 *	���̃}�X���J��(2016/02/13 0722)
	 *	isOpened�̐��� : true = �J���Ă� false = �J���ĂȂ�
	 *	opennMass�̎d�l : return true = �J�����Ƃɐ��� false = ���Ƃ��ƊJ���Ă�ZE
	 */ 
	 this.openMass= function(){
		console.log("openMass(square)");
		console.log(isOpened);
		if(isOpened){
			return false;
		}
		isOpened = true;
		console.log(isOpened);
		return true;
	};
	
	/**
	 *	���̃}�X�Ɋ��𗧂Ă�
	 */
	 
	 this.setFlag= function(){
		if(flagged){
			return false;
		}
		flagged = true;
		return true;
	};
	
	/**
	 *	���̃}�X�Ɋ������낷
	 */
	 
	this.deleteFlag = function(){
		if(flagged){
			flagged = false;
			return true;
		}
		
		return false;
	};
	
	/**
	 *	�}�X���J���Ă��邩���m�F����
	 */
	 
	 this.chkOpen = function(){
	 	return isOpened;
	 };
};