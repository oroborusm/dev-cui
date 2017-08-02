class Accordion {
  constructor(selector) {
    this.accordion = document.querySelector(selector);
    this.bindEvents();
  }
  bindEvents(){
    document.querySelectorAll(".accordion .member").forEach(itemHeader => {
      itemHeader.addEventListener("click", () => {
        //debbuger
        let item = itemHeader;

        item.classList.toggle("active");
      })
    })
  }
}

(function(){
  new Accordion(".accordion");
})()
