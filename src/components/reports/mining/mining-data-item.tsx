import GenericDataItem from "@/components/generic-data-item";
import { DailyData } from "@/data/type";
import { mineColumns } from "./mining-columns";

interface MiningDataItemProps {
    dailyData: DailyData;
}

function MiningDataItem({dailyData}: MiningDataItemProps) {
    const miningData = dailyData.mine;
    return <GenericDataItem columns={mineColumns} data={miningData} />;
}

export default MiningDataItem;