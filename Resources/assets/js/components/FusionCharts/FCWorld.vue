<template lang="html">
      <v-card height="530px">
          <!-- <v-card-text px-0 class='px-0 py-0'> -->
            <fusioncharts
              :type="type"
              :width="width"
              :height="height"
              :dataFormat="dataFormat"
              :dataSource="dataSource" />
          <!-- </v-card-text> -->
      </v-card>
</template>

<script>

let dataSource = {
    chart: {
      // caption: "Average Annual Population Growth",
      // subcaption: "Click on a continent to see trend from 1955-2015",
      numbersuffix: "%",
      includevalueinlabels: "1",
      labelsepchar: ": ",
      entityfillhovercolor: "#2D409B",
      theme: window.config.fusionChartsInitialTheme,

      showLabels: 1,
      includeValueInLabels: 1,
      useSNameInLabels: 1,
      showLegend: 0,

      baseFontColor: '#000000',

      exportEnabled: 1,
      exportFileName: 'World Export',
    },
    colorrange: {
      minvalue: "0",
      code: "#EFEFF8",
      gradient: "1",
      color: [
        {
          minvalue: "0.5",
          maxvalue: "1.0",
          color: "#EFEFF8"
        },
        {
          minvalue: "1.0",
          maxvalue: "2.0",
          color: "#777BF0"
        },
        {
          minvalue: "2.0",
          maxvalue: "3.0",
          color: "#5D60BB"
        }
      ]
    },
    data: [
      {
        id: "DE",
        value: ".82",
        //showlabel: 0,
      },
      {
        id: "SA",
        value: "2.04",
        //showlabel: 0,
      },
      {
        id: "AS",
        value: "1.78",
        //showlabel: 0,
      },
      {
        id: "EU",
        value: ".40",
        //showlabel: 0,
      },
      {
        id: "AF",
        value: "2.58",
        //showlabel: 0,
      },
      {
        id: "AU",
        value: "1.30",
        //showlabel: 0,
      }
    ],
    linkeddata: []
};

export default {
    name: 'FCWorld',

    data(){ return {
        type: "maps/world",
        width: "100%",
        height: "100%",
        dataFormat: "json",
        dataSource
    }},

    watch: {
        '$root.fusionChartTheme'(val){
            this.dataSource.chart.theme = val
        }
    }
}
</script>
