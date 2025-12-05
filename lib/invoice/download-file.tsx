interface DownloadFileProps {
  url: string;
  fileName: string;
}

export const downloadFile = ({ url, fileName }: DownloadFileProps) => {
  const link = document.createElement("a");
  link.setAttribute("id", "temp-download-link");
  link.href = url;
  link.download = fileName;
  link.click();
  document.getElementById("temp-download-link")?.remove();
};
