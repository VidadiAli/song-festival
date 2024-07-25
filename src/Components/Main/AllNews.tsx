import { news, newsType, team, teamType } from "../../data/data";
import './OneNews.css'
import { FaUserCircle } from "react-icons/fa";


const OneNews = () => {

    return (
        <div className="content-width one-news">
            {
                news.reverse().map((e: newsType) => {
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
    )
}

export default OneNews