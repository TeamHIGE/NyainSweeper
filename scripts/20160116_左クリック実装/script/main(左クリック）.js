// jshint devel:true

var board = new Board(9,9)

var clickisOpened = function(row,col){
	board.clickisOpened(row,col,function(){

var clickisOpened = function(row,col){
	board.clickisOpened(row,col,function(){
    	var s =document.getElementById(row + "-" + col);
};

	}
}



--------------------------------------------------------------------------------------------------------


// jshint devel:true

var board = new Board(9,9);

var setFlag = function(row,col){
	board.setFlag(row,col,function(){
    	var s =document.getElementById(row + "-" + col),img = document.createElement("img");
        
        img.src = "images/flag.png";
        s.appendChild(img);
        s.setAttribute("oncontextmenu","deleteFlag("+row+","+col+");return false;");
	});
};

var deleteFlag = function(row,col){
	board.deleteFlag(row,col,function(){
    	var s =document.getElementById(row + "-" + col);
        s.removeChild(s.firstChild);
        s.setAttribute("oncontextmenu","setFlag("+row+","+col+");return false;");
	});
};


(function(){

	var boardTable = document.getElementById("board-table"),tr,td,i,j;
    
    for(i=0;i<9;i++){
    	tr = document.createElement("tr");
        for(j=0;j<9;j++){
        	td = document.createElement("td");
            td.setAttribute("id",i+"-"+j);
            td.setAttribute("oncontextmenu","setFlag("+i+","+j+");return false;");
            tr.appendChild(td);
        }
         
        boardTable.appendChild(tr);
	}
}());
 