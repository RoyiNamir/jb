console.clear()

function Bank (){
  var  total =0;
  this.deposit   = function (amount){ total +=amount;}
  this.showTotal = function (){return total};
  
  }
let bank = new Bank();
bank.deposit(50);
console.log(bank)
console.log(bank.showTotal())