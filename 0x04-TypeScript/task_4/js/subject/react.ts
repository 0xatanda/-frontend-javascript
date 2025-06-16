namespace Subjects {
  // Declaration Merging: Add experienceTeachingReact to Teacher
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  // React class extending Subject
  export class React extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for React";
    }

    getAvailableTeacher(): string {
      if (
        this["teacher"] &&
        this["teacher"].experienceTeachingReact &&
        this["teacher"].experienceTeachingReact > 0
      ) {
        return `Available Teacher: ${this["teacher"].firstName}`;
      }
      return "No available teacher";
    }
  }
}