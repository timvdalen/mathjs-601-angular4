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
	}
}
