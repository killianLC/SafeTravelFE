<template>
  <Card>
    <template #content>
    <Chart type="line" :data="basicData" :options="basicOptions" />
    </template>
  </Card>
</template>
<script>
import Card from "primevue/card";
import Chart from "primevue/chart";

export default {
    props:{
      xAxeName:{
        type: String,
        required: true
      },
      yAxeName:{
        type: String,
        required: true
      },
      xOption: {
        type: [],
        required: true
      },
      dataSetRating: {
        type: [],
        required: true
      },
      dataSetMeteo: {
        type: [],
        required: true
      },
    },
  name: "LineChart",
  components:{Card,Chart},
  data() {
    return {
      basicData: {
        labels: this.xOption,
        datasets: [
          {
            label: 'Note utilisateur',
            data: this.dataSetRating,
            fill: false,
            borderColor: '#42A5F5',
            tension: .4
          },
          {
            label: 'Note météo',
            data: this.dataSetMeteo,
            fill: false,
            borderColor: '#FFA726',
            tension: .4
          }
        ]
      },
      basicOptions: {
        plugins: {
          legend: {
            labels: {
              color: '#495057'
            }
          }
        },
        scales: {
          x: {
            ticks: {
              color: '#495057'
            },
            grid: {
              color: '#ebedef'
            }
          },
          y: {
            ticks: {
              color: '#495057'
            },
            grid: {
              color: '#ebedef'
            }
          }
        }
      }
    }
  }
}
</script>