(function(factory){if(typeof module==="object"&&typeof module.exports!=="undefined"){module.exports=factory}else{factory(FusionCharts)}})(function(FusionCharts){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{configurable:false,enumerable:true,get:getter})}};__webpack_require__.r=function(exports){Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=218)})({218:function(module,exports,__webpack_require__){"use strict";var _fusioncharts=__webpack_require__(219);var _fusioncharts2=_interopRequireDefault(_fusioncharts);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}FusionCharts.addDep(_fusioncharts2["default"])},219:function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;
/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts Technologies LLP
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts Technologies LLP
 * @meta package_map_pack
 * @id fusionmaps.Corsica.1.09-25-2017 11:37:32
 */var M="M",L="L",Z="Z",Q="Q",LFT="left",RGT="right",CEN="center",MID="middle",TOP="top",BTM="bottom",geodefinitions=[{name:"Corsica",revision:1,creditLabel:false,standaloneInit:false,baseWidth:278,baseHeight:600,baseScaleFactor:10,firstEntity:"FR.CO.HC",entities:{"FR.CO.HC":{outlines:[[M,2197,69,Q,2191,77,2182,82,2168,87,2164,91,2158,97,2158,108,2158,115,2167,132,2167,137,2163,154,2163,162,2170,168,2177,175,2177,196,2177,210,2174,226,2174,244,2182,248,2194,254,2208,280,L,2208,282,Q,2209,285,2209,289,2209,302,2196,303,2182,304,2182,319,2182,337,2196,344,2209,351,2209,358,2209,364,2198,367,2193,368,2185,381,2181,392,2174,395,2160,395,2157,401,2145,417,2127,429,2117,434,2117,455,2117,471,2123,479,2127,485,2127,495,2127,501,2126,513,2126,526,2144,538,2163,551,2163,563,2163,567,2154,575,2144,585,2142,591,2134,607,2122,616,2107,623,2101,627,2089,633,2088,641,2078,678,2078,684,2078,691,2079,692,2081,695,2090,699,2104,708,2106,717,2107,729,2116,738,2121,743,2134,754,2155,776,2161,795,2166,810,2166,842,2166,850,2163,864,2158,878,2158,886,L,2156,956,Q,2156,975,2164,987,2171,1e3,2171,1014,2171,1033,2135,1073,2131,1079,2131,1090,2129,1102,2129,1103,2128,1105,2118,1114,2112,1119,2112,1130,2112,1134,2119,1165,2119,1175,2117,1178,2114,1183,2100,1192,2090,1210,2077,1213,2058,1216,2052,1227,2050,1233,2045,1243,2038,1250,2031,1250,1997,1238,1992,1237,1987,1230,1984,1213,1981,1196,1979,1191,1973,1172,1970,1167,1966,1157,1949,1155,1934,1152,1930,1149,1922,1143,1922,1129,1922,1089,1899,1089,1882,1092,1873,1092,1858,1092,1860,1077,1860,1063,1840,1065,1837,1042,1824,1042,1820,1042,1810,1060,1799,1077,1773,1077,1763,1077,1760,1073,1758,1059,1753,1058,1747,1057,1713,1057,1710,1025,1675,1025,1663,1025,1661,1040,1658,1053,1637,1053,1626,1049,1613,1049,1608,1049,1603,1051,1599,1053,1595,1053,1575,1053,1570,1056,1554,1061,1532,1082,1529,1084,1517,1098,1508,1108,1501,1111,1490,1111,1482,1113,1464,1115,1464,1125,1464,1132,1469,1138,1475,1143,1475,1147,1463,1186,1448,1186,1435,1182,1422,1182,1405,1182,1400,1207,1398,1217,1398,1247,1398,1271,1414,1287,1422,1295,1429,1301,1429,1309,1421,1314,1411,1320,1401,1318,1383,1317,1375,1320,1367,1322,1358,1330,1347,1339,1336,1343,1335,1343,1318,1346,1315,1357,1306,1365,1301,1369,1296,1369,1290,1370,1290,1374,1282,1385,1273,1388,1267,1389,1255,1389,1229,1389,1185,1381,L,1168,1381,Q,1168,1403,1150,1403,L,1132,1399,Q,1124,1399,1116,1404,1107,1407,1105,1407,L,1086,1405,1084,1382,Q,1083,1379,1067,1379,1023,1379,1025,1405,1027,1431,1010,1431,1006,1431,998,1428,990,1423,986,1423,973,1428,958,1428,938,1428,936,1429,927,1432,927,1446,927,1454,928,1470,913,1487,881,1491,846,1494,833,1496,835,1502,828,1509,823,1517,819,1517,813,1517,805,1513,796,1507,785,1507,L,737,1509,Q,729,1512,729,1523,729,1528,737,1530,746,1531,746,1543,746,1554,737,1563,729,1570,729,1589,L,731,1623,Q,731,1634,706,1660,682,1685,676,1685,652,1675,644,1675,L,620,1675,Q,604,1675,601,1655,598,1633,594,1633,577,1633,564,1648,549,1663,539,1663,523,1663,520,1652,520,1638,520,1633,515,1612,516,1608,517,1598,508,1596,501,1595,502,1590,L,497,1590,495,1591,495,1654,Q,501,1658,509,1664,517,1669,517,1677,517,1683,510,1693,503,1704,501,1713,499,1723,493,1735,490,1743,490,1753,490,1765,491,1767,494,1774,508,1778,L,508,1786,Q,500,1783,494,1787,489,1794,485,1794,L,468,1791,Q,453,1791,439,1806,426,1820,412,1820,L,385,1818,Q,366,1818,363,1839,360,1850,359,1886,355,1915,349,1926,345,1933,329,1941,315,1948,315,1956,315,1968,351,1967,388,1965,388,1999,388,2003,387,2007,385,2017,382,2020,370,2021,368,2022,365,2024,365,2035,L,367,2060,Q,367,2077,355,2077,331,2076,327,2077,L,326,2080,Q,326,2087,337,2100,347,2113,347,2116,347,2138,353,2161,353,2172,346,2174,337,2177,331,2179,322,2183,322,2194,322,2203,313,2203,301,2203,297,2190,293,2176,280,2176,270,2176,266,2179,262,2183,248,2185,225,2187,214,2196,214,2201,216,2244,219,2268,211,2279,206,2287,197,2290,194,2291,177,2295,171,2296,164,2306,158,2316,152,2322,L,162,2325,Q,157,2340,168,2344,171,2345,190,2345,208,2345,214,2344,L,214,2334,228,2334,228,2341,Q,233,2341,261,2339,289,2338,297,2343,303,2347,313,2369,319,2386,335,2386,355,2386,391,2382,L,398,2382,Q,397,2416,399,2421,402,2432,422,2432,465,2432,477,2431,481,2431,481,2430,497,2431,501,2437,508,2448,523,2454,L,549,2454,Q,551,2454,556,2460,562,2466,567,2466,568,2466,574,2462,581,2457,590,2457,604,2457,618,2488,619,2492,638,2499,642,2504,646,2512,647,2516,653,2516,662,2516,666,2509,669,2503,676,2503,679,2503,688,2512,696,2521,705,2521,717,2521,722,2519,724,2519,735,2527,L,749,2539,Q,755,2546,764,2543,L,766,2542,Q,784,2542,787,2538,793,2529,813,2521,825,2513,833,2507,847,2497,861,2495,L,875,2495,Q,875,2499,877,2537,878,2564,876,2585,875,2598,905,2616,937,2634,939,2647,935,2710,952,2715,953,2715,971,2740,989,2763,995,2763,999,2763,1005,2760,1010,2757,1011,2754,L,1049,2754,Q,1051,2760,1064,2775,1079,2790,1083,2798,1089,2808,1091,2825,1096,2838,1112,2838,1171,2838,1174,2839,1183,2844,1222,2894,1226,2899,1249,2904,1266,2908,1263,2925,L,1279,2930,Q,1289,2934,1292,2938,1304,2951,1327,2951,1340,2951,1345,2920,L,1364,2920,1368,2921,1368,2960,Q,1368,2976,1373,2982,1377,2988,1377,2993,1377,2994,1373,3007,1368,3019,1368,3028,1368,3046,1377,3050,1383,3052,1390,3062,1396,3072,1400,3073,1409,3075,1419,3076,1426,3078,1427,3089,L,1429,3121,Q,1432,3133,1432,3161,1432,3168,1445,3174,1460,3182,1460,3189,1460,3191,1450,3212,1450,3213,1461,3222,1470,3231,1471,3237,1471,3250,1477,3260,1484,3272,1494,3272,1504,3272,1506,3261,1508,3250,1516,3250,1526,3250,1530,3259,1535,3270,1549,3274,1569,3280,1578,3300,1579,3302,1583,3308,1587,3316,1586,3322,1582,3333,1591,3342,1602,3353,1604,3362,1605,3365,1605,3385,1605,3410,1598,3419,1589,3427,1589,3444,1589,3453,1600,3468,1613,3487,1618,3497,1622,3504,1632,3514,1645,3527,1650,3534,1651,3536,1654,3547,1656,3555,1660,3558,L,1668,3567,Q,1674,3573,1676,3578,L,1826,3578,Q,1826,3597,1825,3638,1824,3676,1826,3702,1827,3734,1827,3735,1829,3745,1839,3756,1848,3764,1849,3775,1850,3780,1850,3807,1850,3845,1847,3850,1835,3865,1832,3873,1830,3878,1830,3891,1830,3913,1841,3916,1851,3920,1851,3935,1851,3940,1839,3951,1827,3962,1825,3969,L,1825,3990,1891,3990,Q,1889,3997,1896,4e3,1901,4003,1908,4006,1914,4010,1914,4030,1914,4053,1908,4060,1883,4091,1881,4095,1866,4117,1866,4167,1866,4214,1869,4223,L,1933,4222,Q,1945,4237,1950,4247,1953,4248,1974,4248,1974,4246,1975,4247,1976,4248,1978,4248,L,1999,4248,2056,4239,2062,4239,Q,2064,4244,2061,4264,2061,4282,2073,4282,2080,4282,2083,4279,2092,4273,2099,4269,2103,4267,2113,4266,2120,4265,2125,4262,2136,4250,2144,4242,2157,4230,2172,4224,2176,4222,2183,4212,2189,4202,2192,4200,2196,4196,2203,4193,2216,4189,2217,4188,2224,4183,2228,4176,2232,4169,2234,4166,2237,4159,2263,4159,2288,4159,2290,4163,2292,4166,2293,4173,2295,4181,2305,4183,2300,4156,2300,4139,2300,4106,2300,4104,2301,4100,2309,4069,2312,4056,2324,4042,2335,4029,2337,4022,2341,4007,2341,3967,2341,3944,2346,3938,2352,3929,2352,3914,2352,3896,2340,3890,2320,3882,2317,3879,L,2317,3864,Q,2321,3856,2336,3846,2347,3838,2351,3821,2354,3806,2361,3786,2370,3766,2377,3761,2387,3754,2394,3736,2400,3719,2410,3715,2423,3709,2436,3696,2454,3679,2459,3676,2461,3664,2495,3620,2529,3577,2529,3561,2529,3547,2500,3542,2470,3541,2469,3541,2471,3528,2458,3511,2443,3493,2443,3487,2443,3485,2514,3438,2565,3474,2572,3474,2579,3474,2618,3419,2656,3363,2670,3332,2673,3326,2682,3322,2692,3316,2693,3314,2696,3304,2696,3280,2712,3262,2717,3244,2720,3232,2720,3209,L,2720,3196,Q,2719,3189,2711,3189,2702,3189,2686,3222,2674,3248,2670,3261,L,2648,3261,Q,2640,3256,2637,3254,2629,3249,2612,3253,L,2609,3235,Q,2609,3221,2631,3198,2654,3174,2674,3172,2670,3157,2670,3150,2672,3138,2694,3121,2706,3113,2706,3112,2715,3102,2715,3086,2715,3064,2721,3026,2727,2987,2727,2975,2723,2947,2721,2933,2720,2928,2720,2925,2721,2915,2721,2902,2717,2861,2717,2824,2717,2795,2723,2779,2729,2762,2729,2741,L,2727,2692,Q,2730,2661,2730,2646,2730,2631,2720,2600,2711,2570,2711,2525,2711,2519,2697,2503,2685,2487,2683,2485,2681,2482,2681,2439,2677,2400,2666,2386,2662,2379,2660,2365,2657,2348,2657,2344,L,2657,2306,Q,2660,2244,2669,2216,2678,2192,2678,2154,L,2677,2e3,Q,2663,1990,2663,1983,L,2663,1957,Q,2663,1937,2666,1916,2669,1895,2669,1868,2659,1745,2659,1741,2659,1733,2662,1729,2665,1725,2666,1715,2647,1661,2647,1656,L,2647,1629,Q,2647,1625,2637,1617,2628,1610,2632,1601,L,2619,1600,Q,2610,1600,2608,1603,2605,1605,2605,1617,2605,1626,2605,1627,2607,1630,2612,1638,L,2612,1652,2589,1652,2576,1634,2560,1619,Q,2529,1614,2521,1610,2506,1601,2506,1578,2506,1549,2493,1534,2485,1525,2487,1490,2489,1462,2465,1455,2445,1448,2445,1424,2445,1422,2440,1414,2435,1406,2432,1404,2423,1397,2423,1387,2423,1373,2429,1364,2438,1353,2439,1341,L,2443,1297,Q,2443,1278,2434,1268,2423,1257,2423,1249,2423,1243,2433,1217,2443,1189,2451,1180,2459,1168,2459,1157,2458,1144,2458,1136,2463,1115,2464,1101,2464,1098,2476,1062,2476,1026,2477,1021,2479,1007,2489,981,2495,962,2493,947,2491,935,2496,926,2500,922,2507,911,L,2525,873,Q,2526,871,2542,844,2556,821,2556,806,2556,795,2553,789,2550,781,2550,775,L,2552,755,Q,2552,735,2542,713,2531,690,2531,666,L,2533,609,Q,2533,570,2521,555,2509,540,2509,528,L,2509,494,Q,2505,469,2505,457,2514,424,2514,411,2514,397,2506,388,2495,372,2493,367,2489,359,2490,340,2491,313,2491,311,2458,244,2458,226,2458,215,2463,209,2467,205,2467,195,2462,170,2462,161,2462,152,2467,150,2474,145,2478,138,L,2478,126,Q,2454,127,2443,122,2433,116,2428,106,2424,94,2418,90,2395,75,2388,69,2384,64,2383,47,2382,34,2372,34,2366,34,2361,45,2358,55,2360,61,L,2321,61,Q,2304,51,2289,51,2226,51,2209,59,Q,2203,60,2197,69,Z]],label:"Haute-Corse",shortLabel:"HC",labelPosition:[165.1,215.8],labelAlignment:[CEN,MID],nextId:"FR.CO.CS"},"FR.CO.CS":{outlines:[[M,1279,2930,L,1263,2925,Q,1266,2908,1249,2904,1226,2899,1222,2894,1183,2844,1174,2839,1171,2838,1112,2838,1096,2838,1091,2825,1089,2808,1083,2798,1079,2790,1064,2775,1051,2760,1049,2754,L,1011,2754,Q,1010,2757,1005,2760,999,2763,995,2763,989,2763,971,2740,953,2715,952,2715,935,2710,939,2647,937,2634,905,2616,875,2598,876,2585,878,2564,877,2537,875,2499,875,2495,L,861,2495,Q,847,2497,833,2507,825,2513,813,2521,793,2529,787,2538,784,2542,766,2542,L,764,2543,Q,755,2546,749,2539,L,735,2527,Q,724,2519,722,2519,717,2521,705,2521,696,2521,688,2512,679,2503,676,2503,669,2503,666,2509,662,2516,653,2516,647,2516,646,2512,642,2504,638,2499,619,2492,618,2488,604,2457,590,2457,581,2457,574,2462,568,2466,567,2466,562,2466,556,2460,551,2454,549,2454,L,523,2454,Q,508,2448,501,2437,497,2431,481,2430,481,2431,477,2431,465,2432,422,2432,402,2432,399,2421,397,2416,398,2382,L,391,2382,Q,355,2386,335,2386,319,2386,313,2369,303,2347,297,2343,289,2338,261,2339,233,2341,228,2341,L,228,2334,214,2334,214,2344,Q,208,2345,190,2345,171,2345,168,2344,157,2340,162,2325,L,152,2322,Q,148,2324,145,2325,122,2327,106,2331,97,2361,80,2361,75,2361,65,2346,56,2331,50,2331,L,38,2333,38,2341,Q,39,2350,53,2361,69,2372,69,2380,69,2387,65,2399,61,2411,61,2419,61,2423,66,2431,74,2439,75,2443,82,2463,100,2463,106,2463,133,2432,161,2400,174,2400,183,2400,187,2405,194,2414,199,2417,204,2419,212,2419,219,2420,221,2430,223,2441,246,2449,266,2456,266,2474,266,2485,249,2492,229,2502,226,2507,217,2522,202,2532,188,2540,188,2552,188,2575,204,2575,207,2575,226,2564,232,2563,246,2563,262,2563,264,2566,272,2578,278,2583,284,2590,299,2590,319,2590,323,2591,329,2592,339,2603,350,2617,355,2619,366,2623,370,2637,374,2651,385,2656,392,2659,414,2661,430,2663,430,2673,430,2678,424,2697,419,2714,419,2720,419,2737,407,2742,400,2744,382,2744,L,343,2742,Q,322,2742,306,2756,291,2769,274,2769,L,246,2767,Q,235,2767,228,2775,219,2784,206,2787,203,2788,181,2787,166,2787,161,2794,151,2810,144,2811,130,2811,126,2815,101,2835,86,2835,78,2835,71,2833,63,2829,59,2829,43,2829,43,2838,43,2855,81,2854,120,2853,120,2864,120,2868,117,2871,113,2875,113,2880,113,2890,117,2898,121,2904,121,2909,121,2912,119,2913,116,2915,114,2919,L,114,2940,Q,133,2940,136,2941,141,2942,141,2955,141,2966,132,2970,122,2973,122,2982,122,2994,135,3011,145,3029,145,3036,L,144,3053,127,3053,Q,119,3048,102,3048,97,3048,90,3051,82,3054,82,3060,82,3063,93,3068,103,3071,108,3071,116,3071,139,3065,L,162,3065,163,3076,Q,163,3082,142,3098,120,3114,120,3123,L,121,3130,Q,154,3137,156,3137,168,3142,168,3162,168,3178,157,3183,146,3189,146,3197,146,3203,148,3206,154,3212,158,3220,L,165,3220,Q,164,3206,169,3203,171,3202,187,3202,196,3202,213,3205,220,3205,223,3211,225,3215,230,3224,235,3233,240,3235,L,252,3241,Q,261,3248,272,3248,277,3248,300,3248,320,3249,326,3260,337,3280,340,3296,343,3300,364,3300,381,3300,388,3297,394,3292,395,3287,395,3283,399,3279,414,3271,417,3268,425,3259,435,3259,450,3259,450,3284,449,3286,449,3290,449,3302,458,3306,466,3310,467,3330,L,467,3356,Q,467,3359,475,3366,484,3373,485,3375,487,3383,498,3395,506,3406,508,3414,510,3426,507,3442,506,3452,524,3452,536,3452,536,3439,L,543,3439,Q,549,3445,562,3457,569,3462,570,3467,571,3473,575,3487,579,3498,579,3505,579,3514,570,3527,560,3541,552,3542,548,3533,544,3530,540,3524,533,3524,530,3524,523,3541,514,3560,505,3566,504,3567,492,3570,484,3573,481,3578,473,3593,458,3593,449,3593,437,3590,425,3585,417,3585,409,3585,406,3592,405,3596,400,3610,L,397,3610,Q,394,3606,392,3602,387,3597,380,3597,376,3597,369,3610,360,3624,355,3626,338,3631,338,3661,338,3695,362,3699,385,3703,385,3717,385,3732,373,3741,371,3742,367,3753,362,3764,358,3768,357,3769,331,3786,323,3792,319,3801,317,3806,309,3806,289,3806,265,3788,L,240,3771,Q,235,3771,225,3784,214,3800,204,3803,195,3806,179,3803,173,3802,173,3815,173,3827,174,3828,175,3834,187,3843,198,3850,200,3853,204,3858,203,3871,207,3887,233,3891,252,3893,252,3911,L,252,3912,Q,260,3952,236,3964,210,3978,210,4011,210,4012,214,4020,217,4027,216,4030,L,235,4030,Q,253,4025,255,4016,255,4012,263,4007,271,4002,277,4002,304,4002,330,3995,349,3995,362,4007,372,4019,383,4019,391,4019,398,4011,405,4003,423,4003,L,478,4002,Q,486,4002,500,4004,509,4004,514,3987,516,3978,532,3976,541,3974,556,3973,L,556,3943,Q,553,3940,553,3930,553,3918,574,3918,593,3918,602,3936,611,3952,616,3952,622,3952,629,3944,636,3936,653,3936,670,3936,677,3951,688,3972,698,3980,712,3990,726,3996,733,4e3,733,4019,733,4027,731,4039,L,733,4056,Q,733,4066,732,4069,731,4071,722,4077,720,4079,711,4082,703,4087,702,4094,699,4104,687,4114,678,4123,678,4138,678,4150,690,4154,702,4157,702,4169,702,4188,687,4193,685,4202,682,4223,677,4227,649,4227,626,4229,626,4244,626,4259,628,4261,629,4263,644,4269,650,4273,659,4283,667,4293,669,4294,L,669,4303,Q,646,4301,651,4333,653,4355,647,4359,644,4361,628,4361,L,601,4358,Q,587,4366,579,4367,571,4365,566,4365,556,4365,556,4374,L,560,4390,Q,560,4395,556,4406,L,549,4406,Q,504,4400,498,4394,L,480,4394,480,4396,Q,494,4400,494,4424,507,4420,524,4438,540,4456,540,4469,540,4470,536,4487,535,4490,522,4499,510,4508,500,4527,492,4534,471,4547,453,4558,447,4566,444,4575,434,4583,422,4592,409,4592,404,4592,391,4586,379,4582,368,4581,367,4581,366,4581,360,4580,354,4581,340,4581,340,4594,L,341,4605,383,4605,Q,392,4605,399,4608,407,4611,417,4611,426,4611,437,4607,449,4601,453,4601,473,4601,471,4636,469,4671,497,4671,506,4671,514,4663,520,4655,534,4655,543,4655,552,4650,562,4642,569,4637,570,4636,585,4630,596,4626,600,4618,608,4604,618,4600,621,4599,636,4599,647,4599,649,4600,654,4601,665,4611,688,4626,688,4631,688,4637,687,4638,686,4641,676,4648,L,676,4671,Q,671,4674,658,4680,646,4688,646,4702,646,4712,653,4714,667,4716,668,4720,671,4732,691,4740,703,4740,708,4726,712,4711,725,4711,751,4711,789,4715,793,4715,799,4726,806,4738,807,4746,808,4762,833,4762,835,4762,847,4760,861,4759,870,4761,885,4766,891,4773,895,4779,904,4779,L,929,4774,Q,937,4774,946,4786,956,4798,967,4798,L,983,4795,Q,993,4788,998,4785,1008,4779,1008,4783,L,1009,4783,Q,1020,4784,1027,4793,1035,4802,1035,4814,1035,4831,1020,4832,999,4834,996,4837,L,948,4872,948,4894,Q,947,4895,940,4903,934,4909,934,4913,930,4933,924,4939,919,4945,902,4945,881,4941,871,4941,854,4941,845,4953,829,4969,814,4975,805,4980,788,4995,778,5007,759,5007,747,5007,740,4994,733,4981,727,4981,714,4981,714,5e3,714,5010,716,5022,694,5035,693,5055,689,5102,689,5103,687,5110,674,5123,664,5132,664,5145,664,5158,684,5166,689,5168,693,5172,699,5181,700,5183,702,5186,712,5195,718,5201,718,5207,718,5223,699,5236,678,5248,678,5263,678,5277,686,5277,690,5277,710,5274,726,5273,753,5282,750,5284,750,5292,750,5313,772,5313,783,5313,807,5303,L,829,5305,Q,837,5305,846,5314,852,5321,864,5327,870,5329,870,5343,870,5353,853,5363,837,5376,837,5386,837,5403,847,5405,853,5408,876,5409,L,895,5409,Q,896,5402,902,5394,907,5385,913,5385,917,5385,928,5401,939,5418,939,5425,938,5441,940,5445,944,5452,960,5452,971,5452,979,5450,985,5447,989,5447,997,5447,1010,5449,1027,5452,1031,5456,1033,5459,1033,5484,1033,5506,1039,5506,L,1065,5495,Q,1076,5495,1083,5508,1092,5519,1107,5519,1113,5519,1118,5511,1123,5502,1130,5502,1137,5502,1140,5506,L,1145,5515,Q,1155,5525,1165,5531,1168,5533,1179,5546,1189,5557,1198,5557,1205,5557,1216,5540,1229,5522,1236,5522,L,1242,5523,Q,1243,5532,1242,5543,1243,5553,1251,5565,1260,5565,1277,5559,1289,5559,1292,5580,1296,5599,1322,5599,1330,5599,1339,5593,1347,5585,1349,5585,1356,5585,1358,5598,1361,5614,1367,5618,L,1381,5618,Q,1380,5610,1390,5599,1400,5589,1402,5585,1409,5569,1413,5562,1420,5552,1432,5552,1437,5552,1449,5557,1461,5562,1461,5565,1461,5572,1452,5584,1448,5592,1447,5598,1445,5602,1447,5606,1442,5622,1436,5625,1429,5627,1429,5645,1429,5646,1432,5659,1433,5660,1437,5661,1442,5662,1443,5666,1443,5672,1447,5679,1451,5692,1460,5692,1467,5692,1474,5680,1482,5668,1503,5668,1509,5668,1515,5679,1520,5690,1525,5690,L,1551,5686,Q,1554,5686,1567,5686,1579,5687,1579,5694,1579,5696,1574,5700,1568,5705,1566,5708,1558,5718,1553,5720,1538,5722,1537,5723,1532,5728,1532,5742,1532,5753,1534,5755,1541,5759,1545,5768,1525,5771,1513,5792,L,1499,5810,Q,1492,5816,1492,5828,1492,5833,1505,5847,1517,5860,1521,5860,1525,5860,1533,5854,1542,5849,1551,5848,1559,5847,1567,5841,1574,5837,1579,5837,1583,5837,1605,5861,1627,5883,1629,5883,1635,5883,1638,5872,1643,5860,1649,5856,1652,5868,1677,5878,1705,5888,1709,5892,1714,5900,1716,5909,1717,5916,1719,5927,1725,5958,1741,5958,1751,5958,1761,5954,1772,5949,1781,5949,1794,5948,1829,5948,1840,5946,1843,5935,1843,5923,1843,5916,1843,5909,1848,5906,1854,5903,1854,5902,1857,5893,1863,5888,1873,5857,1879,5852,1890,5847,1895,5840,L,1905,5826,Q,1945,5764,1945,5760,1945,5750,1944,5748,1942,5745,1933,5745,1923,5745,1920,5752,1918,5754,1905,5755,1900,5756,1894,5769,L,1886,5785,Q,1881,5789,1873,5795,1866,5798,1864,5805,1860,5816,1857,5819,1854,5822,1845,5822,1815,5822,1815,5806,1815,5796,1827,5792,1839,5790,1839,5785,1836,5777,1836,5770,1836,5765,1840,5757,1845,5749,1845,5744,1845,5735,1843,5729,1839,5720,1838,5710,1835,5703,1822,5698,1811,5692,1811,5689,1811,5680,1822,5680,L,1845,5681,Q,1845,5666,1861,5666,1866,5666,1879,5670,1892,5670,1897,5664,L,1901,5654,Q,1902,5650,1913,5650,1921,5649,1923,5636,1928,5628,1930,5625,1932,5620,1932,5617,1944,5609,1950,5599,L,1969,5576,Q,1994,5552,2009,5537,L,2009,5490,Q,1988,5487,1955,5487,L,1955,5477,Q,1959,5470,1980,5446,1995,5427,1995,5414,1995,5398,1976,5396,1954,5393,1948,5386,L,1948,5374,Q,1952,5374,1965,5363,1978,5353,1988,5353,1994,5353,2006,5358,2018,5358,2025,5343,2035,5320,2041,5314,2055,5299,2089,5282,2101,5269,2109,5261,2126,5245,2140,5247,2167,5249,2179,5234,L,2176,5215,Q,2176,5203,2191,5189,2203,5172,2203,5152,2203,5140,2201,5136,2199,5134,2191,5134,2170,5144,2158,5144,2149,5144,2133,5129,2115,5113,2103,5108,2100,5119,2079,5131,2058,5143,2057,5149,2050,5174,2046,5178,2041,5185,2026,5185,2020,5185,2009,5146,1998,5108,1998,5093,1998,5075,2014,5075,2020,5075,2037,5079,2045,5079,2053,5047,2061,5013,2073,5013,2083,5013,2088,5023,2092,5033,2112,5034,2120,5034,2136,5033,2150,5033,2160,5041,L,2186,5041,Q,2189,5039,2189,5034,2189,5027,2180,5018,2170,5009,2170,4997,2170,4985,2183,4967,2196,4948,2206,4948,2221,4948,2227,4966,L,2240,4966,Q,2240,4952,2252,4944,2268,4933,2270,4930,2275,4922,2273,4902,2269,4881,2276,4871,L,2276,4858,Q,2259,4853,2250,4851,2237,4846,2237,4839,2237,4826,2257,4799,2275,4773,2281,4773,2287,4773,2301,4779,2316,4779,2312,4757,2305,4722,2305,4709,2305,4692,2315,4672,2325,4652,2325,4628,2318,4598,2318,4575,2318,4561,2325,4549,2330,4535,2330,4530,2330,4517,2312,4502,2294,4488,2294,4484,2294,4470,2301,4470,2306,4471,2310,4469,2310,4466,2310,4465,2304,4414,2304,4408,2304,4393,2315,4349,2325,4303,2325,4288,2325,4265,2312,4217,2308,4198,2305,4183,2295,4181,2293,4173,2292,4166,2290,4163,2288,4159,2263,4159,2237,4159,2234,4166,2232,4169,2228,4176,2224,4183,2217,4188,2216,4189,2203,4193,2196,4196,2192,4200,2189,4202,2183,4212,2176,4222,2172,4224,2157,4230,2144,4242,2136,4250,2125,4262,2120,4265,2113,4266,2103,4267,2099,4269,2092,4273,2083,4279,2080,4282,2073,4282,2061,4282,2061,4264,2064,4244,2062,4239,L,2056,4239,1999,4248,1974,4248,Q,1953,4248,1950,4247,1945,4237,1933,4222,L,1869,4223,Q,1866,4214,1866,4167,1866,4117,1881,4095,1883,4091,1908,4060,1914,4053,1914,4030,1914,4010,1908,4006,1901,4003,1896,4e3,1889,3997,1891,3990,L,1825,3990,1825,3969,Q,1827,3962,1839,3951,1851,3940,1851,3935,1851,3920,1841,3916,1830,3913,1830,3891,1830,3878,1832,3873,1835,3865,1847,3850,1850,3845,1850,3807,1850,3780,1849,3775,1848,3764,1839,3756,1829,3745,1827,3735,1827,3734,1826,3702,1824,3676,1825,3638,1826,3597,1826,3578,L,1676,3578,Q,1674,3573,1668,3567,L,1660,3558,Q,1656,3555,1654,3547,1651,3536,1650,3534,1645,3527,1632,3514,1622,3504,1618,3497,1613,3487,1600,3468,1589,3453,1589,3444,1589,3427,1598,3419,1605,3410,1605,3385,1605,3365,1604,3362,1602,3353,1591,3342,1582,3333,1586,3322,1587,3316,1583,3308,1579,3302,1578,3300,1569,3280,1549,3274,1535,3270,1530,3259,1526,3250,1516,3250,1508,3250,1506,3261,1504,3272,1494,3272,1484,3272,1477,3260,1471,3250,1471,3237,1470,3231,1461,3222,1450,3213,1450,3212,1460,3191,1460,3189,1460,3182,1445,3174,1432,3168,1432,3161,1432,3133,1429,3121,L,1427,3089,Q,1426,3078,1419,3076,1409,3075,1400,3073,1396,3072,1390,3062,1383,3052,1377,3050,1368,3046,1368,3028,1368,3019,1373,3007,1377,2994,1377,2993,1377,2988,1373,2982,1368,2976,1368,2960,L,1368,2921,1364,2920,1345,2920,Q,1340,2951,1327,2951,1304,2951,1292,2938,Q,1289,2934,1279,2930,Z]],label:"Corse-du-Sud",shortLabel:"CS",labelPosition:[127.1,405.3],labelAlignment:[CEN,MID]}}}];exports["default"]={extension:geodefinitions,name:"corsica",type:"maps"}}})});