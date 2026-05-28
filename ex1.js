<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Baggage Weight Checker</title>
</head>
<body>

    <input type="number" id="weight" placeholder="Enter baggage weight">
    <button onclick="checkWeight()">Check</button>

    <br><br>

    <input type="number" id="removed" placeholder="Remove weight" style="display:none;">
    <button id="remB" onclick="removeWeight()" style="display:none;">Remove</button>

    <script>

var maxWeight = 15;

function checkWeight() {
    var weight = parseFloat(document.getElementById('weight').value);

    if (isNaN(weight) || weight < 0) {
        alert("Please enter a valid weight");
        return;
    }

    if (weight > maxWeight) {
        alert("Overweight baggage!");
        document.getElementById('removed').style.display = 'inline';
        document.getElementById('remB').style.display = 'inline';
    } else {
        alert("Weight is OK");
        document.getElementById('removed').style.display = 'none';
        document.getElementById('remB').style.display = 'none';
    }
}

function removeWeight() {
    var weight = parseFloat(document.getElementById('weight').value);
    var removed = parseFloat(document.getElementById('removed').value);

    if (isNaN(removed) || removed <= 0) {
        alert("Enter a valid weight to remove");
        return;
    }

    var newWeight = weight - removed;

    if (newWeight < 0) {
        newWeight = 0;
    }

    document.getElementById('weight').value = newWeight;
    document.getElementById('removed').value = '';

    if (newWeight <= maxWeight) {
        alert("Now OK to proceed");
        document.getElementById('removed').style.display = 'none';
        document.getElementById('remB').style.display = 'none';
    } else {
        alert("Still overweight");
    }
}
    </script>

</body>
</html>
