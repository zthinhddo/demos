import { RowModel, Table, TableOptions } from "@tanstack/react-table";
import { DATA } from "./fakedata";
import { COLUMNS } from "@/components/Column";

export const tableOptions: TableOptions<any> = {
  columns: COLUMNS,
  data: DATA,
  getCoreRowModel: function (table: Table<any>): () => RowModel<any> {
    throw new Error("Function not implemented.");
  }
}