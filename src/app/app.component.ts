import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
import { AvailableCurrencies, CurrencyConverter } from './models';
import { CurrencyService } from './services/currency.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loading: boolean = false;
  form: FormGroup = new FormGroup({});
  currencies: { [key: string]: string } = {};
  result: string | undefined = undefined;

  constructor(private dp: DecimalPipe, private fb: FormBuilder, private service: CurrencyService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      format: ['json', [Validators.required]],
      from: [null, [Validators.required]],
      to: [null, [Validators.required]],
      amount: [null, [Validators.required]],
    });

    this.loading = true;
    this.service.getCurrencies().subscribe({
      next: ({currencies}: AvailableCurrencies) => {
        this.currencies = currencies;
        this.loading = false;
      },
      error: () => {}
    });
  }

  change(): void {
    const from = this.form.get('from')?.value;
    const to = this.form.get('to')?.value;

    if(from && to) {
      this.form.patchValue({
        from: to,
        to: from
      });
    }
  }

  submit(): void {
    if(this.form.valid) {
      this.loading = true;
      this.service.getConversion(this.form.value).subscribe({
        next: ({rates}: CurrencyConverter) => {
          const {from, to, amount} = this.form.value;
          this.result = `${this.dp.transform(amount, '1.2-2')} ${from} = ${this.dp.transform(rates[to].rate_for_amount, '1.2-2')} ${to}`;
          this.loading = false;
        },
        error: () => {}
      });
    }
  }
}
