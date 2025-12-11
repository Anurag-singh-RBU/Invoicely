import { ActnDdown } from "@/components/table-columns/ActnDdown";
import { columns, Invoices } from "@/components/table-columns/columns";
import { DataTable } from "@/components/table-columns/data-table";
import React from "react";

async function getData(): Promise<Invoices[]> {
  
  return [
    {
      id: "7521d281-ce11-4bb9-929f-c57c6da373e0",
      invoiceFields: {
        invoiceDetails: {
          prefix: "INV-",
          serialNumber: "001",
        },
      },
      type: "local",
      storage: "Local",
      total: 1500,
      items: 5,
      status: "pending",
      "serial no": "INV-001",
      "created at": new Date("2024-06-01T10:00:00Z"),
      actions: <ActnDdown id="7521d281-ce11-4bb9-929f-c57c6da373e0"/>,
    },
  ]
}

export default async function InvoicesPage() {

  const data = await getData();

  return (
    <div className="dash-page gap-4 p-4">
      <DataTable columns={columns} data={data}/>
    </div>
  );

};