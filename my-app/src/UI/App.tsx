import React from 'react';
import { Header } from './Header/Header';
import { Layout } from './Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.global.css';
import { Content } from './Content';
import { CardsList } from './CardsList';
import { MyHooks } from './MyHooks';
import { getValue } from '../utils/react/pickFromSyntheticEvent';
import { GenericList } from './GenericList';
import { generateRandomString } from '../utils/react/generateRandomIndex';
import { Dropdown } from './Dropdown';

const LIST = [
  { As: 'div' as const, text: 'some', id: generateRandomString() }, 
  { As: 'div' as const, text: 'other some', id: generateRandomString() }, 
  { As: 'div' as const, text: 'some', id: generateRandomString() }
];

function App() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [title, setTitle] = React.useState('');
  const [list, setList] = React.useState(LIST);

  const handleAdd = () => {
    setList(list.concat({ text: generateRandomString(), id: generateRandomString(), As: 'div' as const }));
  };

  return (
    <Layout>
      <Header />
      <Content>
        <CardsList />
        <button onClick={() => setIsVisible(!isVisible)}>Change me!</button>
        <input type="text" onChange={getValue(setTitle)} />
        {isVisible && <MyHooks title={title} id="11" />}
        <div><button onClick={handleAdd}>Add element</button></div>
        <GenericList list={list.map((item1) => ({ ... item1, onClick: () => { setList(list.filter((item2) => item1.id !== item2.id)) } }))} />
        <br />
        <div style={{ padding: 20 }}>
          <Dropdown 
            button={<button className='btn btn-primary'>Test</button>} 
            onOpen={() => console.log('dropdown is open')} 
            onClose={() => console.log('dropdown is close')}>
            <CardsList />
          </Dropdown>
        </div>
      </Content>
    </Layout>
  );
}

export default App;
