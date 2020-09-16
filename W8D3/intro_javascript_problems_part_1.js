function mysteryScoping1() {
    var x = 'out of block';
    if (true) {
        var x = 'in block';
        console.log(x);
    }
    console.log(x);
}

function mysteryScoping2() {
    const x = 'out of block';
    if (true) {
        const x = 'in block';
        console.log(x);
    }
    console.log(x);
} 

function mysteryScoping3() {
    const x = 'out of block';
    if (true) {
        var x = 'in block';
        console.log(x);
    }
    console.log(x);
}

function mysteryScoping4() {
    let x = 'out of block';
    if (true) {
        let x = 'in block';
        console.log(x);
    }
    console.log(x);
}

function mysteryScoping5() {
    let x = 'out of block';
    if (true) {
        let x = 'in block';
        console.log(x);
    }
    let x = 'out of block again';
    console.log(x);
}

mysteryScoping1(); // in block, in block
mysteryScoping2(); // in block, out of block
//mysteryScoping3(); // SyntaxError: Identifier 'x' has already been declared
mysteryScoping4(); // in block, out of block
//mysteryScoping5(); // SyntaxError: Identifier 'x' has already been declared

function madLib(adj,verb,noun) {
    console.log(`We shall ${adj.toUpperCase()} the ${verb.toUpperCase()} ${noun.toUpperCase()}`);
}

madLib('make','best','guac');

function isSubstring(string, substring) {
}

