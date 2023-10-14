import React, { Children, useEffect, useState } from "react";
import style from "./index.module.css"

export default function Section(props) {
    const sectionStyle = {
        backgroundColor: props.backgroundColor,
        color: props.color
    }

    return (
        <React.Fragment>
            <section className={style.section} style={sectionStyle}>
                {props.children}
            </section>
        </React.Fragment>
    );
}