import useFileSize from '../../../hooks/useFileSize';
import { Link } from 'react-router-dom';

import useClipboard from '../../../hooks/useClipboard';

function FolderItem({ item }) {
  console.log(item);
  const { getReadableFS } = useFileSize();
  const [copied, handleItemCopy] = useClipboard();

  return (
    <div
      className={`rounded-md border  ${item.isFlagged ? 'border-none bg-[#3c1618] text-[#ff6166]' : 'border-white/20 bg-white/5 '} p-4`}
    >
      <div className="flex items-center justify-between">
        <div>
          <div>
            {item.name ? (
              <span className="font-bold hover:cursor-pointer">{item.name}</span>
            ) : (
              <span className="font-bold hover:cursor-pointer">File {item.index}</span>
            )}
          </div>
          <div>
            {item.size ? (
              <span className=" hover:cursor-pointer">{getReadableFS(item.size)}</span>
            ) : (
              <span className=" hover:cursor-pointer ">Index: {item.index}</span>
            )}
          </div>
          <div>
            {item.webContentLink ? (
              <span className=" hover:cursor-pointer">{item.webContentLink}</span>
            ) : (
              <span className="hover:cursor-pointer">{item.fileID}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FolderItem;
