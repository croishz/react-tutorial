const sleep = (n) => new Promise( 
	(resolve) => console.log(
		setTimeout(resolve, n)
	)
)

const posts = [
	{
		id: 1,
		title : "aaaaa",
		body : "bbbbb"
	},
	{
		id: 2,
		title : "Aaaaaa",
		body : "bbbb"
	},
	{
		id: 3,
		title : "Caaaaa",
		body : "bbb"
	},
]

export const getPosts = async ()=>{
	await sleep(500);
	return posts;
}

export const getPostById = async (id)=>{
	await sleep(500);
	return posts.find((post) => post.id === id);
}