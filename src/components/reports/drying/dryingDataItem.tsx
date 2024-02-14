import React from "react";
import GenericDataItem from "@/components/reports/tableReport/tableReport";
import { dryingColumns } from "./dryingColumns";
import { DailyData, DailyItem } from "@/data/type";


interface DryingDataItemProps {
    dailyData: DailyData;
}

function DryingDataItem({ dailyData }: DryingDataItemProps) {
    const dryingData = dailyData.drying;
    return <GenericDataItem columns={dryingColumns} data={dryingData} />;
}

export default DryingDataItem;