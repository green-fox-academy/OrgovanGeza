let music = document.getElementsByTagName('audio')[0]
let play = document.getElementById('play')
let pause = document.getElementById('pause')

console.log(music);

music.addEventListener('loadstart', e => {
    console.log(e, ' happened');
})

music.addEventListener('play', e => {
    ;
    console.log(e, ' happened');
})

music.addEventListener('ended', e => {
    console.log(e, ' happened');
})

music.addEventListener('progress', e => {
    console.log(e, ' happened');
})

play.addEventListener('click', e => {
    music.play();
})

pause.addEventListener('click', e => {
    music.pause();
})