var Board = function(rows, cols){

	var gameState = false;		//�Q�[���X�e�[�^�X�itrue = �J�n���Afalse = ���J�n�j
	var clearStatus;
	var openCnt1 = 0;			//openMass�p�̕ϐ�
	var openCnt2 = 0;			//openMass�p�̕ϐ�
	
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
	
	//�l�R�̊m�F
	this.checkBomb = function(row, col){
		return squares[row][col].checkNeko();
	};
	
	//�����̊m�F
	this.checkNum = function(row, col){
		return squares[row][col].checkNumber();
	}
	
	
	/**
	 *	���ڂ̃l�R�ݒu�E�����ݒu
	 */
	
	this.initMap = function(row, col, startGame){
		setBomb(12);
		if(gameState == false){
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
	
	/**
	*	�w�肳�ꂽ�}�X�̒��g�𔻒肷��B
	*/
	
	this.openMass = function(row,col,massJudge1,massJudge2,massJudge3){
		console.log(row + "-" + col);
		loopCnt = openCnt1;
		openCnt1 = openCnt2
		
		massJudge1 = massJudge1 || function(){};	//�Q�[���I�[�o�[�^(^0^)�_��\���E�l�R�ʒu��\�������鏈��
		massJudge2 = massJudge2 || function(){};	//�}�X�̐�����\�������鏈��
		massJudge3 = massJudge3 || function(){};	//
		console.log("chkOpen�̒��g�́�");
		console.log(squares[row][col].chkOpen());
		if(squares[row][col].chkOpen() === true){	
			return;
		}
		
		squares[row][col].openMass();
		console.log("getStatus�̒��g�́�");
		console.log(squares[row][col].getStatus());
		//�}�X�̒��g���l�R�������ꍇ
		if(squares[row][col].getStatus() === "neko"){
			if(typeof massJudge1 === "function"){
				console.log("neko");
				gameState = false;
				clearStatus = false;
				massJudge1();
			}
		}
		
		//�}�X�̒��g�������������ꍇ
		if(squares[row][col].getStatus() === "number"){
			if(typeof massJudge2 === "function"){
				console.log("number");
				var cnt = 0;
				//�c��}�X���l�R�̐��̏ꍇ�N���A�̏���
				for(var x = 0; x < 9; x++){
					for(var y= 0; y < 9; y++){
						if(squares[x][y].chkOpen() === false){
							cnt++;
						}
					}
				}
				if(getBomb() === cnt){
					gameState = false;
					var s = document.getElementById("top");
					s.item(0).src = "image/success.png";
				}
				//main��massJudge2��
				massJudge2();
			}
		}
		
		//�}�X�̒��g���󔒂������ꍇ
		if(squares[row][col].getStatus() === "nbsp"){
			massJudge3();
			openCnt2++;
			loop = openCnt1;
			openCnt1 = openCnt2
			for( i = loop; i < openCnt1; i++ ) {
				//�����`�F�b�N
				if(row > 0 ){
					openMass(row-1, col, massJudge1, massJudge2, massJudge3);
				}
				//�E���`�F�b�N
				if(row < 8 ){
					openMass(row+1, col, massJudge1, massJudge2, massJudge3);
				}
				//����`�F�b�N
				if(col > 0 ){
					openMass(row, col-1, massJudge1, massJudge2, massJudge3);
				}
				//�����`�F�b�N
				if(col < 8 ){
					openMass(row, col+1, massJudge1, massJudge2, massJudge3);
				}
				if( openCnt1 == openCnt2 ) break;
				
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

fillNeko = function(row, col){
	var nekoBomb = getBomb();
	var cnt = 0;
	//�l�R��ݒu�����
	while(1){
		randRow = Math.floor( Math.random() * 9);
		randCol = Math.floor( Math.random() * 9);
		if(squares[randRow][randCol].checkNeko() === false && (row !== randRow && col !== randCol)){
			squares[randRow][randCol].setNeko();
			cnt++;
			if(cnt === nekoBomb)break;
		}
	}
	//�����𐔂����
	cnt = 0;
	var tmp = 0;
	for(var x = 0; x < 9; x++){
		for(var y= 0; y < 9; y++){
			if( squares[x][y].checkNeko() === false){
				cnt = getCnt(x, y);
				squares[x][y].setNumber(cnt);
				tmp++;
			}
		}
	}
	return true;
};

/**
 *	����̂˂��̐��𐔂���
 */
getCnt = function(x, y){
	tmpCnt = 0;
	//�����̃}�X������
	if(x > 0){
		if(squares[x-1][y].checkNeko() === true) tmpCnt++;
		if(y > 0){
			if(squares[x-1][y-1].checkNeko() === true) tmpCnt++;
		}
		if(y < 8){
			if(squares[x-1][y+1].checkNeko() === true) tmpCnt++;
		}
	}
	//�E���̃}�X������
	if(x < 8){
		if(squares[x+1][y].checkNeko() === true) tmpCnt++;
		if(y > 0){
			if(squares[x+1][y-1].checkNeko() === true) tmpCnt++;
		}
		if(y < 8){
			if(squares[x+1][y+1].checkNeko() === true) tmpCnt++;
		}
	}
	//�^��̃}�X������
	if(y > 0){
		if(squares[x][y-1].checkNeko() === true) tmpCnt++;
	}
	//�^���̃}�X������
	if(y < 8){
		if(squares[x][y+1].checkNeko() === true) tmpCnt++;
	}
	return tmpCnt;
};

//�Q�b�^�[
getBomb = function(){
	return bomb;
}
//�Z�b�^�[
setBomb = function(bomb){
	this.bomb = bomb;
	return 0;
}
