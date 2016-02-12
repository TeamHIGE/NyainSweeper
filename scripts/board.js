var Board = function(rows, cols){

	var gameState = false;		//ゲームステータス（true = 開始中、false = 未開始）

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
	
	//ネコの確認
	this.checkBomb = function(row, col){
		squares[row][col].checkNeko();
	};
	
	
	/**
	 *	一回目のネコ設置・数字設置
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
		
		if(squares[row][col].getStatus() === "neko"){
			if(typeof massJudge1 === "function"){
				console.log("ok");
				massJudge1();
			}
		}
		
		if(squares[row][col].getStatus() === "number"){
			if(typeof massJudge2 === "function"){
				console.log("ok");
				massJudge2();
			}
		}
		
		if(squares[row][col].getStatus() === "nbsp"){
			if(typeof massJudge3 === "function"){
				console.log("ok");
				massJudge();
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
	var bomb = 9;
	var cnt = 0;
	console.log("fillNeko");
	//ネコを設置するよ
	while(1){
		randRow = Math.floor( Math.random() * 9);
		randCol = Math.floor( Math.random() * 9);
		console.log(randRow + "と" + randCol);
		console.log(squares[randRow][randCol].checkNeko());
		if(squares[randRow][randCol].checkNeko() === false){
			squares[randRow][randCol].setNeko();
			cnt++;
			console.log("現在のネコの設置数:" + cnt);
			if(cnt === bomb)break;
		}
	}
	//数字を数えるよ
	cnt = 0;
	var tmp = 0;
	for(var x = 0; x < 9; x++){
		for(var y= 0; y < 9; y++){
			if( squares[x][y].checkNeko() === false){
				cnt = getCnt(x, y);
				squares[x][y].setNumber(cnt);
				tmp++;
				console.log("x =" + x + " y = " + y);
				console.log("呼び出し回数：" + tmp);
			}
		}
	}
	return true;
};

/**
 *	周りのねこの数を数える
 */
getCnt = function(x, y){
	tmpCnt = 0;
	//左側のマスを検査
	if(x > 0){
		if(squares[x-1][y].checkNeko() === true) tmpCnt++;
		if(y > 0){
			if(squares[x-1][y-1].checkNeko() === true) tmpCnt++;
		}
		if(y < 8){
			if(squares[x-1][y+1].checkNeko() === true) tmpCnt++;
		}
	}
	//右側のマスを検査
	if(x < 8){
		if(squares[x+1][y].checkNeko() === true) tmpCnt++;
		if(y > 0){
			if(squares[x+1][y-1].checkNeko() === true) tmpCnt++;
		}
		if(y < 8){
			if(squares[x+1][y+1].checkNeko() === true) tmpCnt++;
		}
	}
	//真上のマスを検査
	if(y > 0){
		if(squares[x][y-1].checkNeko() === true) tmpCnt++;
	}
	//真下のマスを検査
	if(y < 8){
		if(squares[x][y+1].checkNeko() === true) tmpCnt++;
	}
	return tmpCnt;
};
