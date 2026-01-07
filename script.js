document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('sortForm');
    const clearBtn = document.getElementById('clearBtn');
    const resultArea = document.getElementById('output');
    const resultValue = document.getElementById('resultValue');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        sortNumbers();
    });

    clearBtn.addEventListener('click', clearForm);

    function sortNumbers() {
        const num1 = parseFloat(document.getElementById('num1').value);
        const num2 = parseFloat(document.getElementById('num2').value);
        const num3 = parseFloat(document.getElementById('num3').value);
        const sortOrder = document.getElementById('opt').value;

        // Validation: Check if inputs are numbers
        if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
            alert("Please enter valid numbers in all fields.");
            return;
        }

        let numbers = [num1, num2, num3];

        if (sortOrder === 'asc') {
            numbers.sort((a, b) => a - b);
        } else {
            numbers.sort((a, b) => b - a);
        }

        displayResult(numbers);
    }

    function displayResult(sortedNumbers) {
        resultValue.textContent = sortedNumbers.join(', ');
        resultArea.classList.remove('hidden');
    }

    function clearForm() {
        document.getElementById('num1').value = '';
        document.getElementById('num2').value = '';
        document.getElementById('num3').value = '';
        resultArea.classList.add('hidden');
        resultValue.textContent = '';
        // Optional: focus back to first input
        document.getElementById('num1').focus();
    }
});