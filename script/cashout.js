document.getElementById('cashout-btn').addEventListener('click', function(event){
    event.preventDefault();
    const accountNumber = document.getElementById('account-number').value;

    const amount = getInputValueByID("cashout-amount");
    const pinNumber = getInputValueByID('cashout-pin');
    const mainBalance = getInnerTextByID('main-balance');

    if (accountNumber.length === 10)
        if (pinNumber === 1234) {
            const sum = mainBalance - amount;
            setInnerTextByIDandValue("main-balance", sum);

            const container = document.getElementById('transaction-container');

            // const p = document.createElement("p");
            // p.innerText = `
            // Cashout ${amount} from this ${accountNumber} account
            // `
            // container.appendChild(p);
            const div = document.createElement("div");
            div.classList.add("bg-red-200");
            div.innerHTML = `
            <h2 class="text-center text-xl font-semibold">Cashout Amount</h2>
            <h3 class="pl-6">${amount} ￥</h3>
            <p class="pl-6">Account Number: ${accountNumber}</p>
            `
            container.appendChild(div);
        }
        else{
            alert("Invalid Pin");
        }
    else {
        alert("Enter valid Account Number");
    }
})