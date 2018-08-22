import { Component, OnInit, Input } from '@angular/core';
import { PhotographerCard } from '../../models/photographer-card';

@Component({
  selector: 'app-photographer-card',
  templateUrl: './photographer-card.component.html',
  styleUrls: ['./photographer-card.component.scss']
})
export class PhotographerCardComponent implements OnInit {

	@Input() photographerCard:PhotographerCard;
  constructor() { }

  ngOnInit() {
  }

}
