type Subject = "Math" | "History";
 
interface DirectorInterface {
    workFromHome: () =>  string;
    getCoffeeBreak: () => string;
    workDirectorTask: () => string;
}

interface TeacherInterface {
    workFromHome: () => string;
    getCoffeeBreak: () => string;
    workTeacherTask: () => string;
}

class Director implements DirectorInterface {
    workDirectorTask () {
        return "Work from home";
    }

    getCoffeeBreak () {
        return "Getting a coffee break";
    }

    workFromHome () {
        return "Getting to Director Task";
    }
}

class Teacher implements TeacherInterface {
    workFromHome () {
        return "Cannot work from home";
    }

    getCoffeeBreak () {
        return "Cannot have a break";
    }

    workTeacherTask () {
        return "Getting to work";
    }
}

function createEmployee(salary: number | string ): Director | Teacher {
    if (typeof salary == 'number' && salary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
}

function isDirector(employee:Director | Teacher): employee is Director {
    return employee instanceof Director;
}

function employee(employee:Director | Teacher): string {
    if(isDirector(employee)) {
        return employee.workDirectorTask();
    } else {
        return employee.workTeacherTask();
    }
}

function teachClass(todayClass:Subject): string {
    if (todayClass == "Math") {
        return "Teaching Math";
    }else {
        return "Teaching History";
    }
}