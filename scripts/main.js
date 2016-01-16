// jshint devel:true
//‚Ï‚ñ‚Âby”~
//test2
//ƒeƒXƒg
var board = new Board(9,9);

var setFlag = function(row, col){
console.log("setFlag(main)");
	board.setFlag(row, col, function(){
		var s = document.getElementById(row + "-" + col),img = document.createElement("img");
		
		s.setAttribute("oncontextmenu","deleteFlag("+row+ ", " +col+ ");return false;");
		
		img.src = "images/flag.png";
		s.appendChild(img);
		console.log(s);
	});
};

var deleteFlag = function(row, col){
console.log("deleteFlag(main)");
	board.deleteFlag(row, col, function(){
		var s = document.getElementById(row + "-" + col);
		console.log(s);
		s.removeChild(s.lastChild);
		console.log(s);
		s.setAttribute("oncontextmenu","setFlag("+row+ ", " +col+ ");return false;");
		console.log(s);
	});
};


(function(){

	var boardTable = document.getElementById("board-table"), tr, td, i, j;
	
	for(i = 0; i < 9; i++){
		tr = document.createElement("tr");
		for(j = 0; j < 9; j++){
			td = document.createElement("td");
			td.setAttribute("id", i + "-" + j);
			td.setAttribute("oncontextmenu","setFlag("+i+ ", " +j+ ");return false;");
			tr.appendChild(td);
		}
		
		boardTable.appendChild(tr);
	}
}());
