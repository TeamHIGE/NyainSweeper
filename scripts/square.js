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
	 */
	 
	 
	var flagged = false;
	var neko = false;
	var number = 0;
	var nbsp = true;
	var mass_status = "";
	
	/**
	 *	ねこを埋める
	 *	ねこはboolean型にする
	 *	trueならねこがいる、falseはねこがいない
	 */
	
	this.setNeko = function(){
		if(neko){
			neko = true;
			console.log("ねこが埋まった");
			return neko;
		};
		console.log(neko);
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
		console.log(number);
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
		console.log(nbsp);
		return nbsp;
	};
	
	/**
	 *	このマスの中身を返す
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