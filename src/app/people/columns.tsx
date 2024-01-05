"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef, RowSelection } from "@tanstack/react-table";
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
import { useRowSelect } from "react-table";

interface ColumnDefinition {
  header: React.ReactNode;
  accessorKey: string;
}

export const columns: ColumnDef<DailyItem,any>[] = [
  {
    header:"Drying",
    columns: [
      {
        header: "Name",
        accessorKey: "name"
      }
    ]
  },
];
