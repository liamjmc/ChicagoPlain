$(document).ready(function(){
    
var keys = document.querySelectorAll('#calculator span');
var balls = document.querySelectorAll('#calculator .ball');
var input = document.querySelector('.screen-left');
var otherInput = document.querySelector('.screen-right');
var team = "left";
    
//Add click event for screens
$(".screen-left").click(function(){
 input = this;  
 team = "left";
 otherInput = document.querySelector('.screen-right');
 input.classList.add("selected-screen");
 otherInput.classList.remove("selected-screen");
});
                        
$(".screen-right").click(function(){   
 input = this;  
 team = "right";
 otherInput = document.querySelector('.screen-left');
 input.classList.add("selected-screen");
 otherInput.classList.remove("selected-screen");
});
    
for(var i = 0; i < keys.length; i++) {
	keys[i].onclick = function(e) {
		
		var inputVal = input.innerHTML;
		var btnVal = this.innerHTML;
		
		if(btnVal == 'Clear all') {
			input.innerHTML = '0';
            otherInput.innerHTML = '0';
            document.querySelector('#title').innerHTML = "Chicago";
            for(var j = 0; j < keys.length; j++) {
             
                 keys[j].classList.remove("selected");
                 keys[j].classList.remove("selected-left");
                 keys[j].classList.remove("selected-right");
             
            }
		}
		
		if(!isNaN(btnVal)) {
            if (!($(this).hasClass('selected'))){
                var equation = inputVal + "+" + btnVal;
                input.innerHTML = eval(equation);
                
                if (team == "left")
                {
                    if (parseInt(input.innerHTML) > 60)
                        document.querySelector('#title').innerHTML = "Player 1 wins!";
                    this.classList.add("selected");
                    this.classList.add("selected-left");
                }
                else
                {
                    if (parseInt(input.innerHTML) > 60)
                        document.querySelector('#title').innerHTML = "Player 2 wins!";
                    this.classList.add("selected");
                    this.classList.add("selected-right");
                }
                }
            else{
                this.classList.remove("selected");
                if ($(this).hasClass('selected-left')){
                    this.classList.remove("selected-left");
                    input = document.querySelector('.screen-left');
                    otherInput = document.querySelector('.screen-right');
                    var equation = inputVal + "-" + btnVal;
                    input.innerHTML = eval(equation);
                    if (parseInt(input.innerHTML) < 61)
                        document.querySelector('#title').innerHTML = "Chicago";
                }
                else{
                    this.classList.remove("selected-right");
                    input = document.querySelector('.screen-right');
                    otherInput = document.querySelector('.screen-left');
                    var equation = inputVal + "-" + btnVal;
                    input.innerHTML = eval(equation);
                    if (parseInt(input.innerHTML) < 61)
                        document.querySelector('#title').innerHTML = "Chicago";
                }
            }
		}
		
	} 
}
});