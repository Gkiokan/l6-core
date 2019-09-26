<template lang="html">
      <v-card>
          <v-card-text px-0>
            <fusioncharts
              :type="type"
              :width="width"
              _height="height"
              :dataFormat="dataFormat"
              :dataSource="dataSource" />
          </v-card-text>
      </v-card>
</template>

<script>

export default {
    name: 'FCPieFullChart',

    data(){ return {
        type: "pie2d",
        width: "100%",
        // height: "100%",
        dataFormat: "json",
        dataSource: {
            "chart": {
                "caption": "Split of Visitors by Age Group",
                "subCaption": "Last year",
                "use3DLighting": "0",
                "showPercentValues": "1",
                "decimals": "1",
                "useDataPlotColorForLabels": "1",
                theme: window.config.fusionChartsInitialTheme,

                exportEnabled: 1,
                exportFileName: 'Pie Chart Export',
            },
            "data": [
                {
                    "label": "Teenage",
                    "value": "1250400"
                },
                {
                    "label": "Adult",
                    "value": "1463300"
                },
                {
                    "label": "Mid-age",
                    "value": "1050700"
                },
                {
                    "label": "Senior",
                    "value": "491000"
                }
            ]
        }
    }},

    watch: {
        '$root.fusionChartTheme'(val){
            this.dataSource.chart.theme = val
        }
    }
}
</script>
