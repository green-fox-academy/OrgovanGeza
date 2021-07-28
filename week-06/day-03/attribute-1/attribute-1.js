//1 Write the image's url to the console.
//2 Replace the image with a picture of your favorite animal.
//3 Make the link point to the Green Fox Academy website.
//4 Disable the second button.
//5 Replace its text with 'Don't click me!'

//1
//BASIC SOLUTION:
console.log(document.getElementsByTagName('img')[0].src)

//SOLUTION WITH window.onload :
/*

window.onload = function(){
    const img = document.getElementsByTagName('img')[0].currentSrc
    console.log(img);
} 

*/

//2
document.getElementsByTagName('img')[0].src = 'https://www.abc.net.au/news/image/10184034-1x1-940x940.jpg'

//3
document.getElementsByTagName('a')[0].href = 'https://www.greenfoxacademy.com/'

//4
document.getElementsByTagName('button')[1].setAttribute('disabled', true)

//5
document.getElementsByTagName('button')[1].innerText = 'Don\'t click me!'