import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

import Footer from "./footer";
import BlogCards from "./cards";

import MainBackground from "./background";

const homeClick = () => {
    window.open("https://dundeezhang.com", "_self");
};

const blogClick = () => {
    window.open("/", "_self");
};

const projectsClick = () => {
    window.open("https://dundeezhang.com/#projects", "_self");
};

const contactClick = () => {
    window.open("https://dundeezhang.com/#contactform", "_self");
};

export default function Blog() {
    return (
        <div className="blog-container">
            <MainBackground />
            <div>
                <div className="blog-header">
                    <div className="title-div">
                        <h1 className="blog-title">/blog</h1>
                        <h2 className="blog-subtitle">Life and Dev Notes</h2>
                    </div>
                </div>
                <div className="navbar-wrapper">
                    <div className="navbar">
                        <button
                            type="button"
                            onClick={homeClick}
                            className="open-article-button"
                        >
                            Portfolio
                        </button>
                        <button
                            type="button"
                            onClick={blogClick}
                            className="open-article-button"
                        >
                            Articles
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
                            Contact
                        </button>
                    </div>
                </div>

                <div className="content-container">
                    <Container fluid>
                        <BlogCards />
                    </Container>
                </div>
            </div>
            <div id="detail">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}
