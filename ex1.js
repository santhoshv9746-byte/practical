function checkBaggage() {
    const weight = parseInt(document.getElementById('weight').value);
    
    if (weight > 15) {
        alert("Baggage is overweight!");
        document.getElementById('removed').style.display = 'block';
        document.getElementById('remB').style.display = 'block';
    } else {
        alert("Baggage is fine. You can proceed!");
    }
}

function removeBaggage() {
    const removed = parseInt(document.getElementById('removed').value);
    const currentWeight = parseInt(document.getElementById('weight').value);
    const newWeight = currentWeight - removed;
    
    document.getElementById('weight').value = newWeight;
    alert("New weight: " + newWeight + " kg");
    
    if (newWeight <= 15) {
        alert("Weight is now OK to proceed!");
        document.getElementById('removed').style.display = 'none';
        document.getElementById('remB').style.display = 'none';
    }
}
