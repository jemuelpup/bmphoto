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
      imgSrc: "assets/images/icon_02.png",
      text: "Photography"
    },{
      imgSrc: "assets/images/icon_02.png",
      text: "Photography"
    },{
      imgSrc: "assets/images/icon_02.png",
      text: "Photography"
    }
  ];

  ngOnInit() {
  }

}
