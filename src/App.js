import Header from './components/molecules/Header'
import Footer from './components/molecules/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Form from './components/organisms/Form';
import TextArea from './components/atoms/TextArea';
import Layout from './components/template/Layout';

function App() {
  return (
    <div className="App">
      <Layout>
        <TextArea
          name="Juan"
          age="25"
          country="Argentina"
          gender="Masculino"
        />
      </Layout>
    </div>
  );
}

export default App;
