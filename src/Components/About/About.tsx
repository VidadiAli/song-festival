import { team, teamType } from '../../data/data'
import './About.css'

const About = () => {
    return (
        <div className="content-width about">
            <div className="about-part">
                <h1>Who We Are?</h1>
                <div>
                    <div>
                        <img src="https://plus.unsplash.com/premium_photo-1661767467261-4a4bed92a507?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGVhbXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores accusantium harum nihil earum natus quos repellat a, placeat pariatur deserunt reiciendis cumque necessitatibus nam iure. Recusandae, aperiam culpa. Ipsum, cum?</p>
                </div>
            </div>

            <div className="team-part">
                <h1>Our Team</h1>
                <div>
                    {
                        team.map((e: teamType)=>{
                            return <div key={e.id}>
                                <img src={e.cover} alt="" />
                                <div>
                                    <h4>{e.name}</h4>
                                    <span>{e.position}</span>
                                    <p>{e.about}</p>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default About