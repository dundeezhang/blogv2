const blogClick = () => {
    window.open("/", "_self");
};

const homeClick = () => {
    window.open("https://dundeezhang.com", "_self");
};

const projectsClick = () => {
    window.open("https://dhz.app/", "_blank");
};

const contactClick = () => {
    window.open("https://x.com/dundeezhang", "_blank");
};

export default function Top() {
    return (
        <div>
            <div className="blog-header">
                <div className="title-div">
                    <h1 className="blog-title">blog.dhz.app</h1>
                    <h2 className="blog-subtitle">Life and Dev Notes</h2>
                </div>
            </div>
            <div className="navbar-wrapper">
                <div className="navbar">
                    <button
                        type="button"
                        onClick={blogClick}
                        className="open-article-button"
                    >
                        Home
                    </button>
                    <button
                        type="button"
                        onClick={homeClick}
                        className="open-article-button"
                    >
                        Portfolio
                    </button>
                    <button
                        type="button"
                        onClick={projectsClick}
                        className="open-article-button"
                    >
                        Projects
                    </button>
                    <button
                        type="button"
                        onClick={contactClick}
                        className="open-article-button"
                    >
                        Twitter
                    </button>
                </div>
            </div>
        </div>
    );
}
