import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/';
import Result from './pages/Result';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/check/:id" element={<Result />}></Route>
          </Routes>
        </Router>
        <ToastContainer></ToastContainer>
      </QueryClientProvider>
    </>
  );
}

export default App;
