export interface CurrencyConverter {
  base_currency_code: string;
  base_currency_name: string;
  amount:             string;
  updated_date:       string;
  rates:              { [key: string]: Rate };
  status:             string;
}

export interface Rate {
  currency_name:   string;
  rate:            string;
  rate_for_amount: string;
}
