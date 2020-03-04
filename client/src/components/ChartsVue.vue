<template>
  <div>
    <CCardGroup columns class="card-columns cols-2">

     
      <CCard>
         <CCardHeader>Pie Chart</CCardHeader>
        <CCardBody><Chart /></CCardBody>
      </CCard>
   
    
    </CCardGroup>
  </div>
</template>

<script>
import Chart from './Charts.vue'
export default {
  name: 'Charts',
  components: {
    Chart
  }
}
</script>
