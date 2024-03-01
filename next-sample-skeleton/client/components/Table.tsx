'use client';

import { DATA } from "@/utils/fakedata";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { columnOptions } from "./Column";
import { sheetId, hf } from "@/utils/hyperFormulaConfig";

const Table = () => {

  const currSheetId = sheetId as number;
  const { width, height } = hf.getSheetDimensions(currSheetId);
  console.log('width: ', width);
  console.log('height: ', height);
  // TODO: For tanstack react-table lib
  const table = useReactTable({
    data: DATA,
    columns: columnOptions,
    getCoreRowModel: getCoreRowModel(),
  });

  const MyHeaderWithLotsOfColumns = () => {
    const headerColumnssss = [];
    for (let i = 0; i < width; i++) {
      headerColumnssss.push(
        <th className="text-white border border-slate-600 h-12 px-4 text-left align-middle font-medium text-muted-foreground text-nowrap">State {i}</th>
      )
    }
    return (
      <thead className={`bg-[#BD0F72]`}>
        <tr>
          {headerColumnssss}
        </tr>
      </thead>
    );
  }

  // Where the formula implemented
  const BunchOfRows = () => {
    const rows = [];
    const columns = [];

    for (let i = 0; i < width; i++) {
      columns.push(
        <td className="border border-slate-700 p-3 align-middle text-nowrap">Column {i}</td>
      )
    }

    for (let i = 0; i < height; i++) {
      rows.push(
        <tr>
          {columns}
        </tr>
      )
    }

    return (
      <tbody>
        {rows}
      </tbody>
    );
  }

  return (
    <div className={`overflow-auto`}>
      <table className="w-full h-full border-collapse border border-slate-500">
        {<MyHeaderWithLotsOfColumns />}
        {<BunchOfRows />}
      </table>
    </div>
  )
}

export default Table;