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
  chart: {
      caption: "Top Plattform Usage",
      subcaption: " Top 5 Developed Countries",
      // numbersuffix: " TWh",
      showsum: "1",
      plottooltext:
        "$label produces <b>$dataValue</b> from Product $seriesName",
      theme: window.config.fusionChartsInitialTheme,
      drawcrossline: "1",

      exportEnabled: 1,
      exportFileName: 'Stacked Bar Export',
  },
  categories: [
    {
      category: [
        {
          label: "Canada"
        },
        {
          label: "China"
        },
        {
          label: "Russia"
        },
        {
          label: "Australia"
        },
        {
          label: "United States"
        },
        {
          label: "France"
        }
      ]
    }
  ],
  dataset: [
    {
      seriesname: "Coal",
      data: [
        {
          value: "400"
        },
        {
          value: "830"
        },
        {
          value: "500"
        },
        {
          value: "420"
        },
        {
          value: "790"
        },
        {
          value: "380"
        }
      ]
    },
    {
      seriesname: "Hydro",
      data: [
        {
          value: "350"
        },
        {
          value: "620"
        },
        {
          value: "410"
        },
        {
          value: "370"
        },
        {
          value: "720"
        },
        {
          value: "310"
        }
      ]
    },
    {
      seriesname: "Nuclear",
      data: [
        {
          value: "210"
        },
        {
          value: "400"
        },
        {
          value: "450"
        },
        {
          value: "180"
        },
        {
          value: "570"
        },
        {
          value: "270"
        }
      ]
    },

  ]
};



export default {
    name: 'FCStackedBarChartHorizontal',

    data(){ return {
        type: "stackedbar2d",
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
