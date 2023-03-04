import { getFileUrl } from "@/shared/utils";
import { ChangeEventHandler, useState } from "react";

export const useHandleFileInput = () => {
  const [file, setFile] = useState("");

  const handleFile: ChangeEventHandler<HTMLInputElement> = (e) => {
    const files = e.target.files;
    getFileUrl(files, setFile);
  };

  return {
    file,
    handleFile,
  };
};
