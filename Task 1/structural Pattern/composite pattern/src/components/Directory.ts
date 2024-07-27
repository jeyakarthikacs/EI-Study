// src/components/Directory.ts

import { FileSystemComponent } from "../interfaces/FileSystemComponent";

export class Directory implements FileSystemComponent {
  private components: FileSystemComponent[] = [];

  constructor(private name: string) {}

  getName(): string {
    return this.name;
  }

  getSize(): number {
    return this.components.reduce((totalSize, component) => totalSize + component.getSize(), 0);
  }

  addComponent(component: FileSystemComponent): void {
    this.components.push(component);
  }

  removeComponent(component: FileSystemComponent): void {
    this.components = this.components.filter((c) => c !== component);
  }

  display(indentation: string = ""): void {
    console.log(`${indentation}Directory: ${this.getName()} (${this.getSize()} KB)`);
    for (const component of this.components) {
      component.display(indentation + "  ");
    }
  }
}
