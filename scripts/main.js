// jshint devel:true

var board = new Board(9,9);

//�ŏ��̈��̂�
var initGame = function(row, col){
	console.log("main��initGame�A�X�e�[�^�X�͈ȉ��̒ʂ�itrue = �J�n���Afalse = ���J�n�j");
	board.initMap(row, col, function(){
		console.log("initMap activate");
		
		for(i = 0; i < 9; i++){
			for(j = 0; j < 9; j++){
				var s = document.getElementById(i + "-" + j);
				s.setAttribute("onclick", "openMass(" +i+ ", " +j+ "); return false;");
				var tmpCnt = board.checkNum(i, j);
				s.innerText =  tmpCnt;
				if(board.checkBomb(i, j) == true){
					s.style.backgroundColor = "#008080";
				}
			}
		}
	});
};

//�e�X�g�p
var openMass = function(row, col){
	console.log("main��openMass");
	var s = document.getElementById(row + "-" + col);
	
	s.setAttribute("onclick", "initGame(" +row+ ", " +col+ "); return false;");
	console.log("openMass�I������s��");
	console.log(s);
};

var setFlag = function(row, col){
	console.log("setFlag(main)");
	board.setFlag(row, col, function(){
		var s = document.getElementById(row + "-" + col),img = document.createElement("img");
		s.setAttribute("oncontextmenu","deleteFlag("+row+ ", " +col+ ");return false;");
		
		img.src = "images/flag.png";
		s.appendChild(img);
	});
};

var deleteFlag = function(row, col){
	console.log("deleteFlag(main)");
	board.deleteFlag(row, col, function(){
		var s = document.getElementById(row + "-" + col);
		s.removeChild(s.lastChild);
		s.setAttribute("oncontextmenu","setFlag("+row+ ", " +col+ ");return false;");
	});
};


(function(){

	var boardTable = document.getElementById("board-table"), tr, td, i, j;
	
	for(i = 0; i < 9; i++){
		tr = document.createElement("tr");
		for(j = 0; j < 9; j++){
			td = document.createElement("td");
			td.setAttribute("id", i + "-" + j);
			td.setAttribute("onclick", "initGame("+i+ ", " +j+ ");return false;");
			td.setAttribute("oncontextmenu","setFlag("+i+ ", " +j+ ");return false;");
			tr.appendChild(td);
		}
		
		boardTable.appendChild(tr);
	}
}());
