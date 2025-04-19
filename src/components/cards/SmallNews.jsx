import '../../css/SmallNews.css'

const SmallNews = ({ news }) => {
    return (
        <article className="small-news">
            <div className="small-news__container">
                {news.category && <div className="category">{news.category}</div>}
                <h3>{news.title}</h3>
            </div>
            <div className="small-news__img-container">
                <img src="https://placehold.co/180x180" alt="placeholder" />
            </div>
        </article>
    )
}

export default SmallNews;
// TODO: change image dimensions