import { PeopleDataTable } from "./data-table"
import { columns } from "./columns";
import { dataDaily } from "@/data/reportData";
import { DailyData, DailyItem } from "@/data/type";


type Props = {};

const People = (props: Props) => {
    return (
      <div className='container py-10 mx-auto'>
        <PeopleDataTable columns={columns} data={dataDaily.drying} />
        <PeopleDataTable columns={columns} data={dataDaily.processing} />
        <PeopleDataTable columns={columns} data={dataDaily.mine} />
      </div>
    )
}

export default People;