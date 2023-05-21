//your JS code here. If required.
let contain=document.getElementsByClassName("container")[0]
function show(){
	
	contain.innerHTML='';
	let show=document.createElement("div")
	show.id="line"
	contain.append(show)
	
}
function startAnimation() {

	let line=document.getElementById("line")
	line.className("line")
	
}
