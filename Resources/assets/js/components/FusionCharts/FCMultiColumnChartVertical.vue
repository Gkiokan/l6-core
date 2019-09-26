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
        "caption": "Comparison of Quarterly Revenue",
        "xAxisname": "Quarter",
        "yAxisName": "Revenues (In USD)",
        "numberPrefix": "$",
        "plotFillAlpha": "80",
        theme: window.config.fusionChartsInitialTheme,

        exportEnabled: 1,
        exportFileName: 'Multi Column Export',
    },
    "categories": [
        {
            "category": [
                {
                    "label": "Q1"
                },
                {
                    "label": "Q2"
                },
                {
                    "label": "Q3"
                },
                {
                    "label": "Q4"
                }
            ]
        }
    ],
    "dataset": [
        {
            "seriesname": "Previous Year",
            "data": [
                {
                    "value": "10000"
                },
                {
                    "value": "11500"
                },
                {
                    "value": "12500"
                },
                {
                    "value": "15000"
                }
            ]
        },
        {
            "seriesname": "Current Year",
            "data": [
                {
                    "value": "25400"
                },
                {
                    "value": "29800"
                },
                {
                    "value": "21800"
                },
                {
                    "value": "26800"
                }
            ]
        }
    ],
    "trendlines": [
        {
            "line": [
                {
                    "startvalue": "12250",
                    "color": "#0075c2",
                    "displayvalue": "Previous{br}Average",
                    "valueOnRight": "1",
                    "thickness": "1",
                    "showBelow": "1",
                    "tooltext": "Previous year quarterly target  : $13.5K"
                },
                {
                    "startvalue": "25950",
                    "color": "#1aaf5d",
                    "displayvalue": "Current{br}Average",
                    "valueOnRight": "1",
                    "thickness": "1",
                    "showBelow": "1",
                    "tooltext": "Current year quarterly target  : $23K"
                }
            ]
        }
    ]
}

export default {
    name: 'FCMultiColumnChartVertical',

    data(){ return {
        type: "mscolumn2d",
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
