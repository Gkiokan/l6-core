(function(factory){if(typeof module==="object"&&typeof module.exports!=="undefined"){module.exports=factory}else{factory(FusionCharts)}})(function(FusionCharts){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{configurable:false,enumerable:true,get:getter})}};__webpack_require__.r=function(exports){Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=146)})({146:function(module,exports,__webpack_require__){"use strict";var _fusioncharts=__webpack_require__(147);var _fusioncharts2=_interopRequireDefault(_fusioncharts);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}FusionCharts.addDep(_fusioncharts2["default"])},147:function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;
/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts Technologies LLP
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts Technologies LLP
 * @meta package_map_pack
 * @id fusionmaps.Ardabil.1.11-06-2017 03:09:45
 */var M="M",L="L",Z="Z",Q="Q",LFT="left",RGT="right",CEN="center",MID="middle",TOP="top",BTM="bottom",geodefinitions=[{name:"Ardabil",revision:1,creditLabel:false,standaloneInit:false,baseWidth:397,baseHeight:750,baseScaleFactor:10,firstEntity:"IR.AR.AR",entities:{"IR.AR.AR":{outlines:[[M,2588,3438,Q,2588,3427,2582,3419,2574,3408,2570,3396,L,2550,3347,Q,2544,3335,2544,3301,2541,3275,2542,3262,2540,3261,2540,3260,L,2526,3243,Q,2511,3235,2503,3227,2491,3216,2485,3202,2481,3193,2476,3187,2474,3183,2472,3181,L,2453,3181,Q,2441,3181,2433,3175,2422,3168,2402,3168,L,2384,3170,Q,2351,3168,2340,3170,2336,3171,2323,3176,2311,3181,2302,3182,2296,3183,2285,3188,2273,3194,2266,3195,2258,3196,2250,3200,2241,3207,2234,3208,2221,3208,2213,3213,2199,3222,2193,3224,2190,3224,2181,3224,2167,3224,2157,3228,2147,3233,2140,3233,2124,3233,2124,3232,L,2123,3232,Q,2115,3232,2110,3235,2104,3239,2097,3244,2091,3248,2091,3251,2092,3253,2091,3280,2091,3307,2091,3315,2091,3322,2097,3328,2102,3334,2108,3341,2114,3348,2138,3371,2162,3392,2163,3399,2163,3405,2153,3421,2146,3432,2142,3438,2140,3440,2138,3441,2128,3451,2099,3472,2092,3477,2076,3482,2059,3488,2047,3494,L,2019,3503,Q,2006,3510,2002,3513,1999,3515,1993,3522,1958,3551,1954,3554,1942,3567,1923,3586,1906,3602,1890,3621,1877,3635,1849,3660,L,1827,3680,Q,1822,3683,1799,3696,L,1798,3696,1782,3717,Q,1780,3718,1773,3732,1765,3746,1765,3750,1765,3753,1772,3764,1779,3774,1779,3785,1779,3806,1780,3809,1781,3813,1784,3819,1786,3822,1786,3826,1786,3842,1739,3889,1711,3914,1674,3946,L,1637,3974,Q,1633,3978,1633,3985,1633,3993,1632,3996,1629,4002,1624,4006,1621,4010,1621,4019,1621,4027,1626,4033,1631,4039,1633,4048,1638,4066,1639,4068,1642,4077,1650,4084,L,1650,4102,1647,4102,Q,1646,4106,1643,4109,L,1637,4114,1637,4130,Q,1646,4128,1660,4138,1679,4153,1683,4154,1686,4155,1707,4165,1730,4175,1750,4175,1755,4175,1765,4171,1776,4167,1782,4167,1816,4167,1821,4165,1827,4160,1836,4158,1840,4157,1848,4155,L,1871,4146,1900,4146,Q,1908,4146,1927,4146,1943,4146,1954,4147,1966,4148,1977,4153,1983,4157,2001,4167,L,2049,4196,Q,2075,4199,2078,4202,2084,4209,2089,4210,2093,4211,2105,4211,2112,4211,2117,4209,2121,4208,2130,4201,L,2258,4201,2264,4200,Q,2273,4200,2277,4207,2279,4209,2283,4211,2286,4214,2287,4216,2292,4224,2292,4245,2292,4256,2291,4259,L,2280,4276,Q,2277,4279,2274,4291,2272,4293,2269,4298,2265,4304,2265,4307,2269,4316,2263,4325,2256,4337,2255,4341,2253,4351,2254,4378,2252,4391,2243,4412,2240,4423,2240,4435,2240,4452,2239,4456,2238,4461,2233,4476,2228,4490,2227,4497,2226,4507,2220,4515,2215,4521,2215,4530,2215,4532,2216,4536,2219,4545,2231,4556,2254,4579,2256,4582,2268,4598,2281,4608,2302,4623,2318,4637,2318,4637,2318,4638,2367,4683,2390,4683,L,2416,4681,Q,2422,4681,2430,4675,2430,4674,2440,4664,2450,4646,2459,4636,2478,4615,2483,4608,2499,4580,2528,4557,2538,4549,2551,4540,2570,4526,2578,4526,L,2627,4527,Q,2634,4526,2646,4534,2656,4540,2665,4548,2698,4581,2702,4591,2703,4595,2703,4636,L,2703,4675,Q,2701,4681,2696,4691,2691,4699,2689,4706,2688,4709,2683,4712,2679,4716,2679,4719,2677,4725,2673,4737,2666,4748,2648,4767,L,2648,4799,Q,2648,4806,2656,4814,2661,4818,2671,4826,2685,4838,2702,4848,2714,4857,2714,4871,L,2711,4896,Q,2710,4899,2704,4906,2699,4912,2698,4918,2698,4923,2694,4929,2689,4937,2688,4940,2685,4948,2685,4967,2685,4975,2688,4990,2691,5009,2695,5011,2697,5012,2700,5014,2717,5024,2729,5029,2744,5027,2756,5034,2770,5043,2782,5043,2795,5043,2797,5043,2803,5044,2811,5049,2816,5052,2828,5054,2839,5055,2841,5056,2842,5056,2867,5066,2882,5071,2890,5076,2914,5092,2920,5094,2925,5096,2944,5096,2961,5096,2963,5095,2971,5090,2986,5081,2991,5077,3004,5064,L,3029,5049,Q,3046,5039,3074,5012,3077,5009,3114,5009,3118,5009,3122,5008,3128,5008,3139,5008,3166,5008,3176,5012,3185,5015,3213,5028,3223,5031,3246,5042,3272,5054,3283,5058,3295,5041,3296,5040,3316,5020,3324,5008,3334,4990,3352,4965,3368,4944,3377,4928,3388,4903,3392,4892,3399,4874,3402,4853,3402,4844,3411,4814,3416,4793,3414,4772,L,3414,4757,Q,3412,4726,3414,4710,3417,4691,3423,4680,3428,4671,3428,4659,3425,4611,3425,4596,3425,4571,3429,4563,3436,4548,3441,4522,3437,4459,3437,4447,3437,4439,3439,4433,3440,4430,3443,4427,3418,4415,3411,4410,3408,4409,3396,4407,3386,4404,3378,4399,L,3342,4388,Q,3328,4383,3313,4364,3310,4358,3309,4356,3306,4351,3302,4349,3298,4348,3294,4347,3288,4345,3282,4339,3265,4326,3256,4316,L,3232,4291,Q,3224,4277,3222,4277,3205,4277,3198,4277,3193,4277,3193,4276,3178,4277,3176,4281,3173,4285,3168,4285,3162,4285,3159,4279,3156,4273,3150,4272,3144,4271,3128,4272,3118,4272,3107,4264,3104,4262,3097,4261,3087,4260,3087,4260,3066,4252,3008,4218,2942,4178,2918,4163,2903,4155,2888,4134,2876,4118,2869,4103,2855,4072,2846,4030,2831,3995,2822,3976,2807,3943,2789,3927,2787,3926,2769,3908,2756,3894,2745,3889,2703,3871,2689,3863,2686,3862,2679,3862,L,2669,3862,2656,3857,Q,2653,3855,2643,3854,2633,3854,2628,3852,2594,3831,2582,3824,2555,3808,2538,3786,2527,3771,2515,3746,2509,3742,2507,3727,L,2505,3705,Q,2493,3684,2493,3681,L,2492,3660,Q,2492,3643,2495,3637,2501,3629,2504,3611,2502,3592,2505,3588,L,2518,3568,Q,2523,3556,2542,3530,2559,3508,2568,3498,2571,3490,2579,3483,2588,3477,2588,3472,Z]],label:"Ardabil County",shortLabel:"AR",labelPosition:[254.9,420.2],labelAlignment:[CEN,MID],nextId:"IR.AR.BI"},"IR.AR.BI":{outlines:[[M,2091,620,Q,2080,630,2069,635,2062,639,2055,651,2046,663,2039,668,2029,675,2029,688,2030,699,2022,703,2016,705,2010,720,2006,733,1997,733,1989,725,1984,721,1967,715,1964,713,1958,708,1939,705,1927,699,1916,695,1896,690,1883,683,1869,675,1860,670,1852,665,1836,661,1821,649,1817,648,1793,637,1786,634,1774,629,1762,627,1759,626,1752,622,1745,617,1740,617,1736,617,1730,611,1721,604,1720,603,1697,591,1669,588,1637,572,1624,572,L,1510,574,Q,1501,573,1492,577,L,1475,585,Q,1471,585,1456,587,1444,587,1437,592,1430,596,1419,599,1407,601,1403,603,1389,608,1367,621,1345,634,1336,639,1335,639,1334,640,1322,647,1296,680,1285,693,1280,709,1276,717,1262,736,1264,748,1257,765,1251,780,1251,791,1253,813,1245,826,1236,839,1236,856,1236,871,1239,908,1241,921,1234,938,1224,963,1223,968,1222,977,1222,1003,1221,1027,1212,1039,1208,1042,1208,1055,1208,1069,1207,1071,L,1196,1102,Q,1185,1125,1161,1164,1160,1165,1159,1166,1158,1190,1150,1202,1145,1210,1145,1221,1146,1228,1146,1248,L,1146,1277,Q,1146,1282,1137,1297,1135,1302,1135,1309,1134,1316,1133,1320,1131,1323,1125,1329,1119,1335,1119,1337,1118,1341,1113,1345,1110,1347,1103,1350,1098,1352,1094,1356,1088,1361,1084,1364,1081,1365,1066,1376,1054,1385,1045,1387,1030,1389,1015,1394,999,1399,993,1400,976,1399,969,1400,960,1401,943,1407,951,1409,950,1420,949,1421,949,1423,949,1428,949,1442,948,1453,949,1459,954,1480,965,1484,988,1492,999,1509,1007,1523,1021,1524,L,1021,1524,Q,1022,1526,1038,1524,1055,1523,1063,1520,1065,1519,1068,1515,1071,1511,1072,1510,1074,1508,1085,1502,1090,1499,1119,1492,1120,1491,1128,1483,1134,1476,1144,1478,L,1151,1478,1151,1527,Q,1147,1532,1147,1548,1147,1557,1160,1569,1173,1581,1181,1583,1195,1588,1202,1595,1206,1599,1220,1599,1231,1599,1235,1592,1239,1585,1251,1584,1253,1583,1264,1579,1272,1576,1282,1577,1287,1577,1301,1573,1302,1573,1307,1567,1311,1561,1314,1561,1325,1558,1338,1558,L,1357,1557,Q,1381,1557,1386,1560,1419,1581,1425,1584,1428,1586,1450,1604,1470,1621,1487,1626,L,1521,1639,Q,1524,1640,1535,1645,1545,1650,1552,1652,1593,1660,1618,1666,L,1732,1666,Q,1738,1667,1756,1670,1765,1670,1771,1664,1778,1658,1789,1654,1792,1653,1798,1654,1800,1654,1805,1654,1811,1654,1817,1651,1819,1650,1824,1646,1829,1643,1840,1640,1853,1637,1859,1633,1869,1626,1873,1625,1877,1623,1892,1623,1893,1623,1901,1623,1910,1623,1912,1624,1917,1627,1921,1633,1925,1639,1929,1641,1946,1648,1948,1654,1949,1656,1961,1656,1972,1656,1973,1656,1975,1656,1985,1652,1989,1651,1998,1644,2005,1640,2010,1639,2031,1636,2062,1624,L,2109,1600,Q,2133,1586,2154,1581,2147,1573,2140,1565,2118,1537,2111,1528,L,2093,1507,Q,2089,1504,2086,1497,2082,1489,2079,1486,2067,1472,2064,1466,2061,1459,2055,1437,2051,1418,2052,1393,2054,1364,2055,1351,L,2055,1317,Q,2066,1298,2100,1249,2115,1221,2124,1215,2138,1206,2155,1193,2159,1190,2169,1176,2179,1165,2184,1164,2193,1163,2223,1150,2229,1148,2242,1140,2252,1134,2259,1135,2265,1136,2278,1130,2291,1125,2296,1125,L,2329,1130,Q,2344,1130,2379,1113,2381,1112,2402,1107,2418,1104,2428,1096,2434,1090,2447,1084,2461,1076,2467,1070,2476,1062,2489,1056,2495,1053,2506,1049,2517,1045,2538,1028,2546,1022,2556,1021,2562,1021,2573,1022,2580,1022,2589,1014,2598,1009,2604,1009,2619,1009,2621,1009,2630,1007,2630,999,2630,989,2602,941,2569,888,2559,873,2544,848,2540,842,2528,826,2513,811,2492,791,2464,771,2445,751,2401,713,2358,676,2334,649,2327,641,2300,621,L,2265,591,Q,2260,585,2253,577,2236,589,2227,595,2211,606,2194,604,2188,603,2161,609,2138,614,2130,615,2128,615,2127,615,L,2121,615,Q,2112,615,2112,614,L,2111,614,Q,2101,614,2091,620,Z]],label:"Bilasavar County",shortLabel:"BI",labelPosition:[166.4,112.1],labelAlignment:[CEN,MID],nextId:"IR.AR.GE"},"IR.AR.GE":{outlines:[[M,1732,1666,L,1618,1666,Q,1593,1660,1552,1652,1545,1650,1535,1645,1524,1640,1521,1639,L,1487,1626,Q,1470,1621,1450,1604,1428,1586,1425,1584,1419,1581,1386,1560,1381,1557,1357,1557,L,1338,1558,Q,1325,1558,1314,1561,1311,1561,1307,1567,1302,1573,1301,1573,1287,1577,1282,1577,1272,1576,1264,1579,1253,1583,1251,1584,1239,1585,1235,1592,1231,1599,1220,1599,1206,1599,1202,1595,1195,1588,1181,1583,1173,1581,1160,1569,1147,1557,1147,1548,1147,1532,1151,1527,L,1151,1478,1144,1478,Q,1134,1476,1128,1483,1120,1491,1119,1492,1090,1499,1085,1502,1074,1508,1072,1510,1071,1511,1068,1515,1065,1519,1063,1520,1055,1523,1038,1524,1022,1526,1021,1524,L,1021,1524,Q,1007,1523,999,1509,988,1492,965,1484,954,1480,949,1459,948,1453,949,1442,949,1428,949,1423,949,1421,950,1420,951,1409,943,1407,939,1405,935,1405,928,1405,916,1400,901,1393,900,1393,887,1387,874,1389,868,1389,858,1382,846,1372,844,1372,828,1362,818,1357,799,1348,792,1349,781,1349,765,1339,762,1337,752,1337,L,737,1337,737,1343,Q,736,1357,744,1381,752,1405,751,1417,748,1489,757,1517,770,1559,767,1609,765,1631,770,1651,772,1659,775,1672,777,1681,777,1691,L,779,1761,Q,779,1775,787,1795,789,1803,790,1813,790,1820,790,1833,791,1899,796,1931,802,1962,802,1989,802,2013,802,2019,799,2035,790,2047,L,790,2101,Q,789,2103,779,2129,772,2147,773,2158,775,2176,773,2214,774,2238,766,2269,L,765,2298,Q,765,2310,768,2315,771,2323,773,2336,773,2346,771,2359,771,2370,780,2379,785,2384,792,2390,809,2390,820,2388,L,1105,2388,Q,1109,2387,1130,2378,L,1349,2378,1349,2392,Q,1347,2396,1341,2403,1337,2407,1330,2415,L,1318,2437,Q,1314,2443,1314,2450,1313,2453,1303,2460,1301,2462,1299,2481,1299,2486,1301,2500,1316,2501,1344,2500,1368,2501,1381,2507,1387,2510,1428,2512,1438,2514,1464,2513,1479,2513,1483,2512,1492,2511,1499,2505,1506,2501,1506,2493,1508,2479,1509,2475,1510,2470,1526,2472,1545,2472,1550,2470,1560,2466,1573,2458,1576,2456,1586,2456,L,1602,2458,Q,1616,2447,1632,2434,1658,2414,1677,2404,1678,2401,1686,2396,1695,2390,1696,2392,1697,2393,1701,2390,1705,2386,1713,2382,1723,2377,1731,2377,1746,2379,1755,2367,1758,2362,1769,2362,1774,2361,1780,2362,1798,2362,1803,2365,1809,2367,1813,2371,1813,2373,1815,2376,1816,2380,1820,2381,1834,2371,1839,2367,1842,2365,1880,2350,1885,2348,1896,2339,1910,2329,1914,2327,L,1928,2315,1928,2296,Q,1928,2288,1931,2280,1937,2270,1939,2263,1941,2259,1947,2259,1950,2259,1956,2260,L,1977,2257,Q,1979,2256,1994,2251,2010,2246,2014,2246,2025,2246,2041,2248,2054,2248,2055,2248,2055,2248,2067,2244,2069,2242,2078,2236,2078,2234,2080,2233,L,2104,2234,Q,2132,2234,2139,2232,2163,2222,2173,2221,2183,2219,2212,2219,2217,2219,2249,2209,2256,2208,2279,2207,2300,2207,2310,2203,2320,2199,2344,2197,2370,2196,2376,2194,2410,2183,2443,2162,2463,2151,2494,2128,2501,2124,2508,2113,2517,2099,2518,2097,2524,2088,2536,2066,2540,2059,2542,2048,2545,2037,2548,2032,L,2556,2010,2556,1987,Q,2555,1983,2551,1973,L,2546,1961,Q,2539,1944,2534,1929,2532,1922,2527,1915,2521,1903,2520,1903,2493,1854,2488,1841,2482,1826,2472,1811,2461,1792,2459,1788,2441,1757,2409,1751,2395,1748,2354,1730,2349,1728,2327,1721,2310,1716,2298,1708,2269,1691,2252,1677,2233,1668,2215,1642,2194,1613,2180,1603,2167,1594,2154,1581,2133,1586,2109,1600,L,2062,1624,Q,2031,1636,2010,1639,2005,1640,1998,1644,1989,1651,1985,1652,1975,1656,1973,1656,1972,1656,1961,1656,1949,1656,1948,1654,1946,1648,1929,1641,1925,1639,1921,1633,1917,1627,1912,1624,1910,1623,1901,1623,1893,1623,1892,1623,1877,1623,1873,1625,1869,1626,1859,1633,1853,1637,1840,1640,1829,1643,1824,1646,1819,1650,1817,1651,1811,1654,1805,1654,1800,1654,1798,1654,1792,1653,1789,1654,1778,1658,1771,1664,1765,1670,1756,1670,Q,1738,1667,1732,1666,Z]],label:"Germi County",shortLabel:"GE",labelPosition:[141.9,197.7],labelAlignment:[CEN,MID],nextId:"IR.AR.KH"},"IR.AR.KH":{outlines:[[M,3093,5302,Q,3089,5302,3073,5309,3061,5315,3057,5317,3056,5317,3056,5317,L,3056,5317,Q,3040,5322,3029,5332,3019,5342,3006,5361,2997,5374,2996,5377,2992,5383,2994,5392,2990,5403,2977,5420,2970,5428,2950,5438,2928,5448,2923,5452,2904,5466,2897,5474,2889,5483,2884,5487,2884,5487,2884,5500,L,2885,5530,Q,2885,5534,2892,5539,2901,5547,2904,5551,2909,5557,2924,5572,2936,5587,2940,5599,2963,5644,2965,5656,2967,5663,2967,5710,L,2967,5748,Q,2967,5761,2957,5786,2950,5799,2940,5807,2927,5816,2926,5818,2907,5839,2902,5849,2888,5860,2883,5862,2878,5862,2866,5870,2853,5878,2836,5880,2817,5883,2785,5885,2781,5887,2778,5885,2776,5884,2729,5883,2679,5882,2675,5883,2668,5883,2662,5886,2651,5891,2649,5895,2645,5901,2637,5908,2633,5911,2633,5921,2633,5951,2640,5970,2646,5988,2646,6014,L,2646,6030,Q,2647,6036,2644,6048,L,2637,6077,Q,2637,6078,2637,6081,2633,6090,2623,6115,2611,6143,2613,6163,2615,6184,2611,6208,2607,6236,2607,6250,2607,6265,2607,6267,2608,6270,2611,6297,2611,6299,2613,6305,2613,6314,2610,6316,2601,6320,2592,6331,2588,6334,2578,6342,2568,6349,2564,6355,2557,6362,2526,6378,2492,6396,2478,6407,2466,6416,2450,6423,2435,6428,2430,6431,2422,6434,2406,6437,2391,6439,2385,6442,2373,6448,2361,6448,2349,6448,2341,6448,2273,6447,2267,6449,L,2266,6449,Q,2253,6449,2245,6444,2238,6438,2212,6440,2195,6441,2180,6435,2167,6430,2160,6431,2162,6442,2162,6451,2161,6462,2172,6494,2173,6500,2171,6532,2171,6564,2178,6575,2184,6585,2186,6597,2186,6597,2187,6617,2187,6631,2188,6633,2189,6634,2196,6643,2200,6648,2200,6651,2201,6658,2202,6673,2202,6686,2205,6689,2207,6694,2236,6723,2239,6726,2247,6736,2256,6745,2262,6749,2272,6755,2279,6767,2283,6773,2288,6783,2297,6800,2323,6813,2339,6821,2370,6836,L,2412,6857,Q,2438,6870,2449,6887,2466,6910,2507,6969,2534,7005,2538,7010,2544,7017,2553,7030,2561,7039,2573,7043,2589,7051,2628,7079,2643,7088,2661,7101,2675,7109,2689,7109,2698,7109,2704,7099,2708,7096,2718,7097,2722,7097,2725,7097,L,2725,7097,Q,2743,7097,2747,7099,2767,7108,2768,7108,2775,7109,2792,7108,2807,7108,2811,7115,2815,7120,2828,7125,2834,7126,2840,7140,2843,7148,2852,7159,2861,7169,2864,7176,2871,7192,2874,7196,2878,7200,2892,7205,2919,7214,2936,7215,2937,7215,2945,7219,2954,7224,2958,7225,2971,7226,2975,7228,2979,7229,2984,7232,2997,7238,3006,7248,3015,7258,3022,7262,3027,7271,3037,7290,3040,7295,3042,7308,3044,7321,3046,7325,3055,7341,3056,7361,3057,7377,3069,7395,3071,7404,3092,7421,3097,7425,3106,7432,3115,7438,3129,7440,3136,7441,3145,7441,3153,7441,3157,7443,3161,7444,3168,7450,3174,7455,3185,7457,3197,7457,3203,7457,3207,7457,3222,7457,3236,7457,3240,7447,3243,7437,3258,7425,3277,7406,3278,7405,3284,7396,3286,7395,3296,7390,3300,7387,3319,7368,3343,7355,3363,7345,3396,7335,L,3472,7337,Q,3481,7335,3493,7341,3504,7347,3510,7347,3590,7345,3617,7347,3617,7347,3632,7354,3645,7362,3653,7361,3659,7360,3674,7358,3687,7358,3692,7364,3696,7370,3703,7371,3704,7372,3715,7372,3717,7372,3723,7377,3725,7379,3731,7383,3738,7387,3777,7387,L,3777,7387,Q,3777,7387,3778,7387,3781,7389,3804,7387,3821,7387,3829,7385,3831,7383,3837,7379,3843,7375,3847,7374,3852,7373,3864,7374,3872,7374,3883,7372,3889,7370,3899,7363,L,3919,7355,Q,3920,7355,3926,7352,3928,7351,3928,7344,3928,7335,3924,7328,3917,7319,3912,7310,3904,7295,3903,7292,3899,7283,3901,7272,3887,7251,3889,7222,3889,7212,3887,7198,3884,7180,3884,7171,L,3882,7115,Q,3882,7111,3879,7104,3876,7097,3876,7091,L,3874,7066,Q,3874,7051,3876,7039,3877,7027,3876,7022,3875,7016,3876,6992,L,3875,6968,Q,3875,6964,3872,6956,3868,6949,3866,6946,3863,6941,3862,6923,3860,6904,3856,6894,3852,6887,3847,6872,3843,6864,3833,6849,3821,6832,3816,6827,3809,6818,3798,6807,3785,6794,3763,6767,3739,6737,3725,6721,3711,6706,3692,6682,3670,6651,3667,6642,3660,6634,3649,6614,3632,6586,3628,6579,3603,6542,3585,6502,3561,6449,3540,6409,3535,6401,3518,6377,3502,6355,3495,6342,3490,6336,3480,6322,3473,6312,3464,6305,L,3431,6260,Q,3407,6227,3397,6216,3386,6206,3377,6195,3366,6185,3361,6179,3338,6158,3327,6144,3319,6135,3312,6119,3304,6104,3305,6097,3305,6090,3300,6077,3294,6065,3295,6056,L,3296,5976,Q,3296,5973,3304,5947,3304,5925,3311,5914,3319,5900,3322,5883,3332,5850,3351,5812,3361,5793,3361,5756,3362,5720,3360,5705,3359,5696,3353,5681,3347,5669,3347,5662,3345,5645,3331,5618,3317,5590,3313,5581,3303,5552,3295,5534,3282,5508,3278,5497,3269,5472,3258,5450,3245,5423,3234,5402,L,3202,5327,Q,3202,5325,3203,5323,3203,5318,3203,5314,3203,5304,3197,5292,3178,5291,3166,5290,3144,5290,3132,5293,Q,3103,5301,3093,5302,Z]],label:"Khalkhal County",shortLabel:"KH",labelPosition:[304.4,654.9],labelAlignment:[CEN,MID],nextId:"IR.AR.KO"},"IR.AR.KO":{outlines:[[M,3074,5012,Q,3046,5039,3029,5049,L,3004,5064,Q,2991,5077,2986,5081,2971,5090,2963,5095,2961,5096,2944,5096,2925,5096,2920,5094,2914,5092,2890,5076,2882,5071,2867,5066,2842,5056,2841,5056,2839,5055,2828,5054,2816,5052,2811,5049,2803,5044,2797,5043,2795,5043,2782,5043,2770,5043,2756,5034,2744,5027,2729,5029,2717,5024,2700,5014,2699,5021,2690,5027,2679,5035,2677,5038,2671,5046,2671,5069,2671,5071,2665,5083,2660,5093,2659,5100,2659,5101,2657,5115,2656,5124,2653,5130,2643,5146,2645,5163,2640,5170,2633,5195,2631,5205,2617,5223,2605,5239,2600,5251,2599,5252,2599,5254,2596,5271,2578,5286,2566,5296,2542,5313,2534,5321,2526,5325,2514,5331,2504,5335,2482,5343,2478,5346,2472,5351,2463,5352,2455,5352,2454,5353,2451,5354,2435,5358,2427,5364,2421,5376,2412,5388,2398,5416,2389,5429,2378,5457,2375,5464,2359,5477,2356,5480,2353,5483,2350,5486,2345,5486,2340,5486,2333,5481,2326,5476,2323,5476,2316,5476,2313,5475,2308,5473,2300,5468,2293,5462,2279,5460,2275,5458,2266,5454,2260,5450,2253,5450,L,2198,5450,Q,2200,5455,2203,5460,2205,5466,2220,5500,2221,5503,2227,5512,2229,5519,2231,5525,L,2231,5557,Q,2231,5573,2231,5590,2230,5600,2223,5613,2215,5626,2213,5642,2211,5652,2213,5674,2213,5688,2209,5706,2204,5725,2204,5728,2204,5731,2204,5756,2204,5771,2203,5784,2203,5787,2203,5804,2204,5815,2196,5819,2194,5820,2179,5825,2175,5828,2168,5828,2161,5829,2159,5830,L,2047,5881,Q,2034,5886,2017,5895,2008,5900,1998,5905,L,1962,5930,Q,1954,5939,1936,5965,1926,5975,1923,5984,1923,5987,1923,6005,1923,6022,1924,6028,1925,6036,1933,6043,1939,6049,1963,6075,1983,6094,1997,6123,L,2010,6144,Q,2014,6147,2025,6165,2035,6182,2043,6192,2051,6202,2057,6209,2062,6217,2070,6232,2077,6246,2097,6278,2100,6283,2102,6291,2103,6295,2105,6301,2107,6305,2113,6312,2118,6320,2118,6323,2128,6357,2151,6405,2157,6420,2160,6431,2167,6430,2180,6435,2195,6441,2212,6440,2238,6438,2245,6444,2253,6449,2266,6449,L,2267,6449,Q,2273,6447,2341,6448,2349,6448,2361,6448,2373,6448,2385,6442,2391,6439,2406,6437,2422,6434,2430,6431,2435,6428,2450,6423,2466,6416,2478,6407,2492,6396,2526,6378,2557,6362,2564,6355,2568,6349,2578,6342,2588,6334,2592,6331,2601,6320,2610,6316,2613,6314,2613,6305,2611,6299,2611,6297,2608,6270,2607,6267,2607,6265,2607,6250,2607,6236,2611,6208,2615,6184,2613,6163,2611,6143,2623,6115,2633,6090,2637,6081,2637,6078,2637,6077,L,2644,6048,Q,2647,6036,2646,6030,L,2646,6014,Q,2646,5988,2640,5970,2633,5951,2633,5921,2633,5911,2637,5908,2645,5901,2649,5895,2651,5891,2662,5886,2668,5883,2675,5883,2679,5882,2729,5883,2776,5884,2778,5885,2781,5887,2785,5885,2817,5883,2836,5880,2853,5878,2866,5870,2878,5862,2883,5862,2888,5860,2902,5849,2907,5839,2926,5818,2927,5816,2940,5807,2950,5799,2957,5786,2967,5761,2967,5748,L,2967,5710,Q,2967,5663,2965,5656,2963,5644,2940,5599,2936,5587,2924,5572,2909,5557,2904,5551,2901,5547,2892,5539,2885,5534,2885,5530,L,2884,5500,Q,2884,5487,2884,5487,2889,5483,2897,5474,2904,5466,2923,5452,2928,5448,2950,5438,2970,5428,2977,5420,2990,5403,2994,5392,2992,5383,2996,5377,2997,5374,3006,5361,3019,5342,3029,5332,3040,5322,3056,5317,L,3056,5317,Q,3056,5317,3057,5317,3061,5315,3073,5309,3089,5302,3093,5302,3103,5301,3132,5293,3144,5290,3166,5290,3178,5291,3197,5292,3196,5290,3195,5290,3188,5276,3188,5266,3186,5230,3186,5218,3185,5201,3186,5195,3186,5186,3191,5176,3197,5162,3200,5156,3204,5146,3211,5136,3231,5106,3241,5095,3255,5080,3272,5073,3273,5072,3274,5070,3278,5066,3283,5058,3272,5054,3246,5042,3223,5031,3213,5028,3185,5015,3176,5012,3166,5008,3139,5008,3128,5008,3122,5008,3118,5009,3114,5009,Q,3077,5009,3074,5012,Z]],label:"Kowsar County",shortLabel:"KO",labelPosition:[253.3,565.8],labelAlignment:[CEN,MID],nextId:"IR.AR.ME"},"IR.AR.ME":{outlines:[[M,1803,2365,Q,1798,2362,1780,2362,1774,2361,1769,2362,1758,2362,1755,2367,1746,2379,1731,2377,1723,2377,1713,2382,1705,2386,1701,2390,1697,2393,1696,2392,1695,2390,1686,2396,1678,2401,1677,2404,1658,2414,1632,2434,1616,2447,1602,2458,L,1586,2456,Q,1576,2456,1573,2458,1560,2466,1550,2470,1545,2472,1526,2472,1510,2470,1509,2475,1508,2479,1506,2493,1506,2501,1499,2505,1492,2511,1483,2512,1479,2513,1464,2513,1438,2514,1428,2512,1387,2510,1381,2507,1368,2501,1344,2500,1316,2501,1301,2500,1299,2486,1299,2481,1301,2462,1303,2460,1313,2453,1314,2450,1314,2443,1318,2437,L,1330,2415,Q,1337,2407,1341,2403,1347,2396,1349,2392,L,1349,2378,1130,2378,Q,1109,2387,1105,2388,L,820,2388,Q,809,2390,792,2390,800,2396,810,2405,828,2420,843,2428,858,2436,866,2446,875,2455,879,2458,884,2462,897,2489,905,2501,907,2526,907,2540,908,2570,910,2609,896,2639,895,2647,895,2648,893,2653,889,2655,882,2659,876,2667,852,2682,847,2686,830,2695,814,2696,808,2697,797,2701,785,2705,781,2706,707,2715,693,2712,689,2711,689,2710,663,2710,652,2702,640,2694,630,2694,622,2694,615,2708,612,2716,605,2732,584,2765,577,2781,575,2786,567,2806,559,2826,554,2833,551,2836,543,2856,530,2874,530,2877,530,2879,551,2888,560,2893,615,2927,659,2953,694,2970,713,2978,727,2987,729,2988,744,2993,757,2997,759,3e3,768,3012,783,3027,792,3039,792,3054,792,3065,767,3092,731,3134,730,3135,726,3139,715,3150,704,3161,699,3167,689,3179,681,3185,678,3187,673,3194,670,3199,669,3202,668,3203,668,3204,L,667,3204,Q,666,3216,652,3240,630,3280,628,3284,623,3295,613,3321,603,3345,592,3368,588,3378,575,3399,564,3419,559,3434,558,3436,543,3469,532,3492,530,3502,528,3521,511,3550,501,3567,480,3595,445,3645,405,3689,L,364,3732,Q,355,3741,339,3752,323,3764,317,3769,309,3776,298,3786,288,3795,271,3806,L,217,3836,Q,217,3837,216,3838,205,3844,176,3863,147,3883,130,3892,118,3897,87,3916,53,3938,53,3943,53,3947,67,3952,75,3955,89,3959,99,3962,112,3970,133,3984,136,3985,166,4003,223,4024,L,224,4024,272,4050,Q,282,4056,299,4068,314,4078,323,4083,352,4097,418,4140,420,4142,425,4146,431,4150,434,4155,441,4169,447,4173,453,4177,468,4183,485,4190,491,4194,493,4194,512,4206,525,4215,537,4221,547,4225,565,4235,572,4237,593,4241,595,4242,605,4248,609,4248,623,4250,625,4251,636,4250,645,4250,651,4254,663,4262,678,4263,687,4264,707,4264,715,4264,773,4265,812,4266,822,4274,L,1121,4275,Q,1129,4275,1141,4267,1146,4262,1154,4262,1165,4260,1169,4258,1173,4257,1187,4246,1203,4235,1207,4231,1222,4212,1228,4209,1263,4195,1274,4190,1327,4169,1330,4167,1343,4161,1380,4150,1386,4148,1403,4140,1414,4134,1425,4134,1432,4133,1453,4134,1469,4133,1467,4119,L,1481,4119,1481,4120,Q,1485,4121,1493,4128,L,1507,4130,Q,1512,4130,1521,4132,1533,4134,1537,4137,1542,4143,1569,4144,1583,4144,1599,4143,1616,4143,1619,4138,1624,4129,1637,4129,L,1637,4114,1643,4109,Q,1646,4106,1647,4102,L,1650,4102,1650,4084,Q,1642,4077,1639,4068,1638,4066,1633,4048,1631,4039,1626,4033,1621,4027,1621,4019,1621,4010,1624,4006,1629,4002,1632,3996,1633,3993,1633,3985,1633,3978,1637,3974,L,1674,3946,Q,1711,3914,1739,3889,1786,3842,1786,3826,1786,3822,1784,3819,1781,3813,1780,3809,1779,3806,1779,3785,1779,3774,1772,3764,1765,3753,1765,3750,1765,3746,1773,3732,1780,3718,1782,3717,L,1798,3696,1799,3696,Q,1822,3683,1827,3680,L,1849,3660,Q,1877,3635,1890,3621,1906,3602,1923,3586,1942,3567,1954,3554,1958,3551,1993,3522,1999,3515,2002,3513,2006,3510,2019,3503,L,2047,3494,Q,2059,3488,2076,3482,2092,3477,2099,3472,2128,3451,2138,3441,2140,3440,2142,3438,2146,3432,2153,3421,2163,3405,2163,3399,2162,3392,2138,3371,2114,3348,2108,3341,2102,3334,2097,3328,2091,3322,2091,3315,2091,3307,2091,3280,2092,3253,2091,3251,2091,3248,2097,3244,2104,3239,2110,3235,2115,3232,2123,3232,L,2124,3232,Q,2124,3233,2140,3233,2147,3233,2157,3228,2167,3224,2181,3224,2190,3224,2193,3224,2199,3222,2213,3213,2221,3208,2234,3208,2241,3207,2250,3200,2258,3196,2266,3195,2273,3194,2285,3188,2296,3183,2302,3182,2311,3181,2323,3176,2336,3171,2340,3170,2351,3168,2384,3170,L,2402,3168,Q,2422,3168,2433,3175,2441,3181,2453,3181,L,2472,3181,Q,2467,3175,2466,3174,L,2425,3152,Q,2420,3149,2403,3133,2384,3115,2374,3109,2358,3098,2358,3075,2358,3051,2362,3024,2365,2997,2363,2986,2360,2974,2360,2970,2358,2963,2350,2956,2343,2949,2343,2932,2342,2922,2327,2910,2323,2907,2303,2893,2293,2889,2275,2880,2250,2867,2240,2862,L,2171,2833,Q,2163,2830,2134,2815,2112,2804,2091,2797,2050,2785,2016,2769,1993,2759,1979,2746,1968,2735,1949,2723,L,1830,2639,Q,1819,2635,1817,2630,L,1810,2618,Q,1803,2607,1797,2592,1790,2587,1786,2574,1782,2552,1780,2550,L,1780,2424,1780,2418,Q,1780,2412,1786,2402,1794,2391,1798,2391,1806,2391,1819,2381,1820,2381,1820,2381,1816,2380,1815,2376,1813,2373,1813,2371,Q,1809,2367,1803,2365,Z]],label:"Meshginshahr County",shortLabel:"ME",labelPosition:[126.3,331.8],labelAlignment:[CEN,MID],nextId:"IR.AR.NM"},"IR.AR.NM":{outlines:[[M,2790,3222,Q,2757,3222,2748,3230,2731,3245,2702,3255,L,2655,3275,2555,3274,Q,2551,3274,2542,3262,2541,3275,2544,3301,2544,3335,2550,3347,L,2570,3396,Q,2574,3408,2582,3419,2588,3427,2588,3438,L,2588,3472,Q,2588,3477,2579,3483,2571,3490,2568,3498,2559,3508,2542,3530,2523,3556,2518,3568,L,2505,3588,Q,2502,3592,2504,3611,2501,3629,2495,3637,2492,3643,2492,3660,L,2493,3681,Q,2493,3684,2505,3705,L,2507,3727,Q,2509,3742,2515,3746,2527,3771,2538,3786,2555,3808,2582,3824,2594,3831,2628,3852,2633,3854,2643,3854,2653,3855,2656,3857,L,2669,3862,2679,3862,Q,2686,3862,2689,3863,2703,3871,2745,3889,2756,3894,2769,3908,2787,3926,2789,3927,2807,3943,2822,3976,2831,3995,2846,4030,2855,4072,2869,4103,2876,4118,2888,4134,2903,4155,2918,4163,2942,4178,3008,4218,3066,4252,3087,4260,3087,4260,3097,4261,3104,4262,3107,4264,3118,4272,3128,4272,3144,4271,3150,4272,3156,4273,3159,4279,3162,4285,3168,4285,3173,4285,3176,4281,3178,4277,3193,4276,3193,4277,3198,4277,3205,4277,3222,4277,3224,4277,3232,4291,L,3256,4316,Q,3265,4326,3282,4339,3288,4345,3294,4347,3298,4348,3302,4349,3306,4351,3309,4356,3310,4358,3313,4364,3328,4383,3342,4388,L,3378,4399,Q,3386,4404,3396,4407,3408,4409,3411,4410,3418,4415,3443,4427,3444,4424,3446,4422,3451,4418,3450,4405,3450,4391,3451,4343,3452,4294,3448,4282,3443,4269,3440,4263,3437,4257,3438,4245,3439,4225,3427,4209,3427,4204,3423,4193,3417,4178,3416,4173,L,3404,4128,Q,3404,4125,3394,4080,L,3383,4035,Q,3378,4022,3377,4017,3374,4010,3374,3999,3374,3993,3369,3976,3363,3958,3362,3953,3361,3946,3361,3933,L,3362,3910,Q,3362,3894,3361,3888,3359,3880,3359,3878,3357,3875,3352,3875,L,3351,3875,3306,3879,Q,3300,3879,3298,3879,3296,3877,3292,3870,3282,3854,3254,3834,3224,3813,3211,3797,3197,3780,3175,3742,3151,3701,3143,3690,3103,3638,3070,3602,L,3031,3553,Q,3018,3536,3011,3531,3004,3525,2992,3514,L,2976,3497,2930,3435,Q,2925,3428,2916,3423,2901,3411,2895,3403,L,2881,3388,Q,2870,3372,2868,3368,2864,3361,2862,3358,2859,3354,2859,3347,L,2855,3318,Q,2850,3299,2848,3274,2847,3268,2843,3265,2838,3261,2836,3258,L,2827,3237,Q,2824,3228,2822,3226,2820,3222,2814,3222,Z]],label:"Namin County",shortLabel:"NM",labelPosition:[276.2,366.7],labelAlignment:[CEN,MID],nextId:"IR.AR.NR"},"IR.AR.NR":{outlines:[[M,2483,4608,Q,2478,4615,2459,4636,2450,4646,2440,4664,2430,4674,2430,4675,2422,4681,2416,4681,L,2390,4683,Q,2367,4683,2318,4638,2318,4637,2318,4637,2302,4623,2281,4608,2268,4598,2256,4582,2254,4579,2231,4556,2219,4545,2216,4536,2213,4538,2196,4559,2186,4572,2173,4576,2160,4579,2130,4580,2101,4579,2100,4579,2020,4579,2003,4572,1987,4565,1953,4562,1948,4561,1943,4558,1937,4555,1934,4555,L,1902,4551,Q,1890,4544,1875,4542,1856,4541,1847,4534,1844,4531,1833,4530,1821,4530,1813,4528,1800,4526,1794,4521,1790,4517,1780,4517,1780,4517,1779,4517,1728,4517,1696,4517,1660,4517,1657,4519,1649,4523,1641,4528,1638,4530,1628,4530,1597,4528,1581,4528,1568,4528,1558,4533,1554,4535,1540,4545,L,1540,4729,Q,1541,4739,1551,4769,1554,4777,1557,4792,1560,4804,1566,4808,L,1577,4825,Q,1579,4829,1592,4841,1616,4872,1620,4877,1623,4882,1657,4911,1666,4920,1676,4932,1686,4944,1692,4950,1696,4953,1708,4962,1720,4971,1726,4978,1728,4979,1744,4998,1753,5008,1760,5014,1774,5025,1782,5033,1784,5037,1793,5050,1806,5073,1806,5093,1806,5106,1803,5113,1800,5118,1788,5131,1786,5133,1772,5145,1759,5157,1758,5164,1753,5168,1743,5174,1740,5177,1729,5191,1728,5193,1720,5198,1715,5202,1715,5205,1709,5216,1709,5222,1709,5232,1726,5236,1734,5239,1753,5242,1766,5247,1784,5250,1785,5250,1797,5256,1806,5261,1818,5260,L,1823,5264,Q,1832,5268,1867,5274,1901,5282,1934,5295,1948,5300,1962,5309,1979,5319,1985,5321,1993,5325,2025,5335,2055,5345,2074,5352,2093,5359,2120,5379,2146,5398,2157,5408,2167,5418,2176,5424,2192,5437,2194,5441,2194,5446,2198,5450,L,2253,5450,Q,2260,5450,2266,5454,2275,5458,2279,5460,2293,5462,2300,5468,2308,5473,2313,5475,2316,5476,2323,5476,2326,5476,2333,5481,2340,5486,2345,5486,2350,5486,2353,5483,2356,5480,2359,5477,2375,5464,2378,5457,2389,5429,2398,5416,2412,5388,2421,5376,2427,5364,2435,5358,2451,5354,2454,5353,2455,5352,2463,5352,2472,5351,2478,5346,2482,5343,2504,5335,2514,5331,2526,5325,2534,5321,2542,5313,2566,5296,2578,5286,2596,5271,2599,5254,2599,5252,2600,5251,2605,5239,2617,5223,2631,5205,2633,5195,2640,5170,2645,5163,2643,5146,2653,5130,2656,5124,2657,5115,2659,5101,2659,5100,2660,5093,2665,5083,2671,5071,2671,5069,2671,5046,2677,5038,2679,5035,2690,5027,2699,5021,2700,5014,2697,5012,2695,5011,2691,5009,2688,4990,2685,4975,2685,4967,2685,4948,2688,4940,2689,4937,2694,4929,2698,4923,2698,4918,2699,4912,2704,4906,2710,4899,2711,4896,L,2714,4871,Q,2714,4857,2702,4848,2685,4838,2671,4826,2661,4818,2656,4814,2648,4806,2648,4799,L,2648,4767,Q,2666,4748,2673,4737,2677,4725,2679,4719,2679,4716,2683,4712,2688,4709,2689,4706,2691,4699,2696,4691,2701,4681,2703,4675,L,2703,4636,Q,2703,4595,2702,4591,2698,4581,2665,4548,2656,4540,2646,4534,2634,4526,2627,4527,L,2578,4526,Q,2570,4526,2551,4540,2538,4549,2528,4557,Q,2499,4580,2483,4608,Z]],label:"Nir County",shortLabel:"NR",labelPosition:[212.7,500.1],labelAlignment:[CEN,MID],nextId:"IR.AR.PA"},"IR.AR.PA":{outlines:[[M,1662,69,Q,1655,78,1644,88,1633,98,1620,104,1608,110,1579,112,1551,114,1527,115,1504,116,1500,114,L,1500,114,Q,1491,112,1486,110,1481,109,1475,108,1470,106,1461,102,1451,98,1440,98,1428,98,1419,100,1405,105,1390,107,1370,109,1367,110,1364,110,1357,116,1349,123,1346,125,1324,139,1296,164,1267,192,1254,203,1220,229,1212,240,1189,270,1171,275,1163,277,1144,287,1122,299,1115,302,1105,305,1090,315,1075,328,1066,334,1027,347,1007,360,L,937,398,Q,895,421,870,438,857,446,853,449,847,452,837,454,825,454,810,467,800,475,786,488,772,501,764,507,753,514,714,553,708,559,694,577,684,590,673,595,630,611,615,611,L,596,610,Q,587,610,582,613,581,613,559,620,553,622,542,624,533,625,528,628,511,635,500,637,496,638,487,644,479,648,471,646,L,452,649,Q,448,649,437,656,431,659,423,664,396,674,363,692,352,697,340,701,332,704,328,711,322,721,321,722,L,295,736,Q,291,738,285,743,278,750,278,753,278,757,291,763,309,770,313,772,354,799,367,809,379,818,394,825,414,835,423,840,426,842,435,849,442,855,447,858,456,861,475,872,485,877,503,887,519,894,531,898,534,898,541,903,549,908,551,910,L,609,954,Q,632,970,647,983,L,648,983,Q,674,1006,692,1039,L,707,1074,Q,709,1080,711,1092,713,1103,716,1111,723,1130,723,1189,722,1215,727,1233,729,1244,735,1259,738,1268,738,1276,L,737,1337,752,1337,Q,762,1337,765,1339,781,1349,792,1349,799,1348,818,1357,828,1362,844,1372,846,1372,858,1382,868,1389,874,1389,887,1387,900,1393,901,1393,916,1400,928,1405,935,1405,939,1405,943,1407,960,1401,969,1400,976,1399,993,1400,999,1399,1015,1394,1030,1389,1045,1387,1054,1385,1066,1376,1081,1365,1084,1364,1088,1361,1094,1356,1098,1352,1103,1350,1110,1347,1113,1345,1118,1341,1119,1337,1119,1335,1125,1329,1131,1323,1133,1320,1134,1316,1135,1309,1135,1302,1137,1297,1146,1282,1146,1277,L,1146,1248,Q,1146,1228,1145,1221,1145,1210,1150,1202,1158,1190,1159,1166,1160,1165,1161,1164,1185,1125,1196,1102,L,1207,1071,Q,1208,1069,1208,1055,1208,1042,1212,1039,1221,1027,1222,1003,1222,977,1223,968,1224,963,1234,938,1241,921,1239,908,1236,871,1236,856,1236,839,1245,826,1253,813,1251,791,1251,780,1257,765,1264,748,1262,736,1276,717,1280,709,1285,693,1296,680,1322,647,1334,640,1335,639,1336,639,1345,634,1367,621,1389,608,1403,603,1407,601,1419,599,1430,596,1437,592,1444,587,1456,587,1471,585,1475,585,L,1492,577,Q,1501,573,1510,574,L,1624,572,Q,1637,572,1669,588,1697,591,1720,603,1721,604,1730,611,1736,617,1740,617,1745,617,1752,622,1759,626,1762,627,1774,629,1786,634,1793,637,1817,648,1821,649,1836,661,1852,665,1860,670,1869,675,1883,683,1896,690,1916,695,1927,699,1939,705,1958,708,1964,713,1967,715,1984,721,1989,725,1997,733,2006,733,2010,720,2016,705,2022,703,2030,699,2029,688,2029,675,2039,668,2046,663,2055,651,2062,639,2069,635,2080,630,2091,620,2101,614,2111,614,L,2112,614,Q,2112,615,2121,615,L,2127,615,Q,2128,615,2130,615,2138,614,2161,609,2188,603,2194,604,2211,606,2227,595,2236,589,2253,577,2246,568,2239,557,2227,538,2219,529,2217,527,2215,525,2204,516,2187,494,2165,467,2138,439,2111,410,2091,391,2072,371,2045,340,2016,308,2015,307,1988,280,1975,269,1970,264,1964,255,1957,245,1954,243,1950,240,1946,237,1942,234,1929,218,1908,194,1891,179,1855,150,1848,143,L,1827,122,Q,1817,114,1805,105,1784,89,1780,86,1774,79,1771,75,1763,67,1759,67,1738,50,1732,47,1724,42,1709,42,1692,41,1681,51,Q,1669,60,1662,69,Z]],label:"Parsabad County",shortLabel:"PA",labelPosition:[158,35.7],labelAlignment:[CEN,MID],nextId:"IR.AR.SA"},"IR.AR.SA":{outlines:[[M,2049,4196,L,2001,4167,Q,1983,4157,1977,4153,1966,4148,1954,4147,1943,4146,1927,4146,1908,4146,1900,4146,L,1871,4146,1848,4155,Q,1840,4157,1836,4158,1827,4160,1821,4165,1816,4167,1782,4167,1776,4167,1765,4171,1755,4175,1750,4175,1730,4175,1707,4165,1686,4155,1683,4154,1679,4153,1660,4138,1646,4128,1637,4130,L,1637,4129,Q,1624,4129,1619,4138,1616,4143,1599,4143,1583,4144,1569,4144,1542,4143,1537,4137,1533,4134,1521,4132,1512,4130,1507,4130,L,1493,4128,Q,1485,4121,1481,4120,1483,4174,1494,4194,1500,4206,1502,4240,1505,4274,1506,4277,1513,4295,1513,4319,1513,4333,1513,4366,1513,4374,1521,4403,1529,4429,1527,4446,1527,4480,1528,4495,1531,4522,1540,4545,1554,4535,1558,4533,1568,4528,1581,4528,1597,4528,1628,4530,1638,4530,1641,4528,1649,4523,1657,4519,1660,4517,1696,4517,1728,4517,1779,4517,1780,4517,1780,4516,L,1780,4517,Q,1790,4517,1794,4521,1800,4526,1813,4528,1821,4530,1833,4530,1844,4531,1847,4534,1856,4541,1875,4542,1890,4544,1902,4551,L,1934,4555,Q,1937,4555,1943,4558,1948,4561,1953,4562,1987,4565,2003,4572,2020,4579,2100,4579,2101,4579,2130,4580,2160,4579,2173,4576,2186,4572,2196,4559,2213,4538,2216,4536,2215,4532,2215,4530,2215,4521,2220,4515,2226,4507,2227,4497,2228,4490,2233,4476,2238,4461,2239,4456,2240,4452,2240,4435,2240,4423,2243,4412,2252,4391,2254,4378,2253,4351,2255,4341,2256,4337,2263,4325,2269,4316,2265,4307,2265,4304,2269,4298,2272,4293,2274,4291,2277,4279,2280,4276,L,2291,4259,Q,2292,4256,2292,4245,2292,4224,2287,4216,2286,4214,2283,4211,2279,4209,2277,4207,2273,4200,2264,4200,L,2258,4201,2130,4201,Q,2121,4208,2117,4209,2112,4211,2105,4211,2093,4211,2089,4210,2084,4209,2078,4202,Q,2075,4199,2049,4196,Z]],label:"Sareyn County",shortLabel:"SA",labelPosition:[188.6,435],labelAlignment:[CEN,MID]}}}];exports["default"]={extension:geodefinitions,name:"ardabil",type:"maps"}}})});