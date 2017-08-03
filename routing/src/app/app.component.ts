import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h2>Routing Component</h2><br><br>
              <nav>
              <a routerLink="/departments"routerLinkActive="active">Department</a><br><br>
              <a routerLink="/employees" routerLinkActive="active">Employee</a><br>
              </nav>
              <router-outlet></router-outlet>`
              
})
export class AppComponent {
  title = 'app';
}
