function drag(id){
 	var obj=document.getElementById(id);
 	ogj.onmousedown=function(){
 		var disx=0;
 		var disy=0;
 		var wan="hai";
 		obj.onmousedown=function(ev){
 			disx=ev.pageX-obj.offsetLeft;
 			disy=ev.pageY-obj.offsetTop;
 		}
 	}
}