import { Injectable } from '@angular/core';
import { BankingService } from './banking.service';

@Injectable({
  providedIn: 'root'
})
export class InternationalBankingService extends BankingService {

  getAccountType(): string {
    return 'international-account';
  }

  transferCredit(amount: number): void {
    console.log(`Transferred ${amount} from international account`);
  }
  
}
