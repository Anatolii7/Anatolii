let money = prompt("Ваш бюджет на месяц?", ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    let appDate = {
        budget: money,
        expenses: {},
        optionalExpenses: {},
        income: [],
        timeDate: time,
        savings: false
    }
             
    
      let a1 = prompt("Введите обязателную статю расходов в этом месяце", ''),
          a2 = prompt("Во сколько обойдется", ''),
          a3 = prompt("Введите обязателную статю расходов в этом месяце", ''),
          a4 = prompt("Во сколько обойдется", '');


          appDate.expenses.a1 = a2;
          appDate.expenses.a2 = a4;


          alert(appDate.budget / 30);
