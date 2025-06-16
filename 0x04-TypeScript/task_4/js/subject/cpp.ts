namespace Subjects {
  // Declaration Merging: Add new property to Teacher interface
  export interface Teacher {
    experienceTeachingC?: number;
  }

  // Class Cpp extends Subject
  export class Cpp extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for Cpp";
    }

    getAvailableTeacher(): string {
      if (
        this["teacher"] &&
        this["teacher"].experienceTeachingC &&
        this["teacher"].experienceTeachingC > 0
      ) {
        return `Available Teacher: ${this["teacher"].firstName}`;
      }
      return "No available teacher";
    }
  }
}