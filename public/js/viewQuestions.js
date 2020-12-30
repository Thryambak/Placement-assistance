var data = document.querySelector('.info').textContent;
if(!!data) data = JSON.parse(data);
console.log(data);

//call to all three
var xhr = new XMLHttpRequest();
xhr.open("GET", '/college/id_name', true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = () => {
    const postData = JSON.parse(xhr.responseText);
    console.log('heloo', postData);
}



data.forEach(element => {
    const markup = `<div style="border: 1px solid black;">`+
    (element.companyid.name?`<p>Company: ${element.companyid.name}</p>`:``)+
    (element.collegeid.name?`<p>College: ${element.collegeid.name}</p>`:``)+
    (element.branchid.name?`<p>Branch: ${element.branchid.name}</p>`:``)+
    `<p>Round: ${element.round} </p>
    <p>Topic: ${element.topic} </p>
    <p>Description: ${element.description} </p>
    </div>
    `;
    document.querySelector('.main-content').insertAdjacentHTML('beforeend', markup);
});