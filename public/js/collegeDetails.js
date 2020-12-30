//onload
let data = document.querySelector('.info').textContent;
if(data) data = JSON.parse(data);
console.log(data);
//markup
let markup = ``;
data.collegeBranches.forEach((element,i) => {
    markup = `<div class="${i}">
    <p>Branch Name: ${element.branchid.name}</p>
    <p>Total Placed: ${element.totalPlaced}</p>
    <p>Average Package: ${element.avgPkg}</p>
    <a href="/questions?college=${data.collegeid}&branch=${element.branchid._id}">questions</a>`;
    document.querySelector('.branch-card-wrapper').insertAdjacentHTML('afterbegin',markup);
});
