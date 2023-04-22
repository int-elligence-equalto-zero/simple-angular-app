import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Ticket } from '../Models/ticket';
@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
  public data = new BehaviorSubject<Ticket>( {
    title : 'Sample Title 1',
    from : 'salman_khan@gmail.com',
    to : 'vivek_oberoi@gmail.com',
    status : 'Uncomplete',
    dueDate: '22/01/2023',
    latitude : 18.5204,
    longitude : 73.8567
  });
  constructor() { }

  updateData(newData: Ticket) {
    this.data.next(newData);
  }


}
