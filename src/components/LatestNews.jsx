import '../css/latestNews.css';

const LatestNews = ({ text }) => {
    return (
        <article>
            <a href="#">{text}</a>
        </article>
    )
}

const LatestNewsSidebar = () => {
    return (
        <aside className="latest-news">
            <h2>LATEST NEWS</h2>
            <div className="latest-news__articles">
                {Array.from({ length: 7 }, (_, i) => (
                    <LatestNews key={i} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"} />
                ))}
            </div>
        </aside>
    )
}

export default LatestNewsSidebar;