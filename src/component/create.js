const Create = () => {
    return ( 

        <div className="create">Add New Content 
        <form className="form">
            <label>
                <span>Title:</span>
                <input type="text" required/>
            </label>

            <label>
                <span>Author:</span>
               <select>
                <option value="Tobi">Tobi</option>
                <option value="Emmanuel">Emmanuel</option>
                <option value="Ayoluwa">Ayoluwa</option>
               </select>
            </label>

            <label>
                <span>Body:</span>
                <textarea type="text" required/>
            </label>
<button type="submit">Submit a blog</button>
        </form>
        </div>

        <div className="new">Add a New Content</div>
 dev
     );
}
 
export default Create;