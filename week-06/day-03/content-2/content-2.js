// 1) replace the list items' content with items from this list:
// ['apple', 'banana', 'cat', 'dog']
// 2) change the <ul> element's background color to 'limegreen'
//   - use css class to change the color instead of the style property


//1
const listToUse = ['apple', 'banana', 'cat', 'dog']
const docuList = document.getElementsByTagName('li')

for (let i = 0; i < docuList.length; i++) {
    docuList[i].innerText = listToUse[i]
}

//2
document.getElementsByTagName('ul')[0].classList.add('list')