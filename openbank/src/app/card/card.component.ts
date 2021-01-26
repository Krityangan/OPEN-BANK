import { Component, Input, OnInit } from '@angular/core';

function input() {
  
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() logo: string = '';
  @Input() title: string = '';
  @Input() description: string  = '';

  constructor() { }

  ngOnInit(): void {
  }

}
