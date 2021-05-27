let sehitler = [
  {
    name: "  Osama Ashraf Abu Raida",
    age: 23,
    date: "24 - 05 - 2021",
    photo: "images/sehitlerimiz/image001.jpg",
  },
  {
    name: "  Zahdi Altawil",
    age: 17,
    date: "24 - 05 – 2021",
    photo: "images/sehitlerimiz/image002.jpg",
  },
  {
    name: "Mahmoud Ammar Abu Jarad",
    age: 26,
    date: "23 - 05 – 2021",
    photo: "images/sehitlerimiz/image003.jpg",
  },
  {
    name: "Malek Ismail Hamdan",
    age: 21,
    date: "22 - 05 – 2021 ",
    photo: "images/sehitlerimiz/image004.jpg",
  },
  {
    name: "Doaa Iyad syrup",
    age: 12,
    date: "20 - 05– 2021",
    photo: "images/sehitlerimiz/image005.jpg",
  },
];

let sehitlerList = document.getElementById("sehitlerList");

sehitler.forEach((element) => {
  $("#sehitlerList").append(` <div class="col-12 col-lg-3 col-sm-6">
<div class="team-section-wrap">
    
<div class="img green">
            <img src="/assets/${element.photo}" alt="" class="rounded-circle">
        </div>

        <h4>Ad Soyad</h4>
        <h5>${element.name} </h5>
        <h5>Yaş: ${element.age}</h5>
        <h4> ${element.date}</h4>
       
</div>

</div>`);
});
