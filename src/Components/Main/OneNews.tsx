import { useParams } from "react-router-dom";
import { news, newsType, team, teamType } from "../../data/data";
import './OneNews.css'
import { FaUserCircle } from "react-icons/fa";


const OneNews = () => {


    const { navigateUrl } = useParams<{ navigateUrl: string }>();
    return (
        <div className="content-width one-news">
            <div>
                {
                    news.map((e: newsType) => {
                        if (e.newsTitle.split(' ').join('-') === navigateUrl) {
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
                        }
                    })
                }
            </div>
        </div>
    )
}

export default OneNews;
