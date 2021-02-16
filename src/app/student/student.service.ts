import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Student } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
    students: Student[] = [{
        id: 1,
        name: 'Krunal',
        enrollmentnumber: 1,
        college: 'VVP Engineering College',
        university: 'GTU'
    },
    {
        id: 2,
        name: 'Rushabh',
        enrollmentnumber: 1,
        college: 'VVP Engineering College',
        university: 'GTU'
    },
    {
        id: 3,
        name: 'Ankit',
        enrollmentnumber: 1,
        college: 'VVP Engineering College',
        university: 'GTU'
    }];

    constructor() { }

    public getStudents(): any {
        const studentsObservable = new Observable(observer => {
          observer.next(this.students);
        });

        return studentsObservable;
    }
}