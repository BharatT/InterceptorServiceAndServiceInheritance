import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class BankingService {
  abstract getAccountType(): string;
  abstract transferCredit(amount: number): void;
}
