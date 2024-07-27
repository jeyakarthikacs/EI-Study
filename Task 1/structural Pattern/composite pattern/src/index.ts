// src/index.ts

import { File } from "./components/File";
import { Directory } from "./components/Directory";

function main() {
  // Create files
  const file1 = new File("File1.txt", 100);
  const file2 = new File("File2.txt", 150);
  const file3 = new File("File3.txt", 200);

  // Create directories
  const dir1 = new Directory("Directory1");
  const dir2 = new Directory("Directory2");
  const dir3 = new Directory("Directory3");

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
