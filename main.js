$(document).ready(function(){
    
var keys = document.querySelectorAll('#calculator span');
var balls = document.querySelectorAll('#calculator .ball');
var input = document.querySelector('.screen-left');
var otherInput = document.querySelector('.screen-right');
    
//Add click event for screens
$(".screen-left").click(function(){
 input = this;  
 otherInput = document.querySelector('.screen-right');
});
                        
$(".screen-right").click(function(){
 input = this;   
 otherInput = document.querySelector('.screen-left');
});
    
for(var i = 0; i < keys.length; i++) {
	keys[i].onclick = function(e) {
		
		var inputVal = input.innerHTML;
		var btnVal = this.innerHTML;
		
		if(btnVal == 'Clear all') {
			input.innerHTML = '0';
            otherInput.innerHTML = '0';
		}
		
		if(!isNaN(btnVal)) {
            var equation = inputVal + "+" + btnVal;
            input.innerHTML = eval(equation);
			}
			
		}
		
	} 
});