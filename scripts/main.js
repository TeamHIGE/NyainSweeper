// jshint devel:true

var board = new Board(9,9);

//最初の一回のみ
var initGame = function(row, col){
	console.log("mainのinitGame、ステータスは以下の通り（true = 開始中、false = 未開始）");
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

//テスト用
var openMass = function(row, col){
	console.log("mainのopenMass");
	var s = document.getElementById(row + "-" + col);
	
	s.setAttribute("onclick", "initGame(" +row+ ", " +col+ "); return false;");
	console.log("openMass終了時のsは");
	console.log(s);
};

//マスを開く(2016/02/13 0722)
var OpenMass = function(row, col){
	console.log("OpenMass(main)");
	board.OpenMass(row, col, function(){
		var s = document.getElementById(row + "-" + col),img = document.createElement("img");
		s.setAttribute("oncontextmenu","OpenMass("+row+ ", " +col+ ");return false;");
		
		img.src = "images/flag.png";  //開いたときの画像いれる？
		s.appendChild(img);
	});
};

//マスの判定 (2016/02/13 0722)
var massStatus = function(row, col){
	console.log("massStatus(main)");
	board.massStatus(row, col, function(){
	});
//ゲームステータス(OFF)エンドステータス(ON)	
//クリア表示
//ゲームステータス(OFF)エンドステータス(ON)	
//残念表示
};

//旗を立てる
var setFlag = function(row, col){
	console.log("setFlag(main)");
	board.setFlag(row, col, function(){
		var s = document.getElementById(row + "-" + col),img = document.createElement("img");
		s.setAttribute("oncontextmenu","deleteFlag("+row+ ", " +col+ ");return false;");
		
		img.src = "images/flag.png";
		s.appendChild(img);
	});
};

//旗を降ろす
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
