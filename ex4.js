// Reuse listEuler3 — the most general form
let listEuler3 = (a, l) => l.filter(x => a.some(d => x % d === 0)).reduce((sum, x) => sum + x, 0);

let parseAndSolve = (input) => {
    const [factorsPart, multiplesPart] = input.split(':').map(s => s.trim());
    const factors = factorsPart.split(' ').map(Number);
    const multiples = multiplesPart.split(' ').map(Number);
    const result = listEuler3(factors, multiples);
    return `${result} : ${factorsPart} : ${multiplesPart}`;
};
