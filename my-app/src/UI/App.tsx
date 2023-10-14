import React from 'react';
import logo from './logo.svg';
import { Header } from './Header/Header';
import { Layout } from './Layout';
import './main.global.css';
import { Content } from './Content';
import { CardsList } from './CardsList';

function App() {
  return (
    <Layout>
      <Header />
      <Content>
        <CardsList />
      </Content>
    </Layout>
  );
}

export default App;
