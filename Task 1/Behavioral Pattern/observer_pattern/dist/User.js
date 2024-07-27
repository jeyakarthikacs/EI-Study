"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(name) {
        this.name = name;
    }
    update(message) {
        console.log(`${this.name} received message: ${message}`);
    }
}
exports.User = User;
