import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
function SearchBar() {
  const { id } = useParams();

  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');
  useEffect(() => {
    setInputValue(id || '');
  }, [id]);

  const handleCheckButton = (contentID) => {
    if (contentID === '') {
      const notify = () => {
        toast.error('ID field cannot be empty', { theme: 'colored', autoClose: 2000 });
      };
      notify();
    } else {
      navigate(`/check/${contentID}`);
    }
  };

  return (
    <>
      <div>
        <div className="flex place-content-center gap-3 ">
          <input
            type="number"
            className=" ml-2 w-32 rounded-md border border-white/20 bg-white/5 p-2 text-lg outline-none transition-all duration-300 placeholder:text-white/50 focus:border-white/70"
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            placeholder="ID"
            value={inputValue}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                let contentID = inputValue;
                handleCheckButton(contentID);
              }
            }}
          />
          <button
            onClick={() => {
              let contentID = inputValue;
              handleCheckButton(contentID);
            }}
            className="flex items-center gap-1 rounded-md bg-blue-600 p-2 py-1 font-bold transition-all duration-300 hover:bg-blue-700"
          >
            <span>Check</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
