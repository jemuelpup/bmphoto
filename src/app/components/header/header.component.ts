import { Component, OnInit,HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	menuOpened: boolean = true;

	@HostListener('window:resize', ['$event'])
	onResize(event) {
		if(event.target.innerWidth<=768){
			this.menuOpened = false;
		}
		else{
			this.menuOpened = true;
		}
	}

  constructor() { }

  ngOnInit() {
  	this.menuOpened = false;
  }


}
