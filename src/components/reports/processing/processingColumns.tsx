"use client";

import { DailyItem } from "@/data/type";

import { CellContext, ColumnDef } from "@tanstack/react-table";

const createDailyColumns = (
  prefix: "daily" | "monthly" | "yearly"
): ColumnDef<DailyItem, any>[] => [
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
        columns: createDailyColumns("daily"),
      },
      {
        header: "Monthly",
        columns: createDailyColumns("monthly"),
      },
      {
        header: "Year",
        columns: createDailyColumns("yearly"),
      },
    ],
  },
];
