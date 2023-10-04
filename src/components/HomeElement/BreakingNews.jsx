import Marquee from "react-fast-marquee";


const BreakingNews = () => {
    return (
        <div>
            <div className="flex bg-slate-300 p-3 rounded-lg">
                <button className="btn btn-secondary">Breaking News</button>
                <Marquee speed={100}>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
        </div>
    );
};

export default BreakingNews;