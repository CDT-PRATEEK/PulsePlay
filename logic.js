console.log("Pulse Play");

// variables

let songIndex = 0;
let audioElement = new Audio("Songs/inside-you-162760.mp3");
let masterPlay = document.getElementById('masterPlay');
let gif = document.getElementById('gif');
let ProgressBar = document.getElementById('ProgressBar');

let songs =[

    {songName: "Inside You" , filePath: "Songs/inside-you-162760.mp3" , coverPath: "Cover/songimg2_insideyou.webp"},
    {songName: "Deep Future Garage" , filePath: "Songs/deep-future-garage-royalty-free-music-163081.mp3" , coverPath: "Cover/songimg1_deepfuturegarage.jpg"},
    {songName: "Good Night" , filePath: "Songs/good-night-160166.mp3" , coverPath: "Cover/songimg3_goodnight.webp"},
    {songName: "Unlock Me" , filePath: "Songs/unlock-me-149058.mp3" , coverPath: "Cover/songimg4_unlockme.webp"},
    {songName: "Inside You" , filePath: "Songs/inside-you-162760.mp3" , coverPath: "Cover/songimg2_insideyou.webp"},
    {songName: "Inside You" , filePath: "Songs/inside-you-162760.mp3" , coverPath: "Cover/songimg2_insideyou.webp"},
    {songName: "Inside You" , filePath: "Songs/inside-you-162760.mp3" , coverPath: "Cover/songimg2_insideyou.webp"}
]

//audioElement.play();

//handling play- pause click

masterPlay.addEventListener('click' , ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add( 'fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})

// event listening

audioElement.addEventListener('timeupdate' ,()  =>{
    console.log('timeupdate');

    // seek bar update

    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    ProgressBar.value = progress;

})

ProgressBar.addEventListener('change' , () => {

    audioElement.currentTime =(( ProgressBar.value*audioElement.duration)/100);
})



