	 Polymer('x-kaleidoscope', {

		 ready: function () {
			r=';varying vec2 v;',o='*pow(length(v),-3.)+d+t)',i='void main(void){',z=window,c=CANVAS;c.width=z.innerWidth;c.height=z.innerHeight;g=c.getContext('webgl');d=g.createProgram();j=function(a,c){m=g.createShader(c);g.shaderSource(m,a);g.compileShader(m);g.attachShader(d,m)};j('attribute vec2 p'+r+i+'gl_Position=vec4(p,0.,1.);v=p;}',35633);j('precision lowp float'+r+'uniform float t;float f(float d){return(mod(floor(-v.x'+o+'+floor(-v.y'+o+',2.));}'+i+'gl_FragColor=vec4(f(0.),f(.3),f(.6),1.);}',35632);g.linkProgram(d);l=g.getAttribLocation(d,'p');t=g.getUniformLocation(d,'t');g.enableVertexAttribArray(l);g.useProgram(d);q=function(n,p){v=g.createBuffer();g.bindBuffer(p,v);g.bufferData(p,n,35044)};q(new Float32Array([-1,-1,1,-1,1,1,-1,1]),34962);q(new Uint16Array([0,3,1,2]),34963);g.vertexAttribPointer(l,2,5126,0,8,0);function b(a){g.uniform1f(t,.001*a);g.drawElements(5,4,5123,0);z.requestAnimationFrame(b)}b(0)	
		 },                                                     

         created: function () {
			CANVAS = document.createElement("canvas");
			CANVAS.id = "c";
			document.body.appendChild(CANVAS);
			CANVAS.style.position = "absolute";
			CANVAS.style.top = "0px";
			CANVAS.style.left = "0px";			
		}

	 });