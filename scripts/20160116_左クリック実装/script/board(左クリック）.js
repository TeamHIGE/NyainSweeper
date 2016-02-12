var Board = function(rows,cols){

	if(typeof rows!=="number"||rows <1)throw Error("lllegal rows:" +rows);
    if(typeof cols!=="number"||cols <1)throw Error("lllegal cols:" +cols);
    
    var squares = (function(){
    	var result = [],i,j;
        
        for(i = 0; i<rows; i++){
        	result[i] = [];
            for(j = 0; j<cols; j++){
            	result[i][j] = new Square();
            }
        }
         
        return result;
    }());

	/**
	 *左クリックでマスが開く
	 */
	 this.openMass = function(row,col,openedMass){
		openedMass = openedMass || function(){};

		if(squares[row][col].openMass() === true){
        	if(typeof openedMass === "function"){
            	openedMass(); 
			}
		}
	};
