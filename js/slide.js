class IndexSibling {
  static get(el){
    let children = el.parentNode.children;

    for (var i = 0; i < children.length; i++) {
      let child = children[i];
      if (child == el) {
        return i;
      }
    }
  }
}

class Slider {
  constructor(selector, movimiento=true) {
    this.move = this.move.bind(this);
    this.moveRight = this.moveRight.bind(this);
    this.moveByButton = this.moveByButton.bind(this);

    this.slider = document.querySelector(selector);
    this.itemsCount = this.slider.querySelectorAll(".slider-container > * ").length;
    this.interval = null;
    this.contador = 0;
    this.movimiento = movimiento;

    this.start();
    this.buildControls();
    this.bindEvents();
    //this.moveButtonLeft();
    //this.moveButtonRight();
  }

  bindEvents(){
    this.slider.querySelectorAll(".controls li")
      .forEach(item => {
        item.addEventListener("click", this.moveByButton)
      })
  }

  buildControls(){
    for (var i = 0; i < this.itemsCount; i++) {
      let control = document.createElement("li");
      //let control = document.getElementById("control");
      if (i == 0) {
        control.classList.add("active")
      }
      this.slider.querySelector(".controls ul").appendChild(control);
    }
  }

  move(){
    this.contador++;
    if (this.contador > this.itemsCount -1) {
      this.contador = 0;
    }
    this.moveTo(this.contador);
  }

  moveRight(){
    this.contador-1;
    if (this.contador == 0) {
      this.contador = 0;
    }
    this.moveToRight(this.contador);
  }

  moveByButton(ev){
    let index = IndexSibling.get(ev.currentTarget);
    this.contador = index;
    this.moveTo(index);
    this.restartInterval();
    console.log(index)
  }

  moveTo(index){
    //debugger
    let left = index * 100;
    this.resetIndicador();

    this.slider.querySelector(".controls li:nth-child("+(index+1)+")").classList.add("active");
    this.slider.querySelector(".slider-container").style.left = "-"+left+"%";
  }

  start(){
    if (!this.movimiento) {
      return;
    }
    this.interval = window.setInterval(this.move,5000);
  }

  resetIndicador(){
    this.slider.querySelectorAll(".controls li.active")
      .forEach(item => item.classList.remove("active"));
  }

  restartInterval(){
    if (this.interval) {
      window.clearInterval(this.interval);
      this.start();
    }
  }
}

(function(){
  new Slider(".slider")
})();
