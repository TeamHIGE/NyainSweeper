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
	 */
	 
	 
	var flagged = false;
	var neko = false;
	var number = 0;
	var nbsp = true;
	
	/**
	 *	�˂��𖄂߂�
	 *	�˂���boolean�^�ɂ���
	 *	true�Ȃ�˂�������Afalse�͂˂������Ȃ�
	 */
	
	this.setNeko = function(){
		if(neko){
			neko = true;
			console.log("�˂������܂���");
			return neko;
		}
		console.log(neko);
		return neko;
	};
	
	/**
	 *	�˂����m�F����
	 *	neko��Ԃ�����
	 */
	
	this.checkNeko = function(){
		return neko;
	}
	
	/**
	 *	�܂��̂˂��̐���ێ�����
	 */
	
	this.setNeko(nekoNum){
		number = nekoNum;
		console.log(number);
		return number;
	}
	
	/**
	 *	�������m�F����
	 *	�܂��̂˂��̐���Ԃ�����
	 */
	
	this.checkNeko(){
		console.log(number);
		return number;
	}
	
	/**
	 *	�󔒂Ȃ�ture��Ԃ�
	 *	�K�v�Ȃ��\������̂ŁA�v����
	 */
	
	this.showNbsp(){
		console.log(nbsp);
		return nbsp;
	}
	
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