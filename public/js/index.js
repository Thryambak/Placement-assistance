// var data = document.querySelector('.info').textContent;
// if(!!data) data = JSON.parse(data);
// document.querySelector('.logout_button').style.display = 'none';
// if(data.login) {
//     localStorage.setItem('id', data.id);
//     localStorage.setItem('token', data.token);
//     window.location.href = '/';
// }

// if(localStorage.getItem('id')&&localStorage.getItem('token')) {
//     console.log('getting info..');
//     document.querySelector('.collegeLoginLink').style.display = 'none';
//     var xhr = new XMLHttpRequest();
//     xhr.open("POST", '/college/profile', true);
//     xhr.setRequestHeader('Content-Type', 'application/json');
//     xhr.send(JSON.stringify({
//         id: localStorage.getItem('id'),
//         token: localStorage.getItem('token')
//     }));
//     xhr.onload = () => {
//         const postData = JSON.parse(xhr.responseText);
//         document.querySelector('.loginInfo').textContent = `logged in a ${postData.name}`;
//         document.querySelector('.logout_button').style.display = 'block';
//     }
// }

// document.querySelector('.logout_button').addEventListener('click', () => {
//     localStorage.removeItem('id');
//     localStorage.removeItem('token');
//     window.location.href = window.location.href;
// })

// console.log(data);


//hide classes
const hide = {
    public: ['.logout-btn', '.add-college', '.add-branch-admin', '.add-branch-college', '.add-question'],
    college: ['.login-links', '.add-college', '.add-branch-admin'],
    admin: ['.login-links', '.add-branch-college']
}

//onload
const profile = localStorage.getItem('profile');
if(!profile) {
    localStorage.setItem('profile','public');
}

//hiding
hide[profile].forEach(element => {
    console.log(element);
    document.querySelector(element).style.display = 'none';
});

//logout function
document.querySelector('.logout-btn').addEventListener('click', ()=>{
    var xhr = new XMLHttpRequest();
    xhr.open("POST", '/logout/admin', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        id: localStorage.getItem('id'),
        token: localStorage.getItem('token')
    }));
    localStorage.removeItem('id');
    localStorage.removeItem('token');
    localStorage.setItem('profile','public');
    window.location.href = window.location.href;
});

//adding profile to add question
document.querySelector('.add-question').href += ('?q='+localStorage.getItem('profile'))+('&id='+localStorage.getItem('id'));
