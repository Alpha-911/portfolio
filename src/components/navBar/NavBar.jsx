import styles from './NavBar.module.css'
import Navigation from "./Navigation/Navigation.jsx";
import Context from "../../Context.jsx";
import {useContext, useEffect, useState} from "react";
function NavBar() {

    // const {isLight, setIsLight} = useContext(Context)
    const [isLoading, setIsLoading] = useState(false)
    const [isDataFetched, setIsDataFetched] = useState(false)
    const [pageData, setPageData] = useState('')

    useEffect(() => {
        async function fetchData(){
            setIsLoading(true)
            const response = await fetch('https://portfolio-server-27i3.onrender.com');
            const navBarData = await response.json();
            setPageData(navBarData.data[0].navBar);

            if(pageData === null)
                setIsDataFetched(false)
            else
                setIsDataFetched(true)
        }
        fetchData()
            .finally(() => {
                setIsLoading(false)
            })
    }, [setIsLoading])
    return (
        <div className={styles.nav}>
            {
                isLoading?
                    <p>Loading</p>
                    :
                    isDataFetched?
                        <>
                            <div></div>
                            <Navigation/>
                            <div />
                            {/*<img*/}
                            {/*    src={isLight ? pageData.light : pageData.dark}*/}
                            {/*    onClick={() => setIsLight(!isLight)} alt="light"/>*/}
                        </>
                        :
                        <p>Data Not Available</p>
            }
        </div>
    )
}

export default NavBar