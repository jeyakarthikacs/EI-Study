// src/components/File.ts

import { FileSystemComponent } from "../interfaces/FileSystemComponent";

export class File implements FileSystemComponent {
  constructor(private name: string, private size: number) {}

  getName(): string {
    return this.name;
  }

  getSize(): number {
    return this.size;
  }

  display(indentation: string = ""): void {
    console.log(`${indentation}File: ${this.getName()} (${this.getSize()} KB)`);
  }
}
