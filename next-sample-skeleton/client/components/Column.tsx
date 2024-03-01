import { VesselInformation } from "@/utils/types";
import { ColumnDef } from "@tanstack/react-table";

export const columnOptions: ColumnDef<VesselInformation>[] = [
  {
    accessorKey: "vesselID",
    header: () => <div className={`text-right`}><strong>Vessel ID</strong></div>,
    cell: ({ row }) => <div className="lowercase">{row.getValue("vesselID")}</div>,
  },
  {
    id: "vesselName"
  },
  {
    id: "vesselType"
  },
  {
    accessorKey: "capacity",
    header: () => <div className="text-right">Capacity</div>,
    cell: ({ row }) => {
      const capacity = parseInt(row.getValue("capacity"))


      return <div className="text-right font-medium">{capacity}</div>
    },
  },
  {
    accessorKey: "yearBuilt",
    header: () => <div className={`text-right`}>Year Built</div>,
    cell: ({ row }) => <div className={`text-right font-medium`}>{row.getValue("yearBuild")}</div>
  },
  {
    accessorKey: "owner",
    header: () => <div className={`text-right`}>Owner</div>,
    cell: ({ row }) => <div className={`text-right font-medium`}>{row.getValue("owner")}</div>
  },
  {
    accessorKey: "price",
    header: () => <div className={`text-right`}>Price</div>,
    cell: ({ row }) => {
      const price = parseFloat(row.getValue("price"));
      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(price)

      return <div className={`text-right font-medium`}>{formatted}</div>
    }
  },
  {
    id: "chartered",
    header: () => <div className={`text-right`}>Is Chartered?</div>,
    cell: ({ row }) => <div className={`text-right font-medium`}>{row.getValue("chartered")}</div>
  }
]
