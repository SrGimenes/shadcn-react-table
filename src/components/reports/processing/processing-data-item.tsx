import GenericDataItem from "@/components/generic-data-item";
import { DailyData } from "@/data/type";
import { processingColumns } from "./processing-columns";

interface ProcessingDataItemProps {
  dailyData: DailyData;
}

function ProcessingDataItem({ dailyData }: ProcessingDataItemProps) {
  const processingData = dailyData.processing;
  return <GenericDataItem columns={processingColumns} data={processingData}/>;
}

export default ProcessingDataItem; 