import { Component } from '@angular/core';

import * as math from 'mathjs';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	value = 0;

	constructor() {
		this.value = math.parse('2+2').compile().eval();
		let m = math;
		debugger;
		// m.parse('2+2').compile() => error
		let tree = math.parse('2+2');
		debugger;
		// tree.compile() => error
		let exp = math.parse('2+2').eval();
		debugger;
		// exp => 4
	}
}
