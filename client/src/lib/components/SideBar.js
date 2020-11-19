import React from 'react';
 import {Link} from "react-router-dom"

const SideBar = () => {
  return (
    <aside class= "SideBar">
      <div class="rectangle">
        <a href="https://www.alcaladeguadaira.es" class="btn blue block">Ayuntamiento</a>
        <Link to ="/pajaros" > <a href="/pajaros" class="btn blue block">Guía Ornitológica</a></Link>
        <Link to ="/lugares"> <a href="/lugares" class="btn blue block">Sitios de Interés</a></Link>
        <a href="https://moovitapp.com/index/es/transporte_público-Alcalá_De_Guadaíra-Sevilla-site_14528819-3802" class="btn blue block">Cómo llegar</a>
</div>



    </aside>
)             
}
      
export default SideBar;
