import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';
import './reset.css';

import Cover from "./components/Cover"
import Section from "./components/Section"
import SectionSpacing from "./components/SectionSpacing"
import Search from "./components/Search"

function App() {
  const searchParams = new URLSearchParams(window.location.search)


  let boardGameListInit = [];
  for (let i = 1; i <= 6; i++) {
    const paramName = `q${i}`;
    if (searchParams.has(paramName)) {
      boardGameListInit.push({
        id: searchParams.get(paramName)
      });
    }
  }
  const [boardGameLists, setBoardGameLists] = useState(boardGameListInit)


  const handleSearchGameId = (id, gameName) => {
    const gameList = {
      id: id,
      name: gameName
    }
    if (boardGameLists.length > 6) {
      alert('指定するボードゲームは6つまでにしてください')

    }
    setBoardGameLists((prevIds) => [...prevIds, gameList])
  }
  const [shareLink, setShareLink] = useState('')
  const handleShareLink = () => {
    let url = 'http://localhost:3000/';
    let query = ''
    boardGameLists.forEach((game, index) => {
      query = query + "&q" + (index + 1) + "=" + game.id
    })
    query = query.replace(/^&/, '?');
    url = url + query
    setShareLink(url)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Section backgroundColor="#282c34" color="#fff">
          <h1>🎉 My Favorite Game</h1>
        </Section>
        <Section>
          <SectionSpacing backgroundColor="#282c34" />
          {boardGameLists.map((game) => {
            return <Cover key={game.id} bggid={game.id} />
          })}
        </Section>
      </header>
      <Section backgroundColor="#282c34" color="#fff">
        <SectionSpacing backgroundColor="#fff" />
        <Search onClick={handleSearchGameId} />
        <h1>シェア</h1>
        {/* http://localhost:3000/?q1=853&q2=342942&q3=40692&q4=207830&q5=220308&q6=234 */}
        <i class="fa fa-chevron-down"></i>
        <p>
          <button className='btn' onClick={handleShareLink}>新しく作成する</button>
          {shareLink ? (
            <input value={shareLink}></input>
          ) : (<p>Loading</p>)}
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
