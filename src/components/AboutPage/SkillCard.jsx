import styles from './SkillCard.module.css'
function SkillCard({image ,name}) {
    return (
        <div className={styles.skill_card}>
            <img src={image} alt="skill"/>
            <h3>{name}</h3>
        </div>
    )
}

export default SkillCard