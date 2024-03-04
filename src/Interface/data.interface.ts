interface Occasion {
  Occasion: string;
  Date: string;
  Day: string;
}

export interface TotalYear {
  [monthYear: string]: Occasion[];
}
