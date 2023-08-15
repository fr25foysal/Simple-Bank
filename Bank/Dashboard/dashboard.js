

const depositButton = document.querySelector('#btn-deposit');
const withdrawButton = document.querySelector('#btn-withdraw');

depositButton.addEventListener("click", function(event){

  
    let totalDepositString = document.querySelector('#total-deposit');
    let totalBalanceString = document.querySelector('#total-balance');

    let totalDeposit =parseFloat(totalDepositString.innerText) ;
    let totalBalance =parseFloat(totalBalanceString.innerText) ;

    const depositAmountString = document.querySelector('#deposit-input');
    const depositAmount = parseFloat(depositAmountString.value);
    
    depositAmountString.value = '';

    if (depositAmount < 0 || isNaN(depositAmount) ) {
        alert('Please enter a valid amount');
        return;
        
    }
    
    totalDeposit += depositAmount;
    totalBalance += depositAmount;
    totalDepositString.innerText = totalDeposit;
    totalBalanceString.innerText = totalBalance;

    
    
    
})

withdrawButton.addEventListener('click', function(){
    const totalWithdrawString = document.querySelector('#total-withdraw');
    let totalWithdraw =parseFloat(totalWithdrawString.innerText);
    const withdrawAmountString = document.querySelector('#withdraw-input');
    const withdrawAmount = parseFloat(withdrawAmountString.value);

    let totalBalanceString = document.querySelector('#total-balance');
    let totalBalance =parseFloat(totalBalanceString.innerText) ;
    
    withdrawAmountString.value = '';

    if (withdrawAmount < 0 || isNaN(withdrawAmount) ) {
        alert('Please enter a valid amount');
        return; 
    }

    if (withdrawAmount > totalBalance) {
        alert("You don't have enough money to withdraw");
        return;
    
    }
    totalWithdraw += withdrawAmount;
    totalBalance -= withdrawAmount;
    totalBalanceString.innerText = totalBalance;
    totalWithdrawString.innerText = totalWithdraw;

    

})