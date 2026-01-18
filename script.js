
//cm2  contiene los campeones mundiales de todas las copas,solo los nombres
  let cm2 = {};

const hoy = new Date();

const fechaFormateada = 
  hoy.getFullYear() + "/" +
  String(hoy.getMonth() + 1).padStart(2, "0") + "/" +
  String(hoy.getDate()).padStart(2, "0");

console.log(fechaFormateada);


  let campeonesMundiales = [];
  let br2 = document.createElement("br");

let equiposWC2026 = document.getElementById("equiposWC2026");
equiposWC2026.classList.add("row")
equiposWC2026.classList.add("align-items-start")
equiposWC2026.classList.add("p1")



let misEquipos = []
let partidos = []
let grupos = []
let misGrupos = []

let gruposSimplificado;

let divGruposFixture = document.getElementById("divGrupos");




async function traerCompetencia() {
  const API_KEY = "ccbdcb265ba0436fac94f04dc5513585";

  const res = await fetch(
    "https://api.football-data.org/v4/competitions",
    {
      headers: {
        "X-Auth-Token": API_KEY
      }
    }
  );

  const data = await res.json();

  console.log(data);
}

// async function copaLibertadores2026(){
//   const API_KEY = "ccbdcb265ba0436fac94f04dc5513585";

//   const res = await fetch("https://api.football-data.org/v4/competitions/CLI/teams",{
//     headers:{
//       "X-Auth-Token": API_KEY
//     }
//   });

//   const data = await res.json();
//   console.log(data);
// }



//traerEquiposWC2026
async function traerCompetencia2() {
  const API_KEY = "ccbdcb265ba0436fac94f04dc5513585";

  const res = await fetch(
    "https://api.football-data.org/v4/competitions/WC/teams",
    {
      headers: {
        "X-Auth-Token": API_KEY
      }
    }
  );

  const data = await res.json();
  console.log(data);


  data.teams.forEach(team => {
  
   
    let team2 = {}
    team2.name = team.name;
    team2.tla = team.tla;
    team2.contrincantesFaseGrupo = [];
    misEquipos.push(team2);

    let lbl = document.createElement("label");
    let br = document.createElement("br");
    //divPrincipal de la card del pais
    let div = document.createElement("div");
  
    let img = document.createElement("img");
    let divImgEquipo = document.createElement("div");
    divImgEquipo.classList.add("flagImg")
    let aWSite = document.createElement("a");
    let lblAbreviatura = document.createElement("label");
    let cmPais = document.createElement("img");
    cmPais.setAttribute("src","https://svgsilh.com/svg/149492.svg");
    cmPais.classList.add("imgCopaGanada");



    lblAbreviatura.innerHTML = team.tla;
    aWSite.setAttribute("href",team.website);
    aWSite.innerHTML = team.website;
    img.setAttribute("src",team.crest);
    img.classList.add("banderaPais");
    img.classList.add("col-12")
    lbl.innerHTML = team.name;
    divImgEquipo.appendChild(img);
    div.appendChild(divImgEquipo);
    div.setAttribute("id",team.tla);

    let divCopas = document.createElement("div");
    divCopas.classList.add("divCopas");
    divCopas.classList.add("row");
    divCopas.classList.add("col-12")



    
     Object.entries(cm2).forEach(([clave,valor])=>{
 // console.log(clave);
  if(clave == team.name){
    for(let i=0; i<valor; i++){
      let imgCopa = document.createElement("img");
      imgCopa.setAttribute("src","https://svgsilh.com/svg/149492.svg")
      imgCopa.classList.add("imgCopaGanada");
      divCopas.appendChild(imgCopa);
  
    }
   }

 });






 div.appendChild(br)
  div.appendChild(divCopas)
    div.appendChild(lbl);
    div.appendChild(lblAbreviatura);
    div.appendChild(aWSite);

    div.classList.add("col-sm-5")
    div.classList.add("col-8")
    div.classList.add("col-md-5");
    div.classList.add("col-lg-3");

    div.classList.add("bandera1")


    equiposWC2026.appendChild(div);


    });


}




async function traerJuegosCompetencia() {
  const API_KEY = "ccbdcb265ba0436fac94f04dc5513585";

  const res = await fetch(
    "https://api.football-data.org/v4/competitions/WC",
    {
      headers: {
        "X-Auth-Token": API_KEY
      }
    }
  );

  const data = await res.json();
  console.log(data.seasons);

  let cm = {};


//de lacompentencia WORDL CUP, trae las temporadas, luego, consigue la cantidad de veces
//que un equipo salio campeon ylos pone en un arrayt

 data.seasons.forEach(element => {
  
  if(element.id == 2398){
    console.log("nada");
  }else{

    campeonesMundiales.push(element.winner.name);
  
   // console.log(element.winner.name);

    if(cm[element.winner.name]){
      cm[element.winner.name] += 1;
    }else{
      cm[element.winner.name] = 1;
    }
  }
 });

 //console.log(campeonesMundiales)
 //console.log(cm);
 cm2 = cm;


 Object.entries(cm).forEach(([clave,valor])=>{
 // console.log(clave);
  for(let i=0; i<valor; i++){
    let imgCopa = document.createElement("img");
    imgCopa.setAttribute("src","https://svgsilh.com/svg/149492.svg")
    imgCopa.classList.add("imgCopaGanada");

  }

 })


}



async function traerPartidosCopa2026() {
  const API_KEY = "ccbdcb265ba0436fac94f04dc5513585";

  const res = await fetch(
    "http://api.football-data.org/v4/competitions/2000/matches",
    {
      headers: {
       
        "X-Auth-Token": API_KEY
      }
    }
  );

  const data = await res.json();
  console.log(data);


}


async function partidosWorldCup2026 (){

  let divPais = document.getElementsByClassName("bandera1");
  let logo = document.getElementById("logoCopa")

  let imgCopa = document.createElement("img");
  imgCopa.classList.add("logo2026")

  const url = "./partidosWC2026.php"

  try {

    let responseGet = await fetch(url, {
      "method": "get",
      "headers":{
            "Content-Type": "application/json",
      }
    })


    let resultado = await responseGet.json();
    console.log(resultado);


   //console.log(resultado["matches"]);


    console.log(resultado["competition"].emblem)
    imgCopa.setAttribute("src",resultado["competition"].emblem)
    logo.appendChild(imgCopa)

   resultado["matches"].forEach(element => {
   

   
    if(element.stage === "GROUP_STAGE"){
       let partido = {}
       let grupo = {}


      //console.log(element["group"]);
      partido.grupo = element["group"];
    //  console.log(element["stage"]);
      partido.instancia = element["stage"];

      grupos.push(element["group"]);
      
      partido.fechaUTC = element["utcDate"]
      Object.entries(element["awayTeam"]).forEach(([clave,valor])=>{
       // console.log(clave, valor);
        if(clave == "tla"){
          partido.visitante = valor;
        }

      })

      
      Object.entries(element["homeTeam"]).forEach(([clave,valor])=>{
        //console.log(clave, valor);
      
        if(clave == "tla"){
          partido.local = valor;
        }

      })

      partidos.push(partido);

    }
    

   });


   console.log(partidos);
    grupos = [...new Set(grupos)];

    grupos.forEach(grupo => {
      let obj = {}
      obj.name = grupo;
      obj.equipos = new Set();

      misGrupos.push(obj);
      
    });

    partidos.forEach(partido => {
      misGrupos.forEach(grupo => {
          if(grupo.name == partido.grupo){
            grupo.equipos.add(partido.local)
            grupo.equipos.add(partido.visitante)

            grupo.equipos
          }
      });
    });

    misGrupos.forEach(grupo => {
      console.log(grupo)
      if(grupo.name == "GROUP_J"){
        grupo.equipos.add("JOR")
      }

    });

    console.log(grupos)
    console.log(misGrupos)


    
  } catch (error) {
    console.log("error en try catch: ", error);
  }

}


async function partidosPorGrupo(){

  partidos.forEach(partido => {
  
  });

}


// copaLibertadores2026();

// traerCompetencia();


//esta funcion trae la informacion de cada equipo /teams
traerCompetencia2();

partidosWorldCup2026();


traerJuegosCompetencia();
partidosPorGrupo();

console.log(misEquipos);