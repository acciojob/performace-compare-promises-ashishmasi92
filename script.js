// Array of API URLs to fetch data from
const apiUrls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
];


function fetchData (){
let start = performance.now()
	Promise.all(apiUrls.map( (v)=>{
		return fetch(v).then((i)=>i.json())
	}))
	.then((res)=>{
		let end = performance.now()
		console.log(res)
		let timeTaken = ((end-start)/1000).toFixed(3)
		document.getElementById("output-all").innerText = timeTaken
	})



	let startany = performance.now()
Promise.any(apiUrls.map((res)=>{
	return fetch(res).then((i)=>i.json())
}))
	.then((res)=>{
		let end = performance.now()
		let timeTaken = ((end-startany)/1000).toFixed(3)
		document.getElementById("output-any").innerText = timeTaken
		console.log(res)
	})
	
	
	

}

fetchData()

// You can write your code here
