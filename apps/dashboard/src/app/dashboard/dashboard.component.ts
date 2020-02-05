import { Component, OnInit } from '@angular/core';
import { AuthFacade } from '@mdv10/core-state';
import { ComputersService } from '@mdv10/core-data';

@Component({
  selector: 'mdv10-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  links = [
    {path: '/shoes', title: 'shoes', quantity: 69},
    {path: '/cars', title: 'cars', quantity: 10},
    {path: '/computers', title: 'computers', quantity: 18},
    {path: '/species', title: 'pets', quantity: 10},
  ];

  constructor(private service: ComputersService) { }

  ngOnInit(): void {
    this.service.all().subscribe((x) => {
      console.log(x)
    })
  }
}
