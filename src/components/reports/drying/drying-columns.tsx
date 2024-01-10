"use client";

import { Button } from "@/components/ui/button";
import { CellContext, ColumnDef } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowUpDown, MoreHorizontal, Rows } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Data, dataDaily } from "@/data/reportData";
import { DailyData, DailyItem } from "@/data/type";
import { Row, useRowSelect } from "react-table";

interface ColumnDefinition {
  header: React.ReactNode;
  accessorKey: string;
}

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

export const dryingColumns: ColumnDef<DailyItem, any>[] = [
  {
    header: "Drying",
    columns: [
      {
        header: "",
        accessorKey: "name",
      },
      {
        header: "Daily",
        columns: createDailyColumns('daily'),
      },
      {
        header: "Monthly",
        columns: createDailyColumns('monthly'),
      },
      {
        header: "Year",
        columns: createDailyColumns('yearly'),
      },
      {
        id: "actions",
        cell: ({ row }) => {
          const person = row.original;
          //const personId = person.id;
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
                  // onClick={() => {
                  //   navigator.clipboard.writeText(person.first_name.toString());
                  // }}
                >
                  Copy person name
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          );
        },
      },
    ],
  },
];