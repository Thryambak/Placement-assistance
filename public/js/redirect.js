//onload
let data = document.querySelector('.info').textContent;
if(data) data = JSON.parse(data);

//saving localStorage
if(data.localSave) {
    localStorage.setItem('profile', data.localSave.profile);
    localStorage.setItem('id', data.localSave.id);
    localStorage.setItem('token', data.localSave.token);
}

//redirect
setTimeout(() => {
    window.location.href = data.redirectURL;
}, 1000);
