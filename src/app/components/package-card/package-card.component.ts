import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PhotographyPackage } from '../../models/photography-package';


@Component({
  selector: 'app-package-card',
  templateUrl: './package-card.component.html',
  styleUrls: ['./package-card.component.scss']
})
export class PackageCardComponent implements OnInit {

	@Input() packageData:PhotographyPackage;
	@Output() likePackage = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  like(){
  	this.packageData.liked = !this.packageData.liked;
  }
  onRightClick(e){
    return false;
  }

}
