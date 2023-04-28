const fetchProduct=async()=>{
    const product= await(await fetch("https://fakestoreapi.com/products")).json()
    console.log(product);
    let selectCategory="";
    const list=document.querySelectorAll('li');
    const myArray=["men's clothing","jewelery","electronics","women's clothing"];
    for(let i=0;i<myArray.length;i++){
    list[i].onclick=()=>{
        selectCategory=myArray[i];
        myFilter();
    }
}
    const myFilter=()=>{
        const checkCategory=(value)=>{
            return value.category==selectCategory;
        }
        const catProducts=product.filter(checkCategory);
        let text="";
        const datas=selectCategory==""?product:catProducts
        datas.map(item=>{
            text+=`<div class="col-12 col-sm-6 col-md-3 mt-4">
            <div class="card">
                    <img height="180" src="${item.image}" class="w-100" alt="">
                <div class="card-body">
                   <h2 class=" fw-bold fs-4">${item.title}</h2>
                   <h3 class=" fw-bold fs-5">${item.category}</h3>
                   <p class="fw-bold mb-2 fs-5">${item.price}$</p>
                </div>
            </div>
            </div>`
        })
        document.querySelector('.row').innerHTML=text;
    }
    myFilter();
}
fetchProduct();



// fetch("https://fakestoreapi.com/products")
// .then(res=>{
//     return res.json();
// })
// .then(data=>{
//     console.log(data);
//     let selectCategory="";
//     const list=document.querySelectorAll('li');
//     const myArray=["men's clothing","jewelery","electronics","women's clothing"];
//     for(let i=0;i<myArray.length;i++){
//     list[i].onclick=()=>{
//         selectCategory=myArray[i];
//         myFilter();
//         // console.log(myArray)
    
//     }
// }
//     const myFilter=()=>{
//         const checkCategory=(value)=>{
//             return value.category==selectCategory;
//         }
//         const catProducts=data.filter(checkCategory);
//         let text="";
//         const datas=selectCategory==""?data:catProducts
//         datas.map(item=>{
//             text+=`<div class="col-12 col-sm-6 col-md-3 mt-4">
//             <div class="card">
//                 <div class="card-img-top">
//                     <img height="200" src="${item.image}" class="w-100" alt="">
//                 </div>
//                 <div class="card-body">
//                    <div class="card-title">
//                    <p class=" fw-bold fs-4">${item.category}</p>
//                    </div>
//                 </div>
//             </div>
//             </div>`
//         })
//         document.querySelector('.row').innerHTML=text;
//     }
//     myFilter(); 
// })
// .catch(err=>console.log(err))















