/**
 * Create a PNG from a base64 string
 * @param dataURI - The base64 string to create a PNG from
 * @param sliceSize - The size of the slice to create a PNG from
 * @returns A PNG blob or null if the base64 string is invalid
 */
export const CreatePngFromBase64 = (dataURI: string, sliceSize = 512) => {
  // Split the metadata and the actual base64 string
  const [meta, base64String] = dataURI.split(",");

  if (!meta || !base64String) {
    return null;
  }

  // Optional: extract content type from meta if needed
  const contentType = meta.match(/data:(.*);base64/)?.[1];

  // Decode Base64
  const byteCharacters = atob(base64String);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);
    const byteNumbers = Array.from(slice, (c) => c.charCodeAt(0));
    byteArrays.push(new Uint8Array(byteNumbers));
  }

  return new Blob(byteArrays, { type: contentType });
};
