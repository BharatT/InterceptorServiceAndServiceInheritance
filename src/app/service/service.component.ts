import { Component, OnInit } from '@angular/core';
import { BankingService } from '../banking.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  accountType: string;

  constructor(
    private bankingService: BankingService
  ) {}

  ngOnInit(): void {
    this.accountType = this.bankingService.getAccountType();
  }

  confirm() {
    this.bankingService.transferCredit(Math.random() * 10000);
  }

}
