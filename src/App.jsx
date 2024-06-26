import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Indexer from './pages/Indexer';
import Result from './pages/Result';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();
function App() {
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Indexer />}></Route>
          <Route path="/check/:id" element={<Result />}></Route>
          {/* <Route path="/indexer" element={<Indexer />}></Route> */}
        </Routes>
      </Router>
      <ToastContainer></ToastContainer>
      </QueryClientProvider>
    </>
  );
}

export default App;
