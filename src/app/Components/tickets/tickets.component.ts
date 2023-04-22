import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/Models/ticket';
import { DataTransferService } from 'src/app/Services/data-transfer.service';
@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  dataToSend : Ticket =  {
    title : 'Sample Title 1',
    from : 'salman_khan@gmail.com',
    to : 'vivek_oberoi@gmail.com',
    status : 'Uncomplete',
    dueDate: '22/01/2023',
    latitude : 18.5204,
    longitude : 73.8567
  }

  chipColor:any ={
      background_red: '#ff3d001a',
      color_red: '#FF3D00',
      background_green: '#53D86A',
      color_green: '#D7E5DA',
      background_grey: '#B8B9BC',
      color_grey: '#ECECED'
  }

  ticketsList : Ticket[] =[
    {
      title : 'Sample Title 1',
      from : 'salman_khan@gmail.com',
      to : 'vivek_oberoi@gmail.com',
      status : 'uncomplete',
      dueDate: '22/01/2023',
      latitude : 19.0760,
      longitude : 72.8777
    },
    {
      title : 'Sample Title 2',
      from : 'salman_khan@gmail.com',
      to : 'vivek_oberoi@gmail.com',
      status : 'uncomplete',
      dueDate: '22/01/2023',
      latitude : 22.7196,
      longitude : 75.8577
    },
    {
      title : 'Sample Title 3',
      from : 'salman_khan@gmail.com',
      to : 'vivek_oberoi@gmail.com',
      status : 'low_risk',
      dueDate: '22/01/2023',
      latitude : 28.7041,
      longitude : 77.1025
    },
    {
      title : 'Sample Title 4',
      from : 'salman_khan@gmail.com',
      to : 'vivek_oberoi@gmail.com',
      status : 'needs_review',
      dueDate: '22/01/2023',
      latitude : 22.5726,
      longitude : 88.3639
    },
  
  ]
  constructor(private dataTransferService : DataTransferService) {
   }

  ngOnInit(): void {
  }

  sendCoordinates(ticket:Ticket)
  {
    this.dataTransferService.updateData(ticket)
  }

  getBackgroundColor(ticket:any){
    console.log(ticket);
    
  }

}
