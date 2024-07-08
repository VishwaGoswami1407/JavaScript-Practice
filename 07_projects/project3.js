// const clock = document.querySelector('#clock');

const clock = document.getElementById('clock')


setInterval(function() {
    let date = new Date()
    //in console update the date 
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)