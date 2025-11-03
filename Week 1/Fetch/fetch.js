// async function fetchData(url) {
//       /* Paused until the request completes. */
//       try{
//       const response = await fetch(url);}
//       console.log(response);
//       /* Wait for the JSON. */
//       const data = await response.json();
//       console.log(data);
//         return data;
// }

async function fetchPost(url) {
    return(await fetch(url).json())
}

function handleData(data) {
    console.log(data); 
    document.getElementById("data").innerText = data;
    document.getElementById("fun-fact").innerText = data;}