import styles from './Portfolio.module.css'
import Context from "../../Context.jsx";
import {useContext, useEffect, useState} from "react";
import Project from "./Project.jsx";

function Portfolio() {
    const {setSelectedPage} = useContext(Context);
    const [isLoading, setIsLoading] = useState(false)
    const [isDataFetched, setIsDataFetched] = useState(false)
    const [pageData, setPageData] = useState('')

    useEffect(() => {
        setSelectedPage('portfolio')
        async function fetchData (){
            setIsLoading(true)
            const response = await fetch('https://portfolio-server-27i3.onrender.com')
            const portfolioPageData = await response.json()
            setPageData(portfolioPageData.data[0].portfolioPage)
            if(pageData === null)
                setIsDataFetched(false)
            else
                setIsDataFetched(true)
        }
        fetchData()
            .finally(() => {
                setIsLoading(false)
            })
    }, [setIsLoading, setSelectedPage])

    return (
        <div className={styles.portfolio_container}>
            {
                isLoading?
                    <p>Loading</p>
                    :
                    isDataFetched?
                        <>
                            <div className={styles.heading}>
                                <h1>Projects</h1>
                            </div>
                            <Project category={'Basics'}
                                     description={'These projects are made using HTML, CSS and JavaScript.'}
                                     data={pageData.basicProject}/>
                            <Project category={'Intermediate'}
                                     description={'These projects are made using React, Tailwind CSS/Sass and uses public API for data fetching.'}
                                     data={pageData.intermediateProject}/>
                            <Project category={'Advanced'}
                                     description={'These projects are made using React, NodeJS, ExpressJS, MongoDB, Docker, Tailwind CSS, Sass, Typescript, Figma and NextJS. '}
                                     data={pageData.advancedProject}/>
                        </>
                        :
                        <p>Data not found</p>
            }
        </div>
    )
}

export default Portfolio