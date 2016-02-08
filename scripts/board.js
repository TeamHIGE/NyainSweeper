var Board = function(rows, cols){

	var bomb = 9;
	
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
	 *	ゲーム開始時のマスの設定
	 *	最初のwhile文でねこ設置
	 *	次のfor文で数字設置
	 *	
	 */
	
	this.init_map = function(row,col){
		var cnt = 0;
		while(1){
			randRow = Math.floor( Math.random() * 9);
			randCol = Math.floor( Math.random() * 9);
			if(squares[randRow][randCol].checkNeko() === false){
				squares[randRow][randCol].setNeko();
				cnt++;
				if(cnt === bomb)break;
			}
		}
		for(x = 0; x < 10; x++){
			for(y= 0; y < 10; y++){
				if( squares[x][y].checkNeko() === false){
					cnt = gerCnt(x, y);
					squares[x][y].setCnt(cnt);
				}
			}
		}
		
	}
	
	/**
	 *	周りのねこの数を数える
	 */
	this.getCnt(x, y){
		tmpCnt = 0;
		//左側の検査
		if(x > 0){
			if(squares[x-1][y].checkNeko() === true) tmpCnt++;
			if(y > 0){
				if(squares[x-1][y-1].checkNeko() === true) tmpCnt++;
			}
			if(y < 9){
				if(squares[x-1][y+1].checkNeko() === true) tmpCnt++;
			}
		//右側の検査
		if(x < 9){
			if(squares[x+1][y].checkNeko() === true) tmpCnt++;
			if(y > 0){
				if(squares[x+1][y+1].checkNeko() === true) tmpCnt++;
			}
			if(y < 9){
				if(squares[x+1][y+1].checkNeko() === true) tmpCnt++;
			}
		if(y > 0){
			if(squares[x][y+1].checkNeko() === true) tmpCnt++;
		}
		if(y < 9){
			if(squares[x][y-1].checkNeko() === true) tmpCnt++;
		}
		
		return tmpCnt;
	}
	
	
	/**
	 *	指定されたマスに旗を立てる。
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
	*	指定されたマスに旗をおろす。
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