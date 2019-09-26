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
        "caption": "On-target sales by month",
        "subcaption": "Last year",
        "numberPrefix": "$",
        "chartTopMargin": "10",
        "chartBottomMargin": "10",
        "chartRightMargin": "10",
        theme: window.config.fusionChartsInitialTheme,
    },
    "dataset": [
        {
            "data": [
                {
                    "value": "W"
                },
                {
                    "value": "W"
                },
                {
                    "value": "W"
                },
                {
                    "value": "L"
                },
                {
                    "value": "W"
                },
                {
                    "value": "W"
                },
                {
                    "value": "L"
                },
                {
                    "value": "L"
                },
                {
                    "value": "W"
                },
                {
                    "value": "L"
                },
                {
                    "value": "W"
                },
                {
                    "value": "W"
                }
            ]
        }
    ]
}

export default {
    name: 'FCSparkWinLossChart',

    data(){ return {
        type: "sparkwinloss",
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
