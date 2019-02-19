/**
 * Created by whm on 2016/5/24.
 */
var agricEnterpSupport=function () {
    var enterpSupport = function () {
       var option = {
            title : {
                text: '企业评级',
                subtext: '九次方财富咨询',
                sublink: 'http://www.jusfoun.com',
                x:'center'
            },
           tooltip: {
               trigger: 'item'
           },
           legend: {
               orient: 'vertical',
               x: 'left',
               data: ['企业评级综合值']
           },
           dataRange: {
               min: 0,
               max: 500,
               calculable: true,
               color: ['maroon', 'purple', 'red', 'orange', 'yellow', 'lightgreen']
           },
           
           series : [
               {
                   name: '企业评级综合值',
                   type: 'map',
                   mapType: 'china',
                   selectedMode : 'single',
                   itemStyle:{
                       normal:{label:{show:true}},
                       emphasis:{label:{show:true}}
                   },
                   data:[
                       {name: '北京',value: Math.round(Math.random()*300)},
                       {name: '天津',value: Math.round(Math.random()*300)},
                       {name: '上海',value: Math.round(Math.random()*300)},
                       {name: '重庆',value: Math.round(Math.random()*300)},
                       {name: '河北',value: Math.round(Math.random()*300)},
                       {name: '河南',value: Math.round(Math.random()*300)},
                       {name: '云南',value: Math.round(Math.random()*300)},
                       {name: '辽宁',value: Math.round(Math.random()*300)},
                       {name: '黑龙江',value: Math.round(Math.random()*300)},
                       {name: '湖南',value: Math.round(Math.random()*300)},
                       {name: '安徽',value: Math.round(Math.random()*300)},
                       {name: '山东',value: Math.round(Math.random()*300)},
                       {name: '新疆',value: Math.round(Math.random()*300)},
                       {name: '江苏',value: Math.round(Math.random()*300)},
                       {name: '浙江',value: Math.round(Math.random()*300)},
                       {name: '江西',value: Math.round(Math.random()*300)},
                       {name: '湖北',value: Math.round(Math.random()*300)},
                       {name: '广西',value: Math.round(Math.random()*300)},
                       {name: '甘肃',value: Math.round(Math.random()*300)},
                       {name: '山西',value: Math.round(Math.random()*300)},
                       {name: '内蒙古',value:200},
                       {name: '陕西',value: Math.round(Math.random()*300)},
                       {name: '吉林',value: Math.round(Math.random()*300)},
                       {name: '福建',value: Math.round(Math.random()*300)},
                       {name: '贵州',value: Math.round(Math.random()*300)},
                       {name: '广东',value: Math.round(Math.random()*300)},
                       {name: '青海',value: Math.round(Math.random()*300)},
                       {name: '西藏',value: Math.round(Math.random()*300)},
                       {name: '四川',value: Math.round(Math.random()*300)},
                       {name: '宁夏',value: Math.round(Math.random()*300)},
                       {name: '海南',value: Math.round(Math.random()*300)},
                       {name: '台湾',value: Math.round(Math.random()*300)},
                       {name: '香港',value: Math.round(Math.random()*300)},
                       {name: '澳门',value: Math.round(Math.random()*300)}
                   ],
                   markPoint : {
                       symbolSize: 5,       // 标注大小，半宽（半径）参数，当图形为方向或菱形则总宽度为symbolSize * 2
                       itemStyle: {
                           normal: {
                               borderColor: '#87cefa',
                               borderWidth: 1,            // 标注边线线宽，单位px，默认为1
                               label: {
                                   show: false
                               }
                           },
                           emphasis: {
                               borderColor: '#1e90ff',
                               borderWidth: 5,
                               label: {
                                   show: false
                               }
                           }
                       },
                       data : [
                           {name: "海门", value: 9},
                           {name: "鄂尔多斯", value: 12},
                           {name: "招远", value: 12},
                           {name: "舟山", value: 12},
                           {name: "齐齐哈尔", value: 14},
                           {name: "盐城", value: 15},
                           {name: "赤峰", value: 16},
                           {name: "青岛", value: 18},
                           {name: "乳山", value: 18},
                           {name: "金昌", value: 19},
                           {name: "泉州", value: 21},
                           {name: "莱西", value: 21},
                           {name: "日照", value: 21},
                           {name: "胶南", value: 22},
                           {name: "南通", value: 23},
                           {name: "拉萨", value: 24},
                           {name: "云浮", value: 24},
                           {name: "梅州", value: 25},
                           {name: "文登", value: 25},
                           {name: "上海", value: 25},
                           {name: "攀枝花", value: 25},
                           {name: "威海", value: 25},
                           {name: "承德", value: 25},
                           {name: "厦门", value: 26},
                           {name: "汕尾", value: 26},
                           {name: "潮州", value: 26},
                           {name: "丹东", value: 27},
                           {name: "太仓", value: 27},
                           {name: "曲靖", value: 27},
                           {name: "烟台", value: 28},
                           {name: "福州", value: 29},
                           {name: "瓦房店", value: 30},
                           {name: "即墨", value: 30},
                           {name: "抚顺", value: 31},
                           {name: "玉溪", value: 31},
                           {name: "张家口", value: 31},
                           {name: "阳泉", value: 31},
                           {name: "莱州", value: 32},
                           {name: "湖州", value: 32},
                           {name: "汕头", value: 32},
                           {name: "昆山", value: 33},
                           {name: "宁波", value: 33},
                           {name: "湛江", value: 33},
                           {name: "揭阳", value: 34},
                           {name: "荣成", value: 34},
                           {name: "连云港", value: 35},
                           {name: "葫芦岛", value: 35},
                           {name: "常熟", value: 36},
                           {name: "东莞", value: 36},
                           {name: "河源", value: 36},
                           {name: "淮安", value: 36},
                           {name: "泰州", value: 36},
                           {name: "南宁", value: 37},
                           {name: "营口", value: 37},
                           {name: "惠州", value: 37},
                           {name: "江阴", value: 37},
                           {name: "蓬莱", value: 37},
                           {name: "韶关", value: 38},
                           {name: "嘉峪关", value: 38},
                           {name: "广州", value: 38},
                           {name: "延安", value: 38},
                           {name: "太原", value: 39},
                           {name: "清远", value: 39},
                           {name: "中山", value: 39},
                           {name: "昆明", value: 39},
                           {name: "寿光", value: 40},
                           {name: "盘锦", value: 40},
                           {name: "长治", value: 41},
                           {name: "深圳", value: 41},
                           {name: "珠海", value: 42},
                           {name: "宿迁", value: 43},
                           {name: "咸阳", value: 43},
                           {name: "铜川", value: 44},
                           {name: "平度", value: 44},
                           {name: "佛山", value: 44},
                           {name: "海口", value: 44},
                           {name: "江门", value: 45},
                           {name: "章丘", value: 45},
                           {name: "肇庆", value: 46},
                           {name: "大连", value: 47},
                           {name: "临汾", value: 47},
                           {name: "吴江", value: 47},
                           {name: "石嘴山", value: 49},
                           {name: "沈阳", value: 50},
                           {name: "苏州", value: 50},
                           {name: "茂名", value: 50},
                           {name: "嘉兴", value: 51},
                           {name: "长春", value: 51},
                           {name: "胶州", value: 52},
                           {name: "银川", value: 52},
                           {name: "张家港", value: 52},
                           {name: "三门峡", value: 53},
                           {name: "锦州", value: 54},
                           {name: "南昌", value: 54},
                           {name: "柳州", value: 54},
                           {name: "三亚", value: 54},
                           {name: "自贡", value: 56},
                           {name: "吉林", value: 56},
                           {name: "阳江", value: 57},
                           {name: "泸州", value: 57},
                           {name: "西宁", value: 57},
                           {name: "宜宾", value: 58},
                           {name: "呼和浩特", value: 58},
                           {name: "成都", value: 58},
                           {name: "大同", value: 58},
                           {name: "镇江", value: 59},
                           {name: "桂林", value: 59},
                           {name: "张家界", value: 59},
                           {name: "宜兴", value: 59},
                           {name: "北海", value: 60},
                           {name: "西安", value: 61},
                           {name: "金坛", value: 62},
                           {name: "东营", value: 62},
                           {name: "牡丹江", value: 63},
                           {name: "遵义", value: 63},
                           {name: "绍兴", value: 63},
                           {name: "扬州", value: 64},
                           {name: "常州", value: 64},
                           {name: "潍坊", value: 65},
                           {name: "重庆", value: 66},
                           {name: "台州", value: 67},
                           {name: "南京", value: 67},
                           {name: "滨州", value: 70},
                           {name: "贵阳", value: 71},
                           {name: "无锡", value: 71},
                           {name: "本溪", value: 71},
                           {name: "克拉玛依", value: 72},
                           {name: "渭南", value: 72},
                           {name: "马鞍山", value: 72},
                           {name: "宝鸡", value: 72},
                           {name: "焦作", value: 75},
                           {name: "句容", value: 75},
                           {name: "北京", value: 79},
                           {name: "徐州", value: 79},
                           {name: "衡水", value: 80},
                           {name: "包头", value: 80},
                           {name: "绵阳", value: 80},
                           {name: "乌鲁木齐", value: 84},
                           {name: "枣庄", value: 84},
                           {name: "杭州", value: 84},
                           {name: "淄博", value: 85},
                           {name: "鞍山", value: 86},
                           {name: "溧阳", value: 86},
                           {name: "库尔勒", value: 86},
                           {name: "安阳", value: 90},
                           {name: "开封", value: 90},
                           {name: "济南", value: 92},
                           {name: "德阳", value: 93},
                           {name: "温州", value: 95},
                           {name: "九江", value: 96},
                           {name: "邯郸", value: 98},
                           {name: "临安", value: 99},
                           {name: "兰州", value: 99},
                           {name: "沧州", value: 100},
                           {name: "临沂", value: 103},
                           {name: "南充", value: 104},
                           {name: "天津", value: 105},
                           {name: "富阳", value: 106},
                           {name: "泰安", value: 112},
                           {name: "诸暨", value: 112},
                           {name: "郑州", value: 113},
                           {name: "哈尔滨", value: 114},
                           {name: "聊城", value: 116},
                           {name: "芜湖", value: 117},
                           {name: "唐山", value: 119},
                           {name: "平顶山", value: 119},
                           {name: "邢台", value: 119},
                           {name: "德州", value: 120},
                           {name: "济宁", value: 120},
                           {name: "荆州", value: 127},
                           {name: "宜昌", value: 130},
                           {name: "义乌", value: 132},
                           {name: "丽水", value: 133},
                           {name: "洛阳", value: 134},
                           {name: "秦皇岛", value: 136},
                           {name: "株洲", value: 143},
                           {name: "石家庄", value: 147},
                           {name: "莱芜", value: 148},
                           {name: "常德", value: 152},
                           {name: "保定", value: 153},
                           {name: "湘潭", value: 154},
                           {name: "金华", value: 157},
                           {name: "岳阳", value: 169},
                           {name: "长沙", value: 175},
                           {name: "衢州", value: 177},
                           {name: "廊坊", value: 193},
                           {name: "菏泽", value: 194},
                           {name: "合肥", value: 229},
                           {name: "武汉", value: 273},
                           {name: "大庆", value: 279}
                       ]
                   },
                   geoCoord: {
                       "海门":[121.15,31.89],
                       "鄂尔多斯":[109.781327,39.608266],
                       "招远":[120.38,37.35],
                       "舟山":[122.207216,29.985295],
                       "齐齐哈尔":[123.97,47.33],
                       "盐城":[120.13,33.38],
                       "赤峰":[118.87,42.28],
                       "青岛":[120.33,36.07],
                       "乳山":[121.52,36.89],
                       "金昌":[102.188043,38.520089],
                       "泉州":[118.58,24.93],
                       "莱西":[120.53,36.86],
                       "日照":[119.46,35.42],
                       "胶南":[119.97,35.88],
                       "南通":[121.05,32.08],
                       "拉萨":[91.11,29.97],
                       "云浮":[112.02,22.93],
                       "梅州":[116.1,24.55],
                       "文登":[122.05,37.2],
                       "上海":[121.48,31.22],
                       "攀枝花":[101.718637,26.582347],
                       "威海":[122.1,37.5],
                       "承德":[117.93,40.97],
                       "厦门":[118.1,24.46],
                       "汕尾":[115.375279,22.786211],
                       "潮州":[116.63,23.68],
                       "丹东":[124.37,40.13],
                       "太仓":[121.1,31.45],
                       "曲靖":[103.79,25.51],
                       "烟台":[121.39,37.52],
                       "福州":[119.3,26.08],
                       "瓦房店":[121.979603,39.627114],
                       "即墨":[120.45,36.38],
                       "抚顺":[123.97,41.97],
                       "玉溪":[102.52,24.35],
                       "张家口":[114.87,40.82],
                       "阳泉":[113.57,37.85],
                       "莱州":[119.942327,37.177017],
                       "湖州":[120.1,30.86],
                       "汕头":[116.69,23.39],
                       "昆山":[120.95,31.39],
                       "宁波":[121.56,29.86],
                       "湛江":[110.359377,21.270708],
                       "揭阳":[116.35,23.55],
                       "荣成":[122.41,37.16],
                       "连云港":[119.16,34.59],
                       "葫芦岛":[120.836932,40.711052],
                       "常熟":[120.74,31.64],
                       "东莞":[113.75,23.04],
                       "河源":[114.68,23.73],
                       "淮安":[119.15,33.5],
                       "泰州":[119.9,32.49],
                       "南宁":[108.33,22.84],
                       "营口":[122.18,40.65],
                       "惠州":[114.4,23.09],
                       "江阴":[120.26,31.91],
                       "蓬莱":[120.75,37.8],
                       "韶关":[113.62,24.84],
                       "嘉峪关":[98.289152,39.77313],
                       "广州":[113.23,23.16],
                       "延安":[109.47,36.6],
                       "太原":[112.53,37.87],
                       "清远":[113.01,23.7],
                       "中山":[113.38,22.52],
                       "昆明":[102.73,25.04],
                       "寿光":[118.73,36.86],
                       "盘锦":[122.070714,41.119997],
                       "长治":[113.08,36.18],
                       "深圳":[114.07,22.62],
                       "珠海":[113.52,22.3],
                       "宿迁":[118.3,33.96],
                       "咸阳":[108.72,34.36],
                       "铜川":[109.11,35.09],
                       "平度":[119.97,36.77],
                       "佛山":[113.11,23.05],
                       "海口":[110.35,20.02],
                       "江门":[113.06,22.61],
                       "章丘":[117.53,36.72],
                       "肇庆":[112.44,23.05],
                       "大连":[121.62,38.92],
                       "临汾":[111.5,36.08],
                       "吴江":[120.63,31.16],
                       "石嘴山":[106.39,39.04],
                       "沈阳":[123.38,41.8],
                       "苏州":[120.62,31.32],
                       "茂名":[110.88,21.68],
                       "嘉兴":[120.76,30.77],
                       "长春":[125.35,43.88],
                       "胶州":[120.03336,36.264622],
                       "银川":[106.27,38.47],
                       "张家港":[120.555821,31.875428],
                       "三门峡":[111.19,34.76],
                       "锦州":[121.15,41.13],
                       "南昌":[115.89,28.68],
                       "柳州":[109.4,24.33],
                       "三亚":[109.511909,18.252847],
                       "自贡":[104.778442,29.33903],
                       "吉林":[126.57,43.87],
                       "阳江":[111.95,21.85],
                       "泸州":[105.39,28.91],
                       "西宁":[101.74,36.56],
                       "宜宾":[104.56,29.77],
                       "呼和浩特":[111.65,40.82],
                       "成都":[104.06,30.67],
                       "大同":[113.3,40.12],
                       "镇江":[119.44,32.2],
                       "桂林":[110.28,25.29],
                       "张家界":[110.479191,29.117096],
                       "宜兴":[119.82,31.36],
                       "北海":[109.12,21.49],
                       "西安":[108.95,34.27],
                       "金坛":[119.56,31.74],
                       "东营":[118.49,37.46],
                       "牡丹江":[129.58,44.6],
                       "遵义":[106.9,27.7],
                       "绍兴":[120.58,30.01],
                       "扬州":[119.42,32.39],
                       "常州":[119.95,31.79],
                       "潍坊":[119.1,36.62],
                       "重庆":[106.54,29.59],
                       "台州":[121.420757,28.656386],
                       "南京":[118.78,32.04],
                       "滨州":[118.03,37.36],
                       "贵阳":[106.71,26.57],
                       "无锡":[120.29,31.59],
                       "本溪":[123.73,41.3],
                       "克拉玛依":[84.77,45.59],
                       "渭南":[109.5,34.52],
                       "马鞍山":[118.48,31.56],
                       "宝鸡":[107.15,34.38],
                       "焦作":[113.21,35.24],
                       "句容":[119.16,31.95],
                       "北京":[116.46,39.92],
                       "徐州":[117.2,34.26],
                       "衡水":[115.72,37.72],
                       "包头":[110,40.58],
                       "绵阳":[104.73,31.48],
                       "乌鲁木齐":[87.68,43.77],
                       "枣庄":[117.57,34.86],
                       "杭州":[120.19,30.26],
                       "淄博":[118.05,36.78],
                       "鞍山":[122.85,41.12],
                       "溧阳":[119.48,31.43],
                       "库尔勒":[86.06,41.68],
                       "安阳":[114.35,36.1],
                       "开封":[114.35,34.79],
                       "济南":[117,36.65],
                       "德阳":[104.37,31.13],
                       "温州":[120.65,28.01],
                       "九江":[115.97,29.71],
                       "邯郸":[114.47,36.6],
                       "临安":[119.72,30.23],
                       "兰州":[103.73,36.03],
                       "沧州":[116.83,38.33],
                       "临沂":[118.35,35.05],
                       "南充":[106.110698,30.837793],
                       "天津":[117.2,39.13],
                       "富阳":[119.95,30.07],
                       "泰安":[117.13,36.18],
                       "诸暨":[120.23,29.71],
                       "郑州":[113.65,34.76],
                       "哈尔滨":[126.63,45.75],
                       "聊城":[115.97,36.45],
                       "芜湖":[118.38,31.33],
                       "唐山":[118.02,39.63],
                       "平顶山":[113.29,33.75],
                       "邢台":[114.48,37.05],
                       "德州":[116.29,37.45],
                       "济宁":[116.59,35.38],
                       "荆州":[112.239741,30.335165],
                       "宜昌":[111.3,30.7],
                       "义乌":[120.06,29.32],
                       "丽水":[119.92,28.45],
                       "洛阳":[112.44,34.7],
                       "秦皇岛":[119.57,39.95],
                       "株洲":[113.16,27.83],
                       "石家庄":[114.48,38.03],
                       "莱芜":[117.67,36.19],
                       "常德":[111.69,29.05],
                       "保定":[115.48,38.85],
                       "湘潭":[112.91,27.87],
                       "金华":[119.64,29.12],
                       "岳阳":[113.09,29.37],
                       "长沙":[113,28.21],
                       "衢州":[118.88,28.97],
                       "廊坊":[116.7,39.53],
                       "菏泽":[115.480656,35.23375],
                       "合肥":[117.27,31.86],
                       "武汉":[114.31,30.52],
                       "大庆":[125.03,46.58]
                   }
               }
               
           ]
       };

        return option
    };
    
    
    var data1 = function (name) {
        var dataMap = {};
        function dataFormatter(obj) {
            var pList = ['企业A','企业B','企业C','企业D','企业E','企业F','企业G','企业H','企业I','企业J'];
            var temp;
            var max = 0;
            for (var year = 2002; year <= 2016; year++) {
                temp = obj[year];
                for (var i = 0, l = temp.length; i < l; i++) {
                    max = Math.max(max, temp[i]);
                    obj[year][i] = {
                        name : pList[i],
                        value : temp[i]
                    }
                }
                obj[year+'max'] = Math.floor(max/100) * 100;
            }
            return obj;
        }

        function dataMix(list) {
            var mixData = {};
            for (var i = 0, l = list.length; i < l; i++) {
                for (var key in list[i]) {
                    if (list[i][key] instanceof Array) {
                        mixData[key] = mixData[key] || [];
                        for (var j = 0, k = list[i][key].length; j < k; j++) {
                            mixData[key][j] = mixData[key][j]
                                || {name : list[i][key][j].name, value : []};
                            mixData[key][j].value.push(list[i][key][j].value);
                        }
                    }
                }
            }
            return mixData;
        }

        dataMap.AA = dataFormatter({
            //max : 300,
            2016:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, 
                  Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2015:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                  Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2014:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                  Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2013:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                  Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2012:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                 Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2011:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                 Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2010:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                 Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2009:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                 Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2008:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                 Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2007:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                 Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2006:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                 Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2005:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                 Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2004:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                 Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2003:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                 Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2002:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                 Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100]
        });

        dataMap.DD = dataFormatter({
            //max : 100,
            2016:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2015:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2014:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2013:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2012:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2011:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2010:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2009:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2008:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2007:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2006:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2005:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2004:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2003:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2002:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100]
        });


        dataMap.EE = dataFormatter({
            //max :200,
            2016:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2015:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2014:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2013:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2012:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2011:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2010:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2009:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2008:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2007:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2006:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2005:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2004:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2003:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2002:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100]
        });


        dataMap.FF = dataFormatter({
            //max : 180,
            2016:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2015:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2014:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2013:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2012:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2011:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2010:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2009:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2008:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2007:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2006:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2005:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2004:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2003:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2002:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100]
        });

        dataMap.CC = dataFormatter({
            //max : 100,
            2016:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2015:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2014:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2013:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2012:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2011:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2010:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2009:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2008:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2007:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2006:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2005:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2004:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2003:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2002:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100]
        });


        dataMap.BB = dataFormatter({
            //max : 80,
            2016:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2015:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2014:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2013:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2012:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2011:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2010:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2009:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2008:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2007:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2006:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2005:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2004:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2003:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2002:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100]
        });


        dataMap.AA_Estate = dataMix([dataMap.CC, dataMap.AA]);


        var option = {
            timeline:{
                data:[
                    '2002-01-01','2003-01-01','2004-01-01','2005-01-01','2006-01-01',
                    '2007-01-01','2008-01-01','2009-01-01','2010-01-01','2011-01-01',
                    '2012-01-01','2013-01-01','2014-01-01','2015-01-01','2016-01-01'
                ],
                label : {
                    formatter : function(s) {
                        return s.slice(0, 4);
                    }
                },
                autoPlay : true,
                playInterval : 1000
            },
            options:[
                {
                    title : {
                        'text':name+'2002运营情况分析',
                        subtext: '九次方财富咨询',
                        sublink: 'http://www.jusfoun.com'
                    },
                    tooltip : {'trigger':'axis'},
                    legend : {
                        x:'right',
                        'data':['净资产收益率','资本保值增值率','主营业务利润率','','总资产周转率','流动资产周转率','资产负债率'],
                        'selected':{
                            '净资产收益率':true,
                            '资本保值增值率':false,
                            '主营业务利润率':true,
                            '总资产周转率':false,
                            '流动资产周转率':false,
                            '资产负债率':false
                        }
                    },
                    toolbox : {
                        'show':true,
                        orient : 'vertical',
                        x: 'right',
                        y: 'center',
                        'feature':{
                            'mark':{'show':true},
                            'dataView':{'show':true,'readOnly':false},
                            'magicType':{'show':true,'type':['line','bar','stack','tiled']},
                            'restore':{'show':true},
                            'saveAsImage':{'show':true}
                        }
                    },
                    calculable : true,
                    grid : {'y':80,'y2':100},
                    xAxis : [{
                        'type':'category',
                        'axisLabel':{'interval':0},
                        'data':['企业A','企业B','企业C','企业D','企业E','企业F','企业G','企业H','企业I','企业J']
                    }],
                    yAxis : [
                        {
                            'type':'value',
                            'name':'净资产（%）',
                            'max':300
                        },
                        {
                            'type':'value',
                            'name':'其他（%）'
                        }
                    ],
                    series : [
                        {
                            'name':'净资产收益率',
                            'type':'line',
                            'markLine':{
                                symbol : ['arrow','none'],
                                symbolSize : [4, 2],
                                itemStyle : {
                                    normal: {
                                        lineStyle: {color:'orange'},
                                        barBorderColor:'orange',
                                        label:{
                                            position:'left',
                                            formatter:function(params){
                                                return Math.round(params.value);
                                            },
                                            textStyle:{color:'orange'}
                                        }
                                    }
                                },
                                'data':[{'type':'average','name':'平均值'}]
                            },
                            'data': dataMap.AA['2002']
                        },
                        {
                            'name':'资本保值增值率','yAxisIndex':1,'type':'line',
                            'data': dataMap.BB['2002']
                        },
                        {
                            'name':'主营业务利润率','yAxisIndex':1,'type':'line',
                            'data': dataMap.CC['2002']
                        },
                        {
                            'name':'总资产周转率','yAxisIndex':1,'type':'line',
                            'data': dataMap.DD['2002']
                        },
                        {
                            'name':'流动资产周转率','yAxisIndex':1,'type':'line',
                            'data': dataMap.EE['2002']
                        },
                        {
                            'name':'资产负债率','yAxisIndex':1,'type':'line',
                            'data': dataMap.FF['2002']
                        }
                    ]
                },
                {
                    title : {'text':name+'2003运营情况分析'},
                    series : [
                        {'data': dataMap.AA['2003']},
                        {'data': dataMap.BB['2003']},
                        {'data': dataMap.CC['2003']},
                        {'data': dataMap.DD['2003']},
                        {'data': dataMap.EE['2003']},
                        {'data': dataMap.FF['2003']}
                    ]
                },
                {
                    title : {'text':name+'2004运营情况分析'},
                    series : [
                        {'data': dataMap.AA['2004']},
                        {'data': dataMap.BB['2004']},
                        {'data': dataMap.CC['2004']},
                        {'data': dataMap.DD['2004']},
                        {'data': dataMap.EE['2004']},
                        {'data': dataMap.FF['2004']}
                    ]
                },
                {
                    title : {'text':name+'2005运营情况分析'},
                    series : [
                        {'data': dataMap.AA['2005']},
                        {'data': dataMap.BB['2005']},
                        {'data': dataMap.CC['2005']},
                        {'data': dataMap.DD['2005']},
                        {'data': dataMap.EE['2005']},
                        {'data': dataMap.FF['2005']}
                    ]
                },
                {
                    title : {'text':name+'2006运营情况分析'},
                    series : [
                        {'data': dataMap.AA['2006']},
                        {'data': dataMap.BB['2006']},
                        {'data': dataMap.CC['2006']},
                        {'data': dataMap.DD['2006']},
                        {'data': dataMap.EE['2006']},
                        {'data': dataMap.FF['2006']}
                    ]
                },
                {
                    title : {'text':name+'2007运营情况分析'},
                    series : [
                        {'data': dataMap.AA['2007']},
                        {'data': dataMap.BB['2007']},
                        {'data': dataMap.CC['2007']},
                        {'data': dataMap.DD['2007']},
                        {'data': dataMap.EE['2007']},
                        {'data': dataMap.FF['2007']}
                    ]
                },
                {
                    title : {'text':name+'2008运营情况分析'},
                    series : [
                        {'data': dataMap.AA['2008']},
                        {'data': dataMap.BB['2008']},
                        {'data': dataMap.CC['2008']},
                        {'data': dataMap.DD['2008']},
                        {'data': dataMap.EE['2008']},
                        {'data': dataMap.FF['2008']}
                    ]
                },
                {
                    title : {'text':name+'2009运营情况分析'},
                    series : [
                        {'data': dataMap.AA['2009']},
                        {'data': dataMap.BB['2009']},
                        {'data': dataMap.CC['2009']},
                        {'data': dataMap.DD['2009']},
                        {'data': dataMap.EE['2009']},
                        {'data': dataMap.FF['2009']}
                    ]
                },
                {
                    title : {'text':name+'2010运营情况分析'},
                    series : [
                        {'data': dataMap.AA['2010']},
                        {'data': dataMap.BB['2010']},
                        {'data': dataMap.CC['2010']},
                        {'data': dataMap.DD['2010']},
                        {'data': dataMap.EE['2010']},
                        {'data': dataMap.FF['2010']}
                    ]
                },
                {
                    title : {'text':name+'2011运营情况分析'},
                    series : [
                        {'data': dataMap.AA['2011']},
                        {'data': dataMap.BB['2011']},
                        {'data': dataMap.CC['2011']},
                        {'data': dataMap.DD['2011']},
                        {'data': dataMap.EE['2011']},
                        {'data': dataMap.FF['2011']}
                    ]
                },
                {
                    title : {'text':name+'2012运营情况分析'},
                    series : [
                        {'data': dataMap.AA['2012']},
                        {'data': dataMap.BB['2012']},
                        {'data': dataMap.CC['2012']},
                        {'data': dataMap.DD['2012']},
                        {'data': dataMap.EE['2012']},
                        {'data': dataMap.FF['2012']}
                    ]
                },
                {
                    title : {'text':name+'2013运营情况分析'},
                    series : [
                        {'data': dataMap.AA['2013']},
                        {'data': dataMap.BB['2013']},
                        {'data': dataMap.CC['2013']},
                        {'data': dataMap.DD['2013']},
                        {'data': dataMap.EE['2013']},
                        {'data': dataMap.FF['2013']}
                    ]
                },
                {
                    title : {'text':name+'2014运营情况分析'},
                    series : [
                        {'data': dataMap.AA['2014']},
                        {'data': dataMap.BB['2014']},
                        {'data': dataMap.CC['2014']},
                        {'data': dataMap.DD['2014']},
                        {'data': dataMap.EE['2014']},
                        {'data': dataMap.FF['2014']}
                    ]
                },
                {
                    title : {'text':name+'2015运营情况分析'},
                    series : [
                        {'data': dataMap.AA['2015']},
                        {'data': dataMap.BB['2015']},
                        {'data': dataMap.CC['2015']},
                        {'data': dataMap.DD['2015']},
                        {'data': dataMap.EE['2015']},
                        {'data': dataMap.FF['2015']}
                    ]
                },
                {
                    title : {'text':name+'2016运营情况分析'},
                    series : [
                        {'data': dataMap.AA['2016']},
                        {'data': dataMap.BB['2016']},
                        {'data': dataMap.CC['2016']},
                        {'data': dataMap.DD['2016']},
                        {'data': dataMap.EE['2016']},
                        {'data': dataMap.FF['2016']}
                    ]
                },
            ]
        };
        return option
    };
    
    var randomData1 = function(name) {
       return data1(name);
    };


    var data2 = function (name) {
        var dataMap = {};
        function dataFormatter(obj) {
            var pList = ['企业A','企业B','企业C','企业D','企业E','企业F','企业G','企业H','企业I','企业J'];
            var temp;
            var max = 0;
            for (var year = 2002; year <= 2016; year++) {
                temp = obj[year];
                for (var i = 0, l = temp.length; i < l; i++) {
                    max = Math.max(max, temp[i]);
                    obj[year][i] = {
                        name : pList[i],
                        value : temp[i]
                    }
                }
                obj[year+'max'] = Math.floor(max/100) * 100;
            }
            return obj;
        }

        function dataMix(list) {
            var mixData = {};
            for (var i = 0, l = list.length; i < l; i++) {
                for (var key in list[i]) {
                    if (list[i][key] instanceof Array) {
                        mixData[key] = mixData[key] || [];
                        for (var j = 0, k = list[i][key].length; j < k; j++) {
                            mixData[key][j] = mixData[key][j]
                                || {name : list[i][key][j].name, value : []};
                            mixData[key][j].value.push(list[i][key][j].value);
                        }
                    }
                }
            }
            return mixData;
        }

        dataMap.AA = dataFormatter({
            //max : 300,
            2016:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2015:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2014:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2013:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2012:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2011:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2010:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2009:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2008:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2007:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2006:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2005:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2004:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2003:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2002:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100]
        });


        dataMap.DD = dataFormatter({
            //max :200,
            2016:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2015:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2014:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2013:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2012:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2011:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2010:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2009:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2008:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2007:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2006:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2005:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2004:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2003:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2002:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100]
        });


        dataMap.EE = dataFormatter({
            //max : 100,
            2016:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2015:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2014:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2013:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2012:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2011:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2010:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2009:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2008:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2007:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2006:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2005:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2004:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2003:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2002:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100]
        });


        dataMap.FF = dataFormatter({
            //max :150,
            2016:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2015:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2014:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2013:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2012:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2011:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2010:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2009:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2008:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2007:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2006:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2005:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2004:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2003:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2002:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100]
        });

        dataMap.CC = dataFormatter({
            //max : 80,
            2016:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2015:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2014:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2013:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2012:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2011:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2010:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2009:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2008:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2007:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2006:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2005:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2004:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2003:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2002:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100]
        });


        dataMap.BB = dataFormatter({
            //max : 60,
            2016:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2015:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2014:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2013:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2012:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2011:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2010:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2009:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2008:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2007:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2006:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2005:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2004:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2003:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100],
            2002:[ Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100, Math.random()*100,Math.random()*100, Math.random()*100]
        });


        dataMap.AA_Estate = dataMix([dataMap.CC, dataMap.AA]);


        var option = {
            timeline:{
                data:[
                    '2002-01-01','2003-01-01','2004-01-01','2005-01-01','2006-01-01',
                    '2007-01-01','2008-01-01','2009-01-01','2010-01-01','2011-01-01',
                    '2012-01-01','2013-01-01','2014-01-01','2015-01-01','2016-01-01'
                ],
                label : {
                    formatter : function(s) {
                        return s.slice(0, 4);
                    }
                },
                autoPlay : true,
                playInterval : 1000
            },
            options:[
                {
                    title : {
                        'text':name+'2002发展潜力',
                        subtext: '九次方财富咨询',
                        sublink: 'http://www.jusfoun.com'
                    },
                    tooltip : {'trigger':'axis'},
                    legend : {
                        x:'right',
                        'data':['销售增长率','资本积累率','技术投入比率','','三年资本平均增长率','三年销售平均增长率'],
                        'selected':{
                            '销售增长率':true,
                            '资本积累率':false,
                            '技术投入比率':true,
                            '三年资本平均增长率':false,
                            '三年销售平均增长率':false
                        }
                    },
                    toolbox : {
                        show:true,
                        orient : 'vertical',
                        x: 'right',
                        y: 'center',
                        'feature':{
                            'mark':{'show':true},
                            'dataView':{'show':true,'readOnly':false},
                            'magicType':{'show':true,'type':['line','bar','stack','tiled']},
                            'restore':{'show':true},
                            'saveAsImage':{'show':true}
                        }
                    },
                    calculable : true,
                    grid : {'y':80,'y2':100},
                    xAxis : [{
                        'type':'category',
                        'axisLabel':{'interval':0},
                        'data':['企业A','企业B','企业C','企业D','企业E','企业F','企业G','企业H','企业I','企业J']
                    }],
                    yAxis : [
                        {
                            'type':'value',
                            'name':'销售（%）',
                            'max':300
                        },
                        {
                            'type':'value',
                            'name':'其他（%）'
                        }
                    ],
                    series : [
                        {
                            'name':'销售增长率',
                            'type':'line',
                            'markLine':{
                                symbol : ['arrow','none'],
                                symbolSize : [4, 2],
                                itemStyle : {
                                    normal: {
                                        lineStyle: {color:'orange'},
                                        barBorderColor:'orange',
                                        label:{
                                            position:'left',
                                            formatter:function(params){
                                                return Math.round(params.value);
                                            },
                                            textStyle:{color:'orange'}
                                        }
                                    }
                                },
                                'data':[{'type':'average','name':'平均值'}]
                            },
                            'data': dataMap.AA['2002']
                        },
                        {
                            'name':'资本积累率','yAxisIndex':1,'type':'line',
                            'data': dataMap.BB['2002']
                        },
                        {
                            'name':'技术投入比率','yAxisIndex':1,'type':'line',
                            'data': dataMap.CC['2002']
                        },
                        {
                            'name':'三年资本平均增长率','yAxisIndex':1,'type':'line',
                            'data': dataMap.DD['2002']
                        },
                        {
                            'name':'三年销售平均增长率','yAxisIndex':1,'type':'line',
                            'data': dataMap.EE['2002']
                        },
                    ]
                },
                {
                    title : {'text':name+'2003发展潜力'},
                    series : [
                        {'data': dataMap.AA['2003']},
                        {'data': dataMap.BB['2003']},
                        {'data': dataMap.CC['2003']},
                        {'data': dataMap.DD['2003']},
                        {'data': dataMap.EE['2003']},
                        {'data': dataMap.FF['2003']}
                    ]
                },
                {
                    title : {'text':name+'2004发展潜力'},
                    series : [
                        {'data': dataMap.AA['2004']},
                        {'data': dataMap.BB['2004']},
                        {'data': dataMap.CC['2004']},
                        {'data': dataMap.DD['2004']},
                        {'data': dataMap.EE['2004']},
                        {'data': dataMap.FF['2004']}
                    ]
                },
                {
                    title : {'text':name+'2005发展潜力'},
                    series : [
                        {'data': dataMap.AA['2005']},
                        {'data': dataMap.BB['2005']},
                        {'data': dataMap.CC['2005']},
                        {'data': dataMap.DD['2005']},
                        {'data': dataMap.EE['2005']},
                        {'data': dataMap.FF['2005']}
                    ]
                },
                {
                    title : {'text':name+'2006发展潜力'},
                    series : [
                        {'data': dataMap.AA['2006']},
                        {'data': dataMap.BB['2006']},
                        {'data': dataMap.CC['2006']},
                        {'data': dataMap.DD['2006']},
                        {'data': dataMap.EE['2006']},
                        {'data': dataMap.FF['2006']}
                    ]
                },
                {
                    title : {'text':name+'2007发展潜力'},
                    series : [
                        {'data': dataMap.AA['2007']},
                        {'data': dataMap.BB['2007']},
                        {'data': dataMap.CC['2007']},
                        {'data': dataMap.DD['2007']},
                        {'data': dataMap.EE['2007']},
                        {'data': dataMap.FF['2007']}
                    ]
                },
                {
                    title : {'text':name+'2008发展潜力'},
                    series : [
                        {'data': dataMap.AA['2008']},
                        {'data': dataMap.BB['2008']},
                        {'data': dataMap.CC['2008']},
                        {'data': dataMap.DD['2008']},
                        {'data': dataMap.EE['2008']},
                        {'data': dataMap.FF['2008']}
                    ]
                },
                {
                    title : {'text':name+'2009发展潜力'},
                    series : [
                        {'data': dataMap.AA['2009']},
                        {'data': dataMap.BB['2009']},
                        {'data': dataMap.CC['2009']},
                        {'data': dataMap.DD['2009']},
                        {'data': dataMap.EE['2009']},
                        {'data': dataMap.FF['2009']}
                    ]
                },
                {
                    title : {'text':name+'2010发展潜力'},
                    series : [
                        {'data': dataMap.AA['2010']},
                        {'data': dataMap.BB['2010']},
                        {'data': dataMap.CC['2010']},
                        {'data': dataMap.DD['2010']},
                        {'data': dataMap.EE['2010']},
                        {'data': dataMap.FF['2010']}
                    ]
                },
                {
                    title : {'text':name+'2011发展潜力'},
                    series : [
                        {'data': dataMap.AA['2011']},
                        {'data': dataMap.BB['2011']},
                        {'data': dataMap.CC['2011']},
                        {'data': dataMap.DD['2011']},
                        {'data': dataMap.EE['2011']},
                        {'data': dataMap.FF['2011']}
                    ]
                },
                {
                    title : {'text':name+'2012发展潜力'},
                    series : [
                        {'data': dataMap.AA['2012']},
                        {'data': dataMap.BB['2012']},
                        {'data': dataMap.CC['2012']},
                        {'data': dataMap.DD['2012']},
                        {'data': dataMap.EE['2012']},
                        {'data': dataMap.FF['2012']}
                    ]
                },
                {
                    title : {'text':name+'2013发展潜力'},
                    series : [
                        {'data': dataMap.AA['2013']},
                        {'data': dataMap.BB['2013']},
                        {'data': dataMap.CC['2013']},
                        {'data': dataMap.DD['2013']},
                        {'data': dataMap.EE['2013']},
                        {'data': dataMap.FF['2013']}
                    ]
                },
                {
                    title : {'text':name+'2014发展潜力'},
                    series : [
                        {'data': dataMap.AA['2014']},
                        {'data': dataMap.BB['2014']},
                        {'data': dataMap.CC['2014']},
                        {'data': dataMap.DD['2014']},
                        {'data': dataMap.EE['2014']},
                        {'data': dataMap.FF['2014']}
                    ]
                },
                {
                    title : {'text':name+'2015发展潜力'},
                    series : [
                        {'data': dataMap.AA['2015']},
                        {'data': dataMap.BB['2015']},
                        {'data': dataMap.CC['2015']},
                        {'data': dataMap.DD['2015']},
                        {'data': dataMap.EE['2015']},
                        {'data': dataMap.FF['2015']}
                    ]
                },
                {
                    title : {'text':name+'2016发展潜力'},
                    series : [
                        {'data': dataMap.AA['2016']},
                        {'data': dataMap.BB['2016']},
                        {'data': dataMap.CC['2016']},
                        {'data': dataMap.DD['2016']},
                        {'data': dataMap.EE['2016']},
                        {'data': dataMap.FF['2016']}
                    ]
                },
            ]
        };
        return option
    };
    
    var randomData2 = function(name) {
        return data2(name);
    };

    var data3 = function (name) {
        var option = {
                title : {
                    text:name+ '本年度农企产品销量',
                    subtext: '九次方财富咨询',
                    sublink: 'http://www.jusfoun.com',
                    x:'left',
                    y:'top'
                },
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                x:'right',
                y:'top',
                data:['农产品1', '农产品2','','农产品3','农产品4']
            },
            toolbox: {
                show : true,
                orient : 'vertical',
                x: 'right',
                y: 'center',
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            calculable : true,
            xAxis : [
                {
                    type : 'value'
                }
            ],
            yAxis : [
                {
                    type : 'category',
                    data : ['企业A','企业B','企业C','企业D','企业E','企业F','企业G','企业H','企业I','企业J']
                }
            ],
            series : [
                {
                    name:'农产品1',
                    type:'bar',
                    stack: '销量',
                    data:[Math.random()*100,
                        Math.random()*100,
                        Math.random()*100,
                        Math.random()*100,
                        Math.random()*100,
                        Math.random()*100,
                        Math.random()*100,
                        Math.random()*100,
                        Math.random()*100,
                        Math.random()*100]
                },
                {
                    name:'农产品2',
                    type:'bar',
                    stack: '销量',
                    data:[Math.random()*100,
                        Math.random()*100,
                        Math.random()*100,
                        Math.random()*100,
                        Math.random()*100,
                        Math.random()*100,
                        Math.random()*100,
                        Math.random()*100,
                        Math.random()*100,
                        Math.random()*100]
                },
                {
                    name:'农产品3',
                    type:'bar',
                    stack: '销量',
                    data:[Math.random()*100,
                        Math.random()*100,
                        Math.random()*100,
                        Math.random()*100,
                        Math.random()*100,
                        Math.random()*100,
                        Math.random()*100,
                        Math.random()*100,
                        Math.random()*100,
                        Math.random()*100]
                },
                {
                    name:'农产品4',
                    type:'bar',
                    stack: '销量',
                    data:[Math.random()*100,
                    Math.random()*100,
                    Math.random()*100,
                    Math.random()*100, 
                    Math.random()*100,
                    Math.random()*100,
                    Math.random()*100,
                    Math.random()*100,
                    Math.random()*100,
                    Math.random()*100]
                }
            ]
        };

        return option
    };

    var randomData3 = function(name) {
        return data3(name);
    };

    var data4= function () {
        var option = {
            title : {
                text: '农业扶持政策及服务对比分析',
                x:'right',
                y:'bottom'
            },
            tooltip : {
                trigger: 'item',
                formatter: function (params) {
                    if (params.indicator2) {    // is edge
                        return params.indicator2 + ' ' + params.name + ' ' + params.indicator;
                    } else {    // is node
                        return params.name
                    }
                }
            },
            toolbox: {
                show : true,
                feature : {
                    restore : {show: true},
                    magicType: {show: true, type: ['force', 'chord']},
                    saveAsImage : {show: true}
                }
            },
            legend: {
                x: 'left',
                data:['扶持政策','金融融资服务','农业需求' ]
            },
            series : [
                {
                    name: '对比分析',
                    type:'chord',
                    sort : 'ascending',
                    sortSub : 'descending',
                    ribbonType: false,
                    radius: '56%',
                    itemStyle : {
                        normal : {
                            label : {
                                rotate : true
                            }
                        }
                    },
                    minRadius: 8,
                    maxRadius: 22,
                    // 使用 nodes links 表达和弦图
                    nodes: [
                        {name:'金融政策'},
                        {name:'财政政策'},
                        {name:'税收政策'},
                        {name:'融资投资'},
                        {name:'储蓄'},
                        {name:'信贷'},
                        {name:'证券买卖'},
                        {name:'商业保险'},
                        {name:'结算', symbol: 'star'},
                        {name:'金融信息咨询'},
                        {name:'精细化种植和养殖'},
                        {name:'农产品质量安全保障和追溯'},
                        {name:'农业装备智能化和精确农作'},
                        {name:'作物模拟模型和辅助决策'},
                        {name:'扶持政策'},
                        {name:'金融融资服务'},
                        {name:'农业需求'}
                    ],
                    links: [  
                        {source: '扶持政策', target: '金融政策', weight: 1, name: '对比分析'},
                        {source: '扶持政策', target: '财政政策', weight: 1, name: '对比分析'},
                        {source: '扶持政策', target: '税收政策', weight: 1, name: '对比分析'},
                        {source: '扶持政策', target: '融资投资', weight: 1, name: '对比分析'},
                        {source: '金融融资服务', target: '融资投资', weight: 1, name: '对比分析'},
                        {source: '金融融资服务', target: '储蓄', weight: 1, name: '对比分析'},
                        {source: '金融融资服务', target: '信贷', weight: 1, name: '对比分析'},
                        {source: '金融融资服务', target: '证券买卖', weight: 1, name: '对比分析'},
                        {source: '金融融资服务', target: '商业保险', weight: 1, name: '对比分析'},
                        {source: '金融融资服务', target: '结算', weight: 1, name: '对比分析'},
                        {source: '金融融资服务', target: '金融信息咨询', weight: 1, name: '对比分析'},
                        {source: '金融融资服务', target: '金融政策', weight: 1, name: '对比分析'},
                        {source: '农业需求', target: '精细化种植和养殖', weight: 1, name: '对比分析'},
                        {source: '农业需求', target: '农产品质量安全保障和追溯', weight: 1, name: '对比分析'},
                        {source: '农业需求', target: '农业装备智能化和精确农作', weight: 1, name: '对比分析'},
                        {source: '农业需求', target: '作物模拟模型和辅助决策', weight: 1, name: '对比分析'},
                        {source: '农业需求', target: '金融信息咨询', weight: 1, name: '对比分析'}

                    ]
                }
            ]
        };
        return option
    };
    
    


    return {
        init:function(){
            var enterpSupport =initEchart("agricEnterpSupport.enterpSupport");

            var data1=echarts.init( document.getElementById("agricEnterpSupport.data1"));
            data1.setOption(randomData1("北京"));
            enterpSupport.on(echarts.config.EVENT.MAP_SELECTED,function(param){
                data1.setOption(randomData1(param.target),true)
            });

            var data2=echarts.init( document.getElementById("agricEnterpSupport.data2"));
            data2.setOption(randomData2("北京"));
            enterpSupport.on(echarts.config.EVENT.MAP_SELECTED,function(param){
                data2.setOption(randomData2(param.target),true)
            });

            var data3=echarts.init( document.getElementById("agricEnterpSupport.data3"));
            data3.setOption(randomData3("北京"));
            enterpSupport.on(echarts.config.EVENT.MAP_SELECTED,function(param){
                data3.setOption(randomData3(param.target),true)
            });

            var data4 =initEchart("agricEnterpSupport.data4");

          //  var data4=echarts.init( document.getElementById("agricEnterpSupport.data4"));
           // data4.on(echarts.config.EVENT.CLICK, focus);
           // data4.on(echarts.config.EVENT.FORCE_LAYOUT_END, function () {
           //     console.log(data4.chart.force.getPosition());
          //  });
            
        },


        enterpSupport:function () {
            return enterpSupport();
        },
         data4:function () {
            return data4();
         }
        
    };
}();