// jshint devel:true

var board = new Board(9,9);

//最初の一回のみ
var initGame = function(row, col){
	board.initMap(row, col, function(){
		
		for(i = 0; i < 9; i++){
			for(j = 0; j < 9; j++){
				var s = document.getElementById(i + "-" + j);
				s.setAttribute("onclick", "openMass(" +i+ ", " +j+ "); return false;");
				//var tmpCnt = board.checkNum(i, j);
				//s.innerText =  tmpCnt;
				//if(board.checkBomb(i, j) == true){
				//	s.style.backgroundColor = "#008080";
				//}
			}
		}
		openMass(row, col);
	});
};


//マスを開く(2016/02/13 0722)
var openMass = function(row, col){
	console.log("OpenMass(main)");
	board.openMass(row, col, function(){
		//中身がネコの場合の処理		
		var s = document.getElementById("neko");
		s.src = "images/sippai.png";
		
		//img.src = "images/neko.png";  //開いたときの画像いれる？
		//s.appendChild(img);

	//中身が数字の場合の処理
	},function(){
		console.log("mainの中身が数字でした処理");
		num = board.checkNum(row, col);
		switch(num){
			case 1:
				var s = document.getElementById(row + "-" + col);
				img = document.createElement("img");
				img.src = "images/num1.png";
				s.appendChild(img);
				break;
			case 2:
				var s = document.getElementById(row + "-" + col);
				img = document.createElement("img");
				img.src = "images/num2.png";
				s.appendChild(img);
				break;
			case 3:
				var s = document.getElementById(row + "-" + col);
				img = document.createElement("img");
				img.src = "images/num3.png";
				s.appendChild(img);
				break;
			case 4:
				var s = document.getElementById(row + "-" + col);
				img = document.createElement("img");
				img.src = "images/num4.png";
				s.appendChild(img);
				break;
			case 5:
				var s = document.getElementById(row + "-" + col);
				img = document.createElement("img");
				img.src = "images/num5.png";
				s.appendChild(img);
				break;
			case 6:
				var s = document.getElementById(row + "-" + col);
				img = document.createElement("img");
				img.src = "images/num6.png";
				s.appendChild(img);
				break;
			case 7:
				var s = document.getElementById(row + "-" + col);
				img = document.createElement("img");
				img.src = "images/num7.png";
				s.appendChild(img);
				break;
			case 8:
				var s = document.getElementById(row + "-" + col);
				img = document.createElement("img");
				img.src = "images/num8.png";
				s.appendChild(img);
				break;
		}
		
	//中身が空白の場合の処理
	},function(){
		console.log("mainの中身が空白でした処理");
		var s = document.getElementById(row + "-" + col);
		img = document.createElement("img");
		img.src = "images/blank.png";
		s.appendChild(img);
	});
};

//旗を立てる
var setFlag = function(row, col){
	console.log("setFlag(main)");
	board.setFlag(row, col, function(){
		var s = document.getElementById(row + "-" + col);
		img = document.createElement("img");
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
