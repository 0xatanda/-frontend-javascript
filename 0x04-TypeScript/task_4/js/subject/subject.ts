namespace Subjects {
  export class Subject {
    private teacher: Teacher;

    set setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }
  }
}