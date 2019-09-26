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
        "caption": "Number of downloads last week",
        "subCaption": "Average download",
        // "xAxisName": "Day",
        theme: window.config.fusionChartsInitialTheme,

        exportEnabled: 1,
        exportFileName: 'Line Export',
    },
    "categories": [
        {
            "category": [
                {
                    "label": "Mon"
                },
                {
                    "label": "Tue"
                },
                {
                    "label": "Wed"
                },
                {
                    "vline": "true",
                    "lineposition": "0",
                    "color": "#6baa01",
                    "labelHAlign": "center",
                    "labelPosition": "0",
                    "label": "National holiday",
                    "dashed": "1"
                },
                {
                    "label": "Thu"
                },
                {
                    "label": "Fri"
                },
                {
                    "label": "Sat"
                },
                {
                    "label": "Sun"
                }
            ]
        }
    ],
    "dataset": [
        {
            "seriesname": "Themes",
            "color": "#12af5a",
            "data": [
                { "value": "15123" },
                { "value": "14233" },
                { "value": "25507" },
                { "value": "9110" },
                { "value": "15529" },
                { "value": "20803" },
                { "value": "19202" }
            ]
        },
        {
            "seriesname": "Plugins",
            "data": [
                { "value": "13400" },
                { "value": "12800" },
                { "value": "22800" },
                { "value": "12400" },
                { "value": "15800" },
                { "value": "19800" },
                { "value": "21800" }
            ]
        },
        {
            "seriesname": "SDK",
            "data": [
                { "value": "13400" },
                { "value": "12800" },
                { "value": "13400" },
                { "value": "12800" },
                { "value": "25507" },
                { "value": "9110" },
                { "value": "21800" }
            ]
        }
    ],
    "trendlines": [
        {
            "line": [
                {
                    "startvalue": "17022",
                    "color": "#6baa01",
                    "valueOnRight": "1",
                    "displayvalue": "Average"
                }
            ]
        }
    ]
}

export default {
    name: 'FCLineChart',

    data(){ return {
        type: "msline",
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
