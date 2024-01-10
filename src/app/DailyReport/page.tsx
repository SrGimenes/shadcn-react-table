import { mineColumns } from "@/components/reports/mining/mining-columns";
import { GenericDataItem } from "../../components/generic-data-item"
import { dryingColumns } from "../../components/reports/drying/drying-columns";
import { dataDaily } from "@/data/reportData";
import { processingColumns } from "@/components/reports/processing/processing-columns";

type Props = {};

const Report = (props: Props) => {
    return (
      <div className='container py-10 mx-auto'>
        <GenericDataItem columns={dryingColumns} data={dataDaily.drying} /> 
        {/* <GenericDataItem columns={mineColumns} data={dataDaily.mine}/>
        <GenericDataItem columns={processingColumns} data={dataDaily.processing}/>      */}
      </div>
    )
}

export default Report;