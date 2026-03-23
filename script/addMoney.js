
document.getElementById('add-money').addEventListener('click', function(event){
    event.preventDefault();
    const amount = getInputValueByID('amount');
    const pin = getInputValueByID('pin');
    const account = document.getElementById('account-number').value;
    const mainBalance = getInnerTextByID('main-balance');

    const selectedBank = document.getElementById('select-bank').value;

    if (account.length === 10) {
        if (pin === 1234) {
            const sum = mainBalance + amount;
            setInnerTextByIDandValue('main-balance', sum);

            const container = document.getElementById('transaction-container');

            const div = document.createElement("div");
            div.classList.add("bg-blue-200");
            div.innerHTML = `
            <h2 class="text-center text-xl font-semibold">Added Money From ${selectedBank}</h2>
            <h3 class="pl-6">${amount} ￥</h3>
            <p class="pl-6">Account Number: ${account}</p>
            `
            container.appendChild(div);
        }
        else {
            console.log('Invalid Pin');
        }
    }
    else {
        console.log('Enter Valid Account Number');
    }
})