import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import Giscus from "@giscus/react";
import { useMediaQuery } from "react-responsive";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
    materialDark,
    materialLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";

import MainBackground from "./background";
import Footer from "./footer";
import Top from "./top";

const blogClick = () => {
    window.open("/", "_self");
};

const MarkdownTest = () => {
    const { filename } = useParams();
    const [markdownContent, setMarkdownContent] = useState("");

    useEffect(() => {
        fetch(`/articles/${filename}.md`)
            .then((response) => response.text())
            .then((text) => setMarkdownContent(text));
    }, [filename]);

    const isDarkMode = useMediaQuery({ query: "(prefers-color-scheme: dark)" });

    const [ready, setReady] = useState(false);

    useEffect(() => {
        setReady(true);
    }, []);

    if (!ready) {
        return null;
    }

    return (
        <div>
            <MainBackground />
            <Top />
            <div className="article-content">
                <button
                    type="button"
                    onClick={blogClick}
                    className="back-button"
                >
                    Back
                </button>
                <ReactMarkdown
                    components={{
                        code({ className, children, ...props }) {
                            const match = /language-(\w+)/.exec(
                                className || ""
                            );
                            const codeString = String(children).trim(); // Ensure children is a string
                            return match ? (
                                <SyntaxHighlighter
                                    PreTag="div"
                                    language={match[1]}
                                    // @ts-expect-error style tag overload
                                    style={
                                        isDarkMode
                                            ? materialDark
                                            : materialLight
                                    }
                                    {...props}
                                >
                                    {codeString}
                                </SyntaxHighlighter>
                            ) : (
                                <code {...props} className={className}>
                                    {codeString}
                                </code>
                            );
                        },
                    }}
                >
                    {markdownContent}
                </ReactMarkdown>
                <p className="end-of-article-marker">End of Article</p>
                <button
                    type="button"
                    onClick={blogClick}
                    className="back-button"
                >
                    Back
                </button>
            </div>
            <div className="comment-section">
                <Giscus
                    id="comments"
                    repo="dundeezhang/giscus"
                    repoId="R_kgDONnvt2g"
                    category="General"
                    categoryId="DIC_kwDONnvt2s4Cl3B9"
                    mapping="pathname"
                    term="Welcome to @giscus/react component!"
                    reactionsEnabled="1"
                    emitMetadata="0"
                    inputPosition="bottom"
                    theme="preferred_color_scheme"
                    lang="en"
                    loading="lazy"
                />
            </div>

            <Footer />
        </div>
    );
};

export default MarkdownTest;
