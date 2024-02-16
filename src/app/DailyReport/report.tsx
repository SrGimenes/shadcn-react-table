"use client";

import { DatePicker } from "@/components/dataPickerRange";
import { dryingColumns } from "@/components/reports/drying/dryingColumns";
import GenericDataItem from "@/components/reports/tableReport/tableReport";
import { ThemeToggle } from "@/components/themeToggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { dataDaily } from "@/data/reportData";
import { DailyItem } from "@/data/type";

import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import React from "react";

interface DataItemProps {
  columns: ColumnDef<DailyItem, any>[];
  data: DailyItem[];
}

const DailyReport = ({ columns, data }: DataItemProps) => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );

  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),

    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
  });

  return (
    <div className="flex flex-col space-y-1">
      <div className="flex items-center py-4 gap-2">
        <Input
          placeholder="Filtrar por nome"
          value={(table.getColumn("name")?.getFilterValue() as string) || ""}
          onChange={(e) => {
            table.getColumn("name")?.setFilterValue(e.target.value);
            console.log(e.target.value)
          }}
          className="max-w-sm"
        />
        <Button className="ml-4">Export to PDF</Button>
        <ThemeToggle className="ml-4" />
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="outline" className="ml-4">
              Tipo de Relatório
            </Button>
          </DropdownMenuTrigger>
        </DropdownMenu>
        <DatePicker />
      </div>
    </div>
  );
}

export default DailyReport;