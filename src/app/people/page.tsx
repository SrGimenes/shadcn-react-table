import React from 'react';
import { people } from "@/people";
import { columns } from "./columns"
import { PeopleDataTable } from "./data-table"

type Props = {};

const People = (props: Props) => {
    return (
      <PeopleDataTable columns={columns} data={people} />
    )
}

export default People;


// export default async function People(params:type) {
//   const data = await getData()

//   return (
//     <div className="container mx-auto py-10">
//       <DataTable columns={columns} data={data}></DataTable>
//     </div>
//   )
// }