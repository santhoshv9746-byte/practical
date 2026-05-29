function processvalue(str) {

    
    let parts = str.split(':');
    let factors = parts[0].split(" ").map(Number);
    let multiples = parts[1].split(" ").map(Number);
    console.log("Factors: ", factors);
    console.log("Multiples: ", multiples);
    let sum = 0;
    for (let i=0; i<multiples.length; i++) {
        for (let j=0; j<factors.length; j++) {
            if (multiples[i] % factors[j] === 0) {
                sum += multiples[i];
                break;
            }
        }
    }
    return sum + " : " + parts[0]+ " : " + parts[1];
}   
console.log(processvalue("3 5:1 2 3 4 5 6 7 8 9"));

function printresult() {
    let input = document.getElementById("factorsinput").value;
    let result = processvalue(input);
    document.getElementById("resultval").textContent = result;
}
