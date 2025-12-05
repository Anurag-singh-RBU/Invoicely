import { ZodCreateInvoiceSchema } from "@/zod-schemas/invoice/create-invoice";

interface GenerateInvoiceNameProps {
  invoiceData: ZodCreateInvoiceSchema;
  extension: "pdf" | "png";
}

export const generateInvoiceName = ({ invoiceData, extension }: GenerateInvoiceNameProps) => {
  return `Invoice-${invoiceData.invoiceDetails.prefix}${invoiceData.invoiceDetails.serialNumber}.${extension}`;
};
