const loginButton = document.getElementById('btn-login');
const newP = document.createElement('p');
    newP.innerText = 'Invalid Username or password';
    newP.className = 'text-white text-sm'
loginButton.addEventListener('click', function(){
    const loginUsername = document.getElementById('login-username').value;
    const loginPassword = document.getElementById('login-password').value;
    const loginBox = document.getElementById('login-box');
    
    
    if (loginUsername === 'fr25foysal' && loginPassword === '@Foysal') {
        window.location.href = 'https://tailwindcss.com/'
    }
    else{
        loginBox.appendChild(newP)
    }
})