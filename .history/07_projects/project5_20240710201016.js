// generate a randome color 

const randomColor = function(){

    const hex = "0123456789ABCDEF"
    let color = '#'
    for (let i = 0; i < 6; i++) {
      color +=  hex[Math.floor(Math.random() * 16)];

        
    }
    return color;
};


let intervalId;

const startChanageColor = function(){
   
    if(!intervalId){
        intervalId = setInterval(chanageBgColor, 1000)
    }
    
    function chanageBgColor(){
        document.body.style.backgroundColor = randomColor() 
    }
}
const stopChanageColor = function(){
    clearInterval(intervalId);
    // intervalId = null;//use for memory free
}
document.querySelector('#start').addEventListener('click', startChanageColor);


document.querySelector('#stop').addEventListener('click', stopChanageColor);
 