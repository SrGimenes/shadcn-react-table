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

export const columns: ColumnDef<DailyItem, any>[] = [
  {
    header: "Drying",
    columns: [
      {
        header: "",
        accessorKey: "name",
      },
      {
        header: "Daily",
        columns: [
          {
            header: "ACT",
            accessorKey: "data.daily.act",
            cell: ({ cell }: CellContext<DailyItem, any>) =>
              cell.row.original.data.daily.act,
          },
          {
            header: "BP",
            accessorKey: "data.daily.bp",
            cell: ({ cell }: CellContext<DailyItem, any>) =>
              cell.row.original.data.daily.bp,
          },
          {
            header: "VAR",
            accessorKey: "data.daily.var",
            cell: ({ cell }: CellContext<DailyItem, any>) =>
              cell.row.original.data.daily.var,
          },
        ],
      },
      {
        header: "Monthly",
        columns: [
          {
            header: "ACT",
            accessorKey: "data.monthly.act",
            cell: ({ cell }: CellContext<DailyItem, any>) =>
              cell.row.original.data.monthly.act,
          },
          {
            header: "BP",
            accessorKey: "data.montlhy.bp",
            cell: ({ cell }: CellContext<DailyItem, any>) =>
              cell.row.original.data.monthly.bp,
          },
          {
            header: "VAR",
            accessorKey: "data.montlhy.var",
            cell: ({ cell }: CellContext<DailyItem, any>) =>
              cell.row.original.data.monthly.var,
          },
        ],
      },
      {
        header: "Year",
        columns: [
          {
            header: "ACT",
            accessorKey: "data.yearly.act",
            cell: ({ cell }: CellContext<DailyItem, any>) =>
              cell.row.original.data.yearly.act,
          },
          {
            header: "BP",
            accessorKey: "data.yearly.bp",
            cell: ({ cell }: CellContext<DailyItem, any>) =>
              cell.row.original.data.yearly.var,
          },
          {
            header: "VAR",
            accessorKey: "data.yearly.var",
            cell: ({ cell }: CellContext<DailyItem, any>) =>
              cell.row.original.data.yearly.var,
          },
        ],
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
