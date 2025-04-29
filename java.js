const box =document.querySelector(".box");
const btn=document.querySelector("#btn");



async function getData(id) {
    await fetch(`https://dummyjson.com/users/${id}`)
        .then(res => res.json())
        .then(res => {
            showUser(res);

        })
        .catch(err => console.log(err))
}

getData(1)


function showUser(data) {
    let newUser =
        `
        <div class="card">
            <img src="${data.image}" alt="user logo">
            <h1>${data.firstName} ${data.lastName}</h1>
            <h2>${data.role}</h2>
            <hr>
            <p>Phone: ${data.phone}</p>
            <p>Manzil: ${data.address.country} ${data.address.address}</p>
            <p>Yosh: ${data.age}</p>
            <p>Email: ${data.email}</p>
        </div>
        `

    box.innerHTML = newUser


}
btn.addEventListener("click", ()=>{
   let id= Math.floor(Math.random() *(30-1))+1
    getData(id)
});