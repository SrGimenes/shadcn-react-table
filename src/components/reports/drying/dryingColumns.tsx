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
} from "@/components/ui/dropdownMenu";
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
    ],
  },
];