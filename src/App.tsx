import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import Contexts from './contexts';
import Routes from './routes';
import GlobalStyle from './styles/globals';

function App() {
  const queryClient = new QueryClient();

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Contexts>
          <Routes />
          <GlobalStyle />
          <Toaster position="bottom-center" />
        </Contexts>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
