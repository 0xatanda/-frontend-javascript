interface Teacher {
    firstName: string,
    lastName: string,
    fullTimeEmployee: boolean,
    location: string,
    contract: boolean
}

interface Director {
    firstName: string,
    lastName: string,
    location: string,
    fullTimeEmployee: boolean,
    numberOfReports: number,
}

interface printTecherFunction {
    (firstName: string, lastName: string): string;
}


interface StudentInterface {
    workOnHomeWork: () => string;
    displayName: () => string;
}

interface StudentClass {
    new (firstName: string, lastName:string): string;
}

class Student implements StudentInterface {
    constructor (
        private firstName: string,
        private lastName: string,
    ){}

    workOnHomeWork()  {
        return "Current Working";
    }

    displayName() {
        return this.firstName && this.lastName;
    } 
} 



const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
}

const director1: Director = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
}

console.log(teacher3)
console.log(director1);




const printTecher: printTecherFunction = (firstName:string, lastName: string) =>  {
    return `${firstName.charAt(0)}. ${lastName}`;
}

