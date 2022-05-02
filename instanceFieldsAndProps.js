class Person {
  total = 0; //public instance fields
  theme = "light";

  set isDarkMode(value) {
    this.theme = value;
  }
}

var p = new Person();
p.deposit(30);
//console.log(p.asDollars )
//console.log(p.showAsDollar() )
p.isDarkMode = "dark";
console.log(p);
