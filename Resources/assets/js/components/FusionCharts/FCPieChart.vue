<template lang="html">
      <v-card class='chart pie'>
          <v-card-text px-0>
            <fusioncharts
              :type="type"
              :width="width"
              :height="'90%'"
              :dataFormat="dataFormat"
              :dataSource="dataSource" />
          </v-card-text>
      </v-card>
</template>

<script>

export default {
    name: 'FCPieChart',

    data(){ return {
        type: "doughnut2d",
        width: "100%",
        height: "100%",
        dataFormat: "json",
        dataSource: {
          chart: {
            caption: "Pie Chart Distribution",
            captionAlignment: 'center',
            // subcaption: "For all users in 2017",

            showpercentvalues: "1",
            centerLabelBold: true,
            decimals: 0,
            showLegend: 0,
            showTooltip: 1,


            toolbarPosition: 'TR',
            showToolBarButtonTooltext: 1,

            exportEnabled: 1,
            exportFileName: 'PieChart Export',

            plottooltext: "<b>$percentValue</b> of our Users are on <b>$label</b>",
            centerlabel: "#$value",
            defaultcenterlabel: this.$util.randomInt(1000,2200),

            theme: window.config.fusionChartsInitialTheme,
          },
          data: [
            {
              label: "Ice Cream Sandwich",
              value: this.$util.randomInt(100,2200),
            },
            {
              label: "Jelly Bean",
              value: this.$util.randomInt(100,2200),
            },
            {
              label: "Kitkat",
              value: this.$util.randomInt(200,2200),
            },
            {
              label: "Lollipop",
              value: this.$util.randomInt(200,2200),
            },
            {
              label: "Marshmallow",
              value: this.$util.randomInt(200,2200),
            }
          ]
        }
    }},

    watch: {
        '$root.fusionChartTheme'(val){
            this.dataSource.chart.theme = val
        }
    }
}
</script>
