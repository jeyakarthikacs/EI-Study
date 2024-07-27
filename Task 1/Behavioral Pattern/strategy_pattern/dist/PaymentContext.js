"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentContext = void 0;
class PaymentContext {
    constructor(strategy) {
        this.strategy = strategy;
    }
    setStrategy(strategy) {
        this.strategy = strategy;
    }
    pay(amount) {
        this.strategy.pay(amount);
    }
}
exports.PaymentContext = PaymentContext;
