let parse = (i) => {
    const o = parseInt(i);
    if (isNaN(o)) throw("NaN");
    return o;
};

let listEuler3 = (a, l) => l.filter(x => a.some(d => x % d === 0)).reduce((sum, x) => sum + x, 0);

// Version 1: prepend "corrupt" on any error
let parseAndSolveCorrupt = (input) => {
    try {
        const [factorsPart, multiplesPart] = input.split(':').map(s => s.trim());
        if (multiplesPart === undefined) throw("No colon separator found");
        const factors  = factorsPart.split(' ').map(parse);
        const multiples = multiplesPart.split(' ').map(parse);
        const result = listEuler3(factors, multiples);
        return `${result} : ${factorsPart} : ${multiplesPart}`;
    } catch {
        return `corrupt : ${input}`;
    }
};

// Version 2: skip corrupt values and still resolve, or "corrupt" if unresolvable
let parseAndSolveFix = (input) => {
    const parts = input.split(':').map(s => s.trim());
    if (parts.length < 2) return `corrupt : ${input}`;        // no colon — unresolvable

    const [factorsPart, multiplesPart] = parts;
    const factors   = factorsPart.split(' ').map(parse).filter(x => !isNaN(x));
    // wrap individually so bad values are filtered rather than throwing
    const safeMap = (str) => str.split(' ').flatMap(i => { try { return [parse(i)]; } catch { return []; } });
    const multiples = safeMap(multiplesPart);
    const fFactors  = safeMap(factorsPart);

    if (fFactors.length === 0) return `corrupt : ${input}`;   // no valid factors — unresolvable

    const result = listEuler3(fFactors, multiples);
    return `${result} : ${factorsPart} : ${multiplesPart}`;
};


function checkCorrupt() {
    let input = document.getElementById('corruptInput').value;
    let result = processvalue(input);
    document.getElementById('corruptResult').textContent = result;
}
