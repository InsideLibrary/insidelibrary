window.onload = function() {
    const numberElement = document.getElementById('number');
    let currentNumber = 0;
    const duration = 3000; // 3 seconds
    const targetNumber = 15;
    const interval = duration / targetNumber; // Time between each increment

    function incrementNumber() {
        currentNumber++;
        numberElement.textContent = currentNumber + "+";
        if (currentNumber < targetNumber) {
            setTimeout(incrementNumber, interval);
        }
    }

    incrementNumber();
}