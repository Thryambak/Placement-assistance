//onload
const query = window.location.href.split('?q=')[1];
document.querySelector('#id').value = localStorage.getItem('id');
document.querySelector('#token').value = localStorage.getItem('token');
document.querySelector('.id').value = localStorage.getItem('id');
document.querySelector('.token').value = localStorage.getItem('token');
console.log(document.querySelector('#id').value);

const hide = {
    college: ['.add-branch-admin'],
    admin: ['.add-branch-college']
}


//hiding
hide[query].forEach(element => {
    console.log(element);
    document.querySelector(element).style.display = 'none';
});

//request data
if(query==='college') {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", '/branches/data', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        id: localStorage.getItem('id'),
        token: localStorage.getItem('token')
    }));
    xhr.onload = () => {
        const postData = JSON.parse(xhr.responseText);
        addOptions(postData);
    }
}

const addOptions = (data) => {
    let markup = ``;
    data.forEach(element => {
        markup += `<option value="${element._id}" name="branchid">${element.name}</option>`;
    });
    document.querySelector('#branches').insertAdjacentHTML('beforeend', markup);
}
