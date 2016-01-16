var Board = function(rows,cols){

	if(typeof rows!=="number"||rows <1)throw Error("lllegal rows:" +rows);
    if(typeof cols!=="number"||cols <1)throw Error("lllegal cols:" +cols);
    
    var squares = (function(){
    	var result = [],i,j;
        
        for(i = 0; i<cols; i++){
        	result[i] = [];
            for(j = 0; j<cols; j++){
            	result[i][j] = new Square();
            }
        }
         
        return result;
    }());
     
    /**
     *指定されたマスに旗を立てる。
     */
    this.setFlag = function(row,col,onFlagged){
    	onFlagged = onFlagged || function(){};
          
        if(squares[row][col].setFlag() === true){
        	if(typeof onFlagged === "function"){
            	onFlagged();
            }
        }
     };

    /**
     *指定されたマスから旗を降ろす。
     */
    this.deleteFlag = function(row,col,offFlagged){
    	offFlagged = offFlagged || function(){};
          
        if(squares[row][col].deleteFlag() === true){
        	if(typeof offFlagged === "function"){
            	offFlagged();
       		 }
   		 }
    };
};
	