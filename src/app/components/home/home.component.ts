import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	constructor() { }

	steps: {}[] = [
		{
			title: "post your job",
			description: "Less searching. More finding. Discover royalty-free images, illustrations and videos that will make you stand out."
		},{
			title: "get proposals",
			description: "Less searching. More finding. Discover royalty-free images, illustrations and videos that will make you stand out."
		},{
			title: "get your job delivered",
			description: "Less searching. More finding. Discover royalty-free images, illustrations and videos that will make you stand out."
		}
	];

	todoList: {}[] = [
		{
			icon: "camera",
			text: "Photography"
		},{
			icon: "images",
			text: "Photography"
		},{
			icon: "paint-brush",
			text: "Photography"
		}
	];

	galleryData: {}[] = [
		{
			sampleImg:"assets/images/gallery/galeryPic_01.jpg",
			sampleImgAlt:"Description here",
			photographerIcon:"assets/images/photographerIcon/photographerIcon_01.jpg",
			photographerName:"Ramon S.",
		},
		{
			sampleImg:"assets/images/gallery/galeryPic_02.jpg",
			sampleImgAlt:"Description here",
			photographerIcon:"assets/images/photographerIcon/photographerIcon_01.jpg",
			photographerName:"Ramon S."
		},
		{
			sampleImg:"assets/images/gallery/galeryPic_03.jpg",
			sampleImgAlt:"Description here",
			photographerIcon:"assets/images/photographerIcon/photographerIcon_01.jpg",
			photographerName:"Ramon S."
		},
		{
			sampleImg:"assets/images/gallery/galeryPic_04.jpg",
			sampleImgAlt:"Description here",
			photographerIcon:"assets/images/photographerIcon/photographerIcon_01.jpg",
			photographerName:"Ramon S."
		},
		{
			sampleImg:"assets/images/gallery/galeryPic_05.jpg",
			sampleImgAlt:"Description here",
			photographerIcon:"assets/images/photographerIcon/photographerIcon_01.jpg",
			photographerName:"Ramon S."
		},
		{
			sampleImg:"assets/images/gallery/galeryPic_06.jpg",
			sampleImgAlt:"Description here",
			photographerIcon:"assets/images/photographerIcon/photographerIcon_01.jpg",
			photographerName:"Ramon S."
		}
	];
	// photographersPricingPackages
	/*///reserved data
	ppp: {} = {
		photographerName: "Shannel Stewart",
		photographerIcon:"assets/images/photographerIcon/photographerIcon_01.jpg",
		price: 260,
		packageDesc: "Lorem Ipsum is simply dummy text of the prin. . .",
		featuredImages: [
			{
				imageName:"Dummy",
				source:"assets/images/photographerFeaturedImages/samplePic_01.jpg",
			},
			{
				imageName:"Dummy",
				source:"assets/images/photographerFeaturedImages/samplePic_02.jpg",
			},
			{
				imageName:"Dummy",
				source:"assets/images/photographerFeaturedImages/samplePic_03.jpg",
			}
		],
		packageLink: "",
		followers: 4479
	}
	/**/
	photographerPricingPakages: {}[] = [];

	ngOnInit() {
		this.photographerPricingPakages.push({
			photographerName: "Shannel Stewart",
			photographerIcon:"assets/images/photographerIcon/photographerIcon_01.jpg",
			price: 260,
			packageDesc: "Lorem Ipsum is simply dummy text of the prin. . .",
			featuredImages: [
				{
					imageName:"Dummy",
					source:"assets/images/photographerFeaturedImages/samplePic_01.jpg",
				},
				{
					imageName:"Dummy",
					source:"assets/images/photographerFeaturedImages/samplePic_02.jpg",
				},
				{
					imageName:"Dummy",
					source:"assets/images/photographerFeaturedImages/samplePic_03.jpg",
				}
			],
			packageLink: "",
			followers: 4479
		});
		this.photographerPricingPakages.push({
			photographerName: "Shannel Stewart",
			photographerIcon:"assets/images/photographerIcon/photographerIcon_01.jpg",
			price: 1780,
			packageDesc: "Lorem Ipsum is simply dummy text of the prin. . .",
			featuredImages: [
				{
					imageName:"Dummy",
					source:"assets/images/photographerFeaturedImages/samplePic_04.jpg",
				},
				{
					imageName:"Dummy",
					source:"assets/images/photographerFeaturedImages/samplePic_05.jpg",
				},
				{
					imageName:"Dummy",
					source:"assets/images/photographerFeaturedImages/samplePic_06.jpg",
				}
			],
			packageLink: "",
			followers: 4479
		});
		this.photographerPricingPakages.push({
			photographerName: "Shannel Stewart",
			photographerIcon:"assets/images/photographerIcon/photographerIcon_01.jpg",
			price: 9.70,
			packageDesc: "Lorem Ipsum is simply dummy text of the prin. . .",
			featuredImages: [
				{
					imageName:"Dummy",
					source:"assets/images/photographerFeaturedImages/samplePic_07.jpg",
				},
				{
					imageName:"Dummy",
					source:"assets/images/photographerFeaturedImages/samplePic_08.jpg",
				},
				{
					imageName:"Dummy",
					source:"assets/images/photographerFeaturedImages/samplePic_09.jpg",
				}
			],
			packageLink: "",
			followers: 4479
		});
		this.photographerPricingPakages.push({
			photographerName: "Shannel Stewart",
			photographerIcon:"assets/images/photographerIcon/photographerIcon_01.jpg",
			price: 3480,
			packageDesc: "Lorem Ipsum is simply dummy text of the prin. . .",
			featuredImages: [
				{
					imageName:"Dummy",
					source:"assets/images/photographerFeaturedImages/samplePic_10.jpg",
				},
				{
					imageName:"Dummy",
					source:"assets/images/photographerFeaturedImages/samplePic_11.jpg",
				},
				{
					imageName:"Dummy",
					source:"assets/images/photographerFeaturedImages/samplePic_12.jpg",
				}
			],
			packageLink: "",
			followers: 4479
		});
	}
	onRightClick(e){
		e.preventDefault();
	}

}
