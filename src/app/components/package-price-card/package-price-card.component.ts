import { Component, OnInit,Input } from '@angular/core';
import { PhotographyPackage } from '../../models/photography-package';
import { PriceformatPipe } from '../../pipes/priceformat.pipe';

@Component({
  selector: 'app-package-price-card',
  templateUrl: './package-price-card.component.html',
  styleUrls: ['./package-price-card.component.scss']
})
export class PackagePriceCardComponent implements OnInit {

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
