var num = 6
var colors = generateRandomColours(num)
var squares = document.getElementsByClassName("square");
var pickedColor = pickColor(num)
var colorDisplay = document.getElementById("colorDisplay")
colorDisplay.textContent = pickedColor
var message = document.getElementById("message")
var h = document.querySelector("h1")
var newcolor = document.getElementById("newcolor")
//var easy = document.querySelector("#Easy")
//var hard = document.querySelector("#Hard")
var mode = document.querySelectorAll(".mode")

for(i=0; i<mode.length; i++){
	mode[i].addEventListener("click", function(){
        mode[0].classList.remove("select")
        mode[1].classList.remove("select")
        this.classList.add("select")
        //this.textcontent == "Easy" ? num=3 : num=6;
        if(this.textContent==="Easy"){
        	num = 3
        }
        else{
        	num = 6
        }
		reset()
	})
}
function reset(){
	colors = generateRandomColours(num)
    pickedColor = pickColor(num)
	for(var i=0; i<squares.length; i++){
	    if(colors[i]){
	    	squares[i].style.display = "block"
	    	squares[i].style.background = colors[i]
	    }
	    else{
	    	squares[i].style.display = "none"
	    }
    }
    h.style.background = "steelblue"
    colorDisplay.textContent = pickedColor
    newcolor.textContent = "New Color"
    message.textContent = "Guess the Colour"
}
/*easy.addEventListener("click", function(){
	h.style.background = "steelblue"
	hard.classList.remove("select")
	easy.classList.add("select")
	num = 3
	colors = generateRandomColours(num)
	pickedColor = pickColor(num)
	for(var i=0; i<squares.length; i++){
	    if(colors[i]){
	    	squares[i].style.background = colors[i]
	    }
	    else{
	    	squares[i].style.display = "none"
	    }
    }
	colorDisplay.textContent = pickedColor
})
hard.addEventListener("click", function(){
	h.style.background = "steelblue"
	hard.classList.add("select")
	easy.classList.remove("select")
	num = 6
	colors = generateRandomColours(num)
	pickedColor = pickColor(num)
	for(var i=0; i<squares.length; i++){
	    squares[i].style.background = colors[i]
	    squares[i].style.display = "block"
    }
	colorDisplay.textContent = pickedColor
})*/
newcolor.addEventListener("click", function(){
	reset()
})
for(var i=0; i<squares.length; i++){
	squares[i].style.background = colors[i];

	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.background;
		if(clickedColor === pickedColor){
			message.textContent = "Correct"
			changeAll(clickedColor)
			h.style.background = pickedColor
			newcolor.textContent = "Play Again?"
		}
		else{
			this.style.background = "#232323"
            message.textContent = "Try Again"
		}
	})
}
function changeAll(clickedColor){
	for(var j=0; j<squares.length; j++){
	    squares[j].style.background = clickedColor
	}
}
function pickColor(n){
	var v = Math.floor(Math.random() * n)
    return colors[v]
}
function generateRandomColours(n){
	 var arr = []
	 for(var i=0; i<n; i++){
	 	arr[i] = "rgb("+randomColor()+", "+ randomColor()+", "+
        randomColor()+")" 
	 }
	 return arr
}
function randomColor(){
	var v = Math.floor(Math.random()*256)
    return v
}
