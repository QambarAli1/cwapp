import Postcard from './card'
function Posts() {
    return (
        <div className='posts' >
            <hr />
            <h1>
                POSTS
            </h1>
            <br />
            <div className="allPosts">
                <Postcard />
                <Postcard />
                <Postcard />
            </div>

        </div>
    )
}
export default Posts;