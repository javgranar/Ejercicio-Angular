import { Component, OnInit } from '@angular/core';
import { Console } from 'src/app/models/console.model';
import { ConsoleService } from 'src/app/services/console.service';

@Component({
  selector: 'app-console-list',
  templateUrl: './console-list.component.html',
  styleUrls: ['./console-list.component.css']
})
export class ConsoleListComponent implements OnInit {
  console?: Console[];
  currentConsole: Console = {};
  currentIndex = -1;
  name = '';

  constructor(private consoleService: ConsoleService) { }

  ngOnInit(): void {
    this.retrieveConsole();
  }

  retrieveConsole(): void {
    this.console = this.consoleService.getConsoles();
  }

  refreshList(): void {
    this.retrieveConsole();
    this.currentConsole = {};
    this.currentIndex = -1;
  }

  setActiveConsole(console: Console, index: number): void {
    this.currentConsole = console;
    this.currentIndex = index;
  }

  removeAllConsole(): void {
    this.console = [];
  }

  searchName(): void {
    this.currentConsole = {};
    this.currentIndex = -1;

  }

}

