var currentMusic=0
var song=document.querySelector('#Song')
var button=document.querySelector('#button')
var forward=document.querySelector('#forward')
var backward=document.querySelector('#backward')
var happy=document.querySelector('#happy')
var sad=document.querySelector('#sad')
var romantic=document.querySelector('#romantic')
var motivational=document.querySelector('#motivational')
var startTime=document.querySelector('.current-time')
var musicDuration=document.querySelector('.song-duration')

button.addEventListener('click',()=>{
    button.classList.toggle('pause');
    button.src='images/pause.png'
})