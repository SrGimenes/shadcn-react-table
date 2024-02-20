"use client";

import { GenericDataItem } from "../../components/reports/tableReport/tableReport";
import { dryingColumns } from "../../components/reports/drying/dryingColumns";
import { dataDaily } from "@/data/reportData";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdownMenu";
import { Button } from "@/components/ui/button";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import { ThemeToggle } from "@/components/themeToggle";
import { DatePicker } from "@/components/dataPickerRange";
import { processingColumns } from "@/components/reports/processing/processingColumns";
import { mineColumns } from "@/components/reports/mining/miningColumns";

type Checked = DropdownMenuCheckboxItemProps["checked"];

const Report = () => {
  const [showTypeDrying, setShowTypeDrying] = React.useState<Checked>();

  const [showTypeProcessing, setShowTypeProcessing] = React.useState<Checked>();

  const [showTypeMine, setShowTypeMine] = React.useState<Checked>(true);

  const renderSelectedComponents = () => {
    return [
      showTypeMine && (
        <GenericDataItem
          key="mine"
          columns={mineColumns}
          data={dataDaily.mine}
        />
      ),
      showTypeProcessing && (
        <GenericDataItem
          key="processing"
          columns={processingColumns}
          data={dataDaily.processing}
        />
      ),
      showTypeDrying && (
        <GenericDataItem
          key="drying"
          columns={dryingColumns}
          data={dataDaily.drying}
        />
      ),
    ].filter(Boolean);
  };

  return (
    <div className="container py-10 mx-auto">
      <div className="flex items-center py-4 gap-2">
        <Button variant="default" className="ml-4">
          Export to PDF
        </Button>
        <ThemeToggle className="ml-4" />
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="ml-4">
            <Button variant="outline" className="w-36">
              Report
            </Button>
          </DropdownMenuTrigger>
          <div className="items-center">
            <DropdownMenuContent className="w-36">
              <DropdownMenuLabel>Select the report</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem
                checked={showTypeMine}
                onCheckedChange={(checked) => {
                  setShowTypeMine(checked);
                }}
              >
                Mine
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
                checked={showTypeDrying}
                onCheckedChange={(checked) => {
                  setShowTypeDrying(checked);
                }}
              >
                Drying
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </div>
        </DropdownMenu>
        <DatePicker />
      </div>
      <div>{renderSelectedComponents()}</div>
    </div>
  );
};

export default Report;
