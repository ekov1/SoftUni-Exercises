function multiplication([n]) {
    let html="",
        i, j;
   
    html += '<table border="1">\n';

    html += '<tr>\n';
    html += '<th>x</th>\n';
    for (i = 1; i <= n; i += 1) {
        html += `<th>${i}</th>\n`;
    }
    html += '</tr>\n';

    for (i = 1; i <= n; i += 1) {
        html += '<tr>\n';
        html += `<th>${i}</th>\n`;
        for (j = 1; j <= n; j += 1) {
            html += `<td>${j * i}</td>\n`;
        }
        html += '</tr>\n';
    }

    html += '</table>';

    let div = document.getElementById("tableHolder");
    let p = document.createElement("p");
    p.innerHTML = html;
    div.appendChild(p);
}