function totalExpenses(){
    const foodCost = document.getElementById('food');
    const foodCostValue = foodCost.value;
    const rentCost = document.getElementById('rent');
    const rentCostValue = rentCost.value;
    const clothesCost = document.getElementById('clothes');
    const clothesCostValue = clothesCost.value;
    
    const totalExpenses = parseFloat(foodCostValue) + parseFloat(rentCostValue) + parseFloat(clothesCostValue) ;
    
    return totalExpenses;
}
function income(){
    const income = document.getElementById('total-income');
    const incomeValue = income.value;
    return incomeValue;
}

function mainBalance(){
    
    const mainBalance = parseFloat(income())-parseFloat(totalExpenses());
    return mainBalance;
}
document.getElementById('button').addEventListener('click',function(){

    const totalExpensesField= document.getElementById('total-expenses');
    
    totalExpensesField.innerText =  totalExpenses();

    // if(totalExpenses()>income()){
    //     return alert("Fuck you")

    // }
    // else{

    // }
   
    const mainBalanceField= document.getElementById('balance');
    mainBalanceField.innerText = mainBalance();
});

  

