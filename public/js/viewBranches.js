var data = document.querySelector('.info').textContent;
if(!!data) data = JSON.parse(data);
        let markup = `
        <table>
            <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Questions</th>
            </tr>
        `;
        data.forEach((e) => {
            const curr = `<tr>
                            <td>${e.name}</td>
                            <td>${e.circuit?'circuit':'non circuit'}</td>
                            <td><a href="/questions?branch=${e._id}">questions</a></td>
                        </tr>`;
        markup+=curr;
        });
        markup+='</table>';
        document.querySelector('.main-content').innerHTML = markup;