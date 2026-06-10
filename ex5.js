    let parse = (i) => {
        const o = parseInt(i);
        if (isNaN(o)) throw new Error("NaN");
        return o;
    };

    let sumMultiples = (factors, multiples) =>
        multiples.filter(x => factors.some(d => x % d === 0))
                 .reduce((sum, x) => sum + x, 0);

    function checkCorrupt() {
        const input = document.getElementById('corruptInput').value;
        const parts = input.split(':');

        if (parts.length < 2) {
            document.getElementById('corruptResult').textContent = `corrupt : ${input}`;
            return;
        }

        const [factorsPart, multiplesPart] = parts.map(s => s.trim());

        const safeMap = (str) =>
            str.split(' ').flatMap(i => { try { return [parse(i)]; } catch { return []; } });

        const factors   = safeMap(factorsPart);
        const multiples = safeMap(multiplesPart);

        if (factors.length === 0) {
            document.getElementById('corruptResult').textContent = `corrupt : ${input}`;
            return;
        }

        const result = sumMultiples(factors, multiples);
        document.getElementById('corruptResult').textContent = `${result} : ${factorsPart} : ${multiplesPart}`;
    }
