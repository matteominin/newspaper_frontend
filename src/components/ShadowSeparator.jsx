import '../css/shadowSeparator.css';

const ShadowSeparator = ({ title }) => {
    return (
        <section className="shadow-separator">
            <h3>{title.toUpperCase()}</h3>
            <div className="row"></div>
        </section>
    )
}

export default ShadowSeparator;