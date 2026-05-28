let listEuler1 = (a, b, l) => l.filter(x => x % a === 0 || x % b === 0).reduce((sum, x) => sum + x, 0);

let listEuler2 = (a, l) => l.filter(x => x % a[0] === 0 || x % a[1] === 0).reduce((sum, x) => sum + x, 0);

let listEuler3 = (a, l) => l.filter(x => a.some(d => x % d === 0)).reduce((sum, x) => sum + x, 0);

let eulerlist = () => {
    const a = 2, b = 3;
    const l = [1, 2, 3, 4, 5, 6, 7, 9, 10, 10, 10];
    alert(`Sum of multiples of ${a} or ${b} in list: ${listEuler1(a, b, l)}`);
};

let euler2Lists = () => {
    const a = [2, 3];
    const l = [1, 2, 3, 4, 5, 6, 7, 9, 10, 10, 10];
    alert(`Sum of multiples of [${a}] in list: ${listEuler2(a, l)}`);
};

let euler2Lists1 = () => {
    const a = [2, 3, 5];
    const l = [1, 2, 3, 4, 5, 6, 7, 9, 10, 10, 10];
    alert(`Sum of multiples of [${a}] in list: ${listEuler3(a, l)}`);
};
