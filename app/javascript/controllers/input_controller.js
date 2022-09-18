import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
static targets = [ 
  "lengthselector",
  "variantparfield",
  "par"
  ]

  initialize() {
    this.partotal = 0;
    this.parstring = "";
    this.setLength();
  }

  connect() {
  }

  setLength() {
    //grab the length and the target div to output our par input rows
    let length = parseInt(this.lengthselectorTarget.value);
    let parbox1 = document.querySelector('#parform9');
    let parbox2 = document.querySelector('#parform18');

    let labels1 = document.querySelector('#labels9');
    let labels2 = document.querySelector('#labels18');
    

    let container1_out = document.createElement("div");
    container1_out.classList.add("row-center", "col-7");
    let labels1_out = document.createElement("div");
    container1_out.classList.add("row-center", "col-7");

    let container2_out = document.createElement("div");
    container2_out.classList.add("row-center", "col-7");
    let labels2_out = document.createElement("div");
    container1_out.classList.add("row-center", "col-7");

    

    for(let i = 1; i <= length * 9; i++) {
      let label_row = document.createElement("div");
      label_row.classList.add("subtitle");
      label_row.innerText = i;

      let input_row = document.createElement("input");
      input_row.setAttribute("type", "text");
      input_row.setAttribute("data-input-target", "par");
      input_row.setAttribute("value", "3");
      input_row.classList.add("number-select");

      if(i < 10) {
        labels1_out.appendChild(label_row);
        container1_out.appendChild(input_row);
      } else {
        labels2_out.appendChild(label_row);
        container2_out.appendChild(input_row);
      }

    }

    parbox1.removeChild(parbox1.firstElementChild);
    parbox1.appendChild(container1_out);

    labels1.removeChild(labels1.firstElementChild);
    labels1.appendChild(labels1_out);

    if(length > 9) {
      parbox2.removeChild(parbox2.firstElementChild);
      parbox2.appendChild(container2_out);

      labels2.removeChild(labels2.firstElementChild);
      labels2.appendChild(labels2_out);
    }
  }

  setPars() {
    this.parstring = "";
    this.parTargets.forEach(element => {
      this.parstring.push(element.value);
    });

    console.log(this.parstring);
  }
}