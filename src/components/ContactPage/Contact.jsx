import styles from './Contact.module.css'
import Context from "../../Context.jsx";
import {useContext, useEffect, useState} from "react";

function Contact() {

    const {setSelectedPage} = useContext(Context);
    const [pageData, setPageData] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [isDataFetched, setIsDataFetched] = useState(false)

    useEffect(function () {
        setSelectedPage('contact')
        async function fetchData() {
            setIsLoading(true)
            const response = await fetch('https://supreme-gerrie-rishu-raj-f3310073.koyeb.app/')
            const contactData = await response.json();
            setPageData(contactData.data[0].contactPage)
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
        <div className={styles.contact_container}>
            {
                isLoading?
                    <p>Loading</p>
                    :
                    isDataFetched?
                        <>
                            <h1>Contact Me</h1>
                            <div className={styles.contact_mode}>
                                <div className={styles.mail}>
                                    <img src={pageData.mailIcon}
                                         alt="mail icon"/>
                                    <p>reachme767@gmail.com</p>
                                </div>
                                <div className={styles.others}>
                                    <a href="https://www.linkedin.com/in/rishu-raj-0a57b82a7" target="_blank">
                                        <img
                                            src={pageData.linkedinIcon}
                                            alt="linkedin"/>
                                    </a>
                                    <a href="https://x.com/RishuRaj911" target="_blank">
                                        <img
                                            src={pageData.twitterIcon}
                                            alt="twitter"/>
                                    </a>
                                    <a href="https://www.instagram.com/_.rishu_raj_/" target="_blank">
                                        <img
                                            src={pageData.instagramIcon}
                                            alt="instagram"/>
                                    </a>
                                </div>
                            </div>
                        </>
                        :
                        <p>Data Not Found</p>
            }
        </div>
    )
}

export default Contact
