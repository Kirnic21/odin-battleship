const dragDropHorizontal = (length, player) => {
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((element) => {

    element.addEventListener("dragover", (event) => {
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
    });
    element.addEventListener("dragleave", () => {
      let a = document.querySelectorAll(".grid-item.dropOver");
      a.forEach((element) => {
        element.classList.remove("dropOver");
      });
    });
    element.addEventListener("drop", (event) => {
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
    });
  });
  return
};
const dragDropVertical = (length, player) => {
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
    element.addEventListener("drop", (event) => {
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
    });
  });

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
export { dragDropHorizontal ,dragDropVertical,dragDrop};
