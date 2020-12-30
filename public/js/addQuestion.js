var data = document.querySelector('.info').textContent;
if(!!data) data = JSON.parse(data);

console.log(data);

//making dropdow branch options
let markup = ``;
data.branches.forEach(element => {
    const curr = `<option value=${element.branchid._id}>${element.branchid.name}</option>`;
    markup += curr;
});

document.querySelector('.branches').insertAdjacentHTML('beforeend',markup);

//adding auth type to form
document.querySelector('form').action += ('?auth='+localStorage.getItem('profile'));

//adding college and company ids
document.querySelector('#collegeid').value = data.college;
document.querySelector('#companyid').value = data.company;
document.querySelector('#token').value = localStorage.getItem('token');

//add another question
let i=1;
const markupAddAnother = `<input type="text" name="topic${i}" placeholder="topic" required>
<input type="text" name="round${i}" placeholder="round" required><br>
<textarea rows = "5" cols = "60" name = "description${i++}" placeholder="description" required></textarea><br>`;

document.querySelector('.add-another').addEventListener('click', () => {
    console.log('fire');
    document.querySelector('.add-another').insertAdjacentHTML('beforebegin',markupAddAnother);
});


