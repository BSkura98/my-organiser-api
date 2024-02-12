import path from "path";
import { fileURLToPath } from "url";

export const getFileName = (metaUrl: string): string => {
  return fileURLToPath(metaUrl);
};

export const getDirName = (metaUrl: string): string => {
  return path.dirname(getFileName(metaUrl));
};
