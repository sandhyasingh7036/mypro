var obj=[
    {Pname:"Laptop",category:"laptop",subcategory:"hp",price:"12000",pimage:"../image/3.jpg"},
    {Pname:"Laptop",category:"laptop",subcategory:"dell",price:"26000",pimage:"../image/1.jpg"},
    {Pname:"Laptop",category:"laptop",subcategory:"hp",price:"24000",pimage:"../image/2.jpg"},
    {Pname:"Laptop",category:"laptop",subcategory:"hp",price:"60000",pimage:"../image/4.jpg"},
    {Pname:"Laptop",category:"laptop",subcategory:"dell",price:"22000",pimage:"../image/3.jpg"},
    {Pname:"Mobile",category:"mobile",subcategory:"nokia",price:"20000",pimage:"../image/1.jpg"},
    {Pname:"Mobile",category:"mobile",subcategory:"samsung",price:"17000",pimage:"../image/3.jpg"},
    {Pname:"Mobile",category:"mobile",subcategory:"nokia",price:"1100",pimage:"../image/2.jpg"},
    {Pname:"Mobile",category:"mobile",subcategory:"samsung",price:"1200",pimage:"../image/1.jpg"},
    {Pname:"Mobile",category:"mobile",subcategory:"apple",price:"1900",pimage:"../image/4.jpg"},
    {Pname:"Shirt",category:"shirt",subcategory:"man",price:"30000",pimage:"../image/3.jpg"},
    {Pname:"Shirt",category:"shirt",subcategory:"women",price:"40000",pimage:"../image/3.jpg"},
    {Pname:"Shirt",category:"shirt",subcategory:"man",price:"33330",pimage:"../image/4.jpg"},
    {Pname:"Shirt",category:"shirt",subcategory:"women",price:"23800",pimage:"../image/1.jpg"},
    {Pname:"Shirt",category:"shirt",subcategory:"kid",price:"27000",pimage:"../image/3.jpg"},
    {Pname:"Watch",category:"watch",price:"28000",pimage:"../image/2.jpg"},
    {Pname:"Watch",category:"watch",price:"26000",pimage:"../image/1.jpg"},
    {Pname:"Watch",category:"watch",price:"25000",pimage:"../image/3.jpg"},
    {Pname:"Watch",category:"watch",price:"150000",pimage:"../image/4.jpg"},
    {Pname:"Watch",category:"watch",price:"17000",pimage:"../image/3.jpg"},
]

let totaldata=obj.map((item)=>{
    return(
        `<div class="card col-sm-12 col-md-6 col-lg-4 col-xl-3">
        <img src=${item.pimage} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${item.Pname}</h5>
          <p class="card-text">Price-${item.price}</p>
          <p>${item.category}</p>
          <p>${item.subcategory}</p>
          <a href="#" class="btn btn-primary">Shop Now</a>
        </div>
      </div>
        `
    )
})
document.getElementById("root").innerHTML=totaldata.join("");
function catfilter(cat){
    filterdata=obj.filter((pro)=>{
    return cat===pro.category
  })

let totaldata=fiterdata.map((item)=>{
  return(
      `<div class="card col-sm-12 col-md-6 col-lg-4 col-xl-3">
      <img src=${item.pimage} class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${item.Pname}</h5>
        <p class="card-text">Price-${item.price}</p>
        <p>${item.category}</p>
        <p>${item.subcategory}</p>
        <a href="#" class="btn btn-primary">Shop Now</a>
      </div>
    </div>
      `
  )
})

document.getElementById("root").innerHTML=totaldata.join("");
}