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

  //executes when user changes the length on add_variant view
  setLength() {
    console.log("setLength");
    //grab the length and the target divs to output our par input rows
    let length = parseInt(this.lengthselectorTarget.value);
    let parbox1 = document.querySelector('#parform1');
    let parbox2 = document.querySelector('#parform2');
    let labels1 = document.querySelector('#labels1');
    let labels2 = document.querySelector('#labels2');
    
    //output containers
    let parbox1_out = document.createElement("div");
    let parbox2_out = document.createElement("div");
    let labels1_out = document.createElement("div");
    let labels2_out = document.createElement("div");
    parbox1_out.classList.add("row-center", "col-7");
    parbox2_out.classList.add("row-center", "col-7");
    labels1_out.classList.add("row-center", "col-7");
    labels2_out.classList.add("row-center", "col-7");

    //generate input fields based on selected length
    for(let i = 1; i <= length * 9; i++) {
      let label_row = document.createElement("div");
      label_row.classList.add("holenumber");
      label_row.innerText = i;

      let input_row = document.createElement("input");
      input_row.setAttribute("type", "text");
      input_row.setAttribute("data-input-target", "par");
      input_row.setAttribute("value", "3");
      input_row.classList.add("number-select");

      if(i < 10) {
        labels1_out.appendChild(label_row);
        parbox1_out.appendChild(input_row);
      } else {
        labels2_out.appendChild(label_row);
        parbox2_out.appendChild(input_row);
      }
    }

    //making sure they have something before I try to clear it
    if (parbox1.hasChildNodes()){
        parbox1.removeChild(parbox1.firstElementChild);
      }
    if (labels1.hasChildNodes()){
      labels1.removeChild(labels1.firstElementChild);
    }
    if (parbox2.hasChildNodes()){
      parbox2.removeChild(parbox2.firstElementChild);
    }
    if (labels2.hasChildNodes()){
      labels2.removeChild(labels2.firstElementChild);
    }

    //output our new divs to HTML
    parbox1.appendChild(parbox1_out);
    labels1.appendChild(labels1_out);

    if(length > 1) {
      parbox2.appendChild(parbox2_out);
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