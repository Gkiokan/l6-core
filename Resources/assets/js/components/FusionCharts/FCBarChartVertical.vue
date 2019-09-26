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

let dataSource = {
    "chart": {
        "caption": "Top 5 Stores by Sales",
        "subCaption": "Last month",
        "yAxisName": "Sales (In USD)",
        "numberPrefix": "$",
        theme: window.config.fusionChartsInitialTheme,

        exportEnabled: 1,
        exportFileName: 'BarChart Horizontal Export',
    },
    "data": [
        {
            "label": "Bakersfield Central",
            "value": "880000"
        },
        {
            "label": "Garden Groove harbour",
            "value": "730000"
        },
        {
            "label": "Los Angeles Topanga",
            "value": "590000"
        },
        {
            "label": "Compton-Rancho Dom",
            "value": "520000"
        },
        {
            "label": "Daly City Serramonte",
            "value": "330000"
        }
    ]
}


export default {
    name: 'FCBarChartVertical',

    data(){ return {
        type: "column2d",
        width: "100%",
        // height: "100%",
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
