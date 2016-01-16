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
	 *���N���b�N�Ń}�X���J��
	 */
	 this.clickisOpened = function(row,col,onOpened){
		onOpened = onOpened || function(){};

		if(squares[row][col].clickisOpened() === true){
        	if(typeof onOpened === "function"){
            	onOpened(); 
			}
		}
	};

--------------------------------------------------------------------------------------------------------------------------

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
     *�w�肳�ꂽ�}�X�Ɋ��𗧂Ă�B
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
     *�w�肳�ꂽ�}�X��������~�낷�B
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
	