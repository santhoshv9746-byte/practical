
function checkBaggage() {
    const weight = parseInt(document.getElementById('weightInput').value);
    if (weight > 15) {
        alert("Overweight baggage!");
    } else {
        alert("Baggage is fine.");
    }
}
