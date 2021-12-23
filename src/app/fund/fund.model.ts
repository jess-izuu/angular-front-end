export interface Fund {
  name?: string;
  ticker?: string;
  asset_class?: string;
  risk_level?: number;
  expense_ratio?: number;
  investment_min?: number;
  price?: number;
  change_price?: number;
  summary?: string;
  id?: number;
}
