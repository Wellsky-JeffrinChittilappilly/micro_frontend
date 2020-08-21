import {Component, AfterViewInit} from '@angular/core';

@Component({
  template: `
    <div>
      <div>
        <drag-drop-element></drag-drop-element>
      </div>
    </div>
    <script>
      var x = function () {var element = document.querySelector("drag-drop-element");
      let todoItems = [
          'A',
          'B',
          'C',
          'H',
          'J'
      ];
      let doneItems = [
          'D',
          'E'
      ];
      element.titleLeft = "TODO";
      element.titleRight = "DONE";
      element.itemsLeft = todoItems;
      element.itemsRight = doneItems;
      }

      setTimeout(() => {
          x();
      }, 1000); 

      </script>
  `,
})
export class Subroute2 implements AfterViewInit {
  
  ngAfterViewInit(): void {
    let element: any = document.querySelector("drag-drop-element");
    if (element) {
      let todoItems = [
        'A',
        'B',
        'C',
        'H',
        'J'
      ];
      let doneItems = [
          'D',
          'E'
      ];
      element.titleLeft = "TODO";
      element.titleRight = "DONE";
      element.itemsLeft = todoItems;
      element.itemsRight = doneItems;
    }
    
  }
  
}
