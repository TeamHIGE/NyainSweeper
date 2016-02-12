var Board = function(rows, cols){

	bomb= 9;
	var gameState = false;

	if(typeof rows !== "number" || rows < 1)throw Error("illegal rows:" + rows);
	if(typeof cols !== "number" || cols < 1)throw Error("illegal cols:" + cols);
	
	squares = (function(){
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
	 *	ゲーム状態を調べる
	 *	gameStateを返す
	 */
	
	this.checkState = function(){
		return gameState;
	};

	
	/**
	 *	初期化
	 */
	
	this.initMap = function(row, col, startGame){
		if(gameState == false){
			console.log("initMap(board)");
			startGame = startGame || function(){};
			
			fillNeko(row, col);
			if(typeof startGame === "function"){
				gameState = true;
				startGame();
			}
		}
	};
	

	
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
	
	/**
	*	指定されたマスの中身を判定する。
	*/
	
	this.massStatus = function(row,col,massJudge1,massJudge2,massJudge3){
		console.log("massStatus(board)");
		massJudge1 = massJudge1 || function(){};
		massJudge2 = massJudge2 || function(){};
		massJudge3 = massJudge3 || function(){};
		
		
		if(squares[row][col].getStatus() === "neko"){
			if(typeof massJudge1 === "function"){
				console.log("ok");
				gameStatus = false;
				massJudge1();
			}
		}
		
		if(squares[row][col].getStatus() === "number"){
			if(typeof massJudge2 === "function"){
				console.log("ok");
				openMass();
				if()
				massJudge2();
			}
		}
		
		if(squares[row][col].getStatus() === "nbsp"){
			if(typeof massJudge3 === "function"){
				console.log("ok");
				for(var i = row - 1; i <= 1; i++){
					for(var j = col - 1; j <= 1; j++){
						if(i < 0 || j < 0){
							continue;
						}
						else if(i === 0 && j === 0){
							continue;
						}
						
				massJudge3();
			}
		}
	};
};

	
/**
 *	マスにねこと数字を配置する
 *	最初のwhile文でねこ設置
 *	次のfor文で数字設置
 *	
 */

fillNeko = function(row, col){
	var cnt = 0;
	console.log("fillNeko");
	while(1){
		randRow = Math.floor( Math.random() * 9);
		randCol = Math.floor( Math.random() * 9);
		console.log(randRow + "と" + randCol);
		console.log(squares[randRow][randCol].checkNeko());
		if(squares[randRow][randCol].checkNeko() === false){
			squares[randRow][randCol].setNeko();
			cnt++;
			console.log(cnt);
			if(cnt === bomb)break;
		}
	}
	for(x = 0; x < 9; x++){
		for(y= 0; y < 9; y++){
			if( squares[x][y].checkNeko() === false){
				cnt = getCnt(x, y);
				squares[x][y].setNeko(cnt);
			}
		}
	}
	return true;
};

/**
 *	周りのねこの数を数える
 */
getCnt = function(x, y){
	console.log("getCnt");
	tmpCnt = 0;
	//左側の検査
	if(x > 0){
		if(squares[x-1][y].checkNeko() === true) tmpCnt++;
		if(y > 0){
			if(squares[x-1][y-1].checkNeko() === true) tmpCnt++;
		}
		if(y < 8){
			if(squares[x-1][y+1].checkNeko() === true) tmpCnt++;
		}
	}
	//右側の検査
	if(x < 8){
		if(squares[x+1][y].checkNeko() === true) tmpCnt++;
		if(y > 0){
			if(squares[x+1][y-1].checkNeko() === true) tmpCnt++;
		}
		if(y < 8){
			if(squares[x+1][y+1].checkNeko() === true) tmpCnt++;
		}
	}
	//真上の検査
	if(y > 0){
		if(squares[x][y-1].checkNeko() === true) tmpCnt++;
	}
	//真下の検査
	if(y < 8){
		if(squares[x][y+1].checkNeko() === true) tmpCnt++;
	}
	
	return tmpCnt;
};
