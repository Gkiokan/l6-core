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
        "caption": "Number of visitors last month",
        "subCaption": "Average Overview",
        // "xAxisName": "Day",
        "yAxisName": "No. of Visitor",
        theme: window.config.fusionChartsInitialTheme,

        exportEnabled: 1,
        exportFileName: 'Spline Export',
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
                    "labelHAlign": "right",
                    "labelPosition": "0",
                    "label": "National holiday"
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
            "seriesname": "Impressions",
            "data": [
                {
                    "value": "15123"
                },
                {
                    "value": "14233"
                },
                {
                    "value": "25507"
                },
                {
                    "value": "9110"
                },
                {
                    "value": "15529"
                },
                {
                    "value": "20803"
                },
                {
                    "value": "19202"
                }
            ]
        },
        {
            "seriesname": "Hits",
            "data": [
                {
                    "value": "13400"
                },
                {
                    "value": "12800"
                },
                {
                    "value": "22800"
                },
                {
                    "value": "12400"
                },
                {
                    "value": "15800"
                },
                {
                    "value": "19800"
                },
                {
                    "value": "21800"
                }
            ]
        }
    ]
}

export default {
    name: 'FCSplineChart',

    data(){ return {
        type: "msspline",
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
