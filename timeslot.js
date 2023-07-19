


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
            elem.innerHTML = d[key];
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

