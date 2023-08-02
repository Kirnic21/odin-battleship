import { displayReceivedAttack, removeAllChildNodes } from "./Interface";
import { makeEnemyGrid ,shipsEnemyDom} from "./Interface";
import { gameLoop } from "./gameloop";
const gameLoopDom = (length, player,enemy) => {
  const gridItems = document.querySelectorAll(".grid-item");
  const container = document.querySelector(".gameboard-container")
  let clicked = false
  let isVertical = true
  let isHorizontal = false
  let size = length
 
  gridItems.forEach((element) => {
    
    element.addEventListener("mouseover", function trail(event) {
      if(clicked === false && isHorizontal === true){
      event.preventDefault();
      let x = event.target.dataset.coordinateX;
      let y = event.target.dataset.coordinateY;
     
      let x_array = [];
      let paintDivs = [];
      for (let i = 0; i < size; i++) {
        let a = parseInt(x) + i;
        x_array.push(a);
        
      }
      for (let i in x_array) {
        let div = document.querySelector(
          `.grid-item[data-coordinate-x='${x_array[i]}'][data-coordinate-y='${y}']`,
        );
        if (div !== null) {
          paintDivs.push(div);
        }
      }
      for (let i in paintDivs) {
        paintDivs[i].classList.add("dropOver");
      }
    }else{
      return false
    }},
      element.addEventListener("mouseover", function clickover  (event){
        if(clicked === false && isVertical === true){
        event.preventDefault();
        let x = event.target.dataset.coordinateX;
        let y = event.target.dataset.coordinateY;
  
        let y_array = [];
        let paintDivs = [];
        for (let i = 0; i < size; i++) {
          let a = parseInt(y) + i;
          y_array.push(a);
        }
        for (let i in y_array) {
          let div = document.querySelector(
            `.grid-item[data-coordinate-x='${x}'][data-coordinate-y='${y_array[i]}']`,
          );
          if (div !== null) {
            paintDivs.push(div);
          }
        }
        for (let i in paintDivs) {
          paintDivs[i].classList.add("dropOver");
        }
   } }),
   element.addEventListener("dblclick", (event) => {
    if(isVertical === true)
    {
      isVertical = false
      isHorizontal = true
    }
    else if(isHorizontal ===  true)
    {
      isVertical = true
      isHorizontal = false

    }
   }),
    element.addEventListener("mouseleave", function remove(){
      if(clicked === false)
      {
      let a = document.querySelectorAll(".grid-item.dropOver");
      a.forEach((element) => {
        element.classList.remove("dropOver");
      });
      element.removeEventListener("click",remove)
    }
    }
    
    )
  
  )})
    container.addEventListener("click", (event) => {
      if(isVertical === true)
      {
        isVertical = false
        isHorizontal = true
      }
      else if(isHorizontal ===  true)
      {
        isVertical = true
        isHorizontal = false
  
      }
     }),
    container.addEventListener("dblclick", function clickCreate(event) {
      if(size === 0)
      {
        makeEnemyGrid();
      }
      let dropOver = document.querySelectorAll(".grid-item.dropOver");
      let lengthDropOver = dropOver.length;

      let coordArray = [];
      gridItems.forEach((element)=>{
        element.removeEventListener("mouseleave",remove,true)
        element.removeEventListener("mouseover",trail,true)
      })
      dropOver.forEach((element) => {
        coordArray.push([
          parseInt(element.dataset.coordinateX),
          parseInt(element.dataset.coordinateY),
        ]);
      });
   
      let ship = player.getGameboard().createShip(lengthDropOver, coordArray);
      console.log(ship)
      gridItems.forEach((element)=>{
        
        element.removeEventListener("mouseleave",remove,true)
        element.removeEventListener("mouseover",trail,true)
        })
      if (ship === "no" || lengthDropOver<size) {
        alert("stop right there criminal scum, dont put a ship there!");//temporary alert
        dropOver.forEach((element) => {
          element.classList.remove("dropOver");
        });
      } else {
        size = size-1
        dropOver.forEach((element) => {element.classList.add("shipDiv")
        if(size === 0)
        {
          const instructions = document.querySelector("#startgame")
          instructions.textContent = "If the game stops working, the AI must be tired and gone to bed, reload the page"
          makeEnemyGrid();
          shipsEnemyDom(enemy,5)
          gameLoop(player,enemy)
          return
        }
        
        });
        }
      },
    )
    
  };


const dragDropVertical = (length, player) => {
  let clicked = false
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((element) => {
    element.addEventListener("dragover", (event) => {
      event.preventDefault();
      let x = event.target.dataset.coordinateX;
      let y = event.target.dataset.coordinateY;

      let y_array = [];
      let paintDivs = [];
      for (let i = 0; i < length; i++) {
        let a = parseInt(y) + i;
        y_array.push(a);
      }
      for (let i in y_array) {
        let div = document.querySelector(
          `.grid-item[data-coordinate-x='${x}'][data-coordinate-y='${y_array[i]}']`,
        );
        if (div !== null) {
          paintDivs.push(div);
        }
      }
      for (let i in paintDivs) {
        paintDivs[i].classList.add("dropOver");
      }
    });
    element.addEventListener("dragleave", () => {
      let a = document.querySelectorAll(".grid-item.dropOver");
      a.forEach((element) => {
        element.classList.remove("dropOver");
      });
    });
    element.addEventListener("drop", function click(event) {
      let dropOver = document.querySelectorAll(".grid-item.dropOver");
      let lengthDropOver = dropOver.length;

      let coordArray = [];
      dropOver.forEach((element) => {
        coordArray.push([
          element.dataset.coordinateX,
          element.dataset.coordinateY,
        ]);
      });
      let ship = player.getGameboard().createShip(lengthDropOver, coordArray);
      console.log(ship);
      if (ship === "no") {
        alert("stop right there criminal scum, dont put a ship there!");
        dropOver.forEach((element) => {
          element.classList.remove("dropOver");
        });
      } else {
        dropOver.forEach((element) => {
          element.classList.add("shipDiv");
        });
        
      }
    });
  });
};

function click(event) {
  let dropOver = document.querySelectorAll(".grid-item.dropOver");
  let lengthDropOver = dropOver.length;

  let coordArray = [];
  dropOver.forEach((element) => {
    coordArray.push([
      element.dataset.coordinateX,
      element.dataset.coordinateY,
    ]);
  });
  let ship = player.getGameboard().createShip(lengthDropOver, coordArray);
  console.log(ship);
  if (ship === "no") {
    alert("stop right there criminal scum, dont put a ship there!");
    dropOver.forEach((element) => {
      element.classList.remove("dropOver");
    });
  } else {
    dropOver.forEach((element) => {
      element.classList.add("shipDiv");
    });
    return
  }
}
function trail(event) {
      event.preventDefault();
      let x = event.target.dataset.coordinateX;
      let y = event.target.dataset.coordinateY;

      let x_array = [];
      let paintDivs = [];
      for (let i = 0; i < length; i++) {
        let a = parseInt(x) + i;
        x_array.push(a);
      }
      for (let i in x_array) {
        let div = document.querySelector(
          `.grid-item[data-coordinate-x='${x_array[i]}'][data-coordinate-y='${y}']`,
        );
        if (div !== null) {
          paintDivs.push(div);
        }
      }
      for (let i in paintDivs) {
        paintDivs[i].classList.add("dropOver");
      }
    };
    function remove(){
      let a = document.querySelectorAll(".grid-item.dropOver");
      a.forEach((element) => {
        element.classList.remove("dropOver");
      });
      element.removeEventListener("click",remove)
    };
const dragDrop = (length,player1)=>{
  const vertical = document.querySelector("#vertical-ship")
  let dragStuff = true
  vertical.addEventListener("dragstart",(e)=>{
    
    if(dragStuff === true)
    {
    dragStuff = false
    dragDropHorizontal(length,player1)
    }
  }
  )
  vertical.addEventListener("dragend",(e)=>{
    dragStuff = false
})
}
export { gameLoopDom ,dragDropVertical};
