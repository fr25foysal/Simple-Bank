const loginButton = document.getElementById('btn-login');
const newP = document.createElement('p');
    
    newP.className = 'text-white text-sm'
loginButton.addEventListener('click', function(){
    const loginUsername = document.getElementById('login-username');
    const loginPassword = document.getElementById('login-password');
    const loginBox = document.getElementById('login-box');
    
    
    if (loginUsername.value === 'khulJa' && loginPassword.value === 'simSim') {
        window.location.href = 'dashboard.html';
    }else if(loginUsername.value === '' || loginPassword.value === ''){
        newP.innerText = "Please enter Username and Password";
        loginBox.appendChild(newP)
    }
    else{
        newP.innerText = 'Invalid Username or password';
        loginBox.appendChild(newP)
    }
    loginUsername.value = '';
    loginPassword.value = '';
})