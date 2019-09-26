<template lang="html">
      <v-card _height="400px">
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
import util from '~/plugins/util'

let dataSource = {
    "chart": {
        "caption": "Revenues and Profits",
        "subCaption": "For last year",
        // "xAxisname": "Month",
        "pYAxisName": "Amount (In USD)",
        "sYAxisName": "Profit %",
        "numberPrefix": "$",
        "sNumberSuffix": "%",
        "sYAxisMaxValue": "50",
        theme: window.config.fusionChartsInitialTheme,

        exportEnabled: 1,
        exportFileName: 'MultiCombi Export',

    },
    "categories": [
        {
            "category": [
                { "label": "Jan" },
                { "label": "Feb" },
                { "label": "Mar" },
                { "label": "Apr" },
                { "label": "May" },
                { "label": "Jun" },
                { "label": "Jul" },
                { "label": "Aug" },
                { "label": "Sep" },
                { "label": "Oct" },
                { "label": "Nov" },
                { "label": "Dec" }
            ]
        }
    ],
    "dataset": [
        {
            "seriesName": "Revenues",
            "data": [
                { "value": util.randomInt(1000, 16000) },
                { "value": util.randomInt(1000, 20000) },
                { "value": util.randomInt(1000, 18000) },
                { "value": util.randomInt(1000, 19000) },
                { "value": util.randomInt(1000, 15000) },
                { "value": util.randomInt(1000, 21000) },
                { "value": util.randomInt(1000, 16000) },
                { "value": util.randomInt(1000, 20000) },
                { "value": util.randomInt(1000, 17000) },
                { "value": util.randomInt(1000, 22000) },
                { "value": util.randomInt(1000, 19000) },
                { "value": util.randomInt(1000, 23000) }
            ]
        },
        {
            "seriesName": "Profits",
            "renderAs": "area",
            "showValues": "0",
            "data": [
                { "value": util.randomInt(500, "4000") },
                { "value": util.randomInt(500, "5000") },
                { "value": util.randomInt(500, "3000") },
                { "value": util.randomInt(500, "4000") },
                { "value": util.randomInt(500, "1000") },
                { "value": util.randomInt(500, "7000") },
                { "value": util.randomInt(500, "1000") },
                { "value": util.randomInt(500, "4000") },
                { "value": util.randomInt(500, "1000") },
                { "value": util.randomInt(500, "8000") },
                { "value": util.randomInt(500, "2000") },
                { "value": util.randomInt(500, "7000") }
            ]
        },
        {
            "seriesName": "Profit %",
            "parentYAxis": "S",
            "renderAs": "line",
            "showValues": "0",
            "data": [
                { "value": util.randomInt(1, "25") },
                { "value": util.randomInt(1, "25") },
                { "value": util.randomInt(1, "16.66") },
                { "value": util.randomInt(1, "21.05") },
                { "value": util.randomInt(1, "6.66") },
                { "value": util.randomInt(1, "33.33") },
                { "value": util.randomInt(1, "6.25") },
                { "value": util.randomInt(1, "25") },
                { "value": util.randomInt(1, "5.88") },
                { "value": util.randomInt(1, "36.36") },
                { "value": util.randomInt(1, "10.52") },
                { "value": util.randomInt(1, "30.43") }
            ]
        }
    ]
}

export default {
    name: 'FCMuiltiCombiChart',

    data(){ return {
        type: "mscombidy2d",
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
