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
    console.log(music.currentTime)
}
if(music.play()){
setInterval(()=>{
    seekBar.value=music.currentTime;
    currentTime.innerHTML=formatTime(music.currentTime)
},500)
}
seekBar.onchange=function(){
    if(music.paused){
        music.pause()
        music.currentTime=seekBar.value
        play.src="images/play.png"
    }else{
    music.play();
    music.currentTime=seekBar.value
    play.src='images/pause.png'
    }
}
const body=document.querySelector('body');
    const hapcolors= ['#4bdf4b','#e4c14e','#c535a6','#22abb4','#bd3f50','#ca6928da'];
    let i=0;
    body.style.transition = 'background-color 1s ease-in-out';
    setInterval(()=>{
        body.style.backgroundColor=hapcolors[i];
        i=(i+1)%hapcolors.length;
    }, 2000);
let songs1=[
    {
        name: 'Makhna',
        title: 'Makhna',
        artist: 'Neha Kakkar',
    },
    {
        name: 'Aziyat',
        title: 'Aziyat',
        artist: 'Pratyush Dhiman',
    },
    {
        name: 'Apna-Bana-Le',
        title: 'Apna Bana Le',
        artist: 'Arijit Singh',
    },
    {
        name: 'Lakshya',
        title: 'Lakshya',
        artist: 'Shankar Mahadevan,Shankar-Ehsaan-Loy',
    },
]
const loadSong1=(songs1)=>{
    title.textContent=songs1.title;
    artist.textContent=songs1.artist;
    music.src=`musics/${songs1.name}.mp3`
}
const happysongs=()=>{
let songs = [
    {
        name: 'Makhna',
        title: 'Makhna',
        artist: 'Neha Kakkar',
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
    {
        name: 'Subah Subah',
        title: 'Subah Subah',
        artist: 'Arijit Singh',
    },
    {
        name:'Ilahi',
        title:'Ilahi',
        artist:'Arijit Singh'
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
    songIndex--;
    songIndex<1? songsIndex=songs.length: songsIndex=songsIndex;
    loadSong(songs[songIndex])
}
next.addEventListener("click",()=>{
    music.pause()
        play.src="images/play.png"
        nextSong()
})
prev.addEventListener("click",()=>{
    music.pause()
        play.src="images/play.png"
        prevSong()

})
if(seekBar.value==seekBar.max){
    nextSong()
    music.play()
    play.src="images/pause.png"
}

}
const sadsongs=()=>{
let songs = [
    {
        name: 'Aziyat',
        title: 'Aziyat',
        artist: 'Pratyush Dhiman',
    },
    {
        name: 'Tune Jo Na Kaha',
        title: 'Tune Jo Na Kaha',
        artist: 'Pritam,Mohit Chauhan',
    },
    {
        name: 'Baarishein',
        title: 'Baarishein',
        artist: 'Anup Jain',
    },
    {
        name: 'Jaan',
        title: 'Jaan Nisar',
        artist: 'Arijit Singh',
    },
    {
        name: 'Kabira',
        title: 'Kabira',
        artist: 'Tochi Raina,Rekha Bhardwaj',
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
    songIndex--;
    songIndex<1? songsIndex=songs.length: songsIndex=songsIndex;
    loadSong(songs[songIndex])
}
next.addEventListener("click",()=>{
    music.pause()
        play.src="images/play.png"
        nextSong()
})
prev.addEventListener("click",()=>{
    music.pause()
        play.src="images/play.png"
        prevSong()

})
if(seekBar.value==seekBar.max){
    nextSong()
    music.play()
    play.src="images/pause.png"
}

}

const romanticsongs=()=>{
let songs = [
    {
        name: 'Apna-Bana-Le',
        title: 'Apna Bana Le',
        artist: 'Arijit Singh',
    },
    {
        name: 'Raatan Lambiyan',
        title: 'Raatan Lambiyan',
        artist: 'Jubin Nautiyal,Asees Kaur',
    },
    {
        name: 'Kesariya',
        title: 'Kesariya',
        artist: 'Pritam,Arijit Singh,Amitabh Bhattacharya',
    },
    {
        name: 'Shayad',
        title: 'Shayad',
        artist: 'Pritam Chakraborty,Arijit Singh',
    },
    {
        name: 'Ranjha',
        title: 'Ranjha',
        artist: 'Jasleen Royal,B Praak',
    }
]
const loadSong=(songs)=>{
    title.textContent=songs.title;
    artist.textContent=songs.artist;
    music.src=`musics/${songs.name}.mp3`
}
var songIndex=0;
const nextSong=()=>{
    songIndex=(songIndex+1)% songs.length
    loadSong(songs[songIndex])
}
const prevSong=()=>{
    songIndex--;
    songIndex<1? songsIndex=songs.length: songsIndex=songsIndex;
    loadSong(songs[songIndex])
}
next.addEventListener("click",()=>{
    music.pause()
        play.src="images/play.png"
        nextSong()
})
prev.addEventListener("click",()=>{
    music.pause()
        play.src="images/play.png"
        prevSong()

})
}
const motivationalsongs=()=>{
let songs = [
    {
        name: 'Lakshya',
        title: 'Lakshya',
        artist: 'Shankar Mahadevan,Shankar-Ehsaan-Loy',
    },
    {
        name: 'Parwah Nahin',
        title: 'Parwah Nahin',
        artist: 'Siddharth Basrur',
    },
    {
        name: 'Aashayein',
        title: 'Aashayein',
        artist: 'Baadshah',
    },
    {
        name: 'Ek Zindagi',
        title: 'Ek Zindagi',
        artist: 'Taniskaa Sanghvi,Sachin-Jigar',
    },
    {
        name: 'Lets Crack It',
        title: 'Lets Crack It',
        artist: 'Naezy',
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
    songIndex--;
    songIndex<1? songsIndex=songs.length: songsIndex=songsIndex;
    loadSong(songs[songIndex])
}
next.addEventListener("click",()=>{
    music.pause()
        play.src="images/play.png"
        nextSong()
})
prev.addEventListener("click",()=>{
    music.pause()
        play.src="images/play.png"
        prevSong()

})
}   
   happy.addEventListener("click",()=>{
        music.pause()
        play.src="images/play.png"
        loadSong1(songs1[0])
        happysongs()

    })
    sad.addEventListener("click",()=>{
        music.pause()
        play.src="images/play.png"
        loadSong1(songs1[1])
        sadsongs()
    })
    romantic.addEventListener("click",()=>{
        music.pause()
        play.src="images/play.png"
        loadSong1(songs1[2])
        romanticsongs()
    })
    motivational.addEventListener("click",()=>{
        music.pause()
        play.src="images/play.png"
        loadSong1(songs1[3])
        motivationalsongs()
    })