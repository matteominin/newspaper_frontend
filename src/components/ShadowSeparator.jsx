import '../css/shadowSeparator.css';

const ShadowSeparator = ({ title }) => {
    return (
        <section className="shadow-separator">
            <h2>{title.toUpperCase()}</h2>
            <div className="row"></div>
        </section>
    )
}

export default ShadowSeparator;