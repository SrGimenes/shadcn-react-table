import { Person } from "@/people";
import { ColumnDef } from '@tanstack/react-table';

export const columns: ColumnDef<Person>[] = [
    {
        header: "Person ID",
        accessorKey: "id"
    },
    {
        header: "First Name",
        accessorKey: "first_name"
    },
    {
        header: "Email",
        accessorKey: "email"
    },
    {
        header: "Gender",
        accessorKey: "gender"
    },
    {
        header: "Birth Day",
        accessorKey: "date_of_birth"
    }
]

