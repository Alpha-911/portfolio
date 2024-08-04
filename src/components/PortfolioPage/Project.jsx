import Tiles from "./Tiles.jsx";
import styles from './Project.module.css'
import {useEffect} from "react";

function Project({category, description, data}) {

    return (
        <div className={styles.project}>
            <h2>{category}</h2>
            <p>{description}</p>
            <div className={styles.tile_container}>
                {
                    data.map((datum) => (
                        <Tiles image={datum.image} title={datum.title} description={datum.description} codeBase={datum.codeBase} deployment={datum.deployment} key={datum.title} />
                    ))
                }
            </div>
        </div>
    )
}

export default Project