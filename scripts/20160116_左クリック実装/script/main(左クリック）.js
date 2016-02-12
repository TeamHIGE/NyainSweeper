// jshint devel:true

var board = new Board(9,9)

var openMass = function(row,col){
	board.openMass(row,col,function(){
		var s = document.getElementByld(row + "-" + col),img = document.createElement("");
		
		imag.src = "";
		s.appendChild();
	});
};

(function(){

	var boardTable = document.getElementByld("board-table"),tr,td,i,j;
	
	for(i = 0; i < 9; i++){
		tr = document.createElement("tr");
		for(j = 0; j < 9; j++){
			td = document.createElement("td");
			td.setAttribute("id",i + "-" +j);
			td.setAttribute("openedMass("+i+","+j+")"; return false;");
			tr.appendChild(td);
		}
		
		boardTable.appendChild(tr);
	}
}());					
