import React from 'react';
import logo from './logo.svg';
import { Header } from './Header/Header';
import { Layout } from './Layout';
import './main.global.css';
import { Content } from './Content';
import { CardsList } from './CardsList';
import { MyHooks } from './MyHooks';
import { getValue } from '../utils/react/pickFromSyntheticEvent';

function App() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [title, setTitle] = React.useState('');

  return (
    <Layout>
      <Header />
      <Content>
        <CardsList />
        <button onClick={() => setIsVisible(!isVisible)}>Change me!</button>
        <input type="text" onChange={getValue(setTitle)} />
        {isVisible && <MyHooks title={title} id="11" />}
      </Content>
    </Layout>
  );
}

export default App;
