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
			console.log(neko);
			console.log("�˂������܂���");
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
		console.log(nbsp);
		return nbsp;
	};
	
	/**
	 *	���̃}�X�̒��g��Ԃ�
	 */
	 
	 this.getMassStatus = function(){
	 	if(nbsp){
	 		console.log(nbsp);
	 		mass_status = "nbsp";
	 		return mass_status;
	 	}
	 	else if(number != 0){
	 		console.log(number);
	 		mass_status = "number";
	 		return mass_status;
	 	}
	 	else if(neko){
	 		console.log(neko);
	 		mass_status = "neko";
	 		return mass_status;
	 	}
	 };
	 
	/**
	 *	���̃}�X���J��(2016/02/13 0722)
	 */ 
	 this.OpenMass= function(){
		console.log("openMass(square)");
		console.log(opening);
		if(isOpensed){
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
};