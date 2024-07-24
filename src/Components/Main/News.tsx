import { useEffect, useRef, useState } from 'react';
import { news, newsType } from '../../data/data';
import './News.css';

const News = () => {
    const newsContentRef = useRef<HTMLDivElement | null>(null);
    const newsBoxRefs = useRef<Array<HTMLDivElement | null>>([]);
    const [itemsToShow, setItemsToShow] = useState(4);

    const updateItemsToShow = () => {
        if (window.innerWidth < 576) {
            setItemsToShow(1);
        } else if (window.innerWidth < 768) {
            setItemsToShow(2);
        } else if (window.innerWidth < 992) {
            setItemsToShow(3);
        } else {
            setItemsToShow(4);
        }
    };

    useEffect(() => {
        updateItemsToShow();
        window.addEventListener('resize', updateItemsToShow);
        return () => window.removeEventListener('resize', updateItemsToShow);
    }, []);

    useEffect(() => {
        if (newsContentRef.current) {
            const newsBoxes = newsBoxRefs.current;
            const newsContent = newsContentRef.current;
            let maxHeightValue: number[] = [], leftValue: number = 20;

            newsBoxes.forEach(newsBox => {
                if (newsBox) {
                    newsBox.style.width = `${(newsContent.offsetWidth / itemsToShow) - 40}px`;
                    newsBox.style.left = leftValue + 'px';
                    leftValue += (newsContent.offsetWidth / itemsToShow);
                    maxHeightValue.push(newsBox.offsetHeight);
                }
            });

            newsContent.style.height = `${Math.max(...maxHeightValue) + 40}px`;
        }
    }, [itemsToShow, news]);

    useEffect(() => {
        let currentIndex = 0;
        const newsCarouselInterval = setInterval(() => {
            if (newsContentRef.current) {
                const newsBoxes = newsBoxRefs.current;
                const newsContent = newsContentRef.current;

                newsBoxes.forEach((newsBox, index) => {
                    if (newsBox) {
                        newsBox.style.transition = 'left 0.5s ease-out';
                        let newPosition = ((index - currentIndex + newsBoxes.length) % newsBoxes.length) * (newsContent.offsetWidth / itemsToShow) + 20 - (newsContent.offsetWidth / itemsToShow);
                        newsBox.style.left = newPosition + 'px';
                        if (newsBox.style.left === 20 - (newsContent.offsetWidth / itemsToShow) + 'px') {
                            setTimeout(() => {
                                newsBox.style.display = 'none';
                            }, 1000);
                            setTimeout(() => {
                                newsBox.style.display = 'grid';
                            }, 5000);
                        }
                    }
                });

                currentIndex = (currentIndex + 1) % newsBoxes.length;
            }
        }, 5000);

        return () => clearInterval(newsCarouselInterval);
    }, [itemsToShow]);

    return (
        <div className='content-width news'>
            <div className='news-head'>
                <h3>All News</h3>
                <button>Read More...</button>
            </div>
            <div className='news-content' ref={newsContentRef}>
                {
                    news.slice().reverse().map((e: newsType, index) => {
                        return (
                            <div
                                key={index}
                                className='news-box'
                                ref={(el) => newsBoxRefs.current[index] = el}
                            >
                                <span className='news-count'>{index + 1 < 10 ? `0${index + 1}` : index + 1}</span>
                                <h5>{e.newsTitle}</h5>
                                <div>
                                    <span>by {e.newsAuthor}</span>
                                    <span>{e.newsDate}</span>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default News;
