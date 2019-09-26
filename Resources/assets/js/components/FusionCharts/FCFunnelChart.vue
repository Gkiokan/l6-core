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
        "caption": "Website - Harry's SuperMart",
        "subcaption": "Visit to purchase - Conversion analysis for last year",
        "decimals": "1",
        "isHollow": "1",
        "labelDistance": "15",
        "is2D": "1",
        "plotTooltext": "Success : $percentOfPrevValue",
        "showPercentValues": "1",
        theme: window.config.fusionChartsInitialTheme,

        exportEnabled: 1,
        exportFileName: 'Funnel Export',
    },
    "data": [
        {
            "label": "Unique Website Visits",
            "value": "1460000"
        },
        {
            "label": "Programme Details Section Visits",
            "value": "930000"
        },
        {
            "label": "Attempts to Register",
            "value": "540000"
        },
        {
            "label": "Successful Registrations",
            "value": "210000"
        },
        {
            "label": "Logged In",
            "value": "190000"
        },
        {
            "label": "Purchased on Introductory Offers",
            "value": "120000"
        }
    ]
}

export default {
    name: 'FCFunnelChart',

    data(){ return {
        type: "funnel",
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
