import React, { Children, useEffect, useState } from "react";
import style from "./index.module.css"

export default function SectionSpacing(props) {
    const sectionStyle = {
        backgroundColor: props.backgroundColor,
    }

    return (
        <svg className={style.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 152"><path fill={props.backgroundColor} fillOpacity="1" d="M0,96L80,112C160,128,320,160,480,149.3C640,139,800,85,960,74.7C1120,64,1280,96,1360,112L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
    );
}