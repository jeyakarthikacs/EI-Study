import { PaymentContext } from './PaymentContext';
import { CreditCardPayment } from './CreditCardPayment';
import { PayPalPayment } from './PaypalPayment';

const creditCardPayment = new CreditCardPayment();
const payPalPayment = new PayPalPayment();

const paymentContext = new PaymentContext(creditCardPayment);
paymentContext.pay(100);

paymentContext.setStrategy(payPalPayment);
paymentContext.pay(200);
