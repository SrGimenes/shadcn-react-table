"use client";

import { Button } from "@/components/ui/button";
import { Person } from "@/people";
import { ColumnDef } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

interface ColumnDefinition {
  header: React.ReactNode;
  accessorKey: string;
}

export const columns: ColumnDef<Person>[] = [
  {
    header: "Daily",
    enableGrouping: true,
    columns: [
      {
        header: "ACT",
        enableGrouping: true,
        columns: [
          {
            //header: "Monthly",
            accessorKey: "last_name",
          },
          // {
          //   id: "select",
          //   header: ({ table }) => {
          //     return (
          //       <Checkbox
          //         checked={table.getIsAllPageRowsSelected()}
          //         onCheckedChange={(value) => {
          //           table.toggleAllPageRowsSelected(!!value);
          //         }}
          //       />
          //     );
          //   },
          //   cell: ({ row }) => {
          //     return (
          //       <Checkbox
          //         checked={row.getIsSelected()}
          //         onCheckedChange={(value) => {
          //           row.toggleSelected(!!value);
          //         }}
          //       />
          //     );
          //   },
          // },
        ],
      },
      {
        header: "BP",
        enableGrouping: true,
        columns: [
          {
            //header: "First Name",
            accessorKey: "first_name",
            // cell: (props) => (
            //   <div className="text-center">
            //     <div className="text-sm text-gray-500">Title</div>
            //     <div className="font-bold">{props.row.original.first_name}</div>
            //   </div>
            // ),
          },
        ]
      },
      {
        header:"VAR",
        enableGrouping: true,
        columns: [
          {
            //header: "Yearly",
            accessorKey: "email",
          },
        ]
      }
    ],
  },

  // {
  //   header: ({ column }) => {
  //     return (
  //       <Button
  //         variant="ghost"
  //         onClick={() => {
  //           column.toggleSorting(column.getIsSorted() === "asc");
  //         }}
  //       >
  //         Person ID
  //         <ArrowUpDown className="ml-2 h-4 w-4" />
  //       </Button>
  //     );
  //   },
  //   accessorKey: "id",
  // },
  // {
  //   header: "Gender",
  //   accessorKey: "gender",
  // },
  // {
  //   header: "Birth Day",
  //   accessorKey: "date_of_birth",
  //   cell: ({ row }) => {
  //     const date_of_birth = row.getValue("date_of_birth");
  //     const formatted = new Date(date_of_birth as string).toLocaleDateString();
  //     return <div className="font-medium">{formatted}</div>;
  //   },
  // },
  {
    id: "actions",
    cell: ({ row }) => {
      const person = row.original;
      const personId = person.id;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="w-8 h-8 p-0">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => {
                navigator.clipboard.writeText(person.first_name.toString());
              }}
            >
              Copy person name
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
