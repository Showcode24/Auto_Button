import { Link } from "react-router-dom";

const ContentList = ({ contents }) => {
    return (
        <>
            {contents.map((contents, index) => (
                <div className="board" key={contents.id}>
                    <Link to={`/contents/${contents.id}`} className="link-content">
                        <h2>Title: {contents.title}</h2>
                        <p>Written by {contents.author}</p>
                    </Link>

                </div>
            ))}
        </>

    );
}

export default ContentList;