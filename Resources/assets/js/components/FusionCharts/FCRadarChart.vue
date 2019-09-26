<template lang="html">
      <v-card>
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
        "caption": "Server analysis",
        "subCaption": "Current month",
        // "numberPrefix": "$",
        theme: window.config.fusionChartsInitialTheme,

        exportEnabled: 1,
        exportFileName: 'Radar Export',
    },
    "categories": [
        {
            "category": [
                {
                    "label": "Marketing"
                },
                {
                    "label": "Product"
                },
                {
                    "label": "Customer"
                },
                {
                    "label": "HR"
                },
                {
                    "label": "Sales & Distribution"
                }
            ]
        }
    ],
    "dataset": [
        {
            "seriesname": "Allocated Impressions",
            "data": [
                {
                    "value": "19000"
                },
                {
                    "value": "16500"
                },
                {
                    "value": "14300"
                },
                {
                    "value": "10000"
                },
                {
                    "value": "9800"
                }
            ]
        },
        {
            "seriesname": "Actual Hits",
            "data": [
                {
                    "value": "6000"
                },
                {
                    "value": "9500"
                },
                {
                    "value": "11900"
                },
                {
                    "value": "8000"
                },
                {
                    "value": "9700"
                }
            ]
        }
    ]
}


export default {
    name: 'FCRadarChart',

    data(){ return {
        type: "radar",
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
