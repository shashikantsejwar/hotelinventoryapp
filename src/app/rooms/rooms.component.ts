import { Component, OnInit } from '@angular/core';
import { Room } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent implements OnInit {
  
  hotelName = "Hamilton Hotel";
  numberOfRooms = 10;
  hideRooms = false;

  rooms: Room = {
    availableRooms: 10,
    bookedRooms: 5,
    totalRooms: 20
  }

  constructor(){ }

  ngOnInit(): void {
    
  }

  buttonClick(){
    this.hideRooms = !this.hideRooms;
  }

}
