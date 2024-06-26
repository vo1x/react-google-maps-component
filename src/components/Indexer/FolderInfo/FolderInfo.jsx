import FolderItem from './FolderItem';
import useFileSize from '../../../hooks/useFileSize';
export default function FolderInfo({ gDriveData, flaggedFiles, contentData }) {
  const { getReadableFS } = useFileSize();

  return (
    <div className="relative h-max rounded-md border border-white/20 bg-white/5 p-3">
      <div className="flex flex-col justify-between gap-1 p-2">
        <span className="text-xl font-bold">{contentData?.title}</span>
        <span>MMOD ID: {contentData?.id}</span>
      </div>

      <div className="mb-3  flex items-center justify-between border-b border-b-white/20 p-2 text-lg">
        <span>
          Found <span className="font-bold">{contentData?.count}</span> Files ||{' '}
          <span>{gDriveData.filter((file) => file.isFlagged).length} Flagged</span>
        </span>
      </div>
      <div className={`gap grid max-h-screen grid-flow-row gap-3 overflow-auto p-3`}>
        {gDriveData?.map((item) => (
          <FolderItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
