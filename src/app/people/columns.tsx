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
        header: "Name",
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
          }
        ],
      },
    ],
  },
];
