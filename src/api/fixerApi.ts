interface FixerResultBase {
  success: boolean;
  date: string;
}

export interface Currencies {
  success: boolean;
  symbols: { [symbol: string]: number };
}
export interface Symbols {
  symbol: string;
  description: string;
}
export interface LatestResult extends FixerResultBase {
  base: string;
  rates: { [symbol: string]: number };
}

export interface ConvertResult extends FixerResultBase {
  result: number;
}