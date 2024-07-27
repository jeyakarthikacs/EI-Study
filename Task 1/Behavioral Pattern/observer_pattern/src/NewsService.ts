import { Subject } from './Subject';
import { Observer } from './Observer';

export class NewsService implements Subject {
    private observers: Observer[] = [];
    private message: string = '';

    attach(observer: Observer): void {
        const isExist = this.observers.includes(observer);
        if (!isExist) {
            this.observers.push(observer);
        }
    }

    detach(observer: Observer): void {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex !== -1) {
            this.observers.splice(observerIndex, 1);
        }
    }

    notify(): void {
        for (const observer of this.observers) {
            observer.update(this.message);
        }
    }

    newMessage(message: string): void {
        this.message = message;
        this.notify();
    }
}
