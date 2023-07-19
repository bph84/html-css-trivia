
function test_duplicateAndTemplate() {
    const input = document.createElement('div');
    //const expected = document.createElement('div');

    input.innerHTML = '<p data-tmpl-attr="id--ordinal-no" id="1"> This is the <span data-tmpl="cardinal-no"> first </span> paragraph</p>';

    
    expectedInnerHTML = [
        '<p id="1"> This is the <span> first </span> paragraph</p>',
        '<p id="2"> This is the <span> second </span> paragraph</p>',
        '<p id="3"> This is the <span> third </span> paragraph</p>'
    ];


    const data = [ 
                   {'cardinal-no': ' second ', 'ordinal-no': '2'}, 
                   {'cardinal-no': ' third ',  'ordinal-no': '3'}
                 ];

    const output = duplicateAndTemplate(input, data);


    console.log(output[1].innerHTML);

    if (stringsEqualIgnoreWhitespace(output[1].innerHTML, expectedInnerHTML[2])) {
        console.log('PASS'); // could console.log - conditional, but this is easier for breakpoints. 
    } else {
        console.log('FAIL');
    }

    // TODO - check the first element. 


    

}

function stringsEqualIgnoreWhitespace(a, b) {
    return a.replace(/\s+/g, '') == b.replace(/\s+/g, '');
}

setTimeout(test_duplicateAndTemplate, 100);