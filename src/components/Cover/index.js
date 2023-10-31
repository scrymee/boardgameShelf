import React, { useEffect, useState } from "react";
import style from "./index.module.css"
import { fetchBoardGameThumbnail } from "../api/bgg";

export default function Cover(props) {
    const [thumb, setThumb] = useState(null);

    fetchBoardGameThumbnail(props.bggid).then((thumbnail) => {
        setThumb(thumbnail);
    })


    return (
        <div className={style.cover}>
            <div className={style.container}>
                <img className={style.img} src={thumb} />
            </div>
        </div>
    );
}