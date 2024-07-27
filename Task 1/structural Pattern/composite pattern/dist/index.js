"use strict";
// src/index.ts
Object.defineProperty(exports, "__esModule", { value: true });
const File_1 = require("./components/File");
const Directory_1 = require("./components/Directory");
function main() {
    // Create files
    const file1 = new File_1.File("File1.txt", 100);
    const file2 = new File_1.File("File2.txt", 150);
    const file3 = new File_1.File("File3.txt", 200);
    // Create directories
    const dir1 = new Directory_1.Directory("Directory1");
    const dir2 = new Directory_1.Directory("Directory2");
    const dir3 = new Directory_1.Directory("Directory3");
    // Add files to directories
    dir1.addComponent(file1);
    dir1.addComponent(file2);
    dir2.addComponent(file3);
    // Create a composite directory
    dir3.addComponent(dir1);
    dir3.addComponent(dir2);
    // Display the structure
    dir3.display();
}
main();
