import { Component, OnInit } from '@angular/core';
import { Console } from 'src/app/models/console.model';
import { ConsoleService } from 'src/app/services/console.service';

@Component({
  selector: 'app-add-console',
  templateUrl: './add-console.component.html',
  styleUrls: ['./add-console.component.css']
})
export class AddConsoleComponent implements OnInit {

  console: Console = {
    id: 1,
    name: '',
    description: '',
    cost: 0
  };
  submitted = false;

  constructor(private consoleService: ConsoleService) { }

  ngOnInit(): void {
  }

  saveConsole(): void {

  }

  newConsole(): void {
    this.submitted = false;
    this.console = {
      name: '',
      description: ''
    };
  }

}
