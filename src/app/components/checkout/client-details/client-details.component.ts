import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { City } from 'src/app/models/city';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss']
})
export class ClientDetailsComponent implements OnInit {
  @Input() parent: FormGroup | undefined;
  cities: City[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
