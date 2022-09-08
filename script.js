console.log("Welcome to Spotify");
//initialize the variables
let songindex=0;
let audioElement=new Audio('song9.mp3');
let masterPlay= document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songitems=Array.from(document.getElementsByClassName('songitem'));
let mastersongname=document.getElementById('mastersongname');

let songs=[
    {songName: "Our Song",filePath:"song0.mp3",coverPath: "taylor.webp"},
    {songName: "Love Story",filePath:"song2.mp3",coverPath: "fearless.webp"},
    {songName: "Better Than Revenge",filePath:"song3.mp3",coverPath: "speaknow.webp"},
    {songName: "I Knew You Were Trouble",filePath:"song4.mp3",coverPath: "red.webp"},
    {songName: "Blank Space",filePath:"song5.mp3",coverPath: "1989.webp"},
    {songName: "Bad Blood",filePath:"song6.mp3",coverPath: "1989.webp"},
    {songName: "Look What You Made Me Do",filePath:"song7.mp3",coverPath: "reputation.webp"},
    {songName: "You Need To Calm Down",filePath:"song8.mp3",coverPath: "lover.webp"},
    {songName: "exile (feat. Bon Iver)",filePath:"song9.mp3",coverPath: "folklore.webp"},
    {songName: "champagne problems",filePath:"song10.mp3",coverPath: "evermore.webp"},
    {songName: "no body, no crime(feat. HAIM)",filePath:"song11.mp3",coverPath: "evermore.webp"},
]
songitems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText=songs[i].songName;
})

//handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})
//listen to events
audioElement.addEventListener('timeupdate', ()=>{
    // console.log('timeupdate');
    //update seek bar
    progress=parseInt((audioElement.currentTime / audioElement.duration)*100);
    //progress is variable that counts the percentage of song played 
    // console.log(progress);
    myProgressBar.value=progress; 
})
//change audio according to myprogressbar
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeallplays = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        // console.log(e.target);
        makeallplays();
        songindex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        
        mastersongname.innerText = songs[songindex].songName;
        audioElement.src=`song${songindex}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })  

})

document.getElementById('next').addEventListener('click', ()=>{
    if(songindex>=10){
        songindex=0;
    }
    else{
        songindex+=1;
    }
    audioElement.src= `song${songindex}.mp3`;
    mastersongname.innerText = songs[songindex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songindex<=0){
        songindex=0;
    }
    else{
        songindex-=1;
    }
    audioElement.src= `song${songindex}.mp3`;
    mastersongname.innerText = songs[songindex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
//make page responsive
//pause songs from the songitem icon too