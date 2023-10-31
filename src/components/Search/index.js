import React, { useEffect, useState } from "react";
import { fetchSearchBoardGame } from "../api/bgg";
import style from "./index.module.css"

export default function Search({ onClick }) {
    const [gameLists, setGameLists] = useState([]);
    const [searchQuery, setQuery] = useState('');

    const addFavoriteList = (e) => {
        // console.log(e.target)
        // 下だとうまくいく
        // console.log(e.currentTarget)
        const dataId = e.currentTarget.getAttribute('data-id');
        const gameName = e.currentTarget.getAttribute('data-gameName');
        onClick(dataId, gameName)

    }

    const search = () => {
        setGameLists([]);
        fetchSearchBoardGame(searchQuery).then((newGameLists) => {
            setGameLists((prevGameLists) => [...prevGameLists, ...newGameLists]);

        })
    }


    return (
        <React.Fragment>
            <div>
                <input className={style.input} type="text" value={searchQuery} onChange={((e) => setQuery(e.target.value))}></input>
                <button className={style.search} onClick={search}>検索</button>
            </div>
            {gameLists.length ? (gameLists.map((game, index) => (
                <div className={style.result_box}>
                    <div className={style.search_result} key={index} data-id={game.id} data-gameName={game.name}
                        onClick={addFavoriteList}>
                        <span className={style.search_name}>
                            {game.name}
                        </span>
                        <span className={style.search_action}>
                            <i class="fa fa-plus" aria-hidden="true"></i>
                            {/* <i class="fa fa-trash"></i> */}
                        </span>
                    </div>
                </div>
            ))) : (
                <div>検索結果がありませんでした</div>
            )
            }
        </ React.Fragment >
    );
}