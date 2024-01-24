const ContentList = ({contents, handleDelete}) => {
    return ( 
        <>
        {contents.map((contents, index) => (
            <div className="board" key={contents.id}>
                <h2>Title: {contents.title}</h2>
                <p>Written by {contents.author}</p>
                <button onClick={()=>{handleDelete(contents.id)}} className="button">Delete Blog</button>
            </div>
        ))}
        </>
        
     );
}
 
export default ContentList;