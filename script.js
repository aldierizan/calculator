function calculateChange() {
    var beforeAmount = parseFloat(document.getElementById('beforeAmount').value);
    var afterAmount = parseFloat(document.getElementById('afterAmount').value);

    if (beforeAmount === 0) {
        document.getElementById('result').innerText = 'Undefined (cannot divide by zero)';
        return;
    }

    var change = ((afterAmount / beforeAmount) - 1) * 100;
    document.getElementById('result').innerText = `Percentage Change: ${change.toFixed(2)}%`;
}
