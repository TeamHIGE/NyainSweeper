var Board = function(rows, cols){

	if(typeof rows !== "number" || rows < 1)throw Error("illegal rows:" + rows);
	if(typeof cols !== "number" || cols < 1)throw Error("illegal cols:" + cols);
	
	var squares = (function(){
		var result = [],i,j;
		
		for(i = 0; i < rows; i++){
			result[i] = [];
			for(j = 0; j < cols; j++){
				result[i][j] = new Square();
			}
		}
		
		return result;
	}());
	/**
	 *	�Q�[���J�n���̃}�X�̐ݒ�
	 */
	
	this.init_map = function(row,col){
		bomb = 9;
		var cnt = 0;
		while(1){
			randRow = Math.floor( Math.random() * 9);
			randCol = Math.floor( Math.random() * 9);
			if(squares[randRow][randCol].checkNeko === false){
				squares[randRow][randCol].setNeko
				cnt++;
				if(cnt === bomb)break;
		}
	}
	
	/**
	 *	�w�肳�ꂽ�}�X�Ɋ��𗧂Ă�B
	 */
	 
	this.setFlag = function(row,col,onFlagged){
		console.log("setFlag(board)");
		onFlagged = onFlagged || function(){};
		console.log(onFlagged);
		
		if(squares[row][col].setFlag() === true){
			if(typeof onFlagged === "function"){
				onFlagged();
			}
		}
	};
	
	/**
	*	�w�肳�ꂽ�}�X�Ɋ������낷�B
	*/
	
	this.deleteFlag = function(row,col,onFlagged){
		console.log("deleteFlag(board)");
		onFlagged = onFlagged || function(){};
		
		if(squares[row][col].deleteFlag() === true){
			if(typeof onFlagged === "function"){
				console.log("ok");
				onFlagged();
			}
		}
	};
	
};