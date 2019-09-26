<template lang="html">
      <v-card >
          <v-card-text>
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
        "caption": "BORNAK App Storage",
        "subCaption": "Product-wise quarterly data",
        // "xAxisname": "Quarter",
        "yAxisName": "Amount",
        // "numberPrefix": "$",
        theme: window.config.fusionChartsInitialTheme,

        exportEnabled: 1,
        exportFileName: 'Stacked Area Export',
    },
    "categories": [
        {
            "category": [
                { "label": "Request" },
                { "label": "License" },
                { "label": "API" },
                { "label": "SDK" },
                { "label": "Downloads" },
                { "label": "Usage" },
            ]
        }
    ],
    "dataset": [
        {
            "seriesname": "Success Products",
            "data": [
                { "value": "18000" },
                { "value": "25000" },
                { "value": "13500" },
                { "value": "15000" },
                { "value": "8300" },
                { "value": "11800" },
            ]
        },
        {
            "seriesname": "Average Products",
            "data": [
                { "value": "11400" },
                { "value": "14800" },
                { "value": "8300" },
                { "value": "11800" },
                { "value": "13500" },
                { "value": "15000" },
            ]
        },
        {
            "seriesname": "Security Products",
            "data": [
                { "value": "12400" },
                { "value": "14800" },
                { "value": "12300" },
                { "value": "15800" },
                { "value": "13500" },
                { "value": "15000" },
            ]
        }
    ]
}


export default {
    name: 'FCStackedAreaChart',

    data(){ return {
        type: "stackedarea2d",
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
