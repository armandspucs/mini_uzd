

//alert(1); alert('a'); console.log(1);

let zimjuSkaits = 10;
let ciparuSkaits = 4;
let variantuSkaits = 5; 
let ieklautVardu;
let miksetLielos = true;
let miksetCiparus = true;
let tabulasRindas = document.querySelector('.rindas');
//tabulasRindas.innerHTML = 'test teksts';

const vardi1 = ['spalvainais','karstais','papedim','mazais'];
const vardi2 = ['lacis','vista','ruksis','sunis','sesks'];
const vardi3 = ['lien','klukst','lec','lido','skrien'];


//let parole = vardi1[0];
//let parole = vardi1[0]+vardi2[0]+vardi3[0];


function rand(masivaNosaukums)
{
  random1 = Math.floor( Math.random() * masivaNosaukums.length );
  return random1;
}




 
  




for (i = 0; i < variantuSkaits; i++) 
{
  //console.log(i);
  //let random1 = Math.floor( Math.random() * vardi1.length );
  let random1 = rand(vardi1);
  let random2 = rand(vardi2);
  let random3 = rand(vardi2);
  //
  //let parole = vardi1[random1];
  //
  let paroleVards1 = vardi1[random1];
  //paroleVards1 = paroleVards1.replace('i','1');
  let paroleVards2 = vardi1[random2];
  let paroleVards3 = vardi1[random3];
  let parole = paroleVards1+paroleVards2+paroleVards3;
  //tabulasRindas.innerHTML += '<tr><td>id</td><td>parole</td></tr>';
  tabulasRindas.innerHTML += `
  <tr>
  <td>`+(i+1)+`</td>
  <td>`+parole+`</td>
  </tr>`;

}//loop beigas
