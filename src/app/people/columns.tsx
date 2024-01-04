"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Data } from "@/data/reportData";

interface ColumnDefinition {
  header: React.ReactNode;
  accessorKey: string;
}

export const columns: ColumnDef<Data>[] = [
  {
    header:"Drying",
    columns: [
      {
        accessorKey: ""
      }
    ]
  },
  {
    header: "Daily",
    enableGrouping: true,
    columns: [
      {
        header: "ACT",
        enableGrouping: true,
        columns: [
          {
            accessorKey: "name",
          },
        ],
      },
      {
        header: "BP",
        enableGrouping: true,
        columns: [
          {
            accessorKey: "last_name",
          },
        ]
      },
      {
        header:"VAR",
        enableGrouping: true,
        columns: [
          {
            accessorKey: "email",
          },
        ]
      }
    ],
  },
  {
    header: "Monthly",
    enableGrouping: true,
    columns: [
      {
        header: "ACT",
        enableGrouping: true,
        columns: [
          {
            header: "Monthly",
            //accessorKey: "first_name",
          },
        ],
      },
      {
        header: "BP",
        enableGrouping: true,
        columns: [
          {
            accessorKey: "last_name",
          },
        ]
      },
      {
        header:"VAR",
        enableGrouping: true,
        columns: [
          {
            accessorKey: "email",
          },
        ]
      }
    ],
  },
  {
    header: "Yearly",
    enableGrouping: true,
    columns: [
      {
        header: "ACT",
        enableGrouping: true,
        columns: [
          {
            accessorKey: "first_name",
          },
        ],
      },
      {
        header: "BP",
        enableGrouping: true,
        columns: [
          {
            accessorKey: "last_name",
          },
        ]
      },
      {
        header:"VAR",
        enableGrouping: true,
        columns: [
          {
            accessorKey: "email",
          },
        ]
      }
    ],
  },
  // {
  //   id: "actions",
  //   cell: ({ row }) => {
  //     const person = row.original;
  //     const personId = person.id;
  //     return (
  //       <DropdownMenu>
  //         <DropdownMenuTrigger asChild>
  //           <Button variant="ghost" className="w-8 h-8 p-0">
  //             <MoreHorizontal className="h-4 w-4" />
  //           </Button>
  //         </DropdownMenuTrigger>
  //         <DropdownMenuContent>
  //           <DropdownMenuLabel>Actions</DropdownMenuLabel>
  //           <DropdownMenuItem
  //             onClick={() => {
  //               navigator.clipboard.writeText(person.first_name.toString());
  //             }}
  //           >
  //             Copy person name
  //           </DropdownMenuItem>
  //         </DropdownMenuContent>
  //       </DropdownMenu>
  //     );
  //   },
  // },
];
