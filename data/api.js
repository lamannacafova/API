// ASYNC AWAIT
const fetchApi =async()=>{
    const posts=await( await fetch("https://restcountries.com/v3.1/all")).json();
    // console.log(posts)
    let add="";
    const data=posts.slice(startCount, endCount).map((item,i)=>{
        add+=`<div class="col-12 col-sm-6 col-md-3 mt-4">
        <div class="card">
            <div class="card-img-top">
                <img height="200" src="${item.flags.png}" class="w-100" alt="">
            </div>
            <div class="card-body">
               <div class="card-title">
               <p class="fw-bold fs-4">${item.name.common}</p>
               </div>
                <div class="card-text">
                <h4 class="fw-bold mb-2">${item.capital}</h1>
                <a href="" class="btn btn-primary mt-2">${startCount+i}</a>
                </div>
            </div>
        </div>
        </div>`
    })
    document.querySelector('.row').innerHTML=add;
    console.log(data);
}
fetchApi();
const btn=document.querySelectorAll('button');
let startCount=0;
let endCount=250;
const number=[[0,50],[50,100],[100,150],[150,200],[200,250]];
for(let i=0;i<number.length;i++){
    btn[i].onclick=()=>{
        startCount=number[i][0];
        endCount=number[i][1];
        fetchApi();
    }
}





   




