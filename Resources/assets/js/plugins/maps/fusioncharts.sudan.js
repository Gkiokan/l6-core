(function(factory){if(typeof module==="object"&&typeof module.exports!=="undefined"){module.exports=factory}else{factory(FusionCharts)}})(function(FusionCharts){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{configurable:false,enumerable:true,get:getter})}};__webpack_require__.r=function(exports){Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=278)})({278:function(module,exports,__webpack_require__){"use strict";var _fusioncharts=__webpack_require__(279);var _fusioncharts2=_interopRequireDefault(_fusioncharts);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}FusionCharts.addDep(_fusioncharts2["default"])},279:function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;
/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts Technologies LLP
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts Technologies LLP
 * @meta package_map_pack
 * @id fusionmaps.Sudan.20.10-30-2012 07:14:36
 */var M="M",L="L",Z="Z",Q="Q",LFT="left",RGT="right",CEN="center",MID="middle",TOP="top",BTM="bottom",geodefinitions=[{name:"Sudan",revision:20,standaloneInit:true,baseWidth:600,baseHeight:760,baseScaleFactor:10,entities:{"SD.NO":{outlines:[[M,3439,595,L,1462,595,1428,1278,Q,1810,1292,2190,1290,L,2234,1291,Q,2226,1678,2230,2065,2230,2066,2230,2068,2221,2160,2220,2237,2222,2388,2224,2438,2520,2451,2812,2449,L,3304,2464,Q,3418,2474,3432,2471,3447,2468,3470,2470,3493,2473,3527,2461,3551,2452,3582,2446,3594,2444,3607,2443,3644,2432,3662,2405,3662,2405,3662,2404,3680,2378,3709,2350,3737,2322,3769,2267,3802,2212,3829,2162,3856,2113,3879,2087,3902,2062,3911,2056,3920,2050,3926,2016,3932,1982,3952,1975,3940,1965,3931,1941,3927,1928,3919,1901,L,3914,1895,3914,1748,Q,3904,1734,3879,1720,3855,1707,3838,1697,3821,1688,3805,1676,3789,1664,3777,1625,L,3862,610,3519,610,Q,3519,615,3514,610,3515,609,3515,608,3515,608,3515,608,3517,601,3524,589,3534,571,3534,560,3534,540,3515,540,3499,540,3472,561,Q,3447,579,3439,595,Z]],label:"Northern",shortLabel:"NO",labelPosition:[269,150.5],labelAlignment:[CEN,MID]},"SD.RN":{outlines:[[M,4225,1110,Q,4221,1086,4204,1047,L,4150,1008,Q,4086,958,4095,921,4104,884,4110,847,4116,809,4116,781,4116,754,4132,739,4148,724,4158,707,4164,698,4172,692,4173,691,4187,683,4169,685,4163,677,4135,655,4067,610,L,3862,610,3777,1625,Q,3790,1664,3805,1676,3821,1688,3838,1697,3855,1707,3880,1720,3905,1734,3915,1748,L,3915,1895,3919,1901,Q,3928,1928,3932,1941,3940,1965,3952,1975,3933,1982,3926,2016,3920,2050,3911,2056,3902,2062,3879,2087,3856,2113,3829,2162,3802,2212,3770,2267,3738,2322,3709,2350,3681,2378,3663,2404,3729,2494,3792,2500,3900,2512,3977,2540,3998,2548,4067,2565,4120,2578,4152,2595,4223,2635,4238,2641,4273,2655,4325,2655,4380,2655,4388,2653,4408,2647,4443,2606,4444,2590,4447,2568,4455,2511,4530,2498,4606,2485,4817,2500,4883,2478,4910,2434,4911,2432,4950,2385,4913,2327,4939,2245,L,4937,2244,Q,4936,2244,4935,2244,4935,2244,4935,2244,4905,2233,4876,2214,4848,2195,4847,2202,4847,2209,4841,2199,4838,2193,4834,2190,4830,2191,4828,2190,4770,2152,4756,2141,4736,2126,4720,2088,4708,2061,4671,2013,4635,1964,4623,1950,4612,1935,4569,1909,4526,1883,4520,1870,4514,1857,4505,1848,4495,1839,4465,1846,4436,1853,4395,1835,4395,1828,4390,1828,4335,1727,4243,1477,4242,1475,4241,1473,4228,1402,4242,1330,4241,1330,4241,1330,4215,1310,4215,1267,4215,1263,4227,1183,Q,4227,1124,4225,1110,Z]],label:"River Nile",shortLabel:"RN",labelPosition:[419.6,207.2],labelAlignment:[CEN,MID]},"SD.KH":{outlines:[[M,3977,2540,Q,3900,2512,3792,2500,3729,2494,3663,2405,3663,2405,3663,2406,3644,2432,3607,2443,3594,2444,3583,2447,3598,2472,3624,2507,3650,2542,3667,2550,3662,2680,3713,2742,3764,2804,3791,2852,3816,2898,3786,2946,3785,2947,3784,2948,3785,2947,3786,2947,3818,2925,3837,2925,3869,2926,3905,2921,L,3906,2921,Q,3932,2917,3960,2911,4027,2895,4073,2888,4120,2880,4163,2845,4185,2827,4201,2809,4217,2793,4227,2777,4248,2744,4272,2740,4329,2723,4429,2747,4458,2754,4486,2761,4491,2730,4470,2696,4448,2662,4444,2643,4441,2634,4442,2615,4442,2611,4443,2606,4408,2647,4388,2653,4380,2655,4325,2655,4273,2655,4238,2641,4223,2635,4152,2595,4120,2578,4067,2565,Q,3998,2548,3977,2540,Z]],label:"Khartoum",shortLabel:"KH",labelPosition:[392.5,267.6],labelAlignment:[CEN,MID]},"SD.GZ":{outlines:[[M,4412,2957,Q,4381,2911,4328,2905,4276,2900,4242,2878,4207,2857,4201,2809,4185,2827,4163,2845,4120,2880,4073,2888,4027,2895,3960,2910,3932,2917,3906,2920,L,3907,2975,3852,2965,Q,3867,2984,3885,2998,3895,3006,3919,3020,3944,3035,3947,3070,3951,3105,3893,3182,3835,3259,3839,3278,3844,3297,3886,3359,3928,3422,3912,3490,L,3918,3505,Q,3942,3482,3959,3476,3978,3469,3989,3460,3987,3444,3980,3418,4020,3438,4062,3410,4060,3393,4074,3365,4085,3342,4097,3330,4105,3346,4144,3369,4179,3390,4188,3396,4198,3401,4229,3369,4260,3337,4262,3325,L,4387,3325,4352,3270,Q,4374,3251,4384,3219,4394,3187,4412,3165,4431,3144,4448,3109,4466,3072,4476,3057,Q,4442,3e3,4412,2957,Z]],label:"Al Jazirah (Gezira)",shortLabel:"GZ",labelPosition:[415.8,315.5],labelAlignment:[CEN,MID]},"SD.WN":{outlines:[[M,3906,2921,L,3905,2921,Q,3869,2926,3837,2925,3818,2925,3786,2947,3785,2947,3784,2948,3785,2947,3786,2946,3795,2930,3734,2966,3672,3002,3647,3047,3622,3091,3590,3152,3566,3198,3560,3231,3559,3232,3559,3233,3559,3242,3560,3250,3562,3296,3573,3323,3584,3349,3607,3375,3630,3401,3671,3447,3703,3484,3702,3525,3737,3527,3737,3573,3737,3586,3711,3616,3685,3646,3642,3672,3600,3698,3602,3749,3605,3797,3606,3815,3606,3816,3606,3817,3607,3818,3608,3819,3628,3834,3634,3880,3642,3940,3662,3960,3678,3976,3719,3996,3746,4010,3769,4030,L,3972,4030,3972,3955,Q,3975,3955,4067,3952,4094,3951,4117,3952,4125,3952,4132,3953,L,4133,3953,4132,3930,4122,3930,Q,4087,3862,4084,3853,4072,3822,4072,3768,4072,3723,4080,3709,L,4079,3709,Q,3987,3614,4026,3535,L,3990,3460,Q,3978,3469,3959,3476,3942,3482,3922,3501,3920,3503,3917,3505,3917,3500,3912,3490,3928,3422,3886,3359,3844,3297,3840,3278,3835,3259,3893,3182,3951,3105,3947,3070,3944,3035,3919,3020,3895,3006,3885,2998,3867,2984,3852,2965,L,3907,2975,Z]],label:"White Nile",shortLabel:"WN",labelPosition:[383.6,372.5],labelAlignment:[CEN,MID]},"SD.SK":{outlines:[[M,3634,3880,Q,3628,3834,3608,3819,L,3382,3820,Q,3380,3835,3335,3885,3290,3936,3265,3931,3241,3925,3212,3902,3182,3877,3172,3875,3146,3870,3102,3872,3029,3875,3027,3875,L,3027,3815,Q,3014,3818,3e3,3806,2984,3792,2971,3790,2972,3793,2972,3795,2923,3877,2900,3891,2838,3930,2824,3948,2793,3952,2787,3979,L,2782,4e3,Q,2775,4e3,2778,4017,2779,4026,2782,4043,2782,4089,2742,4199,2702,4309,2698,4335,2693,4360,2700,4393,2706,4426,2729,4446,2751,4466,2764,4476,2809,4510,2902,4515,2993,4521,3009,4630,3009,4633,3010,4635,3092,4673,3128,4690,3184,4715,3197,4735,3235,4789,3273,4805,3300,4815,3367,4815,3462,4815,3502,4781,3516,4769,3538,4740,3567,4702,3582,4685,3590,4676,3633,4639,3662,4614,3672,4590,3717,4549,3714,4518,3711,4493,3729,4487,3732,4486,3737,4485,3722,4480,3727,4479,3761,4472,3801,4419,3845,4357,3872,4355,3853,4283,3853,4268,3853,4253,3847,4195,3842,4136,3841,4125,3840,4114,3805,4068,3790,4049,3773,4034,3771,4032,3769,4030,3746,4010,3719,3996,3678,3976,3662,3960,Q,3642,3940,3634,3880,Z]],label:"South Kurdufan",shortLabel:"SK",labelPosition:[328.4,430.3],labelAlignment:[CEN,MID]},"SD.WH":{outlines:[[M,3010,4635,Q,2891,4660,2872,4689,2852,4718,2857,4820,2649,4801,2647,4870,L,2594,4956,2595,4956,Q,2605,4954,2610,4950,L,2627,4945,Q,2633,4951,2649,4961,2659,4969,2658,4980,L,2660,4983,2660,4989,Q,2623,4997,2630,5018,2626,5048,2618,5065,L,2742,5065,Q,2759,5101,2812,5195,2821,5213,2844,5221,2866,5230,2861,5237,2855,5244,2873,5259,2891,5273,2947,5280,2962,5402,2931,5504,L,2935,5508,2937,5505,Q,2966,5494,2982,5490,2998,5486,3062,5598,3126,5710,3120,5745,L,3312,5745,3312,5735,Q,3286,5700,3269,5676,3237,5631,3237,5615,3237,5609,3242,5602,3247,5594,3247,5588,3247,5575,3230,5555,3212,5539,3212,5538,3212,5527,3222,5513,3231,5501,3237,5500,3232,5486,3187,5426,3142,5369,3142,5368,3157,5308,3157,5283,3157,5233,3137,5195,3117,5156,3117,5123,3117,5080,3145,5046,3172,5013,3172,4995,3172,4984,3171,4982,3168,4979,3152,4980,L,3152,4940,Q,3209,4912,3214,4910,3240,4900,3277,4900,3294,4900,3366,4913,L,3367,4913,3367,4815,Q,3300,4815,3273,4805,3235,4789,3197,4735,3184,4715,3128,4690,Q,3092,4673,3010,4635,Z]],label:"Unity",shortLabel:"WH",labelPosition:[297.1,502],labelAlignment:[CEN,MID]},"SD.WR":{outlines:[[M,2812,5195,Q,2759,5101,2742,5065,L,2618,5065,Q,2611,5080,2600,5086,2591,5090,2532,5090,2481,5090,2389,5080,2327,5080,2307,5100,2304,5113,2297,5177,2292,5228,2282,5245,2258,5288,2244,5304,2234,5315,2222,5323,2223,5341,2243,5367,2268,5404,2272,5413,2290,5449,2307,5458,L,2355,5480,Q,2381,5505,2443,5522,2494,5549,2518,5582,2519,5584,2520,5585,2521,5604,2530,5644,2539,5687,2537,5730,L,2538,5906,Q,2558,5904,2599,5903,2671,5901,2705,5796,2740,5691,2805,5627,2874,5557,2896,5539,L,2929,5512,Q,2930,5508,2931,5504,2962,5402,2947,5280,2891,5273,2873,5259,2855,5244,2861,5237,2866,5230,2844,5221,Q,2821,5213,2812,5195,Z]],label:"Warab",shortLabel:"WR",labelPosition:[262.7,540.5],labelAlignment:[CEN,MID]},"SD.EB":{outlines:[[M,3120,5745,Q,3126,5710,3062,5598,2998,5486,2982,5490,2966,5494,2937,5505,L,2896,5539,Q,2874,5557,2805,5627,2740,5691,2705,5796,2671,5901,2599,5903,2558,5904,2538,5906,2538,5906,2537,5906,2522,5907,2519,5908,2512,5911,2512,5975,2512,6040,2549,6073,2560,6082,2586,6105,2654,6127,2658,6169,2662,6212,2730,6203,2798,6194,2830,6198,2862,6202,2877,6203,2892,6204,2910,6155,2923,6119,2942,6100,2959,6093,2969,6088,2987,6078,2987,6055,2989,5955,3025,5970,3073,5963,3125,5970,3123,6038,3147,6061,3155,6070,3167,6075,3188,6084,3218,6083,3264,6080,3272,6067,3279,6054,3297,6023,3307,6046,3346,6078,3385,6110,3387,6130,3420,6140,3429,6143,3438,6146,3474,6157,3509,6168,3617,6155,L,3617,6090,Q,3532,5975,3507,5900,3484,5880,3470,5869,3455,5857,3446,5841,3437,5824,3315,5745,Z]],label:"Lakes",shortLabel:"EB",labelPosition:[296.5,584.7],labelAlignment:[CEN,MID]},"SD.RS":{outlines:[[M,5010,347,Q,4983,349,4957,345,4910,338,4905,318,4905,316,4905,314,4838,220,4824,220,4807,220,4768,264,4729,308,4702,316,4701,316,4700,317,4666,312,4648,312,4628,312,4601,377,4578,445,4575,450,4554,481,4525,496,4498,509,4447,517,4403,524,4381,550,4366,568,4352,612,4322,680,4313,688,4304,695,4247,695,4200,695,4187,683,4179,686,4173,691,4173,691,4173,692,4164,698,4159,707,4148,724,4132,739,4116,754,4116,782,4116,809,4110,847,4104,884,4095,921,4086,958,4150,1008,L,4205,1048,Q,4221,1086,4225,1110,4227,1124,4227,1183,4215,1263,4215,1267,4215,1310,4241,1330,4241,1330,4242,1331,4228,1402,4241,1473,4242,1475,4243,1478,4335,1727,4390,1828,4395,1828,4395,1835,4436,1853,4466,1846,4495,1839,4505,1848,4514,1857,4520,1870,4526,1883,4569,1909,4612,1935,4623,1950,4635,1964,4672,2013,4708,2061,4720,2088,4736,2126,4756,2141,4770,2152,4828,2190,4830,2191,4835,2190,4838,2193,4841,2199,4847,2209,4847,2202,4848,2195,4877,2214,4905,2233,4935,2244,L,4935,2244,Q,4936,2244,4937,2244,4939,2243,4940,2241,4941,2239,4942,2235,4943,2236,4944,2236,4944,2237,4945,2237,4973,2260,5007,2280,L,5022,2290,Q,5105,2294,5125,2290,5155,2283,5240,2268,5324,2253,5332,2264,5340,2274,5349,2272,5351,2267,5352,2265,5353,2264,5360,2263,5371,2251,5424,2252,5492,2253,5501,2251,5506,2231,5511,2206,5517,2174,5531,2161,5545,2148,5577,2119,5600,2098,5620,2098,5627,2098,5638,2103,5661,2103,5708,2068,5712,2066,5739,2063,5766,2061,5784,2046,5802,2030,5808,1980,5818,1967,5843,1958,5859,1952,5860,1935,5860,1929,5856,1922,5844,1901,5799,1874,5715,1824,5708,1818,5697,1808,5678,1780,5662,1756,5648,1748,5638,1742,5614,1716,5596,1697,5580,1695,5520,1689,5492,1670,5461,1649,5450,1603,5442,1567,5419,1492,5403,1439,5399,1407,5395,1405,5395,1401,L,5395,1401,Q,5389,1337,5373,1183,5363,1052,5350,981,5348,977,5346,971,5341,956,5330,930,5330,928,5342,908,5353,888,5353,872,5353,835,5263,717,5255,693,5254,618,5253,565,5242,541,5242,540,5242,539,5203,528,5161,497,5117,464,5102,454,5087,443,5080,420,5071,393,5046,369,Q,5023,347,5010,347,Z]],label:"Red Sea",shortLabel:"RS",labelPosition:[485.7,138.6],labelAlignment:[CEN,MID]},"SD.ND":{outlines:[[M,2190,1291,Q,1810,1292,1429,1278,L,1110,1278,Q,1107,1325,1107,1438,1067,2643,1065,2718,1061,2718,1057,2719,1056,2740,1042,2805,1027,2875,1027,2908,1027,2970,1082,2988,1110,3064,1094,3104,1078,3143,1050,3187,1022,3230,967,3283,912,3336,889,3365,865,3393,861,3430,857,3466,890,3486,923,3506,977,3495,983,3518,1023,3521,1064,3520,1067,3520,1100,3520,1115,3503,1136,3472,1175,3455,1194,3464,1198,3468,1202,3471,1195,3488,1187,3505,1160,3525,1132,3544,1132,3565,1132,3579,1158,3594,1183,3608,1193,3614,1203,3620,1207,3620,L,1472,3620,Q,1475,3626,1495,3650,1509,3668,1512,3690,1540,3713,1600,3752,1659,3791,1680,3835,1639,3838,1628,3860,1628,3867,1654,3897,1679,3928,1697,3937,1714,3945,1723,3953,1732,3960,1732,3990,1804,3991,1815,3994,1860,4006,1857,4060,L,2062,4060,2062,4055,Q,2053,4009,2056,3885,2058,3761,2136,3637,2213,3513,2214,3505,2214,3499,2203,3458,2200,3455,2200,3334,2200,3333,2200,3328,2200,3327,2200,3325,2199,3315,2185,3278,2174,3251,2161,3216,2156,3202,2151,3188,2132,3135,2112,3080,2064,2976,2065,2902,2067,2828,2059,2755,2051,2682,2051,2676,L,2025,2438,2225,2438,Q,2222,2388,2221,2237,2221,2160,2230,2068,2230,2066,2230,2065,2227,1678,2235,1291,Z]],label:"North Darfur",shortLabel:"ND",labelPosition:[154.8,266.9],labelAlignment:[CEN,MID]},"SD.NK":{outlines:[[M,3583,2447,Q,3551,2452,3527,2461,3494,2473,3471,2471,3447,2468,3433,2471,3419,2474,3305,2465,L,2812,2449,Q,2521,2451,2225,2438,L,2025,2438,2051,2676,Q,2051,2682,2059,2755,2067,2828,2065,2902,2064,2976,2112,3080,2132,3135,2151,3188,2156,3202,2161,3216,2213,3180,2270,3180,2322,3180,2349,3198,2377,3216,2396,3220,2415,3224,2427,3240,2438,3255,2493,3271,2563,3292,2577,3300,2584,3304,2604,3312,2624,3319,2648,3331,2671,3342,2696,3358,2720,3373,2747,3404,2774,3435,2878,3438,2982,3440,2972,3574,2963,3705,2971,3790,2984,3792,3e3,3806,3014,3818,3027,3815,L,3027,3875,Q,3029,3875,3102,3872,3146,3870,3172,3875,3182,3877,3212,3902,3241,3925,3265,3931,3290,3936,3335,3885,3380,3835,3382,3820,L,3606,3819,3606,3817,Q,3606,3816,3606,3815,3605,3797,3602,3749,3600,3698,3642,3672,3685,3646,3711,3616,3737,3586,3737,3573,3737,3527,3702,3525,3703,3484,3671,3447,3630,3401,3607,3375,3584,3349,3573,3323,3562,3296,3560,3250,3559,3242,3559,3233,3559,3232,3560,3231,3566,3198,3590,3152,3622,3091,3647,3047,3672,3002,3734,2966,3795,2930,3786,2946,3816,2898,3791,2852,3764,2804,3713,2742,3662,2680,3667,2550,3650,2542,3624,2507,Q,3598,2472,3583,2447,Z]],label:"North Kurdufan",shortLabel:"NK",labelPosition:[294.3,309.4],labelAlignment:[CEN,MID]},"SD.WK":{outlines:[[M,2878,3438,Q,2774,3435,2747,3404,2720,3373,2695,3358,2671,3342,2647,3330,2624,3319,2604,3311,2584,3304,2577,3300,2563,3292,2493,3271,2438,3255,2427,3239,2415,3224,2396,3220,2377,3216,2349,3198,2322,3180,2270,3180,2213,3180,2161,3216,2174,3251,2184,3278,2199,3315,2199,3325,2200,3327,2200,3328,2200,3333,2200,3334,2200,3455,2203,3458,2214,3499,2213,3505,2213,3513,2136,3637,2058,3761,2055,3885,2053,4009,2062,4060,L,2077,4060,Q,2099,4071,2110,4164,2121,4257,2120,4300,2131,4374,2140,4398,2159,4448,2165,4474,2171,4500,2209,4592,2248,4684,2271,4746,2295,4808,2308,4826,2321,4844,2332,4865,2333,4867,2334,4869,2336,4872,2337,4875,L,2332,4875,Q,2334,4918,2362,4910,2366,4980,2400,4974,2435,4969,2526,4964,2571,4962,2593,4956,2594,4956,2594,4956,L,2647,4870,Q,2649,4801,2857,4820,2852,4718,2872,4689,2891,4660,3010,4635,3009,4633,3009,4630,2993,4521,2902,4515,2809,4510,2764,4476,L,2764,4476,Q,2751,4466,2728,4446,2706,4426,2700,4393,2693,4360,2698,4335,2702,4309,2742,4199,2782,4089,2782,4043,2779,4026,2778,4017,2775,4e3,2782,4e3,L,2787,3979,Q,2793,3952,2824,3948,2838,3930,2900,3891,2923,3877,2972,3795,2972,3793,2971,3790,2963,3705,2972,3574,Q,2982,3440,2878,3438,Z]],label:"West Kurdufan",shortLabel:"WK",labelPosition:[246.2,407.7],labelAlignment:[CEN,MID]},"SD.KA":{outlines:[[M,4910,2434,Q,4883,2478,4817,2500,4606,2485,4531,2498,4455,2511,4447,2568,4444,2590,4443,2606,4442,2611,4442,2615,4441,2634,4444,2643,4448,2662,4470,2696,4491,2730,4486,2761,4551,2776,4605,2786,4681,2800,4709,2858,4730,2902,4740,2935,4749,2969,4792,3035,4834,3102,4845,3110,4856,3118,4908,3106,4960,3094,5042,3040,L,5204,3040,Q,5196,2965,5195,2930,L,5192,2923,5192,2903,Q,5225,2860,5243,2791,5264,2707,5272,2690,5323,2588,5344,2476,5343,2474,5342,2471,5337,2452,5332,2434,5327,2419,5327,2394,5327,2367,5337,2318,5344,2284,5349,2272,5340,2274,5332,2264,5324,2253,5240,2268,5155,2283,5125,2290,5105,2294,5022,2290,L,5007,2280,Q,4973,2260,4945,2237,L,4939,2245,Q,4913,2327,4950,2385,Q,4911,2432,4910,2434,Z]],label:"Kassala",shortLabel:"KA",labelPosition:[489.5,267.5],labelAlignment:[CEN,MID]},"SD.GD":{outlines:[[M,4845,3110,Q,4834,3102,4792,3035,4749,2969,4740,2935,4730,2902,4709,2858,4681,2800,4605,2786,4551,2776,4486,2761,4458,2754,4429,2747,4329,2723,4272,2740,4248,2744,4227,2777,4217,2793,4201,2809,4207,2857,4242,2878,4276,2900,4329,2905,4381,2911,4412,2957,4442,3e3,4476,3057,4466,3072,4448,3109,4431,3144,4412,3165,4394,3187,4384,3219,4374,3251,4352,3270,L,4429,3391,Q,4450,3400,4482,3400,4474,3457,4497,3498,4511,3524,4552,3560,4567,3573,4615,3589,4663,3604,4697,3653,4730,3701,4794,3729,4858,3757,4986,3794,L,4986,3794,Q,4986,3793,4987,3793,4997,3783,5002,3780,5039,3758,5067,3758,5087,3758,5102,3746,5111,3740,5123,3731,5129,3704,5131,3641,5134,3573,5140,3545,5145,3524,5180,3460,5212,3402,5212,3377,5212,3362,5202,3304,5202,3291,5212,3255,5222,3220,5222,3209,5222,3204,5209,3084,5206,3061,5204,3041,L,5204,3040,5042,3040,Q,4960,3094,4908,3106,Q,4856,3118,4845,3110,Z]],label:"Al Qadarif (Gedarif)",shortLabel:"GD",labelPosition:[471.2,326.3],labelAlignment:[CEN,MID]},"SD.SI":{outlines:[[M,4429,3391,L,4387,3325,4262,3325,Q,4260,3337,4229,3369,4198,3401,4189,3396,4179,3390,4144,3369,4105,3346,4097,3330,4085,3342,4074,3365,4060,3393,4062,3410,4020,3438,3980,3418,3987,3444,3990,3460,L,4026,3535,Q,3987,3614,4079,3709,L,4080,3709,Q,4072,3723,4072,3768,4072,3822,4084,3853,4087,3862,4122,3930,L,4132,3930,4133,3953,Q,4136,3953,4138,3953,4139,3953,4140,3953,4142,3953,4144,3954,L,4144,3954,Q,4151,3954,4157,3955,4202,3961,4223,3947,4244,3932,4257,3918,4270,3904,4325,3873,4380,3842,4397,3831,4414,3820,4438,3820,4462,3820,4481,3803,4500,3785,4522,3785,4543,3785,4578,3826,4613,3866,4640,3908,4667,3951,4718,3997,4769,4042,4779,4066,4786,4055,4796,4044,4813,4024,4842,3993,4845,3989,4882,3921,4910,3870,4925,3855,4965,3813,4986,3794,4858,3757,4794,3729,4730,3701,4697,3653,4663,3604,4615,3589,4567,3573,4552,3560,4511,3524,4497,3498,4474,3457,4482,3400,Q,4450,3400,4429,3391,Z]],label:"Sennar",shortLabel:"SI",labelPosition:[432.3,366.6],labelAlignment:[CEN,MID]},"SD.BN":{outlines:[[M,4521,3785,Q,4500,3785,4481,3803,4462,3820,4438,3820,4414,3820,4397,3831,4380,3842,4325,3873,4270,3904,4257,3918,4244,3932,4223,3946,4202,3961,4157,3955,4151,3954,4144,3954,4144,3954,4133,3953,4134,3958,4137,3964,L,4137,3965,Q,4128,4031,4115,4105,4107,4160,4111,4237,4115,4315,4121,4408,4127,4501,4139,4489,4151,4477,4222,4530,4294,4583,4311,4593,4401,4639,4391,4684,4382,4729,4382,4895,L,4469,4895,Q,4470,4854,4472,4828,L,4472,4783,Q,4483,4771,4489,4741,4494,4711,4497,4708,4522,4678,4525,4673,4532,4662,4532,4645,4520,4542,4520,4535,4520,4525,4560,4468,4603,4405,4626,4405,4632,4405,4696,4438,4723,4438,4735,4393,4746,4356,4742,4320,4737,4266,4747,4250,4764,4224,4763,4198,4763,4191,4762,4185,L,4762,4115,Q,4764,4090,4779,4066,4769,4042,4718,3996,4667,3951,4640,3908,4613,3866,4578,3825,Q,4543,3785,4521,3785,Z]],label:"Blue Nile",shortLabel:"BN",labelPosition:[441.4,424],labelAlignment:[CEN,MID]},"SD.UN":{outlines:[[M,4131,3953,Q,4124,3953,4116,3952,4094,3952,4066,3953,3974,3956,3972,3956,L,3972,4031,3769,4031,Q,3771,4032,3773,4034,3790,4050,3804,4068,3839,4115,3840,4126,3841,4137,3847,4195,3852,4254,3852,4268,3853,4283,3872,4356,3845,4358,3800,4419,3761,4473,3726,4480,3722,4481,3737,4486,3732,4486,3728,4487,3711,4493,3713,4519,3717,4550,3672,4591,3662,4614,3632,4640,3590,4677,3582,4686,3566,4703,3538,4741,3516,4770,3501,4782,3461,4816,3367,4816,L,3366,4913,Q,3381,4916,3397,4919,3512,4940,3545,4946,3579,4953,3595,4973,3611,4993,3635,5031,3659,5069,3663,5093,3667,5118,3681,5129,3695,5139,3724,5130,3754,5121,3777,5094,3800,5068,3827,5072,3854,5075,3881,5123,3908,5170,3922,5211,3939,5232,3982,5252,4034,5277,4052,5291,4029,5285,4024,5307,4022,5315,4022,5351,4022,5408,4026,5415,4035,5429,4084,5439,L,4085,5439,Q,4088,5440,4093,5443,4146,5408,4142,5321,4138,5266,4163,5255,4172,5251,4230,5251,4237,5251,4297,5251,4309,5252,4324,5261,4338,5268,4351,5268,4382,5268,4391,5266,4405,5262,4432,5241,4467,5212,4471,5203,4474,5197,4474,5159,4467,4990,4469,4896,L,4382,4896,Q,4382,4730,4391,4684,4400,4639,4311,4594,4293,4584,4222,4530,4151,4477,4139,4489,4127,4501,4120,4408,4114,4316,4110,4238,4107,4160,4115,4105,4127,4032,4137,3966,Z]],label:"Upper Nile",shortLabel:"UN",labelPosition:[397.1,472.7],labelAlignment:[CEN,MID]},"SD.JG":{outlines:[[M,4094,5442,Q,4089,5440,4085,5439,L,4085,5439,Q,4035,5429,4027,5415,4022,5408,4022,5350,4022,5314,4024,5306,4030,5284,4052,5290,4034,5276,3982,5252,3939,5231,3922,5210,3909,5170,3882,5122,3855,5075,3828,5071,3801,5068,3777,5094,3754,5120,3725,5129,3696,5139,3681,5128,3667,5117,3663,5093,3659,5069,3635,5030,3611,4992,3595,4972,3579,4952,3546,4946,3512,4939,3398,4918,3381,4915,3367,4913,3366,4913,3366,4912,3294,4900,3277,4900,3240,4900,3214,4910,3209,4912,3152,4940,L,3152,4980,Q,3168,4979,3171,4982,3172,4984,3172,4995,3172,5013,3145,5046,3117,5080,3117,5123,3117,5156,3137,5195,3157,5233,3157,5283,3157,5308,3142,5368,3142,5369,3187,5426,3232,5486,3237,5500,3231,5501,3222,5513,3212,5527,3212,5538,3212,5539,3230,5555,3247,5575,3247,5588,3247,5594,3242,5602,3237,5609,3237,5615,3237,5631,3269,5676,3286,5700,3312,5735,L,3315,5745,Q,3437,5824,3446,5840,3455,5857,3469,5868,3484,5880,3507,5900,3532,5975,3617,6090,L,3617,6155,Q,3647,6148,3847,6156,3916,6159,4004,6164,4350,6181,4357,6184,4364,6187,4407,6190,4451,6193,4491,6193,4532,6192,4557,6181,4582,6170,4619,6164,4656,6159,4717,6123,4778,6087,4793,6078,4787,6062,4782,6050,4730,5948,4722,5915,4712,5872,4678,5860,4660,5856,4653,5853,4642,5848,4637,5840,4637,5839,4636,5838,4636,5838,4636,5837,4625,5808,4575,5769,4501,5711,4500,5710,4478,5687,4455,5647,4420,5585,4410,5570,4388,5538,4344,5524,4319,5516,4256,5510,4194,5504,4164,5494,4118,5479,4089,5447,4088,5447,4088,5446,4091,5444,4094,5442,Z]],label:"Jungoli",shortLabel:"JG",labelPosition:[386.5,570.1],labelAlignment:[CEN,MID]},"SD.EE":{outlines:[[M,4408,6190,Q,4365,6187,4358,6184,4351,6181,4004,6163,3916,6159,3848,6156,3842,6166,3815,6211,3788,6256,3788,6261,3788,6266,3794,6288,3800,6310,3822,6317,3796,6325,3789,6340,3788,6343,3798,6377,3808,6412,3835,6475,3863,6537,3860,6540,3858,6543,3839,6584,3818,6631,3813,6650,3798,6703,3795,6713,3792,6723,3759,6755,3727,6787,3698,6795,L,3698,6908,Q,3710,6918,3730,6946,3763,6990,3790,6990,3815,6990,3822,6976,3836,6950,3860,6932,3880,6918,3953,6917,4002,6908,4128,6875,4142,6875,4158,6892,4175,6910,4199,6910,4205,6910,4248,6907,4261,6907,4293,6917,4297,6917,4298,6917,L,4299,6917,Q,4320,6907,4364,6851,4418,6784,4435,6770,4535,6687,4580,6615,4604,6577,4647,6548,4688,6519,4720,6515,4725,6514,4809,6486,4896,6457,4920,6457,4942,6457,4952,6475,4955,6480,4967,6515,4987,6572,5050,6572,5077,6572,5084,6561,5089,6544,5097,6529,5093,6492,5093,6471,5093,6436,5100,6426,5108,6415,5108,6386,5108,6347,5103,6330,5093,6297,5063,6297,5046,6297,5039,6307,5032,6317,5020,6317,5013,6317,5003,6310,4993,6302,4982,6302,4948,6315,4939,6315,4851,6252,4833,6200,4810,6124,4793,6077,4778,6086,4717,6122,4656,6159,4619,6164,4583,6169,4558,6180,4533,6192,4492,6192,Q,4451,6193,4408,6190,Z]],label:"East Equatoria",shortLabel:"EE",labelPosition:[430.2,650.4],labelAlignment:[CEN,MID]},"SD.BG":{outlines:[[M,3797,6377,Q,3787,6343,3788,6340,3796,6325,3821,6317,3799,6310,3793,6288,3788,6266,3787,6261,3787,6256,3814,6211,3841,6166,3847,6156,3647,6148,3617,6155,3509,6168,3473,6156,3438,6145,3429,6142,3420,6139,3387,6130,3385,6109,3346,6078,3307,6046,3297,6022,3279,6054,3271,6067,3264,6080,3217,6082,3188,6084,3167,6075,3175,6095,3215,6122,3234,6135,3265,6175,3281,6195,3330,6225,3357,6242,3357,6291,3357,6335,3335,6350,3355,6402,3335,6455,3324,6475,3259,6518,3195,6561,3157,6565,3118,6570,3099,6564,3080,6557,3058,6557,3040,6557,3020,6602,L,2976,6646,Q,2976,6648,2977,6651,2981,6663,2985,6682,2994,6704,3021,6727,3064,6763,3075,6775,3092,6793,3121,6832,3151,6863,3195,6867,3239,6871,3245,6907,3245,6910,3242,6943,3243,6975,3260,6975,L,3277,6964,Q,3295,6952,3311,6952,3327,6952,3365,6975,3366,6973,3367,6972,3393,6934,3417,6923,3443,6913,3484,6911,3526,6910,3547,6926,3567,6942,3595,6942,3618,6942,3648,6922,3678,6902,3687,6902,3690,6902,3694,6905,3695,6906,3697,6908,L,3697,6795,Q,3726,6787,3759,6755,3792,6723,3794,6713,3797,6703,3812,6650,3817,6631,3839,6584,3857,6543,3860,6540,3863,6537,3835,6475,Q,3807,6412,3797,6377,Z]],label:"Central Equatoria",shortLabel:"BG",labelPosition:[349.8,652.9],labelAlignment:[CEN,MID]},"SD.WE":{outlines:[[M,2830,6198,Q,2798,6194,2730,6203,2662,6212,2658,6169,2654,6127,2586,6105,2560,6082,2549,6073,2512,6040,2512,5975,2512,5911,2519,5908,2522,5907,2537,5906,L,2537,5888,2362,5888,Q,2374,5861,2332,5852,2290,5843,2275,5848,2259,5852,2165,5867,2070,5881,2031,5879,1992,5876,1905,5893,1820,5908,1781,5911,1780,5911,1779,5911,1777,5924,1775,5948,1775,5967,1796,6e3,1817,6032,1817,6040,1817,6047,1807,6070,1807,6084,1835,6092,1873,6103,1880,6108,1950,6155,1957,6158,2061,6203,2084,6257,L,2084,6332,Q,2099,6364,2100,6388,2100,6391,2100,6394,2108,6411,2128,6436,2158,6473,2190,6493,2207,6503,2247,6540,2258,6550,2259,6568,2260,6589,2267,6600,2280,6619,2285,6624,2299,6636,2320,6633,2339,6629,2372,6663,2395,6685,2429,6701,2470,6717,2492,6728,L,2496,6732,Q,2584,6656,2611,6663,2692,6683,2692,6683,2701,6688,2715,6688,2733,6687,2737,6688,2748,6690,2756,6697,2762,6703,2776,6703,2799,6703,2825,6657,2852,6610,2887,6610,2902,6610,2920,6616,2946,6623,2955,6625,2968,6628,2976,6647,L,3020,6603,Q,3040,6558,3058,6558,3080,6558,3099,6564,3118,6570,3157,6566,3195,6562,3260,6519,3324,6476,3335,6455,3355,6403,3335,6350,3357,6335,3357,6291,3357,6242,3330,6226,3281,6196,3265,6175,3234,6135,3215,6123,3175,6096,3167,6075,3155,6070,3147,6061,3123,6038,3125,5970,3073,5963,3025,5970,2989,5955,2987,6055,2987,6078,2969,6088,2959,6093,2942,6100,2923,6119,2910,6155,2892,6204,2877,6203,Q,2862,6202,2830,6198,Z]],label:"West Equatoria",shortLabel:"WE",labelPosition:[256.6,628.9],labelAlignment:[CEN,MID]},"SD.WB":{outlines:[[M,1775,5400,Q,1762,5360,1732,5370,1727,5305,1732,5188,1700,5164,1693,5150,1687,5138,1695,5001,1702,4865,1704,4713,L,1704,4713,Q,1697,4703,1688,4697,1670,4685,1660,4673,1650,4662,1650,4640,1651,4619,1650,4595,L,1367,4595,Q,1337,4625,1337,4643,1337,4677,1323,4701,1308,4726,1275,4746,1242,4766,1240,4832,1239,4897,1200,4989,1160,5082,1152,5105,1074,5094,1055,5159,1057,5160,1058,5160,1062,5163,1062,5166,1062,5180,1045,5216,1027,5251,1027,5258,1027,5298,1137,5317,1247,5329,1250,5330,1266,5339,1296,5371,1335,5411,1340,5415,1394,5460,1405,5510,L,1405,5515,Q,1397,5524,1397,5564,1396,5604,1443,5638,1490,5672,1543,5692,1595,5712,1610,5725,1644,5758,1685,5810,1687,5814,1738,5850,1780,5881,1780,5898,L,1780,5911,Q,1820,5908,1905,5892,1992,5876,2031,5878,2070,5881,2165,5866,2259,5852,2274,5848,2290,5843,2332,5852,2374,5861,2362,5888,L,2537,5888,2537,5730,Q,2539,5687,2530,5644,2521,5604,2520,5585,2519,5584,2517,5582,2494,5549,2443,5522,2381,5505,2355,5480,L,2307,5458,Q,2290,5449,2272,5413,2268,5404,2243,5367,2223,5341,2222,5323,2209,5333,2192,5340,2158,5356,2077,5412,1997,5460,1958,5475,1918,5491,1878,5472,1839,5454,1814,5450,Q,1790,5445,1775,5400,Z]],label:"West Bahr Al Ghazal",shortLabel:"WB",labelPosition:[173.2,556.3],labelAlignment:[CEN,MID]},"SD.NB":{outlines:[[M,2362,4910,Q,2334,4918,2332,4875,L,2122,4865,Q,2076,4865,2016,4880,1955,4894,1937,4896,1919,4897,1876,4895,1832,4892,1815,4874,1797,4856,1780,4824,1762,4791,1748,4777,1734,4763,1720,4737,1713,4723,1705,4714,L,1705,4713,1705,4714,Q,1702,4865,1695,5002,1687,5138,1694,5151,1700,5164,1732,5188,1727,5305,1732,5370,1762,5360,1775,5400,1790,5445,1814,5450,1839,5454,1879,5473,1918,5491,1958,5476,1997,5460,2077,5412,2158,5356,2192,5340,2209,5333,2222,5323,2234,5315,2244,5304,2258,5288,2282,5245,2292,5228,2297,5177,2304,5113,2307,5100,2327,5080,2389,5080,2481,5090,2532,5090,2591,5090,2600,5086,2611,5080,2618,5065,2626,5048,2630,5018,2623,4997,2660,4989,L,2660,4983,2657,4983,Q,2658,4981,2658,4980,2659,4969,2649,4961,2633,4951,2627,4945,L,2610,4950,Q,2605,4954,2595,4956,L,2594,4956,Q,2594,4956,2594,4957,2571,4962,2526,4964,2435,4969,2401,4975,Q,2366,4980,2362,4910,Z]],label:"North Bahr Al Ghazal",shortLabel:"NB",labelPosition:[203.5,509.8],labelAlignment:[CEN,MID]},"SD.SD":{outlines:[[M,1472,3620,L,1207,3620,Q,1206,3622,1206,3623,1180,3661,1105,3727,1028,3794,992,3840,1019,3828,1078,3889,1137,3952,1137,3995,1137,4036,1104,4038,1102,4038,1066,4037,1039,4036,1009,4055,980,4074,954,4081,929,4088,897,4110,865,4132,775,4168,694,4200,662,4226,L,667,4233,Q,631,4367,623,4378,615,4389,688,4463,762,4537,767,4548,806,4627,877,4758,864,4792,870,4815,876,4838,874,4888,872,4937,863,4947,854,4956,839,4966,813,4982,820,5098,L,817,5103,Q,830,5113,830,5115,L,850,5153,Q,905,5150,958,5150,1035,5150,1055,5159,1074,5094,1152,5105,1160,5082,1200,4990,1239,4897,1241,4832,1242,4766,1275,4746,1308,4726,1323,4702,1337,4677,1337,4643,1337,4625,1367,4595,L,1650,4595,Q,1651,4619,1651,4641,1650,4662,1660,4673,1670,4685,1688,4697,1697,4703,1705,4713,L,1705,4714,Q,1713,4723,1720,4737,1734,4763,1748,4777,1762,4791,1780,4824,1797,4856,1815,4874,1832,4892,1876,4895,1919,4897,1937,4896,1955,4894,2016,4880,2076,4865,2122,4865,L,2332,4875,2332,4866,Q,2321,4844,2308,4826,2295,4808,2272,4746,2248,4684,2210,4592,2171,4500,2165,4474,2159,4448,2141,4399,2131,4374,2120,4300,2121,4257,2110,4164,2099,4071,2077,4060,L,1857,4060,Q,1860,4006,1815,3994,1804,3991,1732,3990,1732,3960,1723,3953,1714,3945,1697,3937,1679,3928,1654,3897,1628,3867,1628,3860,1639,3838,1680,3835,1659,3791,1600,3752,1540,3713,1512,3690,1509,3668,1495,3650,Q,1475,3626,1472,3620,Z]],label:"South Darfur",shortLabel:"SD",labelPosition:[140.7,430],labelAlignment:[CEN,MID]},"SD.WD":{outlines:[[M,965,2718,Q,953,2717,919,2715,903,2715,887,2723,870,2730,842,2730,824,2730,793,2728,756,2728,734,2755,710,2783,721,2821,718,2830,719,2858,719,2882,712,2890,694,2915,693,2916,690,2920,684,2930,678,2937,671,2938,649,2967,645,2980,634,2989,624,3028,613,3069,610,3073,605,3079,560,3093,517,3106,517,3121,517,3126,529,3139,540,3151,540,3160,540,3169,538,3171,536,3173,525,3180,549,3215,572,3215,L,572,3233,Q,561,3247,479,3304,407,3355,407,3371,407,3387,432,3420,453,3446,458,3456,459,3458,460,3460,459,3511,453,3523,447,3535,424,3562,401,3588,344,3632,309,3659,309,3689,309,3763,353,3763,382,3763,393,3754,404,3745,431,3745,463,3745,483,3782,502,3817,500,3863,499,3873,505,3943,507,3975,529,3973,550,3971,550,3998,550,4011,545,4016,538,4024,535,4040,527,4075,527,4099,527,4152,574,4176,603,4190,619,4198,643,4210,661,4227,662,4226,662,4226,694,4200,775,4168,865,4132,897,4110,929,4088,954,4081,980,4074,1009,4055,1039,4036,1066,4037,1102,4038,1104,4038,1137,4036,1137,3995,1137,3952,1078,3889,1019,3828,992,3840,1028,3794,1105,3727,1180,3661,1206,3623,L,1193,3614,Q,1183,3608,1158,3594,1132,3579,1132,3565,1132,3544,1160,3525,1187,3505,1195,3488,1202,3471,1198,3468,1194,3464,1175,3455,1136,3472,1115,3503,1100,3520,1067,3520,1064,3520,1023,3521,983,3518,977,3495,923,3506,890,3486,857,3466,861,3430,865,3393,889,3365,912,3336,967,3283,1022,3230,1050,3187,1078,3143,1094,3104,1110,3064,1082,2988,1027,2970,1027,2908,1027,2875,1042,2805,1056,2740,1057,2719,1018,2722,997,2715,Z]],label:"West Darfur",shortLabel:"WD",labelPosition:[71.7,349.1],labelAlignment:[CEN,MID]}}}];exports["default"]={extension:geodefinitions,name:"sudan",type:"maps"}}})});