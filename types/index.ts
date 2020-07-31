export interface YearAndVariety {
  key: number;
  percentage: number;
}

export interface WineProps {
  lotCode: string;
  volume: number;
  description: string | null;
  tankCode: string;
  productState: string | 'Unknown';
  ownerName: string;
  components: [
    {
      percentage: number;
      year: number;
      variety: string;
      region: string;
    }
  ];
}

export interface DynamicWineProps {
  wine: WineProps;
}
export interface BarChartProps {
  data: {
    breakDownType: string;
    breakdown: {
      year: [YearAndVariety];
      variety: [YearAndVariety];
    };
  };
}
export interface PieChartProps {
  data: {
    breakDownType: string;
    breakdown: [YearAndVariety];
  };
}
