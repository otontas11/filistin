(function () {
  "use strict";
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");
  var elmntToView = document.getElementById("progressbarArea");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        event.preventDefault();
        event.stopPropagation();

        var CID = grecaptcha.getResponse();

        if (form.checkValidity() && CID.length !== 0) {

          progressAnimation(34);

          localStorage.setItem(
            "name",
            document.getElementById("isimform").value
          );
          localStorage.setItem(
            "city",
            document.getElementById("sehirform").value
          );

          // var url = window.location.origin+'/palestine/result.html';
          var url = window.location.origin + "/result.html";

          setTimeout(() => {
            elmntToView.scrollIntoView();
            document.getElementById("isimform").value = "";
            document.getElementById("ulkeform").value = "";
            document.getElementById("sehirform").value = "";
            document.getElementById("invalidResult").classList.add("d-none");
            document.getElementById("kvkkCheck").checked = false;
            document.getElementById("personalCheck").checked = false;
            form.classList.remove("was-validated");

            //   window.open(url, "_blank");
          }, 100);
        } else {
          document.getElementById("invalidResult").classList.remove("d-none");
        }
        // form.classList.remove("was-validated");
      },
      false
    );
  });
})();

/////////////// PROGRESS BAR ////////////////////////////////////

const totalSign = 20;

let kudusMapNumber=1;
 
let signCount = 0; 

kalanImza(signCount);
kudusMap(kudusMapNumber);

document.querySelector("#secondAreaCarpet").style.width=(100-((signCount * 100) / totalSign).toFixed(2))+'%'
document.querySelector("#skillbarPerson").style.width=(((signCount * 100) / totalSign).toFixed(2))+'%'
document.querySelector("#skillbarPercent").style.width=(((signCount * 100) / totalSign).toFixed(2))+'%'
document.getElementById("skillbarPercentDegree").innerHTML =parseFloat((signCount * 100) / totalSign).toFixed(2) + "%";

function progressAnimation() {
 
  if (signCount <= totalSign) {
    console.log("signCount", signCount, totalSign); 

    ++signCount;
  
    kudusMapNumber = Math.ceil((signCount * 100) / totalSign / 5);

    document.querySelector("#secondAreaCarpet").style.width=(100-((signCount * 100) / totalSign).toFixed(2))+'%'

    kudusMap(kudusMapNumber);
    kalanImza(signCount);
 
  }
}

function kudusMap(result) {

  if (result<=20) {
    $('#kudusMap20>img').remove()
    setTimeout(()=>{
       $("#kudusMap20").append(
      `<img src="./assets/images/harita/Harita${result}.jpg"  alt="kudus" />`
    );
    },500)
   
  }  
}

function kalanImza(val) {
  if (val <= totalSign) {
    document.getElementById(
      "kalanImza"
    ).innerHTML = ` ( Atılan İmza : ${val} )`;
  }
}
