function student(){

	var k = document.getElementById("circle");
	var l = document.getElementById("rot");
	var m = document.getElementById("bord");
	var n = document.getElementById("lbord");
	var p = document.querySelectorAll("#imgs img");
	m.style.transformOrigin = "left top";

	TweenLite.to(k, 1, {left:"700px", rotationX:"360deg", rotationY:"360deg",onComplete: fNext1, ease:Power3.easeOut});
	
	function fNext1(){
		TweenLite.to(k, 2, {left:"100px",onComplete: fNext2, ease:Power3.easeOut});
	}
	
	function fNext2(){
		TweenLite.to(k, 2, {rotationX:"-1080deg",onComplete: fNext3, ease:Power3.easeOut});
	}
	
	function fNext3(){
		TweenLite.to(l, 0.7, {top:"200px",onComplete: fNext4, ease:Elastic.easeOut});
	}
	
	function fNext4(){
		TweenLite.to(m, 0.7, {rotation:"5deg",onComplete: fNext5, ease:Elastic.easeOut});
	}

	function fNext5(){
		TweenLite.to("#lbord", 0.5, {height:"-=30px",width:"+=20px",onComplete: fNext6});
	}
	
	function fNext6(){
		TweenLite.to("#lbord", 1.7, {height:"+=30px",width:"-=20px",onComplete: fNext7,ease: Elastic. easeOut.config( 1.2, 0.1)});
	}
	
	function fNext7(){
		TweenLite.to(p[0], 0.7, {right:"+=100px"});
		TweenLite.to(p[0], 0.3, {right:"-=100px",delay:0.8});
		TweenLite.to(p[1], 0.7, {right:"+=100px",delay:0.1});
		TweenLite.to(p[1], 0.3, {right:"-=100px",delay:0.9});
		TweenLite.to(p[2], 0.7, {right:"+=100px",delay:0.2});
		TweenLite.to(p[2], 0.3, {right:"-=100px",delay:1});
		TweenLite.to(p[3], 0.7, {right:"+=100px",delay:0.3});
		TweenLite.to(p[3], 0.3, {right:"-=100px",delay:1.1});
		TweenLite.to(p[4], 0.7, {right:"+=100px",delay:0.4});
		TweenLite.to(p[4], 0.3, {right:"-=100px",delay:1.2});
		TweenLite.to(p[5], 0.7, {right:"+=100px",delay:0.5});
		TweenLite.to(p[5], 0.3, {right:"-=100px",delay:1.3});
		TweenLite.to(p[6], 0.7, {right:"+=100px",delay:0.6});
		TweenLite.to(p[6], 0.3, {right:"-=100px",delay:1.4});
	}	
}