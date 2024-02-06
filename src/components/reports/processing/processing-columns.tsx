"use client"

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DailyItem } from "@/data/type";

import { CellContext, ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

const createDailyColumns = (prefix: 'daily' | 'monthly' | 'yearly'): ColumnDef<DailyItem, any>[] => [
    {
      header: "ACT",
      accessorKey: `data.${prefix}.act`,
      cell: ({ cell }: CellContext<DailyItem, any>) =>
        cell.row.original.data[prefix].act,
    },
    {
      header: "BP",
      accessorKey: `data.${prefix}.bp`,
      cell: ({ cell }: CellContext<DailyItem, any>) =>
        cell.row.original.data[prefix].bp,
    },
    {
      header: "VAR",
      accessorKey: `data.${prefix}.var`,
      cell: ({ cell }: CellContext<DailyItem, any>) =>
        cell.row.original.data[prefix].var,
    },
  ];

export const processingColumns: ColumnDef<DailyItem, any>[] = [
  {
    header: "Processing",
    columns: [
      {
        header: "",
        accessorKey: "name",
      },
      {
        header: "Daily",
        columns: createDailyColumns('daily')
      },
      {
        header: "Monthly",
        columns: createDailyColumns('monthly')
      },
      {
        header: "Year",
        columns: createDailyColumns('yearly')
      },
      // {
      //   id: "actions",
      //   cell: ({ row }) => {
      //     const a = row.original;

      //     return (
      //       <DropdownMenu>
      //         <DropdownMenuTrigger>
      //           <Button variant="ghost" className="w-8 h-8 p-0">
      //             <MoreHorizontal className="h-4 w-4" />
      //           </Button>
      //         </DropdownMenuTrigger>
      //         <DropdownMenuContent>
      //           <DropdownMenuLabel>Actions</DropdownMenuLabel>
      //           <DropdownMenuItem
      //           // onClick={() => {
      //           //     navigator.clipboard.writeText()
      //           // }}
      //           >
      //             Copy something
      //           </DropdownMenuItem>
      //         </DropdownMenuContent>
      //       </DropdownMenu>
      //     );
      //   },
      // },
    ],
  },
];