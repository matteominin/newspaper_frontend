import '../../css/SmallNews.css'

const SmallNews = ({ news }) => {
    return (
        <article>
            <a className="small-news" href="#">
                <div className="small-news__container">
                    {news.category && <span className="category">{news.category}</span>}
                    <h2>{news.title}</h2>
                </div>
                <div className="small-news__img-container">
                    <img src="https://placehold.co/250x250" alt="placeholder" />
                </div>
            </a>
        </article>
    )
}

export default SmallNews;