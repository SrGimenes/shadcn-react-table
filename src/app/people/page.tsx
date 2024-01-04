import { PeopleDataTable } from "./data-table"
import { columns } from "./columns";
import { dataDaily } from "@/data/reportData";


type Props = {};

const People = (props: Props) => {
    return (
      <div className='container py-10 mx-auto'>
        <PeopleDataTable columns={columns} data={dataDaily} />
      </div>
    )
}

export default People;