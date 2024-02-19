"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DailyData, DailyItem } from "@/data/type";

import {
  DropdownMenu,
  DropdownMenuCheckboxItemProps,
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

import React from "react";
import { ThemeToggle } from "../../themeToggle";
import { DatePicker } from "../../dataPickerRange";
import {
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdownMenu";

interface DataItemProps {
  columns: ColumnDef<DailyItem, any>[];
  data: DailyItem[];
}

type Checked = DropdownMenuCheckboxItemProps["checked"];

interface DataTypeProps {
  columns: ColumnDef<DailyData, any>[];
  data: DailyData[];
}

export function GenericDataItem(
  { columns: columnsDataItem, data: dataItem }: DataItemProps,
  { columns: columnsDataType, data: dataType }: DataTypeProps
) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = 
    React.useState<ColumnFiltersState>([]);

  const [showTypeDrying, setShowTypeDrying] = 
    React.useState<Checked>(true);

  const [showTypeProcessing, setShowTypeProcessing] =
    React.useState<Checked>();

  const [showTypeMine, setShowTypeMine] = 
    React.useState<Checked>();

  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});

  const [tableDataItem, setTableDataItem] =
    React.useState<DailyItem[]>(dataItem);

  const [tableDataType, setTableDataType] =
    React.useState<DailyData[]>(dataType);

  React.useEffect(() => {
    // Filtrar os dados com base nas opções selecionadas
    const filteredData = dataType.filter((item) => {
      if (showTypeDrying && item.hasOwnProperty("drying")) return true;
      if (showTypeProcessing && item.hasOwnProperty("processing")) return true;
      if (showTypeMine && item.hasOwnProperty("mine")) return true;
      return false;
    });
    console.log(filteredData);

    // Atualizar os dados da tabela
    setTableDataType(filteredData);
  }, [dataType, showTypeDrying, showTypeProcessing, showTypeMine]);

  const table = useReactTable({
    data: dataItem,
    columns: columnsDataItem,
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

  // const filterTableData = () => {
  //   const filteredData = filterData(data); // Reaplica o filtro aos dados
  //   table.setTableData(filteredData); // Define os dados filtrados na tabela
  // };

  return (
    <div>
      <div className="flex items-center py-4 gap-2">
        <Input
          placeholder="Filtrar por nome"
          value={(table.getColumn("name")?.getFilterValue() as string) || ""}
          onChange={(e) => {
            table.getColumn("name")?.setFilterValue(e.target.value);
            console.log(e.target.value);
          }}
          className="max-w-sm"
        />
        <Button className="ml-4">Export to PDF</Button>
        <ThemeToggle className="ml-4" />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-4 w-32">
              Report
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-auto">
            <DropdownMenuLabel>Select the report</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem
              checked={showTypeDrying}
              onCheckedChange={(checked) => {
                setShowTypeDrying(checked);
              }}
            >
              Drying
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={showTypeProcessing}
              onCheckedChange={(checked) => {
                setShowTypeProcessing(checked);
              }}
            >
              Processing
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={showTypeMine}
              onCheckedChange={(checked) => {
                setShowTypeMine(checked);
              }}
            >
              Mine
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DatePicker />
      </div>
      <div>
        <Table className="border">
          <TableHeader className="w-full">
            {table.getHeaderGroups().map((headerGroup) => {
              return (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    const isParentHeader =
                      header.column.columns && header.column.columns.length > 0;
                    const colSpanValue = isParentHeader
                      ? header.column.columns.length === 4
                        ? 10
                        : header.column.columns.length
                      : undefined;
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
              <TableRow key={row.id} className="hover:bg-cyan-50">
                {row.getVisibleCells().map((cell) => {
                  const hasAct = cell.column.columnDef.header === "ACT";
                  const border = hasAct ? "border-l" : "";
                  return (
                    <TableCell key={cell.id} className={border}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  );
                })}
              </TableRow>
            )) ?? (
              <TableRow>
                <TableCell>No results</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-start space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            table.previousPage();
          }}
          disabled={!table.getCanPreviousPage()}
          className="hover:bg-cyan-50"
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
          className="hover:bg-cyan-50"
        >
          Próximo
        </Button>
      </div>
    </div>
  );
}

export default GenericDataItem;
