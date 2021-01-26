import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  selectedIncomeValue: number = 100000;
  selectedExpenseValue: number = 0;
  selectedTenureValue: string = '';
  isChecked = true;
  
  tenureList: any[] = [
    {
      label: '3 Months'
    },
    {
      label: '6 Months'
    },
    {
      label: '9 Months'
    },
    {
      label: '12 Months'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
