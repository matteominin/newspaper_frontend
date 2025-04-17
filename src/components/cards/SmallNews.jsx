import '../../css/SmallNews.css'

const SmallNews = ({ news }) => {
    return (
        <article className="small-news">
            <div className="small-news__container">
                {news.category && <div className="category">{news.category}</div>}
                <h3>{news.title}</h3>
            </div>
            <img src="https://placehold.co/70x70" alt="placeholder" />
        </article>
    )
}

export default SmallNews;