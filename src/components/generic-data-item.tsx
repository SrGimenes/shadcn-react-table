"use client";

import { Button } from "@/components/ui/button";
import { DropdownMenuContent } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DailyItem } from "@/data/type";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { table } from "console";

import React from "react";
import { ThemeToggle } from "./ThemeToggle";
import { DatePickerWithRange } from "./DataPickerRange";


interface DataItemProps {
  columns: ColumnDef<DailyItem, any>[];
  data: DailyItem[];
}

export function GenericDataItem({ columns, data }: DataItemProps) {
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
    <div>
      {/* input */}
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter by name"
          value={
            (table.getColumn("name")?.getFilterValue() as string) || ""
          }
          onChange={(e) => {
            table.getColumn("name")?.setFilterValue(e.target.value);
          }}
          className="max-w-sm"
        />

        <Button className="ml-4">
          Export to PDF
        </Button>
        <ThemeToggle className="ml-4"/>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="outline" className="ml-4" >Columns</Button>
            
          </DropdownMenuTrigger>
          {/* <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value: boolean) => {
                      column.toggleVisibility(!!value);
                    }}
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent> */}
        </DropdownMenu>
        <DatePickerWithRange className="ml-4"/>
      </div>
      {/* table */}
      <div className="rounded-md border">
        <Table>
          <TableHeader className="w-full ">
            {table.getHeaderGroups().map((headerGroup) => {
              return (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    const isParentHeader =
                      header.column.columnDef.columns &&
                      header.column.columnDef.columns.length > 0; 
                    const colSpanValue = isParentHeader
                      ? header.column.columnDef.columns.length === 4 ? 10 : header.column.columnDef.columns.length
                      : undefined;
                      {console.log(isParentHeader, "isParentHeader")}
                      {console.log(colSpanValue, "colSpanValue")}
                      {console.log(header.column.columnDef.header, "header.column.columnDef.header")}
                      {console.log(header.getContext(), "header.getContext()")}
                    return (
                      <TableHead
                        key={header.id}
                        colSpan={colSpanValue}
                        className={
                          isParentHeader
                            ? "justify-center text-center"
                            : undefined
                        }
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableHeader>

          <TableBody>
            {table.getRowModel().rows?.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}
                    className="border-b"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    {/* {cell.getValue()} */}
                  </TableCell>
                ))}
              </TableRow>
            )) ?? (
              <TableRow>
                <TableCell>No results</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {/* pagination */}
      <div className="flex items-center justify-start space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            table.previousPage();
          }}
          disabled={!table.getCanPreviousPage()}
        >
          Anterior
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            table.nextPage();
          }}
          disabled={!table.getCanNextPage()}
        >
          Próximo
        </Button>
      </div>
    </div>
  );
}

export default GenericDataItem;