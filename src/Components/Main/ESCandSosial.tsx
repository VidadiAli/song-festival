import './ESCandSosial.css'

const ESCandSosial = () => {
    return (
        <div className="esc-and-sosial content-width">
            <div className="esc">
                <div>
                    <div className="image-cover">
                        <img src="https://media.gettyimages.com/id/2152513603/photo/malmo-sweden-nemo-from-switzerland-winner-of-the-eurovision-song-contest-on-stage-after-the.jpg?s=612x612&w=0&k=20&c=cK2echcbYFQN1w4AtSMxGBlHWTdx8BA4EbXSZNH_OG8=" alt="" />
                        <span>Eurovison Song Contest</span>
                    </div>
                    <div className='image-caption'>
                        <a href="">show about all</a>
                        <div>
                            <span>esc</span>
                            <span>2025</span>
                            <span>Basel</span>
                        </div>
                    </div>
                </div>


                <div>
                    <div className="image-cover">
                        <img src="https://junioreurovision.tv/sites/default/files/styles/gallery_slider/public/media/image/2023-11/EBU%20-%20Corinne%20Cumming-4781.jpeg?itok=TeLBvGfd" alt="" />
                        <span>Junior Eurovison Song Contest</span>
                    </div>
                    <div className='image-caption'>
                        <a href="">show about all</a>
                        <div>
                            <span>jesc</span>
                            <span>2024</span>
                            <span>Spain</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sosial">
                <button className='instagram'>instagram</button>
                <button className='youtube'>youTube</button>
                <button className='facebook'>facebook</button>
                <button className='x'>x</button>
            </div>
        </div>
    )
}

export default ESCandSosial