


function duplicateAndTemplate(templateElement, data) {
    var newElement = templateElement.cloneNode(true);

    newElement.removeAttribute("id");
    newElement.removeAttribute("style");
    newElement.removeAttribute("hidden");
    /*
    newElement.innerHTML = newElement.innerHTML.replace(/{{\s*([^}]+)\s*}}/g, function(match, key) {
        return data[key];
    });*/

    let retrn = [];

    for (const d of data) {
        
        const clone = templateElement.cloneNode(true);

        let templatedElements = clone.querySelectorAll('[data-tmpl]');

        for (const elem of templatedElements) {
            const key = elem.getAttribute('data-tmpl');
            elem.innerHTML = d[key] ?? '';
            elem.removeAttribute('data-tmpl');
        }

        let templatedAttributes = clone.querySelectorAll('[data-tmpl-attr]');

        for (const elem of templatedAttributes) {
            const [attrName, key] = elem.getAttribute('data-tmpl-attr').split('--');
            elem.setAttribute(attrName, d[key]);
            elem.removeAttribute('data-tmpl-attr');
        }

        retrn.push(clone);

    }   


    return retrn;
}


function expandColumnToAllRows(tableBody, columnIndex) {
    
    const rows = tableBody.querySelectorAll('tr:not(:first-child)');

    for (const row of rows) {
        const td = row.querySelectorAll('td')[columnIndex];
        td.parentNode.removeChild(td);
    }

    const columnCell = tableBody.querySelectorAll('tr:first-child td')[columnIndex];
    columnCell.setAttribute('rowspan', rows.length + 1);
    columnCell.innerHTML = '<div class="inACell"> test teste testest estse ts oijsdfoij sodifjoi oisdjfoij sodifjoij oijoij </div>';
    columnCell.classList.add('singleCellColumn');

    columnCell.style.display = 'none';
   // window.setTimeout(() => {
        columnCell.style.display = 'table-cell';
 //   }, 1);

/*
    for (const row of rows) {
        const column = row.querySelectorAll('td')[columnIndex];
        column.innerHTML = columnValues.join(', ');
    }
    */
}


setTimeout(() => {
    expandColumnToAllRows(document.querySelector('tbody'), 2);
}, 200);