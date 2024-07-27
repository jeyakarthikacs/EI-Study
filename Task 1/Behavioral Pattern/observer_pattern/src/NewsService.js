export class NewsService {
    constructor() {
        this.observers = [];
        this.message = '';
    }
    attach(observer) {
        const isExist = this.observers.includes(observer);
        if (!isExist) {
            this.observers.push(observer);
        }
    }
    detach(observer) {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex !== -1) {
            this.observers.splice(observerIndex, 1);
        }
    }
    notify() {
        for (const observer of this.observers) {
            observer.update(this.message);
        }
    }
    newMessage(message) {
        this.message = message;
        this.notify();
    }
}
