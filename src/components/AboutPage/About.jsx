import styles from './About.module.css'
import Context from "../../Context.jsx";
import {useContext, useEffect, useState} from "react";
import SkillCard from "./SkillCard.jsx";

function About() {

    const {setSelectedPage} = useContext(Context);
    const [pageData, setPageData] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [isDataFetched, setIsDataFetched] = useState(false)


    useEffect(() => {
        setSelectedPage('about')
        async function fetchData() {
            setIsLoading(true)
            const response = await fetch('https://supreme-gerrie-rishu-raj-f3310073.koyeb.app/');
            const aboutPageData = await response.json();
            setPageData(aboutPageData.data[0].aboutPage);

            if(pageData === null)
                setIsDataFetched(false)
            else
                setIsDataFetched(true)
        }
        fetchData()
            .finally(() => setIsLoading(false))
    }, [setIsLoading, setSelectedPage])

    return (
        <div className={styles.main_container}>
            {
                isLoading?
                    <p>Loading</p>
                    :
                    isDataFetched?
                        <>
                            <div className={styles.intro}>
                                <h1 className={styles.name}>I'M <font
                                    style={{color: '#E1B363', fontWeight: 'bold', fontSize: '3.3rem'}}>Rishu Raj</font></h1>
                                <h3 className={styles.desig}>MERN Stack developer</h3>
                                <h3>
                                    <p className={styles.contact}>Contact Me</p>
                                </h3>
                                <img className={styles.image}
                                     src={pageData.profilePic}
                                     alt="Profile Image"/>
                            </div>
                            <div className={styles.about_container}>
                                <h1 className={styles.about_heading}>About</h1>
                                <p className={styles.about_me}>
                                    I am a passionate <font
                                    style={{fontWeight: 'bold', fontSize: '1rem', color: '#E1B363'}}>MERN
                                    stack developer</font> and <font
                                    style={{fontWeight: 'bold', fontSize: '1rem', color: '#E1B363'}}>UI/UX
                                    designer</font> with
                                    strong interest in development. I have a good
                                    understanding of MERN stack. I enjoy building <font
                                    style={{fontWeight: 'bold', fontSize: '1rem', color: '#E1B363'}}>scalable, efficient,
                                    user-friendly</font> and <font
                                    style={{fontWeight: 'bold', fontSize: '1rem', color: '#E1B363'}}>interactive</font> web
                                    application.
                                    My journey in coding has not only equipped me with technical skills but also a <font
                                    style={{fontWeight: 'bold', fontSize: '1rem', color: '#E1B363'}}>problem solving
                                    mindset</font> and have
                                    acquired a good <font style={{fontWeight: 'bold', fontSize: '1rem', color: '#E1B363'}}>designing
                                    skill</font> along with development and <font
                                    style={{fontWeight: 'bold', fontSize: '1rem', color: '#E1B363'}}>UI/UX</font>
                                </p>
                            </div>
                            <div className={styles.skill_container}>
                                <h1 className={styles.skill_heading}>My Skills</h1>
                                {
                                    pageData.skillData.map((datum) => (
                                        <SkillCard image={datum.src} name={datum.name} key={datum.name}/>
                                    ))
                                }
                            </div>
                        </>
                        :
                        <p>Data Not Fetched</p>

            }

        </div>
    )
}

export default About
