import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import FolderInfo from '../components/Indexer/FolderInfo/FolderInfo';
import SearchBar from '../components/Indexer/SearchBar';
import useModProInfo from '../hooks/useModProInfo';
import useGDriveAPI from '../hooks/useGDriveAPI';

function Result() {
  const { id } = useParams();
  const [contentInfo] = useModProInfo(id); 
  const { fetchFileInfos,flaggedFiles } = useGDriveAPI();

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
    return <div>Loading content information...</div>; // Or other loading state
  }

  return (
    <div className="flex flex-col gap-5 p-5">
      <SearchBar />
      {isError && <div>Error fetching file information</div>}
      {!isError && fileInfos && <FolderInfo gDriveData={fileInfos} flaggedFiles ={flaggedFiles} contentData={contentInfo} />}
      {/* <pre>
        {JSON.stringify(fileInfos,null,2)}
      </pre> */}
    </div>
  );
}

export default Result;
