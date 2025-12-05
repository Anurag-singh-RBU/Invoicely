import { PdfTemplateName } from "@/app/(dashboard)/create/invoice/invoiceHelpers/invoice-templates";
import { ZodCreateInvoiceSchema } from "@/zod-schemas/invoice/create-invoice";
import { DefaultPDF, VercelPDF } from "@/components/pdf";
import { pdf } from "@react-pdf/renderer";

interface CreatePdfBlobProps {
  template: PdfTemplateName;
  invoiceData: ZodCreateInvoiceSchema;
}

export const createPdfBlob = async ({ invoiceData, template }: CreatePdfBlobProps) => {
  const Template = getPdfTemplate(template);

  const pdfDocument = <Template data={invoiceData} />;
  const blob = await pdf(pdfDocument).toBlob();

  return blob;
};

const getPdfTemplate = (template: CreatePdfBlobProps["template"]) => {
  // if there is no template, fallback to default
  if (!template) {
    return DefaultPDF;
  }

  // else return the specified tempalte
  switch (template) {
    case "vercel":
      return VercelPDF;
    default:
      return DefaultPDF;
  }
};
