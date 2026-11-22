export interface TaxDeadline {
  name: string;
  due: string;
  category: string;
}

export interface EntitySchedule {
  title: string;
  deadlines: TaxDeadline[];
}
