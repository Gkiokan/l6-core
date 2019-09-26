(function(factory){if(typeof module==="object"&&typeof module.exports!=="undefined"){module.exports=factory}else{factory(FusionCharts)}})(function(FusionCharts){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{configurable:false,enumerable:true,get:getter})}};__webpack_require__.r=function(exports){Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=226)})({226:function(module,exports,__webpack_require__){"use strict";var _fusioncharts=__webpack_require__(227);var _fusioncharts2=_interopRequireDefault(_fusioncharts);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}FusionCharts.addDep(_fusioncharts2["default"])},227:function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;
/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts Technologies LLP
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts Technologies LLP
 * @meta package_map_pack
 * @id fusionmaps.NorthernMindanao.1.03-02-2017 04:08:43
 */var M="M",L="L",Z="Z",Q="Q",LFT="left",RGT="right",CEN="center",MID="middle",TOP="top",BTM="bottom",geodefinitions=[{name:"NorthernMindanao",revision:1,standaloneInit:true,baseWidth:600,baseHeight:596,baseScaleFactor:10,entities:{"PH.NM.BK":{outlines:[[M,5307,2156,Q,4446,2159,4374,2159,4302,2156,4212,2163,4122,2166,4098,2214,4071,2259,4050,2340,4029,2403,4011,2438,4008,2448,3975,2478,3948,2502,3951,2526,3954,2555,3954,2603,3951,2685,3951,2691,3921,2703,3894,2703,3855,2699,3825,2699,L,3342,2703,Q,3339,2723,3336,2768,3333,2811,3336,2840,3342,2907,3312,2973,3282,3029,3294,3087,3291,3108,3270,3144,3243,3183,3237,3207,3231,3237,3228,3273,3222,3294,3204,3297,L,3204,3417,Q,3198,3423,3204,3468,3207,3504,3189,3525,L,3171,3537,Q,3162,3543,3159,3552,3156,3555,3153,3573,3150,3591,3132,3591,3036,3597,3036,3630,L,3036,3633,Q,3036,3662,3048,3696,3057,3714,3075,3756,3084,3780,3096,3822,3105,3858,3132,3870,L,3132,3948,Q,3132,3966,3150,3987,3165,4005,3162,4029,3162,4068,3195,4116,3216,4143,3252,4185,3267,4209,3306,4290,3309,4293,3336,4332,3360,4368,3360,4380,3360,4452,3363,4464,3363,4473,3387,4491,3417,4512,3423,4524,3435,4545,3468,4545,3495,4545,3504,4569,3507,4590,3528,4620,3537,4635,3558,4662,3576,4683,3612,4743,3645,4794,3672,4812,3717,4836,3717,4887,3720,4968,3720,4971,3723,4983,3756,5004,3789,5025,3792,5043,3795,5073,3795,5133,3813,5136,3831,5145,3867,5163,3882,5187,3915,5235,3966,5292,3999,5343,3999,5409,3999,5475,3978,5502,3927,5559,3909,5589,L,3909,5673,3927,5673,Q,3933,5664,3939,5652,3945,5640,3960,5622,L,4059,5622,4062,5673,Q,4062,5700,4059,5718,4053,5751,4077,5769,4104,5790,4104,5811,4119,5811,4155,5790,4182,5790,4191,5814,4203,5850,4206,5853,L,4269,5853,Q,4269,5830,4302,5817,4315,5814,4311,5796,4311,5781,4332,5781,4347,5781,4380,5832,4395,5856,4416,5883,L,4440,5907,Q,4456,5922,4464,5922,4545,5928,4554,5922,L,4552,5922,Q,4554,5922,4557,5919,L,4557,5922,Q,4614,5922,4638,5913,4656,5907,4692,5871,4701,5862,4731,5844,4755,5830,4758,5820,4762,5775,4762,5763,4764,5751,4786,5748,4786,5742,4848,5751,4879,5757,4911,5763,4935,5763,4941,5739,4944,5715,4968,5715,4983,5715,4998,5703,5016,5691,5034,5688,5068,5682,5073,5634,5073,5577,5073,5556,5079,5520,5106,5430,5113,5412,5130,5400,5151,5388,5158,5379,5169,5367,5190,5364,L,5217,5367,Q,5233,5316,5233,5304,5247,5301,5292,5304,5328,5304,5355,5304,5355,5289,5358,5274,L,5364,5133,5443,5133,Q,5443,5118,5454,5106,L,5526,5106,Q,5515,5151,5629,5154,5680,5157,5746,5148,L,5773,5148,Q,5775,5151,5787,5175,5794,5187,5811,5187,5871,5187,5895,5145,5914,5118,5914,5082,5914,5040,5895,5037,5880,5031,5880,5010,5880,4980,5907,4959,5940,4935,5946,4914,L,5946,4803,Q,5946,4701,5907,4641,5880,4599,5874,4572,5869,4551,5871,4473,L,5871,4305,Q,5871,4269,5839,4248,5802,4227,5802,4203,5811,4101,5811,4056,5802,4056,5797,4056,5757,4056,5746,3999,5739,3975,5739,3909,5749,3882,5766,3858,5778,3837,5778,3810,5778,3786,5754,3765,5722,3741,5706,3726,L,5706,3657,Q,5722,3662,5728,3651,5730,3648,5730,3630,5730,3609,5722,3588,5712,3564,5712,3549,L,5718,3480,5694,3473,Q,5667,3468,5664,3450,5658,3426,5646,3417,5637,3408,5637,3384,5637,3372,5680,3327,L,5718,3282,5715,3252,Q,5691,3249,5685,3249,5680,3246,5661,3228,5658,3225,5598,3207,L,5598,3084,Q,5550,3084,5532,3072,5512,3057,5499,3015,5484,2964,5454,2961,5419,2970,5398,2961,5403,2907,5358,2871,L,5352,2712,Q,5352,2682,5350,2661,5347,2649,5326,2627,5304,2606,5302,2592,5299,2541,5302,2445,5302,2358,5302,2355,Q,5304,2244,5307,2156,Z]],label:"Bukidnon",shortLabel:"BK",labelPosition:[449.1,404],labelAlignment:[CEN,MID]},"PH.NM.CM":{outlines:[[M,3858,233,Q,3837,219,3828,212,3807,198,3798,174,3786,137,3783,129,3768,105,3735,107,3702,113,3699,107,3657,54,3648,47,3645,41,3597,41,3546,41,3525,68,3504,95,3438,102,3429,107,3432,131,3432,147,3435,182,3435,200,3414,212,3384,227,3372,246,L,3372,291,Q,3423,270,3426,318,3429,341,3426,392,3486,384,3504,429,3525,485,3540,488,3552,488,3606,494,3612,494,3636,525,3654,542,3669,542,3678,542,3684,536,3693,530,3708,530,3747,530,3759,563,3774,597,3798,597,3831,597,3852,576,3873,554,3867,533,3891,533,3921,509,L,3921,429,Q,3894,425,3876,401,3861,377,3861,347,3861,339,3870,308,3876,278,3876,264,Q,3876,246,3858,233,Z]],label:"Camiguin",shortLabel:"CM",labelPosition:[364.6,31.9],labelAlignment:[CEN,MID]},"PH.NM.LN":{outlines:[[M,2244,3048,Q,2244,3102,2226,3117,2202,3144,2181,3219,2181,3222,2181,3228,2169,3267,2148,3287,2121,3309,2064,3315,2037,3324,2022,3345,2004,3372,1995,3378,1982,3387,1944,3387,L,1743,3380,1665,3387,Q,1644,3387,1641,3378,1638,3363,1599,3366,1559,3356,1521,3356,1497,3356,1491,3366,1482,3369,1476,3384,1470,3396,1458,3402,1410,3429,1386,3429,1338,3429,1332,3438,1296,3465,1251,3492,1236,3501,1212,3507,1197,3516,1194,3540,1191,3549,1176,3570,1160,3594,1152,3606,1095,3651,995,3660,918,3669,873,3741,846,3786,768,3858,744,3879,710,3912,681,3942,660,3960,630,3984,540,4032,465,4080,426,4128,423,4131,420,4137,L,417,4227,Q,417,4236,404,4263,393,4287,399,4311,402,4341,351,4383,309,4413,306,4440,306,4449,306,4458,314,4494,324,4506,333,4515,351,4515,372,4515,378,4527,390,4542,431,4548,438,4551,444,4548,450,4548,455,4557,455,4563,459,4575,465,4587,471,4590,507,4614,531,4617,537,4617,555,4617,567,4617,572,4623,572,4626,582,4650,585,4671,596,4674,603,4674,620,4689,641,4704,641,4710,630,4737,617,4752,612,4761,612,4779,612,4785,612,4791,612,4797,624,4797,L,644,4788,689,4788,Q,689,4791,708,4809,726,4827,726,4836,726,4845,720,4860,720,4866,726,4875,734,4893,747,4893,L,804,4872,Q,816,4872,846,4887,894,4857,891,4806,891,4770,947,4770,960,4770,971,4770,993,4773,999,4776,999,4788,1008,4794,1011,4800,1023,4800,1029,4803,1038,4803,1104,4806,1110,4806,1116,4809,1122,4830,1125,4845,1140,4845,1181,4845,1212,4842,L,1229,4842,1236,4869,1293,4869,Q,1293,4881,1299,4911,L,1332,4911,Q,1346,4914,1370,4896,1389,4878,1398,4875,1428,4857,1431,4851,1437,4842,1437,4809,1437,4779,1422,4773,1404,4767,1404,4752,1404,4722,1428,4713,1452,4701,1452,4671,1452,4644,1473,4635,1476,4635,1479,4635,1494,4623,1503,4596,1503,4593,1533,4569,L,1535,4566,Q,1539,4563,1539,4524,L,1542,4434,Q,1542,4404,1511,4389,1491,4374,1500,4341,1479,4332,1473,4332,L,1473,4296,1779,4296,Q,1770,4266,1788,4248,1815,4233,1827,4221,1836,4209,1836,4188,1839,4149,1839,4137,1839,4116,1848,4098,1854,4086,1854,4071,1851,4026,1851,3999,1851,3987,1860,3981,1872,3972,1875,3957,1878,3921,1905,3900,1911,3894,1932,3894,1965,3891,1968,3891,1974,3888,1986,3870,1989,3861,2010,3861,L,2046,3867,Q,2055,3867,2064,3855,2076,3840,2097,3837,L,2154,3837,Q,2163,3837,2178,3837,2193,3834,2205,3819,L,2238,3777,Q,2265,3753,2280,3741,2295,3729,2298,3696,L,2295,3552,Q,2289,3513,2286,3492,L,2289,3318,Q,2310,3318,2313,3315,2322,3309,2322,3287,L,2418,3287,Q,2448,3330,2478,3354,2490,3363,2517,3393,2547,3417,2565,3423,2577,3429,2601,3438,2622,3447,2640,3447,2658,3447,2688,3471,2715,3492,2727,3492,L,2778,3492,Q,2790,3492,2814,3510,2823,3516,2835,3516,2841,3516,2859,3513,2871,3513,2904,3528,2928,3537,2970,3567,2991,3582,3003,3597,L,3036,3630,Q,3036,3597,3132,3591,3150,3591,3153,3573,3156,3555,3159,3552,3162,3543,3171,3537,L,3189,3525,Q,3207,3504,3204,3468,3198,3423,3204,3417,L,3204,3297,Q,3201,3297,3198,3297,3186,3297,3156,3234,3126,3213,3111,3201,3084,3186,3072,3171,L,3060,3132,Q,3048,3096,3033,3090,3e3,3074,2997,3026,L,2973,3026,Q,2934,3029,2889,3029,2889,3012,2883,2976,L,2829,2976,Q,2802,3026,2727,3026,2628,3018,2565,3024,2490,3026,2394,3026,2298,3024,2244,3024,Q,2244,3036,2244,3048,Z,M,1821,3933,L,1803,3960,Q,1800,3963,1779,3963,1755,3960,1746,3960,1746,3945,1734,3936,1719,3927,1719,3921,1719,3885,1749,3876,1758,3873,1788,3873,1800,3873,1821,3873,1833,3876,1833,3897,Q,1833,3915,1821,3933,Z,M,1263,4506,Q,1212,4503,1208,4503,L,1205,4482,Q,1205,4464,1212,4461,1233,4458,1236,4452,1236,4437,1245,4428,1251,4419,1253,4419,1277,4419,1277,4473,Q,1277,4506,1263,4506,Z]],label:"Lanao del Norte",shortLabel:"LN",labelPosition:[108.3,407.9],labelAlignment:[CEN,MID]},"PH.NM.MD":{outlines:[[M,660,2070,Q,639,2070,620,2079,600,2087,585,2087,569,2063,500,2022,431,1977,390,1980,L,273,1973,Q,252,1965,245,1935,242,1896,231,1881,L,168,1881,Q,173,1884,194,1908,204,1914,204,1938,204,1959,194,1965,183,1980,168,2022,156,2060,146,2070,138,2079,114,2079,90,2079,45,2063,56,3146,51,3315,51,3321,51,3327,48,3441,63,3497,69,3519,72,3588,74,3645,87,3662,111,3702,108,3750,108,3777,98,3822,146,3816,239,3855,290,3879,383,3921,386,3906,399,3891,407,3885,438,3867,452,3858,465,3840,476,3816,486,3801,L,588,3801,591,3831,600,3834,Q,612,3834,641,3813,668,3795,689,3777,696,3765,708,3765,723,3762,732,3753,747,3744,747,3729,744,3714,744,3708,744,3684,795,3648,849,3615,861,3603,885,3582,891,3576,906,3564,906,3543,906,3513,918,3501,926,3492,947,3492,L,990,3501,Q,1019,3477,1023,3459,1023,3438,1029,3432,1032,3426,1019,3393,1008,3363,1011,3339,1008,3303,1011,3285,1014,3267,995,3263,978,3255,978,3239,978,3201,966,3132,957,3074,957,3036,954,3024,950,3015,957,3e3,984,2988,1016,2973,1016,2955,1016,2943,990,2919,963,2895,957,2877,954,2856,957,2816,963,2781,963,2778,963,2747,957,2739,957,2736,939,2723,921,2712,921,2709,923,2634,923,2627,923,2595,897,2582,867,2571,867,2513,864,2445,861,2438,837,2441,795,2441,780,2441,761,2421,747,2400,747,2385,747,2372,768,2361,789,2345,789,2328,789,2300,761,2273,732,2247,723,2235,717,2225,699,2223,681,2217,672,2207,651,2178,639,2166,L,639,2145,Q,675,2142,681,2135,689,2132,689,2111,Q,689,2070,660,2070,Z]],label:"Misamis Occidental",shortLabel:"MD",labelPosition:[44.7,290.1],labelAlignment:[CEN,MID]},"PH.NM.MN":{outlines:[[M,5079,618,L,5079,647,5121,647,5121,746,Q,5106,752,5100,756,5094,759,5082,759,5079,810,5049,804,L,5049,869,Q,5070,873,5068,906,5068,951,5076,969,5082,983,5115,999,L,5115,1055,Q,5115,1100,5115,1107,5113,1134,5097,1199,5092,1220,5079,1227,5065,1233,5058,1248,5049,1278,5049,1296,5049,1305,5052,1329,5020,1313,4944,1361,4857,1413,4836,1413,4738,1413,4734,1377,4738,1340,4738,1326,4738,1302,4707,1283,4632,1233,4617,1217,4584,1182,4593,1121,L,4518,1121,Q,4497,1082,4458,1055,4437,1041,4395,1007,4371,986,4335,977,4296,969,4267,924,4243,884,4197,884,4152,887,4131,852,L,4107,812,4074,839,Q,4044,866,3921,866,3885,866,3882,893,3876,935,3876,938,3864,953,3828,959,3816,962,3813,975,3813,977,3813,999,3813,1025,3831,1049,3852,1076,3855,1131,3861,1185,3876,1212,3891,1238,3891,1244,3891,1262,3873,1275,3852,1283,3852,1305,3852,1331,3873,1353,3891,1377,3891,1392,3891,1416,3867,1433,3867,1481,3864,1496,3852,1536,3825,1554,3804,1568,3804,1613,3804,1640,3831,1647,3855,1656,3855,1691,3855,1733,3840,1736,3822,1733,3807,1733,3777,1733,3774,1749,3771,1749,3762,1781,3756,1797,3747,1800,3726,1802,3723,1826,3720,1832,3720,1866,3720,1908,3729,1946,L,3747,1946,Q,3750,1943,3762,1946,3762,1956,3771,1994,3774,2015,3777,2037,L,3774,2066,Q,3774,2094,3789,2097,3828,2108,3834,2111,L,3834,2118,Q,3825,2130,3792,2148,3762,2166,3756,2183,3753,2193,3753,2231,3744,2247,3732,2262,3723,2268,3723,2280,3723,2289,3747,2300,3774,2310,3774,2355,3774,2397,3765,2409,3756,2424,3708,2445,3690,2454,3642,2484,3606,2505,3597,2505,3576,2493,3549,2493,3528,2493,3516,2475,L,3507,2460,Q,3498,2448,3477,2438,L,3453,2430,Q,3447,2421,3444,2400,3441,2379,3435,2372,3420,2352,3327,2355,3261,2355,3192,2345,3195,2313,3171,2307,3123,2297,3105,2286,3096,2280,3081,2238,3066,2204,3036,2207,3012,2211,2982,2187,2946,2156,2931,2154,2898,2148,2883,2145,2859,2135,2865,2100,L,2865,2070,Q,2895,2070,2907,2066,L,2907,2039,2889,2039,Q,2838,2042,2814,2046,2781,2052,2757,2070,2730,2090,2691,2106,2676,2111,2622,2127,2592,2132,2559,2166,2508,2217,2505,2220,2484,2235,2460,2268,2439,2292,2394,2289,L,2394,2358,Q,2394,2372,2385,2397,2376,2421,2376,2430,2376,2445,2367,2460,2367,2462,2340,2493,2322,2510,2322,2555,2322,2601,2328,2619,2334,2634,2334,2675,2334,2709,2331,2718,2328,2751,2310,2760,2256,2781,2247,2820,2244,2838,2244,2898,2244,2925,2223,2931,2202,2933,2202,2952,2202,2970,2223,2985,2238,2997,2244,3024,2298,3024,2394,3026,2490,3026,2565,3024,2628,3018,2727,3026,2802,3026,2829,2976,L,2883,2976,Q,2889,3012,2889,3029,2934,3029,2973,3026,L,2997,3026,Q,3e3,3074,3033,3090,3048,3096,3060,3132,L,3072,3171,Q,3084,3186,3111,3201,3126,3213,3156,3234,3186,3297,3198,3297,3201,3297,3204,3297,3222,3294,3228,3273,3231,3237,3237,3207,3243,3183,3270,3144,3291,3108,3294,3087,3282,3029,3312,2973,3342,2907,3336,2840,3333,2811,3336,2768,3339,2723,3342,2703,L,3825,2699,Q,3855,2699,3894,2703,3921,2703,3951,2691,3951,2685,3954,2603,3954,2555,3951,2526,3948,2502,3975,2478,4008,2448,4011,2438,4029,2403,4050,2340,4071,2259,4098,2214,4122,2166,4212,2163,4302,2156,4374,2159,4446,2159,5307,2156,5310,2049,5310,1977,5310,1962,5310,1943,5307,1887,5302,1808,5295,1715,5295,1632,5295,1623,5295,1616,5289,1574,5280,1536,5268,1485,5268,1461,5268,1446,5274,1422,5278,1398,5278,1392,5278,1377,5262,1355,L,5244,1334,Q,5244,1299,5286,1292,5328,1283,5328,1223,5328,1199,5265,1164,5211,1131,5193,1131,L,5193,1089,Q,5235,1065,5250,1055,5271,1041,5271,1014,5271,999,5247,1001,5217,1001,5214,975,5211,956,5214,930,5217,903,5217,897,5217,876,5199,876,5185,876,5182,852,L,5182,756,Q,5196,741,5178,732,5151,714,5151,704,5145,663,5142,621,L,5142,602,Q,5139,591,5121,578,5121,597,5100,605,Q,5092,611,5079,618,Z]],label:"Misamis Oriental",shortLabel:"MN",labelPosition:[454.1,178.2],labelAlignment:[CEN,MID]}}}];exports["default"]={extension:geodefinitions,name:"northernmindanao",type:"maps"}}})});