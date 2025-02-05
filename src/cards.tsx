import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const viewPost = (article: string): undefined => {
    window.open(`/articles/${article}`, "_self");
};

interface Datas {
    title: string;
    date: string;
    desc: string;
    postName: string;
}

const blogData: [string, string, string, string][] = [
    [
        "CS 146 Lecture 9 Notes",
        "February 4, 2025",
        "Pointers in C. Advanced mutation in Racket and differences in Scheme.",
        "cs146-lecture9",
    ],
    [
        "CS 146 Lecture 8 Notes",
        "January 30, 2025",
        "Continuation of mutation in Racket and C; The box data structure.",
        "cs146-lecture8",
    ],
    [
        "CS 146 Lecture 7 Notes",
        "January 28, 2025",
        "Loops and mutation in C. No more recursion for everything.",
        "cs146-lecture7",
    ],
    [
        "CS 146 Lecture 6 Notes",
        "January 23, 2025",
        "Mutation and memoization in a non-pure functional program.",
        "cs146-lecture6",
    ],
    [
        "CS 146 Lecture 5 Notes",
        "January 21, 2025",
        "The C Compiler and primitive C character input.",
        "cs146-lecture5",
    ],
    [
        "CS 146 Lecture 4 Notes",
        "January 16, 2025",
        "Modelling the C language from a Racket perspective.",
        "cs146-lecture4",
    ],
    [
        "CS 146 Lecture 3 Notes",
        "January 14, 2025",
        "Modelling input and more side-effects in Racket.",
        "cs146-lecture3",
    ],
    [
        "CS 146 Lecture 2 Notes",
        "January 9, 2025",
        "Side-effects and modelling output in Racket.",
        "cs146-lecture2",
    ],
    [
        "Website Updates",
        "January 9, 2025",
        "Looking back at the changes I made to my website in the past years.",
        "website-updates",
    ],
    [
        "CS 146 Tutorial 1 Notes",
        "January 8, 2025",
        "Includes a brief overview of the language Haskell (the language used for the tutorials).",
        "cs146-tutorial1",
    ],
    [
        "CS 146 Lecture 1 Notes",
        "January 7, 2025",
        "Includes a brief overview of the main concept in CS 146.",
        "cs146-lecture1",
    ],
    [
        "Making a Personal Website",
        "July 4, 2024",
        "For the first time in 3 years, I made a personal website to display my projects and ideas.",
        "making-website-1",
    ],
    [
        "A Year of Online School",
        "October 15, 2021",
        "After a year of doing virtual high school, here are my thoughts.",
        "online-highschool",
    ],
];

function BlogCard({ title, date, desc, postName }: Datas) {
    return (
        <div className="blog-card">
            <Row>
                <Col>
                    <div className="blog-preview">
                        <h1
                            onClick={() => viewPost(postName)}
                            className="blog-preview-title"
                        >
                            {title}
                        </h1>
                        <h2 className="date-published-header">
                            Published on {date}
                        </h2>
                        <p className="blog-preview-desc">{desc}</p>
                        <hr className="card-divider" />
                    </div>
                </Col>
            </Row>
        </div>
    );
}

function BlogCardsMap() {
    return blogData.map(([title, date, desc, postName]) => (
        <BlogCard
            title={title}
            date={date}
            desc={desc}
            postName={postName}
            key={null}
        />
    ));
}

export default function BlogCards() {
    return (
        <div>
            <BlogCardsMap />
            <p className="end-of-articles">End of Articles :)</p>
        </div>
    );
}
