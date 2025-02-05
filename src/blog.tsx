import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

import Footer from "./footer";
import BlogCards from "./cards";
import Top from "./top";

import MainBackground from "./background";

export default function Blog() {
    return (
        <div className="blog-container">
            <MainBackground />
            <div>
                <Top />

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
