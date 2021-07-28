// 1)  Append every paragraph with the last one's content.
// 2)  Do the same again, but you should keep the cat strong.


//1
let ptags = document.querySelectorAll('p')

for (let i = 0; i < ptags.length - 1; i++) {
    ptags[i] = ptags[i].append(" " + ptags[3].innerText)
}

/*
//2
let ptags2 = document.querySelectorAll('p')

for (let i = 0; i < ptags2.length - 1; i++) {
    ptags2[i].innerHTML += " " + ptags2[3].innerHTML
}
*/