import { Component, OnInit } from '@angular/core';
import { PhotographerCard } from '../../models/photographer-card';

@Component({
  selector: 'app-search-photographer',
  templateUrl: './search-photographer.component.html',
  styleUrls: ['./search-photographer.component.scss']
})
export class SearchPhotographerComponent implements OnInit {

	photographersList: PhotographerCard[] = [];

  constructor() { }

  ngOnInit() {
  	for (var i =0; i < 3; i++) {
  	this.photographersList.push(<PhotographerCard>{
  		icon:"assets/images/photographerIcon/photographerIcon_01.jpg",
			name:"Elena R.",
			country: "London, UK",
			rate: "$90 - $150/ Hour",
			professionalDescription: "I build Cross Platform Web Apps with the latest proven Responsive Web Experts in Bootstrap & Found ...",
			profileLink: "linkhere"
  	});
  	this.photographersList.push(<PhotographerCard>{
  		icon:"assets/images/photographerIcon/photographerIcon_01.jpg",
			name:"Ben R.",
			country: "London, UK",
			rate: "$50 - $150/ Hour",
			professionalDescription: "I build Cross Platform Web Apps with the latest proven Responsive Web Experts in Bootstrap & Found ...",
			profileLink: "linkhere"
  	});
  	this.photographersList.push(<PhotographerCard>{
  		icon:"assets/images/photographerIcon/photographerIcon_01.jpg",
			name:"Lauren R.",
			country: "London, UK",
			rate: "$50 - $150/ Hour",
			professionalDescription: "I build Cross Platform Web Apps with the latest proven Responsive Web Experts in Bootstrap & Found ...",
			profileLink: "linkhere"
  	});
  	this.photographersList.push(<PhotographerCard>{
  		icon:"assets/images/photographerIcon/photographerIcon_01.jpg",
			name:"Rose R.",
			country: "London, UK",
			rate: "$50 - $150/ Hour",
			professionalDescription: "I build Cross Platform Web Apps with the latest proven Responsive Web Experts in Bootstrap & Found ...",
			profileLink: "linkhere"
  	});

  	}
  }

}
