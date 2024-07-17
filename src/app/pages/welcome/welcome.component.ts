import { Component, OnInit } from '@angular/core';


import { PetInfoComponent } from "../../components/pet-info/pet-info.component";

@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  imports: [ PetInfoComponent ]
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
