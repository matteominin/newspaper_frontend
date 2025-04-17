import '../css/mediumNews.css'

const MediumNews = () => {
    return (
        <article className="medium-news">
            <div className="medium-news__content">
                <h2 className="medium-news__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <strong>BY JOHN DOE</strong>
            </div>
            <img src="https://placehold.co/180x180" alt="placeholder" />
        </article>
    );
}

export default MediumNews;