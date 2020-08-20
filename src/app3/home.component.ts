import {Component} from '@angular/core';

@Component({
  selector: 'home',
  template: `
  <div class="home">
    <div class="home-img-container">
        <img src="wellsky-home.jpg"  width="100%" height="90%">
        <div class="home-details">
            <div class="home-details-header">Welcome to WellSky Microfrontend and Web component</div>
            <div class="home-pointer-container">
              <div class="home-pointers-data"><div class="home-pointers">.</div><span class="home-pointers-inner-data"> Creating applications without restricting technology</span> </div>
              <div class="home-pointers-data"><div class="home-pointers">.</div><span class="home-pointers-inner-data"> Smaller, more cohesive and maintainable codebases</span> </div>
              <div class="home-pointers-data"><div class="home-pointers">.</div><span class="home-pointers-inner-data"> More scalable organisations with decoupled, autonomous teams</span> </div>
              <div class="home-pointers-data"><div class="home-pointers">.</div><span class="home-pointers-inner-data"> The ability to upgrade, update, or even rewrite parts of the frontend in a more incremental fashion than was previously possible </span></div>
                  
            </div>
              </div>
    </div>
</div>
  `,
})
export class Home {
}
