<template>
  <CChartPie :datasets="defaultDatasets" :labels="['CLEA1', 'CLEA2', 'CLEA3']" />
</template>


<script>
export default {
  name: "CChartPieExample",
  
  props: {
    items: []
  },
  computed: {
    defaultDatasets() {
      return [
        {
          backgroundColor: ["#41B883", "#E46651", "#00D8FF"],
          data: this.items
        }
      ];
    }
  },

  mounted: function() {
    fetch("http://localhost:3000/chart")
      .then(rep => {
        return rep.json();
      })
      .then(e => {
        this.items = [e[0].nombre, e[1].nombre,e[2].nombre] 
        
      });
  }
};
</script>