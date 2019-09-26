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

const dataSource = {
    "chart": {
        "caption": "User Gender",
        "subCaption": "Visitors Genre",
        // "xAxisname": "Quarter",
        // "yAxisName": "Revenue (In USD)",
        // "numberPrefix": "$",
        theme: window.config.fusionChartsInitialTheme,

        exportEnabled: 1,
        exportFileName: 'Stacked Bar 2 Export',
    },
    "categories": [
        {
            "category": [
                { "label": "Q1" },
                { "label": "Q2" },
                { "label": "Q3" },
                { "label": "Q4" },
                { "label": "Q5" },
                { "label": "Q6" },
                { "label": "Q7" },
                { "label": "Q8" },
                { "label": "Q1" },
                { "label": "Q2" },
                { "label": "Q3" },
                { "label": "Q4" },
                { "label": "Q5" },
                { "label": "Q6" },
                { "label": "Q7" },
                { "label": "Q8" },
            ]
        }
    ],
    "dataset": [
        {
            "seriesname": "Male",
            "data": [
                { "value": "121000" },
                { "value": "135000" },
                { "value": "123500" },
                { "value": "145000" },
                { "value": "121000" },
                { "value": "135000" },
                { "value": "123500" },
                { "value": "145000" },
                { "value": "121000" },
                { "value": "135000" },
                { "value": "123500" },
                { "value": "145000" },
                { "value": "121000" },
                { "value": "135000" },
                { "value": "123500" },
                { "value": "145000" },
            ]
        },
        {
            "seriesname": "Female",
            "data": [
                { "value": "131400" },
                { "value": "154800" },
                { "value": "98300" },
                { "value": "131800" },
                { "value": "131400" },
                { "value": "154800" },
                { "value": "98300" },
                { "value": "131800" },
                { "value": "121000" },
                { "value": "135000" },
                { "value": "123500" },
                { "value": "145000" },
                { "value": "121000" },
                { "value": "135000" },
                { "value": "123500" },
                { "value": "145000" },
            ]
        }
    ]
}



export default {
    name: 'FCStackedBarChart2Vertical',

    data(){ return {
        type: "stackedcolumn2d",
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
