'use strict';

const aliasForm = document.getElementById('alias-form');

aliasForm.addEventListener('submit', e => {
    e.preventDefault();
    const url = aliasForm.elements.url.value;
    const alias = aliasForm.elements.alias.value;

    const aliasBody = {
        url,
        alias
    }


    const requestOps = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(aliasBody),
    }

    let status;
    const alertDiv = document.getElementById('alert-container');

    fetch('http://localhost:3000/api/links', requestOps)
        .then(result => {
            console.log(result);
            status = result.status;
            if (status === 200) {
                return result.json()
            } else {
                alertDiv.innerText = 'Your alias is already in use!';
                alertDiv.style.color = 'red';
                return {}
            }
        })
        .then(resultObj => {
            if (status === 200) {
                alertDiv.innerHTML = `Your URL is aliased to <b> ${alias} </b> and your secret code is ${resultObj.secretCode}.`
                aliasForm.elements.alias.value = '';
                aliasForm.elements.url.value = '';
                alertDiv.style.color = 'black';
            }
            console.log(resultObj);
        })
})