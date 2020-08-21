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

    
