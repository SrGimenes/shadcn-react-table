export type DailyMetrics = {
  act: number;
  bp: number;
  var: number;
};

export type DailyItem = {
  name: string;
  data: {
    daily: DailyMetrics;
    monthly: DailyMetrics;
    yearly: DailyMetrics;
  };
};

export type DailyData = {
  drying: DailyItem[];
  processing: DailyItem[];
  mine: DailyItem[];
};
