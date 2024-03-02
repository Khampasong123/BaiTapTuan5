var man=[
    {
    id:1,
    name:"Quần kaki Nam",
    code:"TC143NA",
    price:"690.000",
    image:"https://bizweb.dktcdn.net/100/080/529/products/quan-kaki-nam-aligro-algk076-fc8faee9-d1df-4467-9fff-52b73a0cf3eb.jpg?v=1657360078300"

    },
    {
    id:2,
    name:"Áo sơ mi nam",
    code:"TC1342NA",
    price:"375.000",
    image:"https://tunhalam.com/cdn/shop/products/image_c37028bb-cfc8-466b-a106-d1ca8ad8a323.jpg?v=1676209470"
    },
    {
    id:3,
    name:"Quần tây",
    code:"TC323",
    price:"270.000",
    image:"https://cache.baohoxanh.com/blog/wp-content/uploads/2022/11/chon-mau-quan-tay-nam-dep_af151ae3863c42d390260b59629bb17b.webp"

    },
    {
    id:4,
    name:"Bộ đồ thể thao",
    code:"TC223",
    price:"399.000",
    image:"https://down-vn.img.susercontent.com/file/sg-11134202-22110-sfqvj9bfmejve3"

    }

]
var women=[
    {
    id:1,
    name:"váy nữ ",
    code:"TC143",
    price:"290.000",
    image:"https://cf.shopee.vn/file/cac68af5c406eb2773d2f0d4163d7c34"

    },
    {
    id:2,
    name:"Áo sơ mi nữ",
    code:"TC123",
    price:"280.000",
    image:"https://khohangsiann.com/wp-content/uploads/16465-fccad431-8160-4a12-9d19-598be2dd9798.jpg"
    },
    {
    id:3,
    name:"Áo Khoác",
    code:"TC323",
    price:"270.000",
    image:"https://vn-live-01.slatic.net/p/6db931afde1f8df4b21ce10a90f4e987.jpg"

    },
    {
    id:4,
    name:"Áo thun",
    code:"TC223",
    price:"299.000",
    image:"https://vn-test-11.slatic.net/p/47a0929769861a3ebd2e2ff2b1e5116f.png"

    }
]
function listProducts(){
    for(let i=0; i<= man.length-1;i++){
        var demo = '<div class="col-3">';
        demo+= '<div class="card" style="width: 18rem; ">';
        demo+= '<img src="'+man[i].image+'" class="card-img-top" style="height:400px; ">';
        demo += '<div class="card-body">';
        demo += '<h5 class="card-title">'+man[i].name+'</h5>';
        demo += '<p class="card-text">'+man[i].price+'</p>';
        demo += '<a href="#" class="btn btn-primary" onclick="oder()">Đặt mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
        console.log(demo);
        document.getElementById("men").innerHTML+= demo;


    }
    for(let i=0; i<= women.length-1;i++){
        var demo = '<div class="col-3">';
        demo+= '<div class="card" style="width: 18rem; ">';
        demo+= '<img src="'+women[i].image+'" class="card-img-top" style="height:400px; ">';
        demo += '<div class="card-body">';
        demo += '<div class="card-title">'+women[i].name + '</h5>';
        demo += '<p class="card-text">'+women[i].price+'</p>';
        demo += '<a href="#" class="btn btn-primary" onclick="oder()">Đặt mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
        console.log(demo);
        document.getElementById("women").innerHTML+= demo;


    }
    
    
    }
