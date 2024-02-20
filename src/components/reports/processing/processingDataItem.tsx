import GenericDataItem from "@/components/reports/tableReport/tableReport";
import { DailyData } from "@/data/type";
import { processingColumns } from "./processingColumns";

interface ProcessingDataItemProps {
  dailyData: DailyData;
}

function ProcessingDataItem({ dailyData }: ProcessingDataItemProps) {
  const processingData = dailyData.processing;
  return <GenericDataItem columns={processingColumns} data={processingData} />;
}

export default ProcessingDataItem;
