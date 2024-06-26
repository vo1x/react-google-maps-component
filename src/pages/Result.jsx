import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import FolderInfo from '../components/FolderInfo';
import SearchBar from '../components/SearchBar';
import useModProInfo from '../hooks/useModProInfo';
import useGDriveAPI from '../hooks/useGDriveAPI';

function Result() {
  const { id } = useParams();
  const [contentInfo] = useModProInfo(id);
  const { fetchFileInfos } = useGDriveAPI();

  const [fileInfos, setFileInfos] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        if (contentInfo?.files) {
          const data = await fetchFileInfos(contentInfo.files);
          setFileInfos(data);
        }
      } catch (error) {
        console.error('Error fetching file information:', error);
        toast.error('Failed to fetch file information', { autoClose: 3000 });
        setIsError(true);
      }
    };

    fetchFiles();
  }, [contentInfo]);

  if (!contentInfo) {
    return <div>Loading content information...</div>;
  }

  return (
    <div className="flex flex-col gap-5 p-5">
      <SearchBar />
      {isError && <div>Error fetching file information</div>}
      {!isError && fileInfos && <FolderInfo gDriveData={fileInfos} contentData={contentInfo} />}
    </div>
  );
}

export default Result;
