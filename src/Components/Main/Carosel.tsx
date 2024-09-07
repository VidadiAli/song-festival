import { useEffect, useState } from "react";
import { news, newsType } from "../../data/data";
import './Carosel.css';
import { useNavigate } from "react-router-dom";

const Carosel = () => {
    const [imageUrl, setImageUrl] = useState<string>('');
    const [secondImageUrl, setSecondImageUrl] = useState<string>('');
    const [imageArray, setImageArray] = useState<newsType[]>([]);
    const [imageCounter, setImageCounter] = useState<number>(0);

    const [newsTitle, setNewsTitle] = useState<string>('');
    const [newsContent, setNewsContent] = useState<string>('');

    const [newsDate, setNewsDate] = useState<string>('');
    const [newsAuthor, setNewsAuthor] = useState<string>('');

    const [forNavigate, setForNavigate] = useState<string>('');

    useEffect(() => {
        const reverseArray = () => {
            let filteredImages = [];
            filteredImages = news.slice(0, 5);
            setImageArray(filteredImages);
            if (filteredImages.length > 0) {
                updateCarosel(filteredImages, 0); // İlk render zamanı imageArray və imageCounter-i birbaşa yeniləyirik
            }
        }
        reverseArray();
    }, []);

    const updateCarosel = (imageArray: newsType[], imageCounter: number) => {
        const currentNews = imageArray[imageCounter];
        const nextNews = imageArray[(imageCounter + 1) % imageArray.length];

        setForNavigate(currentNews.newsTitle.split(' ').join('-'))

        setImageUrl(currentNews.newsCover);
        setSecondImageUrl(nextNews.newsCover);
        setNewsTitle(currentNews.newsTitle);
        setNewsContent(currentNews.newsContent);

        const dateVariable = currentNews.newsDate.split('.');
        const date = new Date();
        const todayVariable = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`.split('.');

        const mainVariableYear = (Number(todayVariable[2]) - Number(dateVariable[2]) > 0) ? `${Number(todayVariable[2]) - Number(dateVariable[2])} year ` : '';
        const mainVariableMonth = (Number(todayVariable[1]) - Number(dateVariable[1]) > 0) ? `${Number(todayVariable[1]) - Number(dateVariable[1])} months ` : '';
        const mainVariableDay = (Number(todayVariable[0]) - Number(dateVariable[0]) > 0) ? `${Number(todayVariable[0]) - Number(dateVariable[0])} days ` : '';

        setNewsDate(mainVariableYear + mainVariableMonth + mainVariableDay + ' ago');
        setNewsAuthor(currentNews.newsAuthor);
        setImageCounter((prevCounter) => (prevCounter + 1) % imageArray.length);

        const caroselContent = document.querySelector('.carosel-content');
        if (caroselContent) {
            caroselContent.classList.remove('slice-active');
            void (caroselContent as HTMLElement).offsetWidth;
            caroselContent.classList.add('slice-active');
        }

        const rightCircle = document.querySelector('.right-circle');
        if (rightCircle) {
            rightCircle.classList.remove('right-circle-slice');
            void (rightCircle as HTMLElement).offsetWidth;
            rightCircle.classList.add('right-circle-slice');
        }
    };

    useEffect(() => {
        if (imageArray.length > 0) {
            const intervalId = setInterval(() => updateCarosel(imageArray, imageCounter), 8000);

            return () => clearInterval(intervalId);
        }
    }, [imageArray, imageCounter]);

    useEffect(() => {
        const handleFocus = () => {
            const caroselContent = document.querySelector('.carosel-content');
            if (caroselContent) {
                caroselContent.classList.remove('slice-active');
                void (caroselContent as HTMLElement).offsetWidth;
                caroselContent.classList.add('slice-active');
            }

            const rightCircle = document.querySelector('.right-circle');
            if (rightCircle) {
                rightCircle.classList.remove('right-circle-slice');
                void (rightCircle as HTMLElement).offsetWidth;
                rightCircle.classList.add('right-circle-slice');
            }
        };

        window.addEventListener('focus', handleFocus);

        return () => window.removeEventListener('focus', handleFocus);
    }, []);



    const navigate = useNavigate();

    const callNavigate = (navigateUrl: string) => {
        navigate(`/song-festival/${navigateUrl}`);
    }

    return (
        <div className="content-width carosel">
            <h3 style={{ paddingTop: '30px' }}>Last News</h3>
            <div className="carosel-content">
                <div className="shadow"></div>
                <div className="carosel-content-text">
                    <h1>{newsTitle}</h1>
                    <p>{newsContent}</p>
                    <button onClick={() => callNavigate(forNavigate)}>More...</button>
                    <div className="cct-ending">
                        <span>{newsDate}</span>
                        <span>by {newsAuthor}</span>
                    </div>
                </div>
                <div className="carosel-image-back">
                    <img src={imageUrl} alt="" />
                </div>
                <div className="carosel-content-right">
                    <div className="right-circle">
                        <img src={imageUrl} alt="" />
                    </div>
                    <div>
                        <img src={secondImageUrl} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carosel;
