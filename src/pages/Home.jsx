import { ToastContainer } from 'react-toastify';
import SearchBar from '../components/SearchBar';
import Header from '../components/Header';

function Home() {
  return (
    <>
      <div className="grid place-items-center">
        <Header></Header>
        <SearchBar></SearchBar>
      </div>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default Home;
