<template>

    <div class="c-sidebar c-sidebar-dark c-sidebar-show SideBar">
      <ul class="c-sidebar-nav">
        <a href="/">
        <li class="c-sidebar-nav-title" ><img src="https://upload.wikimedia.org/wikipedia/commons/0/0a/Logo_acoss.png" ></li>
        </a>
        <li class="c-sidebar-nav-item">
          <a class="c-sidebar-nav-link" href="/charts">
            <i class="c-sidebar-nav-icon cil-chart-pie"></i> Vue Couloir
          </a>
        </li>
        <li class="c-sidebar-nav-item">
          <a class="c-sidebar-nav-link" href="/tableau_de_Bord">
            <i class="c-sidebar-nav-icon cil-speedometer"></i> Vue Projet
            <span class="badge badge-primary">ADMIN</span>
          </a>
        </li>
        <li class="c-sidebar-nav-item nav-dropdown">
          <a class="c-sidebar-nav-link nav-dropdown-toggle" href="/projet_mm_date_mep">
            <i class="c-sidebar-nav-icon cil-puzzle"></i> Vue Incubation
          </a>
 
        </li>
        <li class="c-sidebar-nav-item mt-auto">
          <a class="c-sidebar-nav-link c-sidebar-nav-link-success" href="/Timeline">
            <i class="c-sidebar-nav-icon cil-cloud-download"></i> Vue Application
          </a>
        </li>
        <li class="c-sidebar-nav-item">
          <a class="c-sidebar-nav-link c-sidebar-nav-link-danger" href="/form">
            <i class="c-sidebar-nav-icon cil-layers"></i> Formulaire
            <strong> SDIT</strong>
          </a>
        </li>
      </ul>
      <button class="c-sidebar-minimizer c-brand-minimizer" type="button"></button>
    </div>

</template>

<script>




export default {
  name: "SideBar",
  components: {

    
  },

}
</script>

<style scoped>
.SideBar {
  height: 100%;
  
  position: absolute;
}

.border-shadow-green {
  box-shadow: 2px 7px 30px 2px rgba(0, 255, 0, 0.3);
  padding: 0;
  height: 52px;
  width: 100px;
}
.border-shadow-red {
  box-shadow: 2px 7px 30px 2px rgba(255, 0, 0, 0.5);
  padding: 0;
  height: 52px;
  width: 100px;
}
</style>