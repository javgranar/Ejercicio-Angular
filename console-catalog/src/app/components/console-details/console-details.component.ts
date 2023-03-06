import { Component, Input, OnInit } from '@angular/core';
import { ConsoleService } from 'src/app/services/console.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Console } from 'src/app/models/console.model';

@Component({
  selector: 'app-console-details',
  templateUrl: './console-details.component.html',
  styleUrls: ['./console-details.component.css']
})
export class ConsoleDetailsComponent  implements OnInit{

  @Input() viewMode = false;

  @Input() currentConsole: Console = {
    name: '',
    description: '',
    cost: 0
  };
  
  message = '';

  constructor(
    private consoleService: ConsoleService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getConsole(this.route.snapshot.params["id"]);
    }
  }

  getConsole(id: number): void {

  }

  updatePublished(): void {

  }

  updateConsole(): void {

  }

  deleteConsole(): void {

  }

}
