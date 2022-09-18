import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
static targets = [ 
  "lengthselector",
  "variantparfield"
  ]

  initialize() {
    this.parinputs = this.variantparfieldTargets;
    this.partotal = 0;
    this.parstring = "";
  }

  connect() {
  }

  setLength() {
    let length = parseInt(this.lengthselectorTarget.value);
    let parbox = this.document.querySelector('#parform');
    let template = this.document.getElementsByTagName("template")[0];

    for(let i = 0; i < length; i++) {
      parbox.append(template)
    }
    
  }

  setPars() {
    this.parstring = "";
    this.parinputs.forEach(element => {
      this.parstring.push(parseString(element.innerText));
    });

  }
}