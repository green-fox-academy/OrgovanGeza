//   1) Subscibe to keyup events on the global window object
//   2) Console log the event object and peek inside
//   3) Display the last pressed key's code as "Last pressed key code is: __"

'use strict';

window.addEventListener('keyup', (e) => {
console.log(e);
document.getElementsByTagName('h1')[0].innerText = `Last pressed key code is: ${e.code}`
})