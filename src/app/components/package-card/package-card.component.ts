import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-package-card',
  templateUrl: './package-card.component.html',
  styleUrls: ['./package-card.component.scss']
})
export class PackageCardComponent implements OnInit {

	@Input() packageData;
  constructor() { }

  ngOnInit() {
  }

}
