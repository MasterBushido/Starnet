
print=function (x){
	//console.log(x);
	$("body").append(x);
}

println=function (x){
	//console.log(x);
	$("body").append('<p>'+x+'</p>');
}


// doInArray -
Utils=function(){

	this.doInArray=function(imageArray,functionToDo){
		for(var i=0;i<imageArray.length;i++){
			imageArray[i]=functionToDo(imageArray[i]);
		}
	};
	
	this.add=function(arrayToAdd,ItToAdd){
		arrayToAdd[arrayToAdd.length]=ItToAdd;
		return arrayToAdd.length;
	};
		
};

utils=new Utils();


