var currentMusic=0
var music=document.querySelector('#audio')
var title=document.querySelector('#music-name')
var artist=document.querySelector('#artist-name')
var seekBar=document.querySelector('#seek-bar')
var currentTime=document.querySelector('#current-time')
var songDuration=document.querySelector('#song-duration')
var prev=document.querySelector('#backward')
var play=document.querySelector('#play')
var next=document.querySelector('#forward')
var happy=document.querySelector('#happy')
var sad=document.querySelector('#sad')
var romantic=document.querySelector('#romantic')
var motivational=document.querySelector('#motivational')
play.onclick=function(){
    if(music.paused){
        music.play();
        play.src="images/pause.png";
    }else{
        music.pause()
        play.src="images/play.png"
    }
}
music.onloadedmetadata=function(){
    seekBar.max=music.duration;
    seekBar.value=song.currentTime;
}
if(music.play()){
setInterval(()=>{
    seekBar.value=music.currentTime;
    currentTime.innerHTML=formatTime(music.currentTime)
},500)
}
let songs1=[
    {
        name: 'DreamLantern',
        title: 'Dream Lantern',
        artist: 'Radwimps',
    },
    {
        name: 'Makhna',
        title: 'Makhna',
        artist: 'Neha Kakkar',
    },
]
const loadSong1=(songs1)=>{
    title.textContent=songs1.title;
    artist.textContent=songs1.artist;
    music.src=`musics/${songs1.name}.mp3`
}
if(happy.click()){
    loadSongs1(songs1[0])
}
else if(sad.click()){
   loadSongs1(songs1[1])
}

const happysongs=()=>{
let songs = [
    {
        name: 'DreamLantern',
        title: 'Dream Lantern',
        artist: 'Radwimps',
    },
    {
        name: 'Ghungroo',
        title: 'Ghungroo',
        artist: 'Arijit Singh',
    },
    {
        name: 'Jugnu',
        title: 'Jugnu',
        artist: 'Baadshah',
    },
    /*{
        name: 'Makhna',
        title: 'Makhna',
        artist: 'Neha Kakkar',
    },
    {
        name: 'Subah Subah',
        title: 'Subah Subah',
        artist: 'Arijit Singh',
    }*/
]
const loadSong=(songs)=>{
    title.textContent=songs.title;
    artist.textContent=songs.artist;
    music.src=`musics/${songs.name}.mp3`
}
var songIndex=0;
//loadSong(songs[1])
const nextSong=()=>{
    songIndex=(songIndex+1)% songs.length
    loadSong(songs[songIndex])
}
const prevSong=()=>{
    songIndex=(songIndex-1)% songs.length
    loadSong(songs[songIndex])
}
next.addEventListener("click",nextSong)
prev.addEventListener("click",prevSong)
}
const sadsongs=()=>{
let songs = [
    /*{
        name: 'DreamLantern',
        title: 'Dream Lantern',
        artist: 'Radwimps',
    },
    {
        name: 'Ghungroo',
        title: 'Ghungroo',
        artist: 'Arijit Singh',
    },
    {
        name: 'Jugnu',
        title: 'Jugnu',
        artist: 'Baadshah',
    },
    */{
        name: 'Makhna',
        title: 'Makhna',
        artist: 'Neha Kakkar',
    },
    {
        name: 'Subah Subah',
        title: 'Subah Subah',
        artist: 'Arijit Singh',
    }
]
const loadSong=(songs)=>{
    title.textContent=songs.title;
    artist.textContent=songs.artist;
    music.src=`musics/${songs.name}.mp3`
}
var songIndex=0;
//loadSong(songs[1])
const nextSong=()=>{
    songIndex=(songIndex+1)% songs.length
    loadSong(songs[songIndex])
}
const prevSong=()=>{
    songIndex=(songIndex-1)% songs.length
    loadSong(songs[songIndex])
}
next.addEventListener("click",nextSong)
prev.addEventListener("click",prevSong)
}

const romanticsongs=()=>{
let songs = [
    /*{
        name: 'DreamLantern',
        title: 'Dream Lantern',
        artist: 'Radwimps',
    },
    {
        name: 'Ghungroo',
        title: 'Ghungroo',
        artist: 'Arijit Singh',
    },
    {
        name: 'Jugnu',
        title: 'Jugnu',
        artist: 'Baadshah',
    },
    */{
        name: 'Makhna',
        title: 'Makhna',
        artist: 'Neha Kakkar',
    },
    {
        name: 'Subah Subah',
        title: 'Subah Subah',
        artist: 'Arijit Singh',
    }
]
const loadSong=(songs)=>{
    title.textContent=songs.title;
    artist.textContent=songs.artist;
    music.src=`musics/${songs.name}.mp3`
}
var songIndex=0;
//loadSong(songs[1])
const nextSong=()=>{
    songIndex=(songIndex+1)% songs.length
    loadSong(songs[songIndex])
}
const prevSong=()=>{
    songIndex=(songIndex-1)% songs.length
    loadSong(songs[songIndex])
}
next.addEventListener("click",nextSong)
prev.addEventListener("click",prevSong)
}
const motivationalsongs=()=>{
let songs = [
    /*{
        name: 'DreamLantern',
        title: 'Dream Lantern',
        artist: 'Radwimps',
    },
    {
        name: 'Ghungroo',
        title: 'Ghungroo',
        artist: 'Arijit Singh',
    },
    {
        name: 'Jugnu',
        title: 'Jugnu',
        artist: 'Baadshah',
    },
    */{
        name: 'Makhna',
        title: 'Makhna',
        artist: 'Neha Kakkar',
    },
    {
        name: 'Subah Subah',
        title: 'Subah Subah',
        artist: 'Arijit Singh',
    }
]
const loadSong=(songs)=>{
    title.textContent=songs.title;
    artist.textContent=songs.artist;
    music.src=`musics/${songs.name}.mp3`
}
var songIndex=0;
//loadSong(songs[1])
const nextSong=()=>{
    songIndex=(songIndex+1)% songs.length
    loadSong(songs[songIndex])
}
const prevSong=()=>{
    songIndex=(songIndex-1)% songs.length
    loadSong(songs[songIndex])
}
next.addEventListener("click",nextSong)
prev.addEventListener("click",prevSong)
}
    happy.addEventListener("click",happysongs)
    sad.addEventListener("click",sadsongs)
    romantic.addEventListener("click",romanticsongs)
    motivational.addEventListener("click",motivationalsongs)