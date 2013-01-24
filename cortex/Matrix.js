Matrix_class=function(){

	multimethod(this, "create", function(s){
	    return this.construct(x,y);
	});
  
  	multimethod(this, "create", function(x,y){
    	return this.construct(x,y,0);
  	});
  	
  	multimethod(this, "create", function(x,y,initValue){
    	return this.construct(x,y,initValue);
  	});
	
	this.construct=function(x,y,initValue){
		var matrix = new Array (x);
		for (i=0; i < matrix.length; ++i){
			
			arrayTemporal=new Array(y);
			arrayTemporal.init(initValue);
			matrix[i] = arrayTemporal;
		}
		
		return matrix;
	};

};

Array.prototype.init=function(initValue){
	for(var i=0;i<this.length;i++){
		this[i]=initValue;
	}
};


Matrix=new Matrix_class();

//Test Classs
function matrixTest(){

	nuevaMatriz=Matrix.create(3,4,0);
	//_.map(nuevaMatriz, function(){ return [1, 2, 3]; });
	
	s=nuevaMatriz[0][0]
	
	return s;
	
}

