interface CreateBlobUrlProps {
  blob: Blob;
}

interface RevokeBlobUrlProps {
  url: string;
}

export const createBlobUrl = ({ blob }: CreateBlobUrlProps) => {
  const url = URL.createObjectURL(blob);

  return url;
};

export const revokeBlobUrl = ({ url }: RevokeBlobUrlProps) => {
  URL.revokeObjectURL(url);
};
