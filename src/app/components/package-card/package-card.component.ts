import { Component, OnInit, Input } from '@angular/core';
import { PhotographyPackage } from '../../models/photography-package';
import { PriceformatPipe } from '../../pipes/priceformat.pipe';

@Component({
  selector: 'app-package-card',
  templateUrl: './package-card.component.html',
  styleUrls: ['./package-card.component.scss']
})
export class PackageCardComponent implements OnInit {

	@Input() packageData:PhotographyPackage;
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
