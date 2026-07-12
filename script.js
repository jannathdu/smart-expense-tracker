const form = document.getElementById('expense-form');
const incomeDisplay = document.getElementById('income');
const descriptionInput= document.getElementById('description');
const amountInput = document.getElementById('income-input');
const type= document.getElementById('type');
const transactionList = document.getElementById('transaction-list');

let income = 0;
form.addEventListener('submit', function(e) {
    alert("Button clicked");
    e.preventDefault();
    const description = descriptionInput.value;
    const amount = parseFloat(amountInput.value);
    const transactionType = type.value;

    if (description && !isNaN(amount) && transactionType) {
        if (transactionType === 'income') {
            income += amount;
            incomeDisplay.textContent = "BDT" + income.toFixed(2);
        }

        const li = document.createElement('li');
        li.textContent = description +" - BDT " + amount.toFixed(2) ;

        
        transactionList.appendChild(li);

        // Clear the form
        descriptionInput.value = '';
        amountInput.value = '';
        type.value = 'expense';
    }
});