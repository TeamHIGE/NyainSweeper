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
	 *	�Q�[����Ԃ𒲂ׂ�
	 *	gameState��Ԃ�
	 */
	
	this.checkState = function(){
		return gameState;
	};

	
	/**
	 *	������
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

	
/**
 *	�}�X�ɂ˂��Ɛ�����z�u����
 *	�ŏ���while���ł˂��ݒu
 *	����for���Ő����ݒu
 *	
 */

var fillNeko = function(row, col){
	var cnt = 0;
	console.log("fillNeko");
	while(1){
		randRow = Math.floor( Math.random() * 9);
		randCol = Math.floor( Math.random() * 9);
		console.log(randRow + "��" + randCol);
		console.log(squares[randRow][randCol].checkNeko());
		if(squares[randRow][randCol].checkNeko() === false){
			squares[randRow][randCol].setNeko();
			cnt++;
			console.log(cnt);
			if(cnt === bomb)break;
		}
	}
	for(x = 0; x < 10; x++){
		for(y= 0; y < 10; y++){
			if( squares[x][y].checkNeko() === false){
				cnt = getCnt(x, y);
				squares[x][y].setNeko(cnt);
			}
		}
	}
	return true;
};

/**
 *	����̂˂��̐��𐔂���
 */
var getCnt = function(x, y){
	console.log("getCnt");
	tmpCnt = 0;
	//�����̌���
	if(x > 0){
		if(squares[x-1][y].checkNeko() === true) tmpCnt++;
		if(y > 0){
			if(squares[x-1][y-1].checkNeko() === true) tmpCnt++;
		}
		if(y < 9){
			if(squares[x-1][y+1].checkNeko() === true) tmpCnt++;
		}
	}
	//�E���̌���
	if(x < 9){
		if(squares[x+1][y].checkNeko() === true) tmpCnt++;
		if(y > 0){
			if(squares[x+1][y-1].checkNeko() === true) tmpCnt++;
		}
		if(y < 9){
			if(squares[x+1][y+1].checkNeko() === true) tmpCnt++;
		}
	}
	if(y > 0){
		if(squares[x][y-1].checkNeko() === true) tmpCnt++;
	}
	if(y < 9){
		if(squares[x][y+1].checkNeko() === true) tmpCnt++;
	}
	
	return tmpCnt;
};
