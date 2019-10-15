let money, time;
function start(){
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt('Введите дату в формате YYYY-MM-DD', ''); 
    
    while(isNaN(money) || money == "" || money == null ) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}
start();

    let appDate = {
        budget: money,
        expenses: {},
        optionalExpenses: {},
        income: [],
        timeDate: time,
        savings: true
    };
    
      function chooseExpenses() {
        for (let i = 0; i < 2; i++){
            let a = prompt("Введите обязателную статю расходов в этом месяце", ''),
                b = prompt("Во сколько обойдется", '');
    
            if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null
            && a != '' && b != '' && a.length < 50) {
              console.log("done");
                appDate.expenses[a] = b;
            } 
         };
      }       
      chooseExpenses();
   

   appDate.moneyPerDay = (appDate.budget / 30).toFixed();
    alert("Ужедневний бюджет: " + appDate.moneyPerDay);

    if(appDate.moneyPerDay < 90){
 console.log("Минимальний уровень достатка");
 } else if (appDate.moneyPerDay > 90 && appDate.moneyPerDay < 2000) {
    console.log("Середний уровень достатка"); 
 } else if (appDate.moneyPerDay > 2000) {
    console.log("Високий уровень достатка");
 } else {
    console.log("Призошла ошибка")
 }


function checkSavings() {
    if (appDate.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
        percent = +prompt("Под какой процент?");
        appDate.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appDate.monthIncome);
    }
}
checkSavings();