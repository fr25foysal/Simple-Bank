const loginButton = document.getElementById('btn-login');
const newP = document.createElement('p');
    newP.innerText = 'Invalid Username or password';
    newP.className = 'text-white text-sm'
loginButton.addEventListener('click', function(){
    const loginUsername = document.getElementById('login-username');
    const loginPassword = document.getElementById('login-password');
    const loginBox = document.getElementById('login-box');
    
    
    if (loginUsername.value === 'khulJa' && loginPassword.value === 'simSim') {
        window.location.assign('dashboard.html')
    }
    else{
        loginBox.appendChild(newP)
    }
    loginUsername.value = '';
    loginPassword.value = '';
})