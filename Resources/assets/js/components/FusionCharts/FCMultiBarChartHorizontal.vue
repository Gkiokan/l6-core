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
        "caption": "Split of Sales by Product Category",
        "subCaption": "In top 5 stores last month",
        "yAxisname": "Sales (In USD)",
        "numberPrefix": "$",
        "placevaluesInside": "1",
        "xAxisLineColor": "#999999",
        theme: window.config.fusionChartsInitialTheme,

        exportEnabled: 1,
        exportFileName: 'Multi Bar Export',
    },
    "categories": [
        {
            "category": [
                {
                    "label": "Bakersfield Central"
                },
                {
                    "label": "Garden Groove harbour"
                },
                {
                    "label": "Los Angeles Topanga"
                },
                {
                    "label": "Compton-Rancho Dom"
                },
                {
                    "label": "Daly City Serramonte"
                }
            ]
        }
    ],
    "dataset": [
        {
            "seriesname": "Food Products",
            "data": [
                {
                    "value": "17000"
                },
                {
                    "value": "19500"
                },
                {
                    "value": "12500"
                },
                {
                    "value": "14500"
                },
                {
                    "value": "17500"
                }
            ]
        },
        {
            "seriesname": "Non-Food Products",
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
                    "value": "19500"
                },
                {
                    "value": "11500"
                }
            ]
        }
    ],
    "trendlines": [
        {
            "line": [
                {
                    "startvalue": "15000",
                    "color": "#0075c2",
                    "valueOnRight": "1",
                    "displayvalue": "Avg. for{br}Food"
                },
                {
                    "startvalue": "22000",
                    "color": "#1aaf5d",
                    "valueOnRight": "1",
                    "displayvalue": "Avg. for{br}Non-food"
                }
            ]
        }
    ]
}

export default {
    name: 'FCMultiBarChartHorizontal',

    data(){ return {
        type: "msbar2d",
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
