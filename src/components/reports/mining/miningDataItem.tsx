import GenericDataItem from "@/components/reports/tableReport/tableReport";
import { DailyData } from "@/data/type";
import { mineColumns } from "./miningColumns";

interface MiningDataItemProps {
  dailyData: DailyData;
}

function MiningDataItem({ dailyData }: MiningDataItemProps) {
  const miningData = dailyData.mine;
  return <GenericDataItem columns={mineColumns} data={miningData} />;
}

export default MiningDataItem;
