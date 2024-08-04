import {useState} from "react";
import styles from './Tiles.module.css'

function Tiles({image, title, description, deployment, codeBase}) {

    const [isActive, setIsActive] = useState(false);

    return (
        <div className={styles.tile}>
            <img onClick={() => setIsActive(true)} src={image} alt={`${title} Image`} />
            {
                isActive&&
                    <div className={styles.description}>
                        <h3>{title}</h3>
                        <a href={deployment} target="_blank">
                            <img
                                src="https://res.cloudinary.com/doeaitohi/image/upload/v1722431515/deployment-icon_a1uztc.svg"
                                alt="deployment"/>
                        </a>
                        <a href={codeBase} target="_blank">
                            <img
                                src="https://res.cloudinary.com/doeaitohi/image/upload/v1722431500/github-icon_pvkalm.svg"
                                alt="code"/>
                        </a>
                        <img onClick={() => setIsActive(false)}
                             src="https://res.cloudinary.com/doeaitohi/image/upload/v1722431521/close-icon_fxmw6i.svg" alt="Close Button"/>
                        <p>{description}</p>
                    </div>
            }
        </div>
    )
}

export default Tiles