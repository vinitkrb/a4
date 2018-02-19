import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private http: HttpClient) {
   
  }
  
  // accessing data using http service.
  ngOnInit(): void {
    interface UserResponse {
      id: number;
      name: string;
      BU: string;
    }
    this.http.get<UserResponse>('assets/data/emp.json').subscribe(data => {
      console.log("User Id: " + data[0].id);
      console.log("Name: " + data[0].name);
      console.log("BU: " + data[0].BU);
    },
    (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.log("Client-side error occured.");
      } else {
        console.log("Server-side error occured.");
      }
    });
  }
  // Bar chart using ng2-charts 
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  //Chart Labels
  public barChartLabels: string[] = ['Trust-Hub', 'Pearson', 'Ascend-Learning', 'Vodaphone-Ziggo', 'Espn', 'Midas', 'Honeywell'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  //Chart data
  public barChartData: any[] = [
    { data: [431, 252, 312, 182, 156, 151, 243], label: 'Committed Story Points' },
    { data: [416, 223, 155.5, 282, 156, 351, 443], label: 'Completed Story Points' },
    { data: [99.46, 96, 80, 91, 82, 76, 89], label: 'Defects Closure rate' },
    { data: [103.61, 88.49, 49.84, 52.32, 41.25, 76.98, 79.23], label: 'Say Do Ratio' },
    { data: [185, 124, 170, 114, 165, 189, 285], label: 'Defects Resolved' },
    { data: [30, 10, 50, 4, 65, 29, 85], label: 'Defects Unresolved' },
  ];
  public barChartColors:Array<any> = [
    {
      backgroundColor: '#85B4E0',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(22,15,17,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    {
      backgroundColor: '#ED7E32',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    {
      backgroundColor: '#4573C4',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    {
      backgroundColor: '#F8C426',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    {
      backgroundColor: '#01B051',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    {
      backgroundColor: '#FF0101',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }];
  
  // Chart events
  public barChartClicked(e: any): void {
    console.log(e);
  }

  // Chart events
  public barChartHovered(e: any): void {
    console.log(e);
  }
  // Doughnut chart 
  public doughnutChartLabels: string[] = ['Committed Story Points', 'Completed Story Points', 'Defects Closure rate', 'Say Do Ratio', 'Defects Resolved', 'Defects Unresolved'];
  public doughnutChartData: number[] = [431, 416, 99.46,103.61,185,30];
  public doughnutChartType: string = 'doughnut';
  public doughnutchartClicked(e: any): void {
    console.log(e);
  }
  public doughnutchartHovered(e: any): void {
    console.log(e);
  }
// line chart using iconic3 
  public lineChartData:Array<any> = [
    { data: [66, 55, 83, 82, 56, 51, 43], label: 'Completed Story' },
    { data: [29, 38, 40, 21, 82, 30, 89], label: 'Defects Found' },
    { data: [12, 24, 72, 52, 41, 76, 79], label: 'Say Do Ratio' },
    { data: [8, 24, 18, 4, 65, 29, 85], label: 'Defects Resolved' }
  ];
  public lineChartLabels:Array<any> = ['Trust-Hub', 'Pearson', 'Ascend-Learning', 'Vodaphone-Ziggo', 'Espn', 'Midas', 'Honeywell'];
  public lineChartOptions:any = {
    responsive: true
  };
  
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
  
  public lineChartColors:Array<any> = [
    {
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(22,15,17,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    {
      backgroundColor: 'rgba(23,33,33,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    {
      backgroundColor: 'rgba(23,33,33,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    {
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }];
  
    // Chart events
    public chartClicked(e:any):void {
      console.log(e);
    }
  
    // Chart events
    public chartHovered(e:any):void {
      console.log(e);
    }


}