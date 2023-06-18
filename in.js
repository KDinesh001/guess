var enterB = document.getElementById('enterB');
var againB = document.getElementById('againB');
var output = document.getElementById('output');
var count=1;
var randomNumber = Math.ceil(Math.random()*100);
const img = document.getElementById("img");



function checkn(){
    var input= document.getElementById('userinput').value;
    if(input == randomNumber){
          
        img.src = "ee.PNG";
        document.body.appendChild(img);
        output.innerHTML="ewww!! After " +count+ " tries "+"You guessed right ";
        output.style.color="green";
      
       
        
    }   
    else if(input>randomNumber && input<100)
    {
        output.innerHTML="it was too high "+ count +"points gone";
        count++;
    }
    else if(input<randomNumber && input>1)
    {
        output.innerHTML="it was too low "+ count +" points gone";
        count++;
    }
    else if(input<1)
    {
        output.innerHTML="enter 1 to 100";
        
    }
    else if(isNaN(input)){
        output.innerHTML="Thats not a number!";
        
    }
    else{
        output.innerHTML="enter between 1 to 100";
        
    }

    

}

enterB.addEventListener('click',checkn);
againB.addEventListener('click',function() {
    location.reload();
})