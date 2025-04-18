import '../css/BigNews.css';

const BigNews = ({ category }) => {
    return (
        <article className="big-news">
            <div className="big-news__thumbnail">
                <img src="https://placehold.co/400x250" alt="placeholder" />
                <div className="big-news__thumbnail__category">{category.toUpperCase()}</div>
            </div>
            <div className="big-news__content">
                <h1>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </h1>
                <div className="big-news__content__row"></div>
                <p className='big-news__content__text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                </p>
                <strong>BY JOHN DOE</strong>
            </div>
        </article>
    )
}

export default BigNews;