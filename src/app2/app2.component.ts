import {Component} from '@angular/core';

@Component({
  selector: 'app2',
  template: `
  <style>
      a {
        background-color: red;
        color: white;
        padding: 1em 1.5em;
        text-decoration: none;
        text-transform: uppercase;
      }

      a:hover {
        background-color: #555;
      }

      a:active {
        background-color: black;
      }


      /* Non-Demo Styles */
      body {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
      }
    </style>
    <div style="margin-top: 100px;">
      This was rendered by App2 which is written in Angular
      
    </div>

    <a [routerLink]="['/subroute1']" routerLinkActive="active">Angular route 1</a>
    <a [routerLink]="['/subroute2']" routerLinkActive="active">Angular route 2</a>
    
    <router-outlet></router-outlet>
  `,
})
export class App2 {
}
