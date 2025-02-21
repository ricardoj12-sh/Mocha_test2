export default class BankAccount {
  constructor(initialBalance = 0) {
    this.balance = initialBalance;
  }

  deposit(amount) {
    if (amount <= 0) {
      throw new Error("El monto debe ser mayor a 0");
    }
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount <= 0) {
      throw new Error("El monto debe ser mayor a 0");
    }
    if (amount > this.balance) {
      throw new Error("Fondos insuficientes");
    }
    this.balance -= amount;
  }

  getBalance() {
    return this.balance;
  }
}