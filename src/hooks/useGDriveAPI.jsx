const useGDriveAPI = () => {
  const apiKey = import.meta.env.VITE_GDRIVE_API_KEY;

  const fetchFileInfos = async (fileIds) => {
    try {
      const promises = fileIds.map(async (fileId, index) => {
        const response = await fetch(
          `https://www.googleapis.com/drive/v3/files/${fileId}?supportsAllDrives=true&includeItemsFromAllDrives=true&fields=id,name,size,webContentLink,mimeType&key=${apiKey}`
        );
        let isFlagged = false;
        if (!response.ok) {
          isFlagged = true;
        }
        const data = await response.json();
        return { ...data, fileID: fileIds[index], index: index + 1, isFlagged };
      });

      const fileInfos = await Promise.all(promises);
      return fileInfos;
    } catch (error) {
      console.error('Error fetching file information:', error);
      throw error;
    }
  };

  return { fetchFileInfos };
};

export default useGDriveAPI;
