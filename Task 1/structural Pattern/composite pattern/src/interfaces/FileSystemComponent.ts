// src/interfaces/FileSystemComponent.ts

export interface FileSystemComponent {
    getName(): string;
    getSize(): number;
    display(indentation: string): void;
  }
  