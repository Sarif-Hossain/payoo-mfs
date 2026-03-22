// when user want to logout
const logoutBtn = document.getElementById('logout-btn');

if (logoutBtn){
    logoutBtn.addEventListener('click', function(){
        window.location.href = "./index.html";
    });
}