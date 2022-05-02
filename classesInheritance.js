console.clear();

class Mammal {
  isFromEarth = true;
}

class Animal extends Mammal {
  constructor() {
    super();
  }
  isBreath = true;
}

class Cheetah extends Animal {
  constructor(name) {
    super();
    this.name = name;
  }
}

var chichi = new Cheetah("avi");
console.log(chichi);
