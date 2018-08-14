import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visitor-profile',
  templateUrl: './visitor-profile.component.html',
  styleUrls: ['./visitor-profile.component.scss']
})
export class VisitorProfileComponent implements OnInit {

	userInfo: {} = {
		name: "Johnnattan B.",
		country: "United Kingdom",
		email: "@johnnatanbrookphotos",
		followers: 1
	};
	profilePicture: {} = { imgSrc: "assets/images/profile/userFolder/albums/profile_pictures/profile01.jpg",alt:"####"};
	timelinePicture:  {} = { imgSrc: "assets/images/profile/userFolder/albums/timeline_pictures/timelinename_01.jpg",alt:"####"};
	porfolioImages: {}[] = [
		{ imgSrc: "assets/images/profile/userFolder/albums/portfolio_images/portfolio_img_01.jpg",alt:"####"},
		{ imgSrc: "assets/images/profile/userFolder/albums/portfolio_images/portfolio_img_02.jpg",alt:"####"},
		{ imgSrc: "assets/images/profile/userFolder/albums/portfolio_images/portfolio_img_03.jpg",alt:"####"},
		{ imgSrc: "assets/images/profile/userFolder/albums/portfolio_images/portfolio_img_04.jpg",alt:"####"},
		{ imgSrc: "assets/images/profile/userFolder/albums/portfolio_images/portfolio_img_05.jpg",alt:"####"},
		{ imgSrc: "assets/images/profile/userFolder/albums/portfolio_images/portfolio_img_06.jpg",alt:"####"},
		{ imgSrc: "assets/images/profile/userFolder/albums/portfolio_images/portfolio_img_07.jpg",alt:"####"},
		{ imgSrc: "assets/images/profile/userFolder/albums/portfolio_images/portfolio_img_08.jpg",alt:"####"},
		{ imgSrc: "assets/images/profile/userFolder/albums/portfolio_images/portfolio_img_09.jpg",alt:"####"}
	];
	photographerPricingPakages: {}[] = [];

  constructor() { }

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

}
