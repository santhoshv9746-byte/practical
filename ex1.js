let check = () => {
    const weight = parseInt(document.getElementById('weight').value);
    
    if (weight > 15) {
        alert(`Baggage is overweight! Current weight: ${weight}kg (limit: 15kg). Please remove ${weight - 15}kg.`);
        document.getElementById('removed').style = 'display:block;';
        document.getElementById('remB').style = 'display:block;';
    } else {
        alert(`Baggage weight is fine: ${weight}kg. You're good to go!`);
        document.getElementById('removed').style = 'display:none;';
        document.getElementById('remB').style = 'display:none;';
    }
};

let remove = () => {
    const currentWeight = parseInt(document.getElementById('weight').value);
    const removeAmount = parseInt(document.getElementById('removed').value);

    if (isNaN(removeAmount) || removeAmount <= 0) {
        alert('Please enter a valid amount to remove.');
        return;
    }

    const newWeight = currentWeight - removeAmount;

    if (newWeight < 0) {
        alert(`You can't remove more than the current weight (${currentWeight}kg).`);
        return;
    }

    document.getElementById('weight').value = newWeight;

    if (newWeight <= 15) {
        alert(`Removed ${removeAmount}kg. New weight: ${newWeight}kg. You're good to proceed!`);
        document.getElementById('removed').style = 'display:none;';
        document.getElementById('remB').style = 'display:none;';
    } else {
        alert(`Removed ${removeAmount}kg. New weight: ${newWeight}kg. Still overweight by ${newWeight - 15}kg — please remove more.`);
    }
};
