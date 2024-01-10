import React from "react";
import GenericDataItem from "@/components/generic-data-item";
import { dryingColumns } from "./drying-columns";
import { DailyData, DailyItem } from "@/data/type";


interface DryingDataItemProps {
    dailyData: DailyData;
}

function DryingDataItem({ dailyData }: DryingDataItemProps) {
    const dryingData = dailyData.drying;
    return <GenericDataItem columns={dryingColumns} data={dryingData} />;
}

export default DryingDataItem;