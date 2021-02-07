'use strict';
 //присвоение значений переменным
 
 let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
 };
 
 
 let money; 
 let start = function() {
    do {
        money = prompt('Ваш месячный доход?');
    } while (!isNumber(money));
 } ; 
   start();

    let income = 'фриланс',
     addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
     deposit = confirm('Есть ли у вас депозит в банке?');
  
 
 let showTypeOf = function(data) {
     console.log(typeof(data));
 };
 showTypeOf(money);
 showTypeOf(income);
 showTypeOf(deposit);

 let expenses = [];

 let mission = 200000;

 //Все обязательные расходы
 let  getExpensesMonth = function() {
   let sum = 0;
   
   
    for (let i = 0; i < 2; i++) {
        expenses[i] = prompt('Введите обязательную статью расходов?');
        sum += +prompt('Во сколько это обойдется?');
        while (!isNumber(sum)) {
        sum= prompt('Во сколько это обойдется?');
        

        }         
        console.log(expenses);
           
      }
      return sum; 
};


  let expensesAmount = getExpensesMonth(); 

  console.log(expensesAmount);

 //Накопления за месяц
 let  getAccumulatedMonth = function() {
     return money-expensesAmount;
 };
 console.log(getAccumulatedMonth());


 let accumulatedMonth = getAccumulatedMonth();
 
 //Период за который будет достигнута цель
 let  getTargetMonth = function() {
     return mission / accumulatedMonth;
 };
 console.log(Math.floor(getTargetMonth()));
    if (getTargetMonth() > 0) {
        console.log("Цель будет достигнута");
    } else {
        console.log("Цель не будет достигнута");
    }

//Дневной бюджет
 let budgetDay = function(){
    return Math.floor(accumulatedMonth/30);
 };
 console.log(budgetDay());
 

 let getStatusIncome = function(a){
if (budgetDay() > 1200){
    return ('У вас высокий уровень дохода');
} else if (budgetDay() >= 600 && budgetDay() <= 1200) {
   return ('У вас средний уровень дохода');
} else if (budgetDay() >= 0 && budgetDay() < 600) {
    return('К сожалению ваш уровень дохода ниже среднего');
} else {
    return ('Что то пошло не так');
}
 };
 console.log(getStatusIncome());