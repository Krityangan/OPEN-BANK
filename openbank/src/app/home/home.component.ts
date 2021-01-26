import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public cardInfoList1: any[] = [
    {
      logo: 'Get Paid Instantly.png',
      title: 'Quick cash disbursement',
      description: 'Get terms loans that your business needs within 72 hrs'
    },
    {
      logo: 'Low interest rate.png',
      title: 'Low-interest rate',
      description: 'Achieve your financial goals with an amazing interest rate starting at 13% per annum'
    },
    {
      logo: 'Secure Payments.png',
      title: 'Zero Paperwork',
      description: 'Get started instantly by submitting only your basic details & bank statements'
    }
  ];

  public cardInfoList2: any[] = [
    {
      logo: 'freelancer_feature_icon_6@1.5x.png',
      title: 'Ace your business finances',
      description: 'Manage banking, accounting & everything in between, on one platform'
    },
    {
      logo: 'Covid.png',
      title: 'Loans to fight COVID-19',
      description: 'Zero EMI for first 3 months on Back-to-Business loans of upto 1 lakh'
    }
  ]

  @HostListener('window:scroll', ['$event'])

  scrollFunction(event: any) {
    let domEl: HTMLElement | null = document.getElementById("nav-bar");
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
      if(domEl) {
        domEl.style.backgroundColor = 'white';
        domEl.style.height = '12%';
        let imgEl: HTMLElement | null = document.getElementById("org-logo");
        if(imgEl) {
          imgEl.style.height = '70';
          imgEl.style.width = '70';
        }        
      }
            
    } else {
      if(domEl) {
        domEl.style.backgroundColor = 'transparent';
        domEl.style.height = 'auto';
        let imgEl: HTMLElement | null = document.getElementById("org-logo");
        if(imgEl) {
          imgEl.style.height = '100';
          imgEl.style.width = '100';
        }
      }      
    }
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
