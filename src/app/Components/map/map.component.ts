import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/Models/ticket';
import { DataTransferService } from 'src/app/Services/data-transfer.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
 

  receivedData : Ticket =  {
    title : 'Sample Title 1',
    from : 'salman_khan@gmail.com',
    to : 'vivek_oberoi@gmail.com',
    status : 'Uncomplete',
    dueDate: '22/01/2023',
    latitude : 18.5204,
    longitude : 73.8567
  }
  constructor(private datatTransferService : DataTransferService) { 
        datatTransferService.data.subscribe(data=>{
        this.receivedData = data
        console.log(this.receivedData);
           
    })
  }

  ngOnInit(): void {
  }

}
