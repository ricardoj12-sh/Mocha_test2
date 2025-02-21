import { expect } from "chai";
import BankAccount from "../src/bankAccount.js";

describe("Pruebas de la clase BankAccount", () => {
  let account;

  beforeEach(() => {
    account = new BankAccount(100); 
  });

  it("Debe permitir depositar dinero y actualizar el saldo", () => {
    account.deposit(50);
    expect(account.getBalance()).to.equal(150);
  });

  it("Debe lanzar un error si el depósito es negativo o cero", () => {
    expect(() => account.deposit(0)).to.throw("El monto debe ser mayor a 0");
    expect(() => account.deposit(-20)).to.throw("El monto debe ser mayor a 0");
  });

  it("Debe permitir retirar dinero y actualizar el saldo", () => {
    account.withdraw(30);
    expect(account.getBalance()).to.equal(70);
  });

  it("Debe lanzar un error si el retiro es mayor al saldo", () => {
    expect(() => account.withdraw(200)).to.throw("Fondos insuficientes");
  });

  it("Debe lanzar un error si el retiro es negativo o cero", () => {
    expect(() => account.withdraw(0)).to.throw("El monto debe ser mayor a 0");
    expect(() => account.withdraw(-20)).to.throw("El monto debe ser mayor a 0");
  });

  it("Debe devolver el saldo actual correctamente", () => {
    expect(account.getBalance()).to.equal(100);
  });
});