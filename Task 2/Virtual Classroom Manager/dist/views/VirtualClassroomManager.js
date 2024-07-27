"use strict";
// src/VirtualClassroomManager.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VirtualClassroomManager = void 0;
const readline_1 = __importDefault(require("readline"));
const ClassroomController_1 = require("../controllers/ClassroomController");
const Logger_1 = require("../utils/Logger");
class VirtualClassroomManager {
    constructor() {
        this.rl = readline_1.default.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        this.controller = new ClassroomController_1.ClassroomController();
    }
    start() {
        this.showMenu();
    }
    showMenu() {
        console.log(`
--------------------------------------------------------------------------------
                WELCOME TO VIRTUAL CLASSROOM MANAGER
--------------------------------------------------------------------------------

      Type one of the following commands:
      1. add_classroom [Classroom Name]
      2. add_student [Student ID] [Student Name] [Classroom Name]
      3. schedule_assignment [Classroom Name] [Assignment Details]
      4. submit_assignment [Student ID] [Classroom Name] [Assignment Details]
      5. list_classrooms
      6. list_students [Classroom Name]
      7. list_assignments [Classroom Name]  
      8. delete_classroom [Classroom Name]
      9. remove_student [Student ID] [Classroom Name]
      10. exit
    `);
        this.rl.question('Enter command: ', (input) => {
            const [command, ...args] = input.trim().split(' ');
            switch (command) {
                case 'add_classroom':
                    this.addClassroom(args.join(' '));
                    break;
                case 'add_student':
                    this.addStudent(args[0], args.slice(1, -1).join(' '), args.slice(-1).join(' '));
                    break;
                case 'schedule_assignment':
                    this.scheduleAssignment(args[0], args.slice(1).join(' '));
                    break;
                case 'submit_assignment':
                    this.submitAssignment(args[0], args[1], args.slice(2).join(' '));
                    break;
                case 'list_classrooms':
                    this.listClassrooms();
                    break;
                case 'list_students':
                    this.listStudents(args.join(' '));
                    break;
                case 'list_assignments':
                    this.listAssignments(args.join(' '));
                    break;
                case 'delete_classroom':
                    this.deleteClassroom(args.join(' '));
                    break;
                case 'remove_student':
                    this.removeStudent(args[0], args.slice(1).join(' '));
                    break;
                case 'exit':
                    this.exit();
                    break;
                default:
                    console.log('Invalid command. Please try again.');
                    this.showMenu();
            }
        });
    }
    addClassroom(classroomName) {
        if (!this.isValidClassroomName(classroomName)) {
            console.error('Error: Classroom name must be alphanumeric and cannot contain special characters.');
            return this.showMenu();
        }
        try {
            this.controller.addClassroom(classroomName);
            console.log(`Classroom ${classroomName} has been created.`);
            Logger_1.logger.info(`Classroom ${classroomName} has been created.`);
        }
        catch (error) {
            this.handleError(error);
        }
        this.showMenu();
    }
    addStudent(studentId, studentName, classroomName) {
        if (!this.isValidStudentId(studentId)) {
            console.error('Error: Student ID must be a unique positive integer.');
            return this.showMenu();
        }
        if (studentName.trim() === '' || classroomName.trim() === '') {
            console.error('Error: Enter all fields.');
            return this.showMenu();
        }
        try {
            this.controller.addStudent(studentId, studentName, classroomName);
            console.log(`Student ${studentName} (${studentId}) has been enrolled in ${classroomName}.`);
            Logger_1.logger.info(`Student ${studentName} (${studentId}) has been enrolled in ${classroomName}.`);
        }
        catch (error) {
            this.handleError(error);
        }
        this.showMenu();
    }
    scheduleAssignment(classroomName, assignmentDetails) {
        if (classroomName.trim() === '' || assignmentDetails.trim() === '') {
            console.error('Error: Enter all fields.');
            return this.showMenu();
        }
        try {
            this.controller.scheduleAssignment(classroomName, assignmentDetails);
            console.log(`Assignment for ${classroomName} has been scheduled.`);
            Logger_1.logger.info(`Assignment for ${classroomName} has been scheduled.`);
        }
        catch (error) {
            this.handleError(error);
        }
        this.showMenu();
    }
    submitAssignment(studentId, classroomName, assignmentDetails) {
        if (!this.isValidStudentId(studentId)) {
            console.error('Error: Student ID must be a unique positive integer.');
            return this.showMenu();
        }
        if (classroomName.trim() === '' || assignmentDetails.trim() === '') {
            console.error('Error: Enter all fields.');
            return this.showMenu();
        }
        try {
            const studentName = this.controller.getStudentName(studentId, classroomName);
            this.controller.submitAssignment(studentId, classroomName, assignmentDetails);
            console.log(`Assignment submitted by ${studentName} (${studentId}) in ${classroomName}.`);
            Logger_1.logger.info(`Assignment submitted by ${studentName} (${studentId}) in ${classroomName}.`);
        }
        catch (error) {
            this.handleError(error);
        }
        this.showMenu();
    }
    listClassrooms() {
        try {
            const classrooms = this.controller.listClassrooms();
            if (classrooms.length === 0) {
                console.log('No classrooms available.');
            }
            else {
                console.log('Classrooms:');
                classrooms.forEach((classroom) => console.log(`- ${classroom}`));
            }
        }
        catch (error) {
            this.handleError(error);
        }
        this.showMenu();
    }
    listStudents(classroomName) {
        if (classroomName.trim() === '') {
            console.error('Error: Enter all fields.');
            return this.showMenu();
        }
        try {
            const students = this.controller.listStudents(classroomName);
            if (!students || students.length === 0) {
                console.log(`No students enrolled in ${classroomName}.`);
            }
            else {
                console.log(`Students in ${classroomName}:`);
                students.forEach(({ id, name }) => console.log(`- ${name} (${id})`));
            }
        }
        catch (error) {
            this.handleError(error);
        }
        this.showMenu();
    }
    listAssignments(classroomName) {
        if (classroomName.trim() === '') {
            console.error('Error: Enter all fields.');
            return this.showMenu();
        }
        try {
            const assignments = this.controller.listAssignments(classroomName);
            if (!assignments || assignments.length === 0) {
                console.log(`No assignments scheduled for ${classroomName}.`);
            }
            else {
                console.log(`Assignments for ${classroomName}:`);
                assignments.forEach((assignment) => console.log(`- ${assignment}`));
            }
        }
        catch (error) {
            this.handleError(error);
        }
        this.showMenu();
    }
    deleteClassroom(classroomName) {
        if (!this.isValidClassroomName(classroomName)) {
            console.error('Error: Classroom name must be alphanumeric and cannot contain special characters.');
            return this.showMenu();
        }
        try {
            this.controller.deleteClassroom(classroomName);
            console.log(`Classroom ${classroomName} has been deleted.`);
            Logger_1.logger.info(`Classroom ${classroomName} has been deleted.`);
        }
        catch (error) {
            this.handleError(error);
        }
        this.showMenu();
    }
    removeStudent(studentId, classroomName) {
        if (!this.isValidStudentId(studentId)) {
            console.error('Error: Student ID must be a unique positive integer.');
            return this.showMenu();
        }
        if (classroomName.trim() === '') {
            console.error('Error: Enter all fields.');
            return this.showMenu();
        }
        try {
            const studentRemoved = this.controller.removeStudent(studentId, classroomName);
            if (studentRemoved) {
                console.log(`Student ${studentId} has been removed from ${classroomName}.`);
                Logger_1.logger.info(`Student ${studentId} has been removed from ${classroomName}.`);
            }
            else {
                console.log(`No student with ID ${studentId} found in ${classroomName}.`);
            }
        }
        catch (error) {
            this.handleError(error);
        }
        this.showMenu();
    }
    exit() {
        console.log('Exiting...');
        console.log('Thank you!!');
        this.rl.close();
    }
    isValidClassroomName(name) {
        return /^[a-zA-Z0-9 ]+$/.test(name);
    }
    isValidStudentId(id) {
        const numberId = parseInt(id, 10);
        return Number.isInteger(numberId) && numberId > 0;
    }
    handleError(error) {
        if (error instanceof Error) {
            Logger_1.logger.error(error.message);
            console.error(`Error: ${error.message}`);
        }
        else {
            Logger_1.logger.error('An unknown error occurred');
            console.error('An unknown error occurred');
        }
    }
}
exports.VirtualClassroomManager = VirtualClassroomManager;
