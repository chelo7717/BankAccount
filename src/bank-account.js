//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor() {
    this.total=0;
    this.estado=0;
  }

  open() {
    this.estado=1;
  }

  close() {
    this.estado=0;
  }

  deposit(amount) {
    if(this.estado == 1){
      this.total += amount
    }
    if(this.estado == 0){
      throw new ValueError;
    }
  }

  withdraw(subtract) {
    this.total -= subtract;
  }

  get balance() {
    if(this.estado == 1 ){
      return this.total;
    }
    if(this.estado == 0){
      throw new ValueError;
    }
    
  }
}

export class ValueError extends Error {
  constructor() {
    super("Bank account error");
  }
}
