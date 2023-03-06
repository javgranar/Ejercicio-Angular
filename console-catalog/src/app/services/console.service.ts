import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Console } from '../models/console.model';


const consoles: Console[] = [
  {
    id: 1,
    name: 'Xbox',
    description: 'Xbox description',
    cost: 10
  },
  {
    id: 2,
    name: 'PS',
    description: 'PS description',
    cost: 10
  },
  {
    id: 3,
    name: 'Nintendo',
    description: 'Nintendo description',
    cost: 1000
  },
];

@Injectable({
  providedIn: 'root'
})
export class ConsoleService {


  constructor(private http: HttpClient) { }

  getConsoles() {
    return consoles;
  }

  get(id: any): Console {
    return consoles[0];
  }

}
