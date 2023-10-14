import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';
import './reset.css';

import Cover from "./components/Cover/index"
import Section from "./components/Section/index"
import SectionSpacing from "./components/SectionSpacing/index"
import Search from "./components/Search/index"

function App() {

  const [bggids, setBggId] = useState(null)
  useEffect(() => {
    // { id: 853, name: 'チャレンジャーズ' },
    setBggId([{ id: 853, name: 'チャレンジャーズ' }])

  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <Section backgroundColor="#282c34" color="#fff">
          <h1>🎉 My Favorite Game</h1>
        </Section>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <Section backgroundColor="#333"> */}
        <Section>
          <SectionSpacing backgroundColor="#282c34" />
          {/* {bggids.map((aaa) => {
            <Cover bggid={aaa} />
          })} */}
          <Cover bggid="359970" />
          <Cover bggid="342942" />
          <Cover bggid="220308" />
          <Cover bggid="853" />
          <Cover bggid="40692" />
          <Cover bggid="207830" />
        </Section>
      </header>
      <Section backgroundColor="#282c34" color="#fff">
        <SectionSpacing backgroundColor="#fff" />
        <h1>シェア</h1>
        <i class="fa fa-chevron-down"></i>
        <Search />
        {/* <button className='btn'>新しく作成する</button> */}
        <p>
          <button className='btn'>新しく作成する</button>
        </p>
      </Section>
      <Section>
        <SectionSpacing backgroundColor="#282c34" />
        <h1>🧐 このサイトについて</h1>
        <p className="text-align:left">
          このサイトは、BoardGameArea(BGG)のデータを使用しています。
        </p>
      </Section>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div >
  );
}

export default App;
