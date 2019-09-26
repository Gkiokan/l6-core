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
        "caption": "Total Profit Calculation",
        "subcaption": "Last month",
        "yAxisname": "Amount (In USD)",
        "numberprefix": "$",
        "connectordashed": "1",
        "sumlabel": "Total {br} Profit",
        "positiveColor": "#6baa01",
        "negativeColor": "#e44a00",
        theme: window.config.fusionChartsInitialTheme,

        exportEnabled: 1,
        exportFileName: 'Waterfall Export',
    },
    "data": [
        {
            "label": "Online sales",
            "value": "420000"
        },
        {
            "label": "Store Sales",
            "value": "710000"
        },
        {
            "label": "Total Sales",
            "issum": "1"
        },
        {
            "label": "Fixed Costs",
            "value": "-250000"
        },
        {
            "label": "Variable Costs",
            "value": "-156000"
        },
        {
            "label": "COGS",
            "value": "-310000"
        },
        {
            "label": "Promotion Costs",
            "value": "-86000"
        },
        {
            "label": "Total Costs",
            "issum": "1",
            "cumulative": "0"
        }
    ]
}

export default {
    name: 'FCWaterfallChart',

    data(){ return {
        type: "waterfall2d",
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
