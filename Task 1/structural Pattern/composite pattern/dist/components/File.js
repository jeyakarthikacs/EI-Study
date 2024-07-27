"use strict";
// src/components/File.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.File = void 0;
class File {
    constructor(name, size) {
        this.name = name;
        this.size = size;
    }
    getName() {
        return this.name;
    }
    getSize() {
        return this.size;
    }
    display(indentation = "") {
        console.log(`${indentation}File: ${this.getName()} (${this.getSize()} KB)`);
    }
}
exports.File = File;
