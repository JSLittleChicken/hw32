function makeTable(rows, columns) {
    const totalCells = rows * columns;
    let table = document.createElement('table');
    for (let i = 1; i <= totalCells; i++) {
        if (i == 1 || (i - 1) % columns == 0) {
            let row = document.createElement('tr');
            table.appendChild(row);
        }
        let cell = document.createElement('td');
        cell.innerText = i;
        let rows = table.getElementsByTagName('tr');
        let lastRow = rows[rows.length - 1];
        lastRow.appendChild(cell);
    }
    document.getElementById('table-container').appendChild(table);
}

makeTable(10, 10);