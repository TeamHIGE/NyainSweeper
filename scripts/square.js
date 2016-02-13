/*
 *	コンソール確認はﾌﾖｳなので、のちに消します
 *	（console.log）
 */

var Square = function(){

	/**
	 *	変数の初期値について
	 *	フラグ(flagged)は立ってない
	 *	ねこ(neko)はいない
	 *	周りの猫の数(number)は0
	 *	マスは空白(nbsp)である
	 *^ マスは開いている
	 */
	 
	var flagged = false;
	var neko = false;
	var number = 0;
	var nbsp = true;
	var mass_status = "";
	var isOpened = false;
	
	/**
	 *	ねこを埋める
	 *	ねこはboolean型にする
	 *	trueならねこがいる、falseはねこがいない
	 */
	
	this.setNeko = function(){
		if(neko == false){
			neko = true;
			return neko;
		};
		
		return neko;
	};
	
	/**
	 *	ねこを確認する
	 *	nekoを返すだけ
	 */
	
	this.checkNeko = function(){
		return neko;
	};
	
	/**
	 *	まわりのねこの数を保持する
	 */
	
	this.setNumber = function(nekoNum){
		number = nekoNum;
		return number;
	};
	
	/**
	 *	数字を確認する
	 *	まわりのねこの数を返すだけ
	 */
	
	this.checkNumber = function(){
		return number;
	};
	
	/**
	 *	空白ならtureを返す
	 *	必要ない可能性あるので、要検討
	 */
	
	this.showNbsp = function(){
		return nbsp;
	};
	
	/**
	 *	このマスの中身を返す
	 */
	 
	 this.getStatus = function(){
	 	if(nbsp){
	 		mass_status = "nbsp";
	 		return mass_status;
	 	}
	 	else if(number != 0){
	 		mass_status = "number";
	 		return mass_status;
	 	}
	 	else if(neko){
	 		mass_status = "neko";
	 		return mass_status;
	 	}
	 };
	 
	/**
	 *	このマスを開く(2016/02/13 0722)
	 *	isOpenedの説明 : true = 開いてる false = 開いてない
	 *	opennMassの仕様 : return true = 開くことに成功 false = もともと開いてるZE
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
	 *	このマスに旗を立てる
	 */
	 
	 this.setFlag= function(){
		if(flagged){
			return false;
		}
		flagged = true;
		return true;
	};
	
	/**
	 *	このマスに旗をおろす
	 */
	 
	this.deleteFlag = function(){
		if(flagged){
			flagged = false;
			return true;
		}
		
		return false;
	};
	
	/**
	 *	マスが開いているかを確認する
	 */
	 
	 this.chkOpen = function(){
	 	console.log(isOpened);
	 	return isOpened;
	 };
};