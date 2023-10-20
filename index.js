let arr=[
    {
        img_src: "https://rukminim1.flixcart.com/flap/96/96/image/29327f40e9c4d26b.png?q=100",
        title: "Grocery",
        href:"",
    },
    {
        img_src: "https://rukminim1.flixcart.com/flap/96/96/image/22fddf3c7da4c4f4.png?q=100",
        title: "Mobiles",
        href:"",
    },
    {
        img_src:"https://rukminim1.flixcart.com/fk-p-flap/96/96/image/0d75b34f7d8fbcb3.png?q=100",
        title:"Fashion",
        href:"",
    },
    {
        img_src:"https://rukminim1.flixcart.com/flap/96/96/image/69c6589653afdb9a.png?q=100",
        title:"Electronics",
        href:"",
    },
    {
        img_src:"https://rukminim1.flixcart.com/flap/96/96/image/ab7e2b022a4587dd.jpg?q=100",
        title:"Home & Furniture",
        href:"",
    },
    {
        img_src:"https://rukminim1.flixcart.com/flap/96/96/image/0ff199d1bd27eb98.png?q=100",
        title:"Appliances",
        href:"",
    },
    {
        img_src:"https://rukminim1.flixcart.com/flap/96/96/image/71050627a56b4693.png?q=100",
        title:"Travel",
        href:"",
    },
    {
        img_src:"https://rukminim1.flixcart.com/flap/96/96/image/dff3f7adcf3a90c6.png?q=100",
        title:"Beauty,Toys & More",
        href:"",
    },
    {
        img_src:"https://rukminim1.flixcart.com/fk-p-flap/96/96/image/05d708653beff580.png?q=100",
        title:"Two Wheelers",
        href:"",
    },
];
arr.map((e)=>{
    let image= document.createElement('img');
    image.src=e.img_src;

    let title=document.createElement("p");
    title.innerHTML=e.title;
    
    let box=document.createElement('div');
    box.append(image,title);

    document.getElementById("categories").append(box);
})

/*let a=document.getElementById("categories");*/