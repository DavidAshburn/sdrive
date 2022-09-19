import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
static targets = [ "paredit", "parstring", "parstringout" ]


connect() {
	this.pars = this.parstringTarget.innerText;
	console.log(this.pars);
}


}