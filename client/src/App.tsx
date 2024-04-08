import Layout from './layouts/MainLayout';
import Router from './routers/Router';
import { ThemeProvider } from './context/ThemeContext';
function App() {
  return (
    <>
      <ThemeProvider>
        <Layout title='index'>
          <Router />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;

