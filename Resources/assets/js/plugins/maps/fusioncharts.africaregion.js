(function(factory){if(typeof module==="object"&&typeof module.exports!=="undefined"){module.exports=factory}else{factory(FusionCharts)}})(function(FusionCharts){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{configurable:false,enumerable:true,get:getter})}};__webpack_require__.r=function(exports){Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=22)})({22:function(module,exports,__webpack_require__){"use strict";var _fusioncharts=__webpack_require__(23);var _fusioncharts2=_interopRequireDefault(_fusioncharts);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}FusionCharts.addDep(_fusioncharts2["default"])},23:function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;
/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts Technologies LLP
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts Technologies LLP
 * @meta package_map_pack
 * @id fusionmaps.AfricaRegion.18.08-21-2012 10:29:54
 */var M="M",L="L",Z="Z",Q="Q",LFT="left",RGT="right",CEN="center",MID="middle",TOP="top",BTM="bottom",geodefinitions=[{name:"AfricaRegion",revision:18,standaloneInit:true,baseWidth:562,baseHeight:600,baseScaleFactor:10,entities:{"01":{outlines:[[M,5393,4161,Q,5392,4163,5379,4175,5369,4184,5369,4195,L,5369,4249,5354,4249,5354,4257,5335,4257,Q,5340,4274,5318,4290,L,5303,4290,Q,5296,4279,5296,4277,L,5284,4277,Q,5283,4285,5284,4307,5283,4326,5274,4326,L,5274,4334,Q,5267,4334,5267,4349,5267,4360,5268,4366,5273,4367,5285,4367,L,5285,4373,Q,5274,4372,5268,4372,5256,4372,5258,4380,5252,4378,5247,4389,L,5241,4389,5241,4370,5232,4370,5232,4379,Q,5225,4375,5222,4381,5218,4388,5214,4387,L,5213,4399,Q,5213,4402,5216,4403,L,5216,4442,5193,4442,5193,4422,5181,4421,Q,5151,4443,5147,4445,L,5147,4455,Q,5153,4455,5153,4462,5154,4466,5154,4475,L,5161,4475,5161,4481,5137,4481,5137,4463,Q,5128,4465,5128,4459,5128,4450,5127,4448,L,5121,4448,5121,4461,5082,4461,Q,5085,4469,5080,4474,5074,4479,5072,4482,L,5059,4482,5059,4461,5053,4461,Q,5052,4463,5052,4468,5046,4465,5038,4479,5034,4483,5024,4490,5008,4490,4999,4490,4984,4489,4985,4498,4986,4509,4982,4519,4980,4524,4974,4536,4973,4540,4962,4551,4953,4559,4955,4569,4935,4580,4937,4599,4939,4617,4946,4626,4953,4635,4953,4665,4952,4696,4958,4706,4964,4717,4964,4751,L,4964,4776,Q,4965,4778,4960,4785,4955,4791,4956,4799,4949,4817,4936,4841,4933,4849,4925,4854,4921,4866,4915,4871,4908,4877,4896,4897,4886,4911,4877,4917,4867,4923,4863,4935,4858,4946,4846,4947,4845,4958,4844,4981,4844,4984,4836,4995,L,4836,5038,Q,4836,5046,4846,5052,4854,5076,4852,5096,4859,5099,4862,5101,4863,5102,4863,5112,4863,5127,4859,5132,4855,5137,4853,5159,L,4853,5207,Q,4854,5214,4865,5222,4868,5234,4873,5239,4875,5241,4902,5265,4907,5269,4917,5273,4931,5285,4932,5285,4944,5290,4976,5290,4977,5290,4987,5280,4993,5274,4996,5276,4997,5269,5004,5268,5014,5267,5014,5266,5018,5260,5031,5260,5049,5260,5053,5270,L,5070,5270,Q,5071,5261,5089,5261,5089,5256,5095,5253,5102,5250,5102,5242,5102,5234,5110,5227,5118,5220,5129,5190,L,5145,5150,Q,5147,5147,5155,5130,5160,5118,5169,5109,L,5185,5065,Q,5191,5057,5206,5024,5210,5013,5224,4981,5233,4969,5236,4961,5239,4953,5247,4942,5243,4928,5258,4913,5263,4907,5272,4886,L,5315,4787,Q,5337,4752,5336,4743,5333,4732,5342,4718,5350,4705,5347,4693,5358,4655,5367,4646,L,5367,4633,Q,5372,4630,5375,4625,5376,4624,5375,4610,5375,4601,5383,4604,5381,4590,5390,4586,5394,4584,5398,4570,5399,4569,5410,4557,5413,4551,5413,4537,5416,4524,5416,4492,5415,4460,5418,4450,L,5441,4450,Q,5447,4457,5444,4480,L,5461,4480,Q,5462,4477,5463,4476,L,5463,4454,Q,5456,4453,5454,4452,L,5453,4337,Q,5450,4338,5446,4334,L,5446,4269,Q,5446,4248,5446,4241,5445,4229,5436,4229,5436,4203,5419,4182,Q,5402,4161,5393,4161,Z],[M,5060,2211,Q,5034,2211,5030,2208,5022,2204,5015,2203,5007,2201,5005,2199,4980,2179,4969,2169,4963,2164,4957,2146,4951,2131,4942,2129,4934,2118,4919,2121,L,4885,2121,4885,2108,Q,4893,2107,4900,2099,4906,2098,4906,2094,4907,2090,4913,2089,4921,2088,4929,2081,4934,2078,4934,2062,4934,2050,4932,2046,4929,2037,4927,2034,4913,2022,4907,2016,4900,2005,4893,1996,4878,1990,4875,1981,4859,1983,4849,1967,4833,1942,4831,1941,4807,1924,4805,1923,4793,1920,4784,1901,4771,1886,4765,1878,4761,1873,4752,1870,4748,1861,4742,1860,4720,1860,4709,1852,4699,1837,4691,1829,L,4676,1829,Q,4675,1841,4666,1841,4655,1841,4655,1821,4655,1811,4652,1807,4648,1801,4647,1798,L,4633,1798,Q,4633,1799,4634,1814,4634,1822,4626,1822,4621,1822,4615,1803,4609,1782,4601,1776,4597,1773,4585,1754,4577,1742,4574,1728,4567,1720,4567,1717,4566,1706,4567,1701,4568,1692,4564,1686,4560,1680,4558,1676,4547,1652,4547,1651,4548,1631,4536,1628,L,4536,1617,Q,4524,1600,4516,1592,4511,1592,4509,1589,4508,1588,4507,1588,4500,1589,4497,1598,4493,1608,4490,1611,4487,1614,4479,1621,4470,1628,4466,1628,4457,1629,4452,1639,4439,1637,4427,1649,4415,1662,4395,1659,4393,1671,4388,1701,4383,1711,4383,1725,L,4384,1749,Q,4377,1756,4376,1770,4376,1778,4376,1796,4376,1802,4375,1820,4368,1835,4367,1839,4367,1839,4367,1840,4364,1869,4366,1885,4367,1900,4363,1970,4357,1981,4356,1995,4356,2009,4347,2016,4339,2023,4336,2030,4334,2038,4320,2049,4305,2060,4299,2073,4296,2078,4278,2103,4265,2120,4267,2135,4268,2142,4263,2148,4257,2155,4257,2165,4257,2179,4252,2187,4237,2186,4226,2191,4214,2194,4210,2235,4207,2275,4208,2336,L,4208,2370,Q,4208,2378,4202,2380,4198,2380,4192,2388,4182,2390,4180,2392,4170,2401,4168,2401,L,4125,2401,4125,2432,4117,2432,4117,2449,Q,4122,2450,4139,2455,4148,2458,4168,2458,4192,2463,4196,2489,4198,2503,4219,2518,4244,2535,4250,2547,4251,2548,4270,2591,4281,2615,4292,2627,4305,2641,4334,2647,4343,2648,4348,2660,4351,2668,4349,2688,4349,2714,4338,2715,4314,2712,4290,2717,4282,2719,4246,2719,4234,2719,4226,2727,4219,2737,4215,2740,4193,2753,4182,2762,4159,2785,4148,2790,4140,2794,4125,2794,4107,2793,4091,2793,4075,2794,4065,2799,4056,2803,4042,2803,4028,2802,4013,2796,3998,2789,3973,2789,3959,2792,3953,2795,3946,2799,3946,2800,L,3946,2885,Q,3948,2886,3970,2904,3985,2915,3997,2916,L,3997,2923,3986,2923,Q,3988,2932,3980,2934,3968,2938,3965,2944,3944,2959,3936,2971,3913,2989,3907,2998,3897,3018,3892,3027,3881,3047,3871,3056,3866,3060,3864,3075,3863,3090,3862,3097,3861,3104,3859,3127,L,3856,3168,Q,3856,3179,3851,3202,3845,3225,3833,3234,3822,3242,3814,3253,3806,3263,3800,3271,3794,3279,3789,3287,3784,3294,3782,3301,3781,3309,3791,3314,3802,3321,3803,3325,3805,3331,3815,3340,3819,3344,3821,3359,3822,3367,3822,3406,3822,3420,3825,3450,L,3825,3550,Q,3828,3557,3834,3574,3835,3582,3837,3602,3847,3622,3846,3627,3846,3632,3851,3640,3856,3647,3855,3652,3860,3657,3872,3673,3886,3686,3890,3694,3895,3711,3899,3717,3901,3719,3909,3726,3915,3731,3915,3738,L,3915,3743,Q,3917,3748,3922,3756,3926,3762,3926,3770,3926,3780,3915,3781,3900,3781,3890,3782,3869,3793,3852,3793,3842,3792,3834,3797,3825,3802,3813,3801,3811,3801,3798,3809,3786,3817,3778,3813,3778,3822,3772,3826,3767,3829,3767,3835,3767,3842,3759,3847,3754,3850,3754,3862,3754,3868,3761,3884,3767,3900,3767,3928,3767,3938,3765,3965,3761,3995,3758,3998,L,3756,4013,Q,3747,4021,3746,4024,3745,4032,3739,4040,3735,4047,3736,4053,3733,4079,3747,4090,3760,4100,3775,4111,3790,4121,3804,4120,3816,4119,3821,4113,3825,4106,3831,4108,3831,4140,3832,4155,L,3832,4201,3825,4201,Q,3823,4186,3800,4183,3770,4181,3762,4180,3753,4179,3745,4170,3737,4161,3733,4157,3717,4138,3713,4130,3708,4122,3707,4114,3705,4107,3691,4108,3678,4109,3672,4107,3667,4097,3662,4097,3650,4096,3635,4080,3622,4065,3605,4069,3580,4066,3585,4085,L,3540,4085,Q,3531,4073,3529,4071,3519,4068,3512,4065,3502,4045,3482,4050,L,3482,4040,3475,4040,Q,3476,4028,3475,4024,3473,4017,3462,4017,3450,4020,3441,4019,3435,4018,3428,4034,L,3408,4034,Q,3408,4004,3407,3991,3393,3990,3390,3990,3375,3990,3374,4007,3373,4040,3372,4043,3364,4067,3365,4074,L,3366,4107,Q,3366,4123,3361,4126,3356,4129,3356,4141,3356,4151,3364,4158,3375,4167,3378,4172,L,3369,4172,Q,3354,4171,3301,4171,L,3267,4171,Q,3253,4164,3247,4163,L,3204,4163,3204,4400,Q,3204,4422,3202,4447,3200,4471,3243,4504,3249,4512,3268,4523,3272,4527,3277,4530,3282,4532,3285,4550,3292,4549,3302,4549,3327,4549,3333,4544,3339,4538,3365,4539,3390,4539,3395,4530,L,3424,4530,Q,3424,4546,3446,4570,3453,4583,3456,4591,3460,4602,3465,4611,3468,4623,3478,4634,3485,4642,3490,4660,3508,4690,3521,4703,L,3559,4741,Q,3566,4746,3580,4754,3594,4772,3599,4774,3609,4779,3621,4789,3636,4796,3634,4810,3630,4832,3635,4845,3639,4855,3648,4870,3650,4882,3662,4892,3676,4904,3691,4901,3703,4898,3720,4912,3738,4911,3748,4918,L,3748,4927,Q,3752,4929,3770,4928,3787,4928,3792,4937,3794,4940,3816,4939,3819,4939,3834,4948,3884,4948,3887,4949,3891,4950,3908,4961,3921,4970,3930,4967,3931,4994,3929,5050,3929,5100,3938,5128,L,3938,5328,3995,5328,Q,3995,5326,3996,5324,3996,5315,3996,5311,3997,5303,4007,5302,L,4007,5283,Q,3990,5283,3989,5282,3988,5282,3988,5269,L,3988,5258,Q,3989,5252,3994,5252,3998,5242,4003,5237,4007,5228,4008,5228,4017,5227,4018,5226,L,4034,5218,Q,4040,5210,4051,5211,4053,5211,4069,5203,L,4105,5190,Q,4112,5190,4120,5179,4137,5180,4141,5177,4148,5169,4159,5171,4163,5171,4166,5166,4170,5160,4174,5160,L,4201,5134,Q,4202,5126,4202,5123,4203,5119,4210,5120,4218,5120,4218,5105,4218,5097,4214,5098,4209,5098,4206,5092,4207,5082,4207,5077,4207,5068,4214,5062,4218,5058,4218,5047,4218,5036,4221,5033,4221,5004,4225,4998,4237,4996,4236,4992,4235,4988,4236,4973,4236,4958,4226,4958,4215,4957,4215,4948,4215,4938,4214,4902,4214,4867,4200,4850,4186,4833,4186,4832,L,4186,4828,Q,4185,4818,4182,4816,4179,4814,4179,4805,4179,4798,4183,4795,4186,4792,4186,4783,4186,4776,4199,4765,4221,4745,4237,4730,4240,4727,4245,4721,4254,4722,4257,4717,4260,4709,4265,4709,4270,4709,4273,4704,4306,4670,4306,4670,4310,4670,4312,4691,L,4319,4691,Q,4321,4680,4324,4680,4326,4679,4331,4673,4335,4668,4337,4668,4339,4661,4345,4659,4351,4656,4351,4650,4347,4644,4347,4639,L,4349,4629,Q,4377,4632,4378,4612,4378,4608,4383,4607,4388,4605,4389,4604,4388,4597,4394,4597,4398,4598,4405,4598,L,4431,4580,Q,4437,4580,4444,4573,4457,4573,4463,4569,4487,4551,4491,4551,L,4514,4551,Q,4529,4551,4532,4544,4547,4538,4549,4537,4557,4526,4561,4525,4566,4523,4573,4513,4577,4509,4592,4506,4592,4502,4602,4500,4612,4497,4612,4491,4612,4490,4612,4489,4610,4483,4612,4480,4613,4476,4617,4470,4620,4463,4625,4462,4636,4461,4638,4457,4645,4453,4649,4449,4659,4436,4668,4426,4673,4421,4681,4419,4685,4418,4685,4406,4679,4394,4679,4390,4679,4385,4684,4383,L,4697,4360,Q,4697,4355,4701,4352,4704,4350,4704,4345,L,4704,4325,4696,4300,Q,4686,4294,4686,4274,4686,4260,4691,4254,4696,4248,4696,4230,4696,4214,4692,4209,4687,4204,4688,4199,4689,4194,4692,4194,4694,4193,4696,4190,4697,4188,4697,4174,L,4697,4142,Q,4702,4075,4703,4072,4712,4066,4715,4062,4719,4057,4720,4048,4728,4041,4728,4018,4728,3995,4727,3994,4721,3989,4710,3973,4707,3969,4690,3962,4676,3956,4677,3947,4677,3942,4668,3922,4667,3903,4664,3897,4658,3888,4657,3876,4656,3870,4651,3867,4646,3863,4646,3858,L,4646,3851,Q,4646,3847,4645,3843,4646,3837,4643,3831,4639,3823,4639,3820,4637,3805,4628,3802,4636,3783,4639,3775,L,4639,3745,Q,4639,3738,4647,3722,4648,3708,4652,3707,4656,3706,4656,3698,4656,3692,4641,3676,4626,3660,4624,3658,4611,3645,4606,3639,4596,3629,4596,3616,4596,3604,4599,3602,4607,3595,4608,3592,4608,3592,4608,3591,4608,3574,4615,3558,4625,3550,4627,3543,4627,3541,4627,3525,4634,3516,4636,3510,4639,3495,4640,3494,4653,3487,4660,3467,4664,3462,4664,3449,4675,3443,4676,3437,L,4693,3405,Q,4706,3384,4710,3374,L,4722,3345,Q,4728,3325,4748,3321,4749,3314,4755,3311,4758,3309,4762,3308,4765,3303,4777,3291,4780,3287,4782,3272,4784,3270,4792,3269,4794,3268,4799,3260,4799,3259,4809,3259,4813,3250,4814,3250,4829,3239,4826,3235,4826,3229,4833,3228,4842,3226,4843,3225,4847,3219,4850,3209,4870,3192,4904,3151,4924,3132,4963,3093,5005,3058,5060,3e3,5069,2989,5100,2960,5108,2951,5118,2942,5120,2939,5131,2939,5140,2939,5138,2930,L,5157,2930,Q,5157,2918,5160,2918,5166,2918,5170,2911,5179,2909,5189,2894,5220,2869,5227,2862,5225,2846,5246,2829,5257,2819,5276,2803,5282,2795,5305,2772,5325,2752,5329,2742,5342,2720,5345,2711,L,5356,2694,Q,5362,2686,5366,2677,5370,2675,5376,2663,5383,2656,5390,2650,5393,2645,5402,2638,5409,2632,5410,2625,L,5416,2621,Q,5417,2612,5420,2609,5422,2606,5429,2602,5435,2563,5436,2559,5445,2546,5447,2542,5449,2536,5452,2520,5457,2515,5458,2499,5459,2484,5465,2476,5471,2468,5474,2458,5476,2448,5478,2441,5491,2431,5491,2422,5491,2413,5495,2402,5510,2382,5515,2363,5523,2352,5526,2346,L,5536,2327,Q,5540,2319,5543,2310,5554,2309,5555,2304,5556,2298,5556,2297,5556,2296,5557,2278,5557,2259,5557,2237,5556,2214,5559,2209,5562,2204,5572,2198,5577,2194,5577,2165,5577,2137,5567,2122,L,5567,2100,5575,2100,5575,2072,Q,5573,2068,5558,2069,5547,2069,5548,2059,L,5533,2059,Q,5534,2068,5516,2069,5511,2076,5502,2082,5476,2101,5457,2099,5443,2098,5435,2110,5419,2111,5408,2111,5395,2120,5388,2121,5366,2121,5363,2123,5338,2139,5324,2139,L,5268,2139,Q,5268,2138,5254,2152,5241,2167,5232,2169,5220,2178,5181,2179,L,5171,2178,Q,5163,2169,5148,2169,5138,2169,5137,2171,5134,2176,5125,2181,5116,2189,5103,2195,5091,2204,5083,2209,Q,5079,2211,5060,2211,Z]],label:"Eastern Africa",shortLabel:"EA",labelPosition:[422.2,332.4],labelAlignment:[CEN,MID]},"02":{outlines:[[M,1936,3068,L,1935,3094,1959,3094,1959,3068,Z],[M,2001,2956,Q,1993,2956,1992,2958,L,1992,2974,2003,2974,2004,2980,Q,2009,2978,2008,2975,2022,2981,2016,2957,L,2011,2957,2011,2949,2001,2949,Z],[M,3204,1421,Q,3175,1399,3121,1377,3052,1348,3039,1342,3003,1322,2992,1318,2975,1310,2966,1305,2956,1300,2942,1291,2928,1283,2911,1276,2879,1261,2870,1258,2816,1227,2793,1217,2720,1178,2718,1178,2704,1186,2697,1190,2678,1191,2672,1197,2651,1197,2647,1201,2642,1204,2635,1206,L,2635,1339,Q,2644,1346,2646,1352,L,2646,1363,Q,2654,1371,2669,1392,2684,1409,2705,1411,2706,1413,2707,1414,2709,1416,2712,1416,2714,1416,2714,1421,2714,1424,2707,1437,L,2707,1448,Q,2697,1451,2695,1458,2695,1460,2695,1480,2694,1502,2685,1520,L,2685,1570,Q,2685,1582,2684,1592,2683,1597,2677,1608,2679,1671,2671,1684,2669,1706,2663,1713,2634,1747,2624,1761,2592,1790,2579,1811,2578,1811,2554,1833,2547,1837,2546,1845,2539,1855,2536,1856,2536,1860,2531,1868,2526,1875,2526,1883,2527,1900,2505,1900,L,2505,1932,Q,2506,1933,2512,1941,2517,1947,2516,1953,2515,1962,2531,1973,2534,1978,2548,1990,2562,2002,2560,2021,2558,2040,2562,2046,2567,2053,2567,2053,2567,2058,2568,2068,2578,2085,2585,2092,2586,2095,2586,2116,2586,2142,2585,2144,2576,2150,2560,2163,2555,2168,2544,2170,2533,2172,2530,2177,2525,2196,2515,2201,2507,2215,2507,2216,2504,2221,2496,2230,2486,2258,2486,2260,2486,2268,2481,2276,2476,2283,2476,2290,2477,2303,2469,2321,2471,2331,2464,2340,2456,2349,2458,2358,2459,2369,2451,2375,2442,2381,2438,2385,2418,2399,2411,2412,2404,2420,2401,2425,2394,2435,2397,2445,2393,2455,2387,2460,2385,2471,2382,2478,2377,2490,2365,2510,2367,2522,2362,2529,2360,2534,2352,2544,2345,2554,2346,2566,2347,2570,2330,2570,2320,2570,2305,2563,2290,2557,2289,2553,2287,2546,2282,2544,2275,2541,2272,2538,2264,2529,2248,2529,L,2234,2529,Q,2224,2538,2220,2538,L,2187,2538,Q,2187,2556,2176,2566,L,2164,2575,Q,2162,2578,2157,2586,2155,2594,2138,2606,2133,2610,2134,2620,2126,2627,2126,2629,2125,2647,2121,2650,2112,2656,2115,2669,2112,2672,2109,2677,2105,2678,2104,2685,2102,2695,2099,2696,2097,2697,2097,2702,2097,2703,2097,2705,2097,2712,2104,2720,2106,2722,2110,2723,2117,2729,2120,2730,2131,2734,2147,2768,2161,2768,2196,2769,L,2196,2786,Q,2187,2787,2187,2792,2187,2795,2201,2812,2214,2829,2214,2851,2214,2870,2209,2886,L,2208,2886,2208,2915,Q,2210,2926,2194,2939,2197,2952,2185,2966,2175,2974,2175,2977,2172,2985,2166,2988,L,2166,3001,Q,2181,3006,2184,3011,2185,3013,2185,3032,L,2185,3051,Q,2183,3056,2180,3057,2177,3058,2177,3063,2177,3070,2181,3070,2184,3070,2187,3075,2191,3080,2209,3079,L,2209,3099,2204,3099,Q,2205,3093,2200,3092,2192,3091,2191,3090,L,2165,3090,Q,2165,3130,2156,3138,2150,3143,2126,3168,2126,3179,2132,3186,2136,3190,2138,3206,2143,3219,2155,3241,2161,3270,2203,3299,2220,3319,2264,3364,2308,3408,2321,3428,2334,3447,2353,3468,2356,3473,2368,3485,2378,3502,2379,3503,2397,3518,2395,3547,2393,3558,2402,3568,2411,3580,2413,3586,L,2413,3602,Q,2426,3624,2426,3625,2426,3626,2437,3649,2460,3697,2462,3699,2472,3712,2484,3749,2487,3758,2486,3782,2490,3795,2495,3810,2495,3828,2494,3829,2492,3832,2476,3846,2482,3888,2502,3926,2509,3938,2525,3958,2538,3978,2537,4001,2534,4008,2528,4015,2521,4022,2522,4037,L,2525,4064,Q,2523,4071,2516,4081,L,2516,4105,Q,2517,4115,2506,4123,2501,4128,2491,4132,L,2491,4133,Q,2483,4138,2472,4144,2466,4148,2458,4167,2450,4178,2440,4191,2421,4234,2418,4251,2416,4260,2413,4282,2405,4291,2403,4312,2397,4328,2397,4346,2397,4359,2385,4382,2382,4394,2374,4411,2374,4433,2371,4447,2365,4467,2365,4477,L,2365,4510,Q,2378,4512,2386,4506,2393,4500,2399,4498,2403,4496,2417,4510,2421,4500,2436,4490,2455,4478,2470,4478,2485,4479,2489,4485,2492,4491,2507,4491,2514,4500,2534,4519,L,2822,4520,Q,2829,4520,2874,4520,2897,4520,2909,4531,2915,4536,2921,4543,2927,4549,2937,4551,L,2959,4551,Q,2963,4551,2980,4558,2984,4560,3023,4560,3037,4560,3062,4571,L,3105,4571,3122,4580,Q,3125,4581,3148,4581,3175,4581,3180,4574,3183,4569,3195,4570,3201,4571,3212,4572,3219,4571,3225,4561,L,3241,4561,Q,3247,4561,3258,4562,3268,4562,3273,4556,3276,4552,3285,4550,3282,4532,3277,4530,3272,4527,3268,4523,3249,4512,3243,4504,3200,4471,3202,4447,3204,4422,3204,4400,L,3204,4163,3247,4163,Q,3253,4164,3267,4171,L,3301,4171,Q,3354,4171,3369,4172,L,3378,4172,Q,3375,4167,3364,4158,3356,4151,3356,4141,3356,4129,3361,4126,3366,4123,3366,4107,L,3365,4074,Q,3364,4067,3372,4043,3373,4040,3374,4007,3375,3990,3390,3990,3393,3990,3407,3991,3408,4004,3408,4034,L,3428,4034,Q,3435,4018,3441,4019,3450,4020,3462,4017,3473,4017,3475,4024,3476,4028,3475,4040,L,3482,4040,3482,4050,Q,3502,4045,3512,4065,3519,4068,3529,4071,3531,4073,3540,4085,L,3585,4085,Q,3580,4066,3605,4069,3622,4065,3635,4080,3650,4096,3662,4097,3667,4097,3672,4107,3678,4109,3691,4108,3705,4107,3707,4114,3708,4122,3713,4130,3717,4138,3733,4157,3737,4161,3745,4170,3753,4179,3762,4180,3770,4181,3800,4183,3823,4186,3825,4201,L,3832,4201,3832,4155,Q,3831,4140,3831,4108,3825,4106,3821,4113,3816,4119,3804,4120,3790,4121,3775,4111,3760,4100,3747,4090,3733,4079,3736,4053,3735,4047,3739,4040,3745,4032,3746,4024,3747,4021,3756,4013,L,3758,3998,Q,3761,3995,3765,3965,3767,3938,3767,3928,3767,3900,3761,3884,3754,3868,3754,3862,3754,3850,3759,3847,3767,3842,3767,3835,3767,3829,3772,3826,3778,3822,3778,3813,3786,3817,3798,3809,3811,3801,3813,3801,3825,3802,3834,3797,3842,3792,3852,3793,3869,3793,3890,3782,3900,3781,3915,3781,3926,3780,3926,3770,3926,3762,3922,3756,3917,3748,3915,3743,L,3915,3738,Q,3915,3731,3909,3726,3901,3719,3899,3717,3895,3711,3890,3694,3886,3686,3872,3673,3860,3657,3855,3652,3856,3647,3851,3640,3846,3632,3846,3627,3847,3622,3837,3602,3835,3582,3834,3574,3828,3557,3825,3550,L,3825,3450,Q,3822,3420,3822,3406,3822,3367,3821,3359,3819,3344,3815,3340,3805,3331,3803,3325,3802,3321,3791,3314,3781,3309,3782,3301,3784,3294,3789,3287,3794,3279,3800,3271,3806,3263,3814,3253,3822,3242,3833,3234,3845,3225,3851,3202,3856,3179,3856,3168,L,3859,3127,Q,3861,3104,3862,3097,3863,3090,3864,3075,3866,3060,3871,3056,3881,3047,3892,3027,3897,3018,3907,2998,3913,2989,3936,2971,3944,2959,3965,2944,3968,2938,3980,2934,3988,2932,3986,2923,L,3997,2923,3997,2916,Q,3985,2915,3970,2904,3948,2886,3946,2885,L,3946,2800,Q,3939,2795,3932,2788,3923,2779,3922,2778,3914,2775,3898,2763,3867,2720,3844,2720,3833,2720,3831,2726,3829,2731,3805,2732,L,3755,2732,Q,3758,2739,3743,2739,3734,2739,3729,2734,3720,2734,3716,2731,3706,2716,3700,2709,3677,2676,3673,2672,3668,2668,3667,2661,3665,2653,3662,2650,3656,2639,3649,2630,3639,2618,3629,2612,3608,2607,3604,2604,3593,2594,3579,2562,3566,2531,3552,2523,3517,2501,3475,2463,L,3475,2442,3467,2442,Q,3464,2422,3437,2414,3397,2403,3393,2400,3385,2389,3378,2383,3361,2381,3354,2379,3350,2373,3347,2371,3337,2371,3337,2366,3337,2342,3337,2339,L,3337,2316,Q,3345,2303,3345,2299,3345,2290,3328,2271,3325,2267,3309,2247,3301,2239,3299,2235,3297,2225,3293,2222,3278,2211,3278,2196,L,3280,2179,Q,3280,2168,3264,2142,3246,2114,3245,2110,L,3245,2095,Q,3238,2085,3237,2080,3238,2064,3237,2058,3235,2047,3221,2046,3203,2048,3197,2047,L,3197,2016,Q,3205,2016,3205,1998,3205,1993,3212,1988,3218,1984,3216,1979,3217,1976,3217,1965,3217,1958,3221,1955,3228,1949,3228,1932,L,3228,1906,Q,3228,1902,3234,1897,3239,1893,3237,1887,3245,1874,3268,1861,3266,1852,3271,1847,3279,1842,3280,1838,L,3280,1807,Q,3325,1807,3364,1802,L,3365,1767,Q,3363,1731,3357,1722,L,3357,1494,Q,3343,1490,3319,1478,3292,1465,3277,1461,3274,1460,3241,1441,Q,3212,1427,3204,1421,Z]],label:"Central Africa",shortLabel:"CA",labelPosition:[306.7,308],labelAlignment:[CEN,MID]},"03":{outlines:[[M,2171,71,Q,2162,59,2137,60,2121,60,2117,55,2112,50,2104,50,2089,54,2078,54,2066,54,2062,53,2058,51,2056,50,L,2006,50,Q,1998,55,1990,57,1962,58,1943,58,1850,60,1838,61,1813,69,1801,69,1780,69,1760,73,1719,80,1677,80,1627,80,1603,96,1589,105,1578,117,1560,133,1551,133,1536,132,1502,133,1493,133,1493,139,1483,149,1478,155,1456,177,1452,179,1446,182,1418,182,1417,182,1417,182,1390,186,1370,175,1343,160,1335,158,1262,160,1246,158,1228,155,1218,144,1207,133,1206,130,1204,127,1197,111,1190,96,1185,98,1181,100,1179,106,L,1166,109,Q,1154,123,1149,127,1127,144,1122,159,1117,173,1096,195,1092,210,1085,214,1082,215,1074,233,1065,236,1061,242,1056,250,1054,251,1042,259,1026,260,986,272,915,318,903,325,887,343,880,350,877,352,873,353,871,357,868,361,866,373,864,386,854,395,841,410,816,440,791,470,795,548,L,795,565,Q,796,571,786,577,771,604,768,608,731,650,715,649,676,679,656,688,636,698,618,707,599,716,564,720,530,724,519,739,508,754,493,770,489,790,481,796,474,800,459,818,L,433,837,Q,430,839,416,842,L,405,853,Q,402,854,385,875,383,877,372,901,369,907,361,925,358,931,352,953,348,971,338,979,336,982,324,991,312,1e3,310,1005,307,1009,298,1018,289,1026,276,1047,243,1072,216,1117,217,1134,197,1157,187,1170,165,1193,158,1201,142,1233,141,1234,137,1257,133,1273,122,1272,122,1273,121,1273,L,121,1291,128,1291,128,1281,133,1281,Q,137,1280,143,1272,151,1261,163,1261,L,219,1261,Q,228,1261,260,1260,289,1261,293,1271,L,445,1271,Q,444,1218,444,1193,444,1149,467,1130,491,1109,521,1100,547,1102,555,1096,L,554,1060,Q,554,1047,562,1028,L,563,997,Q,563,984,571,967,578,949,574,933,L,574,888,Q,578,884,595,884,609,884,628,889,646,893,667,893,684,893,712,892,733,893,739,904,L,831,904,Q,836,888,837,819,L,864,819,Q,894,846,935,878,976,910,987,918,998,925,1007,933,1012,938,1033,951,1037,955,1057,971,1092,998,1130,1027,1169,1057,1208,1085,1217,1094,1232,1103,1251,1117,1259,1124,1266,1131,1283,1141,1299,1151,1309,1161,1328,1179,1367,1208,1403,1235,1413,1242,1422,1248,1437,1260,1452,1272,1473,1287,L,1528,1330,Q,1544,1342,1546,1353,1548,1364,1560,1369,1572,1374,1573,1375,1580,1385,1594,1400,1596,1403,1603,1412,1615,1419,1616,1419,1625,1419,1643,1437,1657,1437,1688,1439,1688,1441,1695,1450,1698,1454,1698,1463,1699,1467,1707,1470,L,1707,1504,Q,1703,1507,1698,1509,1697,1510,1697,1515,1697,1522,1698,1523,1702,1525,1706,1530,L,1734,1530,Q,1740,1530,1760,1521,L,1789,1521,Q,1794,1521,1799,1513,1804,1508,1811,1509,1818,1509,1840,1500,1847,1497,1867,1497,1879,1488,1909,1479,1920,1471,1988,1422,2018,1401,2081,1364,2144,1320,2276,1234,2295,1221,2360,1183,2380,1169,2477,1169,2479,1169,2539,1169,2566,1170,2580,1177,L,2580,1178,Q,2592,1184,2599,1198,2603,1207,2625,1207,L,2626,1207,Q,2631,1207,2635,1206,2642,1204,2647,1201,2651,1197,2672,1197,2678,1191,2697,1190,2704,1186,2718,1178,2720,1178,2793,1217,2816,1227,2870,1258,2879,1261,2911,1276,2928,1283,2942,1291,2956,1300,2966,1305,2975,1310,2992,1318,3003,1322,3039,1342,3052,1348,3121,1377,3175,1399,3204,1421,3212,1427,3241,1441,3274,1460,3277,1461,3292,1465,3319,1478,3343,1490,3357,1494,L,3357,1722,Q,3363,1731,3365,1767,L,3364,1802,Q,3325,1807,3280,1807,L,3280,1838,Q,3279,1842,3271,1847,3266,1852,3268,1861,3245,1874,3237,1887,3239,1893,3234,1897,3228,1902,3228,1906,L,3228,1932,Q,3228,1949,3221,1955,3217,1958,3217,1965,3217,1976,3216,1979,3218,1984,3212,1988,3205,1993,3205,1998,3205,2016,3197,2016,L,3197,2047,Q,3203,2048,3221,2046,3235,2047,3237,2058,3238,2064,3237,2080,3238,2085,3245,2095,L,3245,2110,Q,3246,2114,3264,2142,3280,2168,3280,2179,L,3278,2196,Q,3278,2211,3293,2222,3297,2225,3299,2235,3301,2239,3309,2247,3325,2267,3328,2271,3345,2290,3345,2299,3345,2303,3337,2316,L,3337,2339,Q,3337,2342,3337,2366,3337,2371,3347,2371,3350,2373,3354,2379,3361,2381,3378,2383,3385,2389,3393,2400,3397,2403,3437,2414,3464,2422,3467,2442,L,3475,2442,3475,2463,Q,3517,2501,3552,2523,3566,2531,3579,2562,3593,2594,3604,2604,3608,2607,3629,2612,3639,2618,3649,2630,3656,2639,3662,2650,3665,2653,3667,2661,3668,2668,3673,2672,3677,2676,3700,2709,3706,2716,3716,2731,3720,2734,3729,2734,3734,2739,3743,2739,3758,2739,3755,2732,L,3805,2732,Q,3829,2731,3831,2726,3833,2720,3844,2720,3867,2720,3898,2763,3914,2775,3922,2778,3923,2779,3932,2788,3939,2795,3946,2800,3946,2799,3953,2795,3959,2792,3973,2789,3998,2789,4013,2796,4028,2802,4042,2803,4056,2803,4065,2799,4075,2794,4091,2793,4107,2793,4125,2794,4140,2794,4148,2790,4159,2785,4182,2762,4193,2753,4215,2740,4219,2737,4226,2727,4234,2719,4246,2719,4282,2719,4290,2717,4314,2712,4338,2715,4349,2714,4349,2688,4351,2668,4348,2660,4343,2648,4334,2647,4305,2641,4292,2627,4281,2615,4270,2591,4251,2548,4250,2547,4244,2535,4219,2518,4198,2503,4196,2489,4192,2463,4168,2458,4148,2458,4139,2455,4122,2450,4117,2449,L,4117,2432,4125,2432,4125,2401,4168,2401,Q,4170,2401,4180,2392,4182,2390,4192,2388,4198,2380,4202,2380,4208,2378,4208,2370,L,4208,2336,Q,4207,2275,4210,2235,4214,2194,4226,2191,4237,2186,4252,2187,4257,2179,4257,2165,4257,2155,4263,2148,4268,2142,4267,2135,4265,2120,4278,2103,4296,2078,4299,2073,4305,2060,4320,2049,4334,2038,4336,2030,4339,2023,4347,2016,4356,2009,4356,1995,4357,1981,4363,1970,4367,1900,4366,1885,4364,1869,4367,1840,4367,1839,4367,1839,4368,1835,4375,1820,4376,1802,4376,1796,4376,1778,4376,1770,4377,1756,4384,1749,L,4383,1725,Q,4383,1711,4388,1701,4393,1671,4395,1659,4415,1662,4427,1649,4439,1637,4452,1639,4457,1629,4466,1628,4470,1628,4479,1621,4487,1614,4490,1611,4493,1608,4497,1598,4500,1589,4507,1588,4505,1585,4504,1580,4502,1568,4491,1563,4479,1558,4467,1548,4454,1537,4450,1533,4431,1525,4420,1520,4409,1514,4410,1497,4410,1480,4408,1472,4402,1457,4402,1456,4400,1446,4390,1377,4390,1363,4390,1356,4390,1344,4381,1338,4375,1333,4371,1322,4367,1309,4364,1306,4358,1297,4352,1273,4346,1250,4337,1241,4326,1221,4317,1219,4300,1216,4286,1205,4268,1189,4263,1183,4235,1177,4235,1163,4235,1148,4225,1141,L,4225,1104,4249,1104,Q,4250,1099,4236,1098,4233,1082,4210,1065,4184,1045,4180,1038,4144,986,4132,960,4096,908,4086,879,4073,863,4072,861,4067,848,4060,842,4050,835,4046,820,4040,804,4038,801,L,4038,774,Q,4019,751,4006,746,4e3,743,3992,733,3983,719,3979,715,3962,699,3959,681,3955,658,3954,658,3947,648,3938,643,L,3938,606,3948,606,Q,3952,618,3963,626,3964,629,3978,652,3989,672,3994,675,3998,677,4002,687,4005,694,4016,692,L,4016,710,Q,4016,714,4024,722,4029,726,4044,744,4049,746,4066,761,4081,766,4086,781,4093,781,4100,770,4106,767,4108,758,4107,744,4107,737,4107,725,4115,722,4123,664,4123,649,4123,632,4115,628,4105,624,4105,611,4104,600,4096,587,4087,575,4084,570,4057,522,4050,488,L,4033,488,Q,4027,495,3998,509,3969,522,3959,522,3951,522,3947,518,3942,512,3935,509,3915,506,3908,499,3894,484,3886,482,3882,481,3856,481,3835,479,3827,482,3813,494,3805,493,3796,492,3777,493,3760,493,3751,496,3736,502,3710,527,3689,548,3670,548,3661,540,3651,540,3633,540,3629,536,3621,527,3612,527,L,3585,527,Q,3578,527,3574,523,3568,517,3565,516,L,3542,516,Q,3532,507,3525,506,3508,504,3496,506,3484,508,3473,504,3460,498,3451,498,L,3398,498,Q,3383,497,3364,478,3345,459,3328,458,L,3263,458,Q,3244,448,3237,449,3219,449,3219,434,3219,422,3218,420,3206,418,3204,417,3199,413,3176,411,3161,400,3152,400,L,3094,400,Q,3083,400,3076,407,3044,418,3037,423,3010,443,3003,450,2994,461,2994,487,2994,511,3001,515,3007,518,3007,539,L,3007,555,Q,3006,562,2998,567,2993,583,2980,593,2957,610,2957,611,2955,611,2931,611,2906,611,2901,606,2893,594,2877,582,2862,571,2850,571,2845,571,2817,560,2796,559,2785,553,2775,547,2753,547,2747,547,2739,541,2732,536,2724,537,2714,538,2707,534,2696,529,2694,528,2683,526,2672,512,2658,496,2650,492,2643,488,2643,460,2643,436,2626,437,2610,437,2591,429,2570,421,2562,420,2532,414,2524,412,2517,410,2510,405,2504,400,2500,400,2495,400,2487,403,2479,406,2453,406,2426,407,2375,384,2362,370,2349,367,2337,363,2336,357,2336,352,2333,338,2330,324,2328,322,2318,321,2316,321,2287,338,2286,338,2280,338,2272,327,2265,317,2265,312,2265,298,2312,262,2358,225,2358,199,2358,182,2356,180,2345,168,2341,162,2327,155,2324,151,2318,145,2318,130,2318,116,2319,114,2321,113,2336,102,2356,83,2356,77,2356,64,2349,57,L,2334,57,2334,63,Q,2327,62,2316,80,2308,75,2306,63,2304,52,2297,47,2285,40,2277,40,L,2252,40,Q,2220,40,2215,42,2201,45,2196,62,L,2186,62,2185,71,Z]],label:"Northern Africa",shortLabel:"NA",labelPosition:[174.5,81.8],labelAlignment:[CEN,MID]},"04":{outlines:[[M,3333,4544,Q,3327,4549,3302,4549,3292,4549,3285,4550,3276,4552,3273,4556,3268,4562,3258,4562,3247,4561,3241,4561,L,3225,4561,Q,3219,4571,3212,4572,3201,4571,3195,4570,3183,4569,3180,4574,3175,4581,3148,4581,3125,4581,3122,4580,L,3105,4571,3062,4571,Q,3037,4560,3023,4560,2984,4560,2980,4558,2963,4551,2959,4551,L,2937,4551,Q,2927,4549,2921,4543,2915,4536,2909,4531,2897,4520,2874,4520,2829,4520,2822,4520,L,2534,4519,Q,2514,4500,2507,4491,2492,4491,2489,4485,2485,4479,2470,4478,2455,4478,2436,4490,2421,4500,2417,4510,2403,4496,2399,4498,2393,4500,2386,4506,2378,4512,2365,4510,L,2365,4515,Q,2365,4558,2366,4567,2369,4589,2383,4609,2393,4623,2416,4648,2427,4667,2442,4690,2469,4729,2493,4779,2511,4819,2546,4883,2553,4897,2576,4929,2594,4961,2587,4989,L,2588,5087,Q,2598,5096,2612,5138,2615,5144,2617,5171,2617,5175,2624,5201,2628,5213,2624,5237,2625,5241,2632,5249,2637,5256,2638,5262,2640,5294,2645,5328,L,2645,5347,Q,2654,5354,2676,5380,2698,5405,2711,5416,2723,5426,2740,5455,2757,5485,2763,5494,2768,5503,2774,5515,2779,5527,2788,5543,2794,5564,2811,5589,2820,5603,2834,5631,2847,5660,2856,5680,2869,5700,2875,5715,2877,5724,2875,5744,2875,5767,2874,5778,2877,5792,2848,5786,L,2848,5817,Q,2856,5830,2872,5866,2889,5899,2907,5911,2922,5921,2947,5943,2972,5958,3008,5951,3008,5950,3015,5944,3019,5940,3024,5941,3032,5942,3044,5932,3066,5929,3104,5932,3131,5933,3140,5915,3143,5907,3156,5905,3162,5903,3178,5904,L,3179,5904,Q,3179,5904,3180,5904,3198,5902,3216,5911,L,3254,5911,Q,3301,5908,3311,5915,3321,5923,3335,5922,3349,5920,3353,5914,3356,5907,3372,5908,3389,5909,3406,5909,3415,5906,3416,5890,L,3487,5890,Q,3493,5889,3503,5875,3508,5867,3517,5859,3547,5836,3556,5828,3565,5815,3573,5809,3584,5801,3590,5796,3595,5792,3603,5785,3609,5776,3612,5773,L,3637,5752,Q,3666,5723,3682,5709,L,3756,5642,3766,5631,Q,3775,5625,3838,5563,3845,5555,3890,5515,L,3926,5491,Q,3943,5471,3948,5464,3959,5442,3966,5433,3963,5424,3969,5415,3976,5405,3977,5399,3987,5374,3987,5358,3986,5350,3995,5328,L,3938,5328,3938,5128,Q,3929,5100,3929,5050,3931,4994,3930,4967,3921,4970,3908,4961,3891,4950,3887,4949,3884,4948,3834,4948,3819,4939,3816,4939,3794,4940,3792,4937,3787,4928,3770,4928,3752,4929,3748,4927,L,3748,4918,Q,3738,4911,3720,4912,3703,4898,3691,4901,3676,4904,3662,4892,3650,4882,3648,4870,3639,4855,3635,4845,3630,4832,3634,4810,3636,4796,3621,4789,3609,4779,3599,4774,3594,4772,3580,4754,3566,4746,3559,4741,L,3521,4703,Q,3508,4690,3490,4660,3485,4642,3478,4634,3468,4623,3465,4611,3460,4602,3456,4591,3453,4583,3446,4570,3424,4546,3424,4530,L,3395,4530,Q,3390,4539,3365,4539,Q,3339,4538,3333,4544,Z]],label:"Southern Africa",shortLabel:"SA",labelPosition:[318,521.6],labelAlignment:[CEN,MID]},"05":{outlines:[[M,1413,1242,Q,1403,1235,1367,1208,1328,1179,1309,1161,1299,1151,1283,1141,1266,1131,1259,1124,1251,1117,1232,1103,1217,1094,1208,1085,1169,1057,1130,1027,1092,998,1057,971,1037,955,1033,951,1012,938,1007,933,998,925,987,918,976,910,935,878,894,846,864,819,L,837,819,Q,836,888,831,904,L,739,904,Q,733,893,712,892,684,893,667,893,646,893,628,889,609,884,595,884,578,884,574,888,L,574,933,Q,578,949,571,967,563,984,563,997,L,562,1028,Q,554,1047,554,1060,L,555,1096,Q,547,1102,521,1100,491,1109,467,1130,444,1149,444,1193,444,1218,445,1271,L,293,1271,Q,289,1261,260,1260,228,1261,219,1261,L,163,1261,Q,151,1261,143,1272,137,1280,133,1281,L,141,1281,Q,142,1288,153,1317,177,1316,174,1348,172,1361,168,1392,146,1423,146,1426,146,1435,155,1443,163,1451,162,1463,160,1479,162,1520,L,162,1585,Q,158,1599,145,1633,145,1638,139,1645,134,1651,134,1658,130,1665,124,1684,122,1687,116,1706,115,1707,108,1715,104,1720,105,1725,105,1727,106,1728,107,1758,82,1781,74,1789,59,1798,L,43,1817,34,1822,34,1831,Q,40,1834,50,1851,56,1860,66,1873,67,1877,67,1887,70,1891,76,1896,79,1907,85,1921,85,1931,81,1933,72,1936,74,1942,74,1950,69,1955,63,1960,63,1964,63,1985,61,2024,61,2047,63,2048,64,2048,96,2051,94,2064,97,2069,100,2073,108,2080,123,2082,125,2085,126,2087,137,2087,146,2087,158,2079,168,2079,164,2128,165,2139,179,2145,188,2148,190,2154,191,2158,192,2167,L,209,2167,Q,215,2171,216,2175,218,2179,221,2180,224,2181,231,2185,232,2187,235,2201,236,2213,247,2225,253,2232,268,2246,L,309,2293,Q,314,2298,316,2310,317,2321,321,2324,331,2332,326,2359,L,326,2388,Q,349,2411,351,2415,354,2422,357,2433,360,2437,374,2442,L,386,2453,Q,397,2461,397,2469,397,2475,425,2486,453,2496,487,2524,490,2526,513,2547,522,2555,544,2567,567,2588,600,2620,620,2637,658,2665,685,2695,721,2710,736,2717,756,2726,772,2732,798,2732,814,2732,829,2727,850,2720,857,2720,882,2720,889,2713,892,2710,906,2710,917,2710,919,2702,L,926,2702,Q,945,2701,994,2684,1024,2680,1038,2673,1051,2665,1062,2665,1074,2665,1081,2673,L,1137,2673,Q,1151,2673,1160,2681,1173,2681,1179,2688,1182,2693,1199,2693,1210,2698,1220,2701,1224,2702,1230,2708,1234,2713,1239,2713,1250,2713,1264,2703,1278,2693,1290,2688,1301,2683,1308,2682,1314,2680,1327,2666,1344,2660,1349,2657,1356,2652,1364,2651,1374,2650,1390,2642,1405,2633,1413,2635,1421,2637,1446,2622,1456,2622,1474,2622,1478,2622,1495,2610,1502,2601,1516,2599,1527,2597,1562,2586,1576,2582,1617,2578,1664,2584,1713,2580,L,1750,2579,Q,1787,2578,1813,2616,1839,2654,1848,2673,1857,2708,1857,2709,1875,2741,1922,2741,1951,2741,1957,2735,1960,2731,1972,2729,1983,2727,1986,2720,L,2005,2720,2005,2732,2076,2732,Q,2075,2725,2076,2720,L,2075,2707,2082,2707,Q,2081,2702,2097,2702,2097,2697,2099,2696,2102,2695,2104,2685,2105,2678,2109,2677,2112,2672,2115,2669,2112,2656,2121,2650,2125,2647,2126,2629,2126,2627,2134,2620,2133,2610,2138,2606,2155,2594,2157,2586,2162,2578,2164,2575,L,2176,2566,Q,2187,2556,2187,2538,L,2220,2538,Q,2224,2538,2234,2529,L,2248,2529,Q,2264,2529,2272,2538,2275,2541,2282,2544,2287,2546,2289,2553,2290,2557,2305,2563,2320,2570,2330,2570,2347,2570,2346,2566,2345,2554,2352,2544,2360,2534,2362,2529,2367,2522,2365,2510,2377,2490,2382,2478,2385,2471,2387,2460,2393,2455,2397,2445,2394,2435,2401,2425,2404,2420,2411,2412,2418,2399,2438,2385,2442,2381,2451,2375,2459,2369,2458,2358,2456,2349,2464,2340,2471,2331,2469,2321,2477,2303,2476,2290,2476,2283,2481,2276,2486,2268,2486,2260,2486,2258,2496,2230,2504,2221,2507,2216,2507,2215,2515,2201,2525,2196,2530,2177,2533,2172,2544,2170,2555,2168,2560,2163,2576,2150,2585,2144,2586,2142,2586,2116,2586,2095,2585,2092,2578,2085,2568,2068,2567,2058,2567,2053,2567,2053,2562,2046,2558,2040,2560,2021,2562,2002,2548,1990,2534,1978,2531,1973,2515,1962,2516,1953,2517,1947,2512,1941,2506,1933,2505,1932,L,2505,1900,Q,2527,1900,2526,1883,2526,1875,2531,1868,2536,1860,2536,1856,2539,1855,2546,1845,2547,1837,2554,1833,2578,1811,2579,1811,2592,1790,2624,1761,2634,1747,2663,1713,2669,1706,2671,1684,2679,1671,2677,1608,2683,1597,2684,1592,2685,1582,2685,1570,L,2685,1520,Q,2694,1502,2695,1480,2695,1460,2695,1458,2697,1451,2707,1448,L,2707,1437,Q,2714,1424,2714,1421,2714,1416,2712,1416,2709,1416,2707,1414,2706,1413,2705,1411,2684,1409,2669,1392,2654,1371,2646,1363,L,2646,1352,Q,2644,1346,2635,1339,L,2635,1207,2625,1207,Q,2603,1207,2599,1198,2592,1184,2580,1178,L,2580,1177,Q,2566,1170,2539,1169,2479,1169,2477,1169,2380,1169,2360,1183,2295,1221,2276,1234,2144,1320,2081,1364,2018,1401,1988,1422,1920,1471,1909,1479,1879,1488,1867,1497,1847,1497,1840,1500,1818,1509,1811,1509,1804,1508,1799,1513,1794,1521,1789,1521,L,1760,1521,Q,1740,1530,1734,1530,L,1706,1530,Q,1702,1525,1698,1523,1697,1522,1697,1515,1697,1510,1698,1509,1703,1507,1707,1504,L,1707,1470,Q,1699,1467,1698,1463,1698,1454,1695,1450,1688,1441,1688,1439,1657,1437,1643,1437,1625,1419,1616,1419,1615,1419,1603,1412,1596,1403,1594,1400,1580,1385,1573,1375,1572,1374,1560,1369,1548,1364,1546,1353,1544,1342,1528,1330,L,1473,1287,Q,1452,1272,1437,1260,Q,1422,1248,1413,1242,Z]],label:"Western Africa",shortLabel:"WA",labelPosition:[90.5,181.3],labelAlignment:[CEN,MID]}}}];exports["default"]={extension:geodefinitions,name:"africaregion",type:"maps"}}})});