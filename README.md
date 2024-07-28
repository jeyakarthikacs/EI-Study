# Exercise-1

## Design Patterns

This repository contains TypeScript implementations of various design patterns, including the Structural, Creational, and Behavioral design patterns. These design patterns are fundamental to creating robust and maintainable object-oriented software.

### Table of Contents

**Design Patterns:**

- Behavioral Pattern
   - Observer Pattern
   - Strategy Pattern
- Creational Pattern
   - Abstract factory pattern
   - Singleton Pattern
- Structural Pattern
   - Composite pattern
   - Facade pattern

# Exercise-2

## Virtual Classroom Manager
Mini-Project -
Virtual Classroom Manager is a terminal-based application designed to facilitate classroom management. It allows users to add classrooms, enroll students, schedule and submit assignments, and view classroom details. This project demonstrates fundamental concepts of object-oriented programming and data management in TypeScript using the MVC design pattern.

## Table of Contents

Features:

- Add Classroom: Create new classrooms.
- Add Student: Enroll students in a classroom.
- Schedule Assignment: Schedule assignments for a class.
- Submit Assignment: Submit assignments for students.
- List Classrooms: View a list of all classrooms.
- List Students: View a list of all students in a classroom.
- List Assignments: View list of assignments of each class
- Delete Classroom: Delete a classroom.
- Remove Student: Remove a student from a classroom.
- Exit: Close the application.
  
Commands:

- add_classroom [class name] - Adds a new classroom.
- add_student [student ID] [student name] [class name] - Enrolls a student in a classroom.
- schedule_assignment [class name] [assignment details] - Schedules an assignment.
- submit_assignment [student ID] [class name] [assignment details] - Submits an assignment.
- list_classrooms - Lists all classrooms.
- list_students [class name] - List all students in a specific classroom.
- list_assignments [class name] - List the.assignments in each class
- delete_classroom [class name] - Deletes a specific classroom.
- remove_student [student ID] [class name] - Removes a student from a specific classroom.
- exit - Exits the application.

## Design patterns :
- Singleton Pattern for the logger.
- Command Pattern for handling user input.
- Factory Pattern (implied) for creating Classroom and Student instances.
- Observer Pattern (implied) with the logger.
- Data Mapper Pattern for handling data operations in ClassroomController.

## Technologies Used:

- **TypeScript**: For type-safe JavaScript development
- **Node.js**: JavaScript runtime for server-side operations
- **npm**: JavaScript package manager for managing dependencies
- **Winston**: A versatile logging library for Node.js

# Output:(Exercise-2)

![image](https://github.com/user-attachments/assets/126c72aa-3b83-4ce6-80e1-0721eb7cd2f2)
![image](https://github.com/user-attachments/assets/951dc903-0132-40e2-a747-36bd3c437562)
![image](https://github.com/user-attachments/assets/89b9a537-d9f9-4621-892c-d792453e4fb5)
![image](https://github.com/user-attachments/assets/80cd02ee-dc71-4cd6-90c9-770ee8fcdd01)
![image](https://github.com/user-attachments/assets/d481d239-d73e-432c-9f61-6cbf8d4c24b7)
![image](https://github.com/user-attachments/assets/82d5f3e5-76ff-4934-8dba-7f407149b4a0)
![image](https://github.com/user-attachments/assets/f9e91bb8-9419-4dc7-b70b-a42c48bcb3bd)
![image](https://github.com/user-attachments/assets/c902860b-f51a-4919-9c21-7f60cff43556)
![image](https://github.com/user-attachments/assets/6bb612f8-37bb-4b18-933d-529d14351791)
![image](https://github.com/user-attachments/assets/b946ab01-1289-4701-8f76-9f039ab497c5)
![image](https://github.com/user-attachments/assets/a8a170c2-9443-4ea0-b7ab-91fd77a22caa)
![image](https://github.com/user-attachments/assets/a7655fbb-54e9-4870-ab81-4721ea9cf255)
![image](https://github.com/user-attachments/assets/806cb5ea-ea79-433b-a35f-f30c33854614)
![image](https://github.com/user-attachments/assets/2b273d98-b846-448d-928e-7a1599879a5e)
![image](https://github.com/user-attachments/assets/4c3c5e86-62f4-4e0c-959e-2e698d155b4e)
![image](https://github.com/user-attachments/assets/9af343ce-7f21-47ef-8fde-ad6edd431dce)
![image](https://github.com/user-attachments/assets/fe332f5e-9277-4420-9b8a-bd3c4dfaea5a)

# Compilation

To compile the TypeScript files, you need to have Node.js and TypeScript installed. You can download Node.js from the official Node.js website and install TypeScript using npm.

Once Node.js is installed, follow these steps to compile the files:

1. Open a terminal or command prompt.
2. Navigate to the directory containing the TypeScript files:

   ```sh
   cd /path/to/src
3. Compile the TypeScript files using the tsc command:
   ```sh
   npx tsc

   (or)
  
   tsc file_name.ts
   
4. Run the JavaScript files using the node command:
   ```sh
   npm start

   (or)
   
   npm dist/main.js

