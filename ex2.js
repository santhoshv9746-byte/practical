// Project Euler Problem 1: Sum of multiples of 3 or 5 below 1000
let euler1 = () => {
    let sum = 0;
    for (let i = 1; i < 1000; i++) {
        if (i % 3 === 0 || i % 5 === 0) sum += i;
    }
    alert('Sum: ${sum}');
};

// Sum of multiples of a or b less than n
let eulerCustom = () => {
    let a = parseInt(prompt('Enter a:'));
    let b = parseInt(prompt('Enter b:'));
    let n = parseInt(prompt('Enter n:'));
    
    let sum = 0;
    for (let i = 1; i < n; i++) {
        if (i % a === 0 || i % b === 0) sum += i;
    }
    alert('Sum: ${sum}');
};
