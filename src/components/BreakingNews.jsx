import '../css/breakingNews.css';

const BreakingNews = ({ title, time }) => {
    return (
        <section className="breaking-news">
            <strong>BREAKING</strong>
            <a href="#">{title}</a>
            <time dateTime={`PT${time}M`}>{time}m ago</time>
        </section>
    )
}

export default BreakingNews;