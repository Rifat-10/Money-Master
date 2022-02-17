

function totalExpenses(){
    const foodCost = document.getElementById('food');
    const foodCostValue = foodCost.value;
    if (isNaN(foodCostValue)||foodCostValue<0) {
        return -1;
    }

    const rentCost = document.getElementById('rent');
    const rentCostValue = rentCost.value;
    if (isNaN(rentCostValue)||rentCostValue<0) {
        return -1;
    }

    const clothesCost = document.getElementById('clothes');
    const clothesCostValue = clothesCost.value;
    if (isNaN(clothesCostValue)||clothesCostValue<0) {
        return -1;
    }
    const totalExpenses = parseFloat(foodCostValue) + parseFloat(rentCostValue) + parseFloat(clothesCostValue) ;

    
    
    return totalExpenses;
}
function income(){
    const income = document.getElementById('total-income');
    let incomeValue = income.value;
    if (isNaN(incomeValue)||incomeValue<0) {
        incomeValue=-1;
    }
    return incomeValue;
}

function mainBalance(){
    
    const mainBalance = parseFloat(income())-parseFloat(totalExpenses());
    return mainBalance;
}
// const error = errorChecking(incomeValue, foodCostValue, rentCostValue, clothesCostValue);

// function errorChecking() {
//      for (const value of arguments) {
//           if (isNaN(value) == true) {
//               return true; 
//             }
//              else if (value < 0) {
//                   return true;
//                  } 
//                  else {
//                       return false;
//                      }
//                      }}


document.getElementById('button').addEventListener('click',function(){

    

    const totalExpensesField = document.getElementById('total-expenses');

    let expens= totalExpenses();
    let inco= income();
    console.log(inco);
    if(inco<0){
        const erroR = document.getElementById('error');
        erroR.style.display="block";
    }

    if(parseFloat(expens)> parseFloat(inco)){
        console.log(expens, inco);
        const erroR = document.getElementById('error');
        erroR.style.display="block";

    }
    else{
        
    
    totalExpensesField.innerText =  totalExpenses();
        
    const mainBalanceField= document.getElementById('balance');
    mainBalanceField.innerText = mainBalance();
       
    }
   
    
});


document.getElementById('buttonSave').addEventListener('click',function(){

    const save = document.getElementById('save');
    const saveValue= save.value;
    const saveAmountField = document.getElementById('saving-amount');
    const saveAmount = parseFloat(income())*parseFloat(saveValue);
    const saveAmountValue= parseFloat(saveAmount)/100;
    

    const mainB = mainBalance();

    if(parseFloat(saveAmountValue)> parseFloat(mainB)){
        
        const erroRr = document.getElementById('errorrr');
        erroRr.style.display="block";

    }

    else{
        saveAmountField.innerText = saveAmountValue;
    const remainingBalanceField = document.getElementById('remaining-balance');
    //const remainingBalanceValue =remainingBalanceField.value;
    const remainingBalance = parseFloat(mainBalance())- parseFloat(saveAmountValue);
    remainingBalanceField.innerText =remainingBalance;

    }






});