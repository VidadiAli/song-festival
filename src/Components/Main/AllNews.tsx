import { useEffect, useState } from "react";
import { news, newsType, team, teamType } from "../../data/data";
import './OneNews.css'
import { FaUserCircle } from "react-icons/fa";


const OneNews = () => {

    const [mainArray, setMainArray] = useState<newsType[]>([]);

    useEffect(() => {
        const callArray = () => {
            setMainArray(news.slice(0, 3))
        }
        callArray();

        window.addEventListener('focus', callArray);

        return () => window.removeEventListener('focus', callArray);
    }, [])


    const goSection = (event: React.MouseEvent<HTMLDivElement>) => {
        const target = Number((event.target as HTMLElement).textContent);
        setMainArray(news.slice((target - 1) * 3, target * 3))
    };

    return (
        <div className="content-width one-news" id="up">
            <div>
                {
                    mainArray.map((e: newsType) => {
                        return <div key={e.newsTitle}>
                            <img src={e.newsCover} alt="" />
                            <h2>{e.newsTitle}</h2>
                            <p>{e.newsContent}</p>
                            <div>{
                                team.map((f: teamType) => {
                                    if (e.newsAuthor === f.name) {
                                        return <div key={f.id}>
                                            <img src={f.cover} alt="" />
                                            <FaUserCircle className="user-icon" /><span>{f.name}</span>
                                        </div>
                                    }
                                })
                            }
                                <span>{e.newsDate}</span>
                            </div>
                        </div>
                    })
                }
            </div>

            <div className="section-by-section" onClick={goSection}>
                {
                    [...Array(Math.ceil(news.length / 3))].map((_, i) => (
                        <div key={i}>
                            <a href="#up">
                                {
                                    i + 1
                                }
                            </a>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default OneNews