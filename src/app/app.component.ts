import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public todos: any[] = [];
  public title: string = 'Tasks';

  constructor() {
    this.todos.push('Buy milk');
    this.todos.push('Watch TV');
    this.todos.push('Play Fortnite');
  }

  changeText() {
    this.title = 'New Title';
  }
}
