//onload
document.querySelector('#id').value = localStorage.getItem('id');
document.querySelector('#token').value = localStorage.getItem('token');
console.log(document.querySelector('#id').value);