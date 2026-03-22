// get the button with id
document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();
    const accountNumber = document.getElementById('account-number').value;
    const password = document.getElementById('pin').value;
    const convertedPassword = parseInt(password);
    if (accountNumber.length === 13){
        if(convertedPassword == 12345678){
            window.location.href = "./main.html"
        }
        else{
            alert('invalid password');
        }
    }
    else{
        alert('invalid id');
    }
})

