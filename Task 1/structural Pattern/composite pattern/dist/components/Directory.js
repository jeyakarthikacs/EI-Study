"use strict";
// src/components/Directory.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Directory = void 0;
class Directory {
    constructor(name) {
        this.name = name;
        this.components = [];
    }
    getName() {
        return this.name;
    }
    getSize() {
        return this.components.reduce((totalSize, component) => totalSize + component.getSize(), 0);
    }
    addComponent(component) {
        this.components.push(component);
    }
    removeComponent(component) {
        this.components = this.components.filter((c) => c !== component);
    }
    display(indentation = "") {
        console.log(`${indentation}Directory: ${this.getName()} (${this.getSize()} KB)`);
        for (const component of this.components) {
            component.display(indentation + "  ");
        }
    }
}
exports.Directory = Directory;
