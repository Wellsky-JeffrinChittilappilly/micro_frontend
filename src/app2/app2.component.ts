import {Component} from '@angular/core';

@Component({
  selector: 'app2',
  template: `
  <style>
      a {
        background-color: #5eb8b7;
        color: white;
        padding: 1em 1.5em;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 3px;
        margin-left: 11px;
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
      
    </div>

    <a [routerLink]="['/subroute1']" routerLinkActive="active">Patient Info</a>
    <a [routerLink]="['/subroute2']" routerLinkActive="active">Patient Vist Entry</a>
    
    <router-outlet></router-outlet>
  `,
})
export class App2 {
}
