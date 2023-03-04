export const getFileUrl = (files: FileList | null, handleFileUrl: (url: string) => void) => {
  if (files) {
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onloadend = () => {
      const result = reader.result;
      if (result) {
        const url = result.toString();
        handleFileUrl(url);
      }
    };
  }
};
