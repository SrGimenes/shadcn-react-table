export type DailyMetrics = {
  act: string;
  bp: string;
  var: string;
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