import TextArea from './components/atoms/TextArea';
import Layout from './components/template/Layout';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DataContext } from './context';
import { useState } from 'react';

function App() {

  const [data, setData] = useState({
    name: '',
    age: {},
    nationality: [],
    gender: {},
    loading: null
  });

  return (
    <DataContext.Provider
      value={{
        data,
        setData
      }}
    >
      <div className="App">
        <Layout>   
          {
            data.loading === false && 
              <TextArea
              name={data.name}
              age={data.age}
              country={data.nationality}
              gender={data.gender}
              /> 
          }
          { data.loading && <p>cargando</p> }
        </Layout>
      </div>
    </DataContext.Provider>
  );
}

export default App;
