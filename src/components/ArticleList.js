import Article from "./Article";

function ArticleList({ posts }) {
    console.log(posts)
    const listArts = posts.map(post => 
        <Article key={post.id} {...post}/>
    )
    return (
        <main>{listArts}</main>
    )
}    


export default ArticleList;