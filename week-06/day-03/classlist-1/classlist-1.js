//1 If the fourth p has a 'dolphin' class, replace apple's content with 'pear'
//2 If the first p has an 'apple' class, replace cat's content with 'dog'
//3 Make apple red by adding a .red class
//4 Make balloon less balloon-like (change its shape)

//1
const ps = document.getElementsByTagName('p');
if (ps[3].classList.contains('dolphin')) {
    document.getElementsByClassName('apple')[0].innerText = 'pear'
}

//2
if (ps[0].classList.contains('apple')) {
    document.getElementsByClassName('cat')[0].innerText = 'dog'
}

//3
document.getElementsByClassName('apple')[0].classList.add('red')

//4
window.onload = function () {
    let shape = document.getElementsByTagName('style')[0]
    console.log(shape)
}
