// const clock = document.querySelector('#clock');

const clock = document.getElementById('clock')


setInterval(function() {
    let date = new Date()
    console.log(date.toLocaleTimeString());
}, 1000)