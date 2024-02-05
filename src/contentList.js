const ContentList = ({contents}) => {
    return ( 
        <>
        {contents.map((contents, index) => (
            <div className="board" key={contents.id}>
                <h2>Title: {contents.title}</h2>
                <p>Written by {contents.author}</p>
                
            </div>
        ))}
        </>
        
     );
}
 
export default ContentList;