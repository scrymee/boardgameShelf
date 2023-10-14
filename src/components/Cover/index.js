import React, { useEffect, useState } from "react";
import style from "./index.module.css"

export default function Cover(props) {
    const [thumb, setThumb] = useState(null);

    const url = "https://api.geekdo.com/xmlapi2/things?id=" + props.bggid;
    fetch(url)
        .then((response) => response.text())
        .then((xmlData) => {

            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlData, 'application/xml')
            // console.log(xmlDoc)
            const thumbnail = xmlDoc.querySelector('thumbnail').textContent
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