
//una neurona puede recibir un impulso, si esto se produce automaticamente enviado un impulso a traves de sus conexiones.

Neurona=function(){
	this.size;
	this.nivel;
	
	
	/* Gestor de Conexiones */
	this.conexionesSalientes=[];
	this.conexionesEntrantes=[];

	this.anadirConexionSaliente=function(){
		Utils.add(conexionesSalientes,new Conexion());
	};
	
	this.anadirConexionEntrante=function(){
		Utils.add(conexionesEntrantes,new Conexion());
	};
	
	
	/* Gestion de las Se–ales */
	
	//
	
	
	//Envia senal ascendente de grabaci—n en la jerarquia
	this.enviaSenalGrabacionAscendente=function(idNeuronaDestino){
		this.conexionesSalientes[idNeuronaDestino];
	};
	
	
	
}


//Pruebas con Herencia y prototipos
//NeuronaHija.prototype = new Neurona();

//NeuronaHija.prototype.



//Union entre dos neuronas
Conexion=function() {
	this.neuronaOrigen= null;
	this.neuronaDestino= null;
	this.canales= [];
	this.anadirCanal=function(){
		canales[canales.length]=new canal();
	};
}


//Tubos de informaci—n que forman las conexiones
Canal=function(){
	this.id=0;
	this.contador=0;
}


//	Sensor - Conjunto de neuronas sensor que conforman un sensor de informaci—n
Sensor=function(){
	
	this.altura=128;
	this.anchura=128;
	this.neuronasSensor=[];
	
	this.addNeurona=function(){
		this.neuronasSensor[this.neuronasSensor.length]=new Neurona();
	};
	
	this.cargarImagen=function (imageArray){
		for(var i=0;i<imageArray.length;i++){
			
		}
	};
}


// Piramide - Conjunto de sensores que conforman una red completa
Piramide=function(){

	this.sensores=[]; //array de sensores
	
	
}




