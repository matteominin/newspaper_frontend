import SmallNews from "./cards/SmallNews"
import '../css/smallNewsSidebar.css'

const categories = ["CENTRAL COAST", "LOS ANGELES", "POLITICS", "BAY AREA & STATE", "TECHNOLOGY", "GOLDEN STATE WARRIORS"]

const SmallNewsSidebar = () => {
    return (
        <aside className="small-news-sidebar">
            {
                Array.from({ length: 6 }).map((_, i) => (
                    <SmallNews key={i} news={{ category: categories[i], title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" }} />
                ))
            }
        </aside>
    )
}

export default SmallNewsSidebar;