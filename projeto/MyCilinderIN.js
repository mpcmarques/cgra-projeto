/**
 * MyCilinderIN
 * @constructor
 */
 function MyCilinderIN(scene, slices, stacks) {
 	CGFobject.call(this,scene);
	
	this.slices = slices;
	this.stacks = stacks;

 	this.initBuffers();
 };

 MyCilinderIN.prototype = Object.create(CGFobject.prototype);
 MyCilinderIN.prototype.constructor = MyCilinderIN;

 MyCilinderIN.prototype.initBuffers = function() {
 	/*
 	* TODO:
 	* Replace the following lines in order to build a prism with a **single mesh**.
 	*
 	* How can the vertices, indices and normals arrays be defined to
 	* build a prism with varying number of slices and stacks?
 	*/

 	//	Init with empty arrays
 	this.vertices = [];
 	this.indices = [];
 	this.normals = [];
 	this.textCoords = [];
 	
	//	Calculate vertice coordinate
	var ang = 0;
 	var rotation = (2 * Math.PI)/this.slices;
 	var indCounter = 0;
 	
	for (j = 0; j < this.stacks; j++) {
 		for(i = 0; i < this.slices; i++){
 			//	Calculate vertices
 			
 			//	Vertice 0 do retangulo
 			this.vertices.push(0.5 * Math.cos(ang), 0.5 * Math.sin(ang),j);
 			this.normals.push( -0.5 * Math.cos(ang), -0.5 * Math.sin(ang),0);
			//this.textCoords.push
 			
 			//	Vertice 2 do retangulo
			this.vertices.push( 0.5 * Math.cos(ang),  0.5 * Math.sin(ang),j + 1);
			this.normals.push( -0.5 * Math.cos(ang), -0.5 * Math.sin(ang),0);

			ang = ang + rotation;

 			//	Vertice 1 do retangulo
			this.vertices.push( 0.5 * Math.cos(ang),  0.5 * Math.sin(ang),j);
			this.normals.push( -0.5 * Math.cos(ang),  -0.5 * Math.sin(ang),0);
		
			//	Vertice 3 do retangulo
			this.vertices.push( 0.5 * Math.cos(ang),  0.5 * Math.sin(ang),j + 1);
			this.normals.push( -0.5 * Math.cos(ang), -0.5 * Math.sin(ang),0);
			
			//	Indices
			this.indices.push(indCounter+2);
			this.indices.push(indCounter);
			this.indices.push(indCounter+1);
			this.indices.push(indCounter+1);
			this.indices.push(indCounter+3);
			this.indices.push(indCounter+2);
			indCounter += 4;
 		}
	}


 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };