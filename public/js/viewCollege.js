var data = document.querySelector('.info').textContent;
        if(!!data) data = JSON.parse(data);
        let markup = `
        <table>
            <tr>
                <th>Name</th>
                <th>Location</th>
                <th>degree</th>
                <th>contact</th>
                <th>CET codes</th>
                <th>Branch details</th>
                <th>Questions</th>
            </tr>
        `;
        data.forEach((e) => {
            const curr = `<tr>
                            <td>${e.name}</td>
                            <td>${e.location}</td>
                            <td>${e.degree}</td>
                            <td>${e.contact}</td>
                            <td>${e.cetcode}</td>
                            <td><a href="/college/details/${e.cetcode}">details</a></td>
                            <td><a href="/questions?college=${e._id}">questions</a></td>
                        </tr>`;
        markup+=curr;
        });
        markup+='</table>';
        document.querySelector('.main-content').innerHTML = markup;