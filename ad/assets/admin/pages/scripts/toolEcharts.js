ToolEcharts = function () {
    /**
     * 时间格式化
     * @param fmt
     * @returns {*}
     */
    Date.prototype.format = function (fmt) {
        var o = {
            "M+": this.getMonth() + 1, //月份
            "d+": this.getDate(), //日
            "h+": this.getHours() % 12 == 0 ? 12 : this.getHours() % 12, //小时
            "H+": this.getHours(), //小时
            "m+": this.getMinutes(), //分
            "s+": this.getSeconds(), //秒
            "q+": Math.floor((this.getMonth() + 3) / 3), //季度
            "S": this.getMilliseconds() //毫秒
        };
        var week = {
            "0": "/u65e5",
            "1": "/u4e00",
            "2": "/u4e8c",
            "3": "/u4e09",
            "4": "/u56db",
            "5": "/u4e94",
            "6": "/u516d"
        };
        if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
        if (/(E+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "/u661f/u671f" : "/u5468") : "") + week[this.getDay() + ""]);
        }
        for (var k in o) {
            if (new RegExp("(" + k + ")").test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            }
        }
        return fmt;
    }


    var selectSingle = "single";
    var selectMult = "multiple";


    /**
     * 去域名
     * @type {string[]}
     */
    var regionNames = ["华中", "华北", "华东", "华南", "西北", "西南", "东北"]

    /**
     * 区域的GEO
     * @type {{华中: number[], 华北: number[], 华东: number[], 华南: number[], 西北: number[], 西南: number[], 东北: number[]}}
     */
    var regionGeo = {
        "华中": [111.3, 30.7],
        "华北": [116.46, 39.92],
        "华东": [118.78, 32.04],
        "华南": [118.1, 24.46],
        "西北": [87.68, 43.77],
        "西南": [102.73, 25.04],
        "东北": [130.35, 46.83],
    }

    /**
     * 所有的省份
     * @type {string[]}
     */
    var provices = ['北京', '天津', '上海', '重庆', '河北', '河南', '云南', '辽宁', '黑龙江', '湖南', '安徽', '山东',
        '新疆', '江苏', '浙江', '江西', '湖北', '广西', '甘肃', '山西', '内蒙古', '陕西', '吉林', '福建', '贵州', '广东', '青海',
        '西藏', '四川', '宁夏', '海南'];

    /**
     * 城市的GEO
     */
    var chinaCityGeo = {
        "佳木斯": [130.35, 46.83],
        "海门": [121.15, 31.89],
        "鄂尔多斯": [109.781327, 39.608266],
        "招远": [120.38, 37.35],
        "舟山": [122.207216, 29.985295],
        "齐齐哈尔": [123.97, 47.33],
        "盐城": [120.13, 33.38],
        "赤峰": [118.87, 42.28],
        "青岛": [120.33, 36.07],
        "乳山": [121.52, 36.89],
        "金昌": [102.188043, 38.520089],
        "泉州": [118.58, 24.93],
        "莱西": [120.53, 36.86],
        "日照": [119.46, 35.42],
        "胶南": [119.97, 35.88],
        "南通": [121.05, 32.08],
        "拉萨": [91.11, 29.97],
        "云浮": [112.02, 22.93],
        "梅州": [116.1, 24.55],
        "文登": [122.05, 37.2],
        "上海": [121.48, 31.22],
        "攀枝花": [101.718637, 26.582347],
        "威海": [122.1, 37.5],
        "承德": [117.93, 40.97],
        "厦门": [118.1, 24.46],
        "汕尾": [115.375279, 22.786211],
        "潮州": [116.63, 23.68],
        "丹东": [124.37, 40.13],
        "太仓": [121.1, 31.45],
        "曲靖": [103.79, 25.51],
        "烟台": [121.39, 37.52],
        "福州": [119.3, 26.08],
        "瓦房店": [121.979603, 39.627114],
        "即墨": [120.45, 36.38],
        "抚顺": [123.97, 41.97],
        "玉溪": [102.52, 24.35],
        "张家口": [114.87, 40.82],
        "阳泉": [113.57, 37.85],
        "莱州": [119.942327, 37.177017],
        "湖州": [120.1, 30.86],
        "汕头": [116.69, 23.39],
        "昆山": [120.95, 31.39],
        "宁波": [121.56, 29.86],
        "湛江": [110.359377, 21.270708],
        "揭阳": [116.35, 23.55],
        "荣成": [122.41, 37.16],
        "连云港": [119.16, 34.59],
        "葫芦岛": [120.836932, 40.711052],
        "常熟": [120.74, 31.64],
        "东莞": [113.75, 23.04],
        "河源": [114.68, 23.73],
        "淮安": [119.15, 33.5],
        "泰州": [119.9, 32.49],
        "南宁": [108.33, 22.84],
        "营口": [122.18, 40.65],
        "惠州": [114.4, 23.09],
        "江阴": [120.26, 31.91],
        "蓬莱": [120.75, 37.8],
        "韶关": [113.62, 24.84],
        "嘉峪关": [98.289152, 39.77313],
        "广州": [113.23, 23.16],
        "延安": [109.47, 36.6],
        "太原": [112.53, 37.87],
        "清远": [113.01, 23.7],
        "中山": [113.38, 22.52],
        "昆明": [102.73, 25.04],
        "寿光": [118.73, 36.86],
        "盘锦": [122.070714, 41.119997],
        "长治": [113.08, 36.18],
        "深圳": [114.07, 22.62],
        "珠海": [113.52, 22.3],
        "宿迁": [118.3, 33.96],
        "咸阳": [108.72, 34.36],
        "铜川": [109.11, 35.09],
        "平度": [119.97, 36.77],
        "佛山": [113.11, 23.05],
        "海口": [110.35, 20.02],
        "江门": [113.06, 22.61],
        "章丘": [117.53, 36.72],
        "肇庆": [112.44, 23.05],
        "大连": [121.62, 38.92],
        "临汾": [111.5, 36.08],
        "吴江": [120.63, 31.16],
        "石嘴山": [106.39, 39.04],
        "沈阳": [123.38, 41.8],
        "苏州": [120.62, 31.32],
        "茂名": [110.88, 21.68],
        "嘉兴": [120.76, 30.77],
        "长春": [125.35, 43.88],
        "胶州": [120.03336, 36.264622],
        "银川": [106.27, 38.47],
        "张家港": [120.555821, 31.875428],
        "三门峡": [111.19, 34.76],
        "锦州": [121.15, 41.13],
        "南昌": [115.89, 28.68],
        "柳州": [109.4, 24.33],
        "三亚": [109.511909, 18.252847],
        "自贡": [104.778442, 29.33903],
        "吉林": [126.57, 43.87],
        "阳江": [111.95, 21.85],
        "泸州": [105.39, 28.91],
        "西宁": [101.74, 36.56],
        "宜宾": [104.56, 29.77],
        "呼和浩特": [111.65, 40.82],
        "成都": [104.06, 30.67],
        "大同": [113.3, 40.12],
        "镇江": [119.44, 32.2],
        "桂林": [110.28, 25.29],
        "张家界": [110.479191, 29.117096],
        "宜兴": [119.82, 31.36],
        "北海": [109.12, 21.49],
        "西安": [108.95, 34.27],
        "金坛": [119.56, 31.74],
        "东营": [118.49, 37.46],
        "牡丹江": [129.58, 44.6],
        "遵义": [106.9, 27.7],
        "绍兴": [120.58, 30.01],
        "扬州": [119.42, 32.39],
        "常州": [119.95, 31.79],
        "潍坊": [119.1, 36.62],
        "重庆": [106.54, 29.59],
        "台州": [121.420757, 28.656386],
        "南京": [118.78, 32.04],
        "滨州": [118.03, 37.36],
        "贵阳": [106.71, 26.57],
        "无锡": [120.29, 31.59],
        "本溪": [123.73, 41.3],
        "克拉玛依": [84.77, 45.59],
        "渭南": [109.5, 34.52],
        "马鞍山": [118.48, 31.56],
        "宝鸡": [107.15, 34.38],
        "焦作": [113.21, 35.24],
        "句容": [119.16, 31.95],
        "北京": [116.46, 39.92],
        "徐州": [117.2, 34.26],
        "衡水": [115.72, 37.72],
        "包头": [110, 40.58],
        "绵阳": [104.73, 31.48],
        "乌鲁木齐": [87.68, 43.77],
        "枣庄": [117.57, 34.86],
        "杭州": [120.19, 30.26],
        "淄博": [118.05, 36.78],
        "鞍山": [122.85, 41.12],
        "溧阳": [119.48, 31.43],
        "库尔勒": [86.06, 41.68],
        "安阳": [114.35, 36.1],
        "开封": [114.35, 34.79],
        "济南": [117, 36.65],
        "德阳": [104.37, 31.13],
        "温州": [120.65, 28.01],
        "九江": [115.97, 29.71],
        "邯郸": [114.47, 36.6],
        "临安": [119.72, 30.23],
        "兰州": [103.73, 36.03],
        "沧州": [116.83, 38.33],
        "临沂": [118.35, 35.05],
        "南充": [106.110698, 30.837793],
        "天津": [117.2, 39.13],
        "富阳": [119.95, 30.07],
        "泰安": [117.13, 36.18],
        "诸暨": [120.23, 29.71],
        "郑州": [113.65, 34.76],
        "哈尔滨": [126.63, 45.75],
        "聊城": [115.97, 36.45],
        "芜湖": [118.38, 31.33],
        "唐山": [118.02, 39.63],
        "平顶山": [113.29, 33.75],
        "邢台": [114.48, 37.05],
        "德州": [116.29, 37.45],
        "济宁": [116.59, 35.38],
        "荆州": [112.239741, 30.335165],
        "宜昌": [111.3, 30.7],
        "义乌": [120.06, 29.32],
        "丽水": [119.92, 28.45],
        "洛阳": [112.44, 34.7],
        "秦皇岛": [119.57, 39.95],
        "株洲": [113.16, 27.83],
        "石家庄": [114.48, 38.03],
        "莱芜": [117.67, 36.19],
        "常德": [111.69, 29.05],
        "保定": [115.48, 38.85],
        "湘潭": [112.91, 27.87],
        "金华": [119.64, 29.12],
        "岳阳": [113.09, 29.37],
        "长沙": [113, 28.21],
        "衢州": [118.88, 28.97],
        "廊坊": [116.7, 39.53],
        "菏泽": [115.480656, 35.23375],
        "合肥": [117.27, 31.86],
        "武汉": [114.31, 30.52],
        "大庆": [125.03, 46.58]
    };

    /**
     * 世界部分城市的经纬度
     * @type {{莫斯科: number[], 柏林: number[], 伦敦: number[], 巴黎: number[], 罗马: number[], 华盛顿: number[], 首尔: number[], 东京: number[], 洛杉矶: number[], 孟买: number[], 新加坡: number[]}}
     */
    var worldCityGeo = {
        "莫斯科": [37.4, 55.5],
        "柏林": [13.3, 52.3],
        "伦敦": [0.1, 51.3],
        "巴黎": [2.2, 48.5],
        "罗马": [12.3, 41.5],
        "首尔": [126.1, 37.3],
        "东京": [139.5, 35.4],
        "洛杉矶": [-118.2, 34.0],
        "孟买": [72.5, 18.6],
        "新加坡": [103.5, 1.2],

    }


    /**
     * 部分国家坐标
     * @type {{俄罗斯: number[], 德国: number[], 英国: number[], 法国: number[], 意大利: number[], 美国: number[], 韩国: number[], 日本: number[], 印度: number[], 新加坡: number[]}}
     */
    var worldCountryGeo = {
        "中国": [111.3, 30.7],
        "俄罗斯": [77.4, 60.5],
        "德国": [13.3, 52.3],
        "英国": [0.1, 51.3],
        "法国": [2.2, 48.5],
        "意大利": [12.3, 41.5],
        "美国": [-103.2, 40.0],
        "韩国": [126.1, 37.3],
        "日本": [139.5, 35.4],
        "印度": [78.5, 18.6],
        "新加坡": [103.5, 1.2],

    }

    var showTypeX = 0;

    var showTypeY = 1;

    /**
     * 生成图表标题
     * @param titleText
     * @returns {{text: *, subtext: string, sublink: string, x: string}}
     */
    var createTitle = function (titleText) {
        var title = {
            text: titleText,
            subtext: '',
            sublink: 'http://www.jusfoun.com',
        };
        return title;
    }

    /**
     * 判断地图是否只随机点标签
     * @param isData
     * @param isLine
     * @param isPoint
     * @returns {boolean}
     */
    var isOnlyPoint = function (isData, isLine, isPoint) {
        if (isData == false && isLine == false && isPoint == true)
            return true;
        return false;
    }

    /**
     * 获取百度地图扩展配置（添加MarkLine）
     * @param titleText    标题
     * @param legend       标签
     * @param isLine       是否生成MarkLine
     * @param isPoint      是否生成MarkPoint
     * @param dataSizeMin  MarkLine(MarkPoint)最少数量
     * @param dataSizeMax  MarkLine(MarkPoint)最大数量
     * @param dataMin      随机最小值
     * @param dataMax      随机最大值
     * @returns {{color: string[], title: {text: *, x: string}, tooltip: {trigger: string, formatter: option.tooltip.formatter}, legend: {orient: string, x: string, data: *, selectedMode: string}, toolbox: {show: boolean, orient: string, x: string, y: string, feature: {mark: {show: boolean}, dataView: {show: boolean, readOnly: boolean}, restore: {show: boolean}, saveAsImage: {show: boolean}}}, dataRange: {min: *, max: *, y: string, calculable: boolean, color: string[]}, series: Array}}
     */
    var createBmapOption = function (selectMode, processType, mapType, titleText, legend, isData, isLine, isPoint, dataSizeMin, dataSizeMax, dataMin, dataMax, valueList, seriesType) {
        var option = {
            color: ['gold', 'aqua', 'lime'],
            title: createTitle(titleText),
            tooltip: {
                trigger: 'item',
            },
            itemStyle: {
                normal: {label: {show: true}},
                emphasis: {label: {show: true}}
            },
            series: createBmapSeries(processType, mapType, legend, isData, isLine, isPoint, dataSizeMin, dataSizeMax, dataMin, dataMax, valueList, seriesType)
        };
        if (!isOnlyPoint(isData, isLine, isPoint) && valueList.length == 0) {
            option.dataRange = {
                min: dataMin,
                max: dataMax,
                y: '60%',
                calculable: true,
                color: ['#ff3333', 'orange', 'yellow', 'lime', 'aqua']
            };
        }
        if (legend.length > 1) {
            option.legend = {
                orient: 'vertical',
                x: 'right',
                data: legend,
                selectedMode: selectMode,
            };
        }
        return option;
    };

    /**
     * 生成地图点标签
     * @param nameValue
     * @param isOnlyPoint
     * @returns {{symbol: string, symbolSize: point.symbolSize, effect: {show: boolean, shadowBlur: number}, itemStyle: {normal: {label: {show: boolean}}}, data: *}}
     */
    var createMarkPoint = function (nameValue, isOnlyPoint) {
        var point = {
            symbol: 'emptyCircle',
            symbolSize: function (value) {
                var val = 10 + value / 5;
                return val;
            },
            effect: {
                show: true,
                shadowBlur: 0
            },
            itemStyle: {
                normal: {
                    label: {show: false}
                }
            },
            data: nameValue
        }
        if (isOnlyPoint) {
            point.symbol = 'Circle';
            point.effect.show = false;
            point.itemStyle = {
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
            };
        }
        return point;
    }

    /**
     * 生成地图路线
     * @param data
     * @returns {{smooth: boolean, effect: {show: boolean, scaleSize: number, period: number, color: string, shadowBlur: number}, itemStyle: {normal: {borderWidth: number, lineStyle: {type: string, shadowBlur: number}}}, data: *}}
     */
    var createMarkLine = function (data) {
        var line = {
            smooth: true,
            effect: {
                show: true,
                scaleSize: 1,
                period: 30,
                color: '#fff',
                shadowBlur: 10
            },
            itemStyle: {
                normal: {
                    borderWidth: 1,
                    lineStyle: {
                        type: 'solid',
                        shadowBlur: 10
                    }
                }
            },
            data: data
        };
        return line;
    }


    /**
     * 地图扩展
     * @param process     0.从legend到全国城市  1.从legend到世界城市  2.从legend到世界国家  3.legend类型从中国到世界国家 4.legend类型从中国各区域到各区域
     * @param mapType     china 中国地图  world 世界地图
     * @param legend      标签（线的起始地）
     * @param isData      是否生成数据
     * @param isLine      是否生成随机的线
     * @param isPoint     是否生成随机的点
     * @param dataSizeMin
     * @param dataSizeMax 点的最大生成数
     * @param dataMin
     * @param dataMax
     * @param seriesType 0 default  1 添加热力图
     * @returns {Array}
     */
    var createBmapSeries = function (process, mapType, legend, isData, isLine, isPoint, dataSizeMin, dataSizeMax, dataMin, dataMax, valueList, seriesType) {
        var ret = [];
        var names = [];
        var geo = {};
        var isStartRandom = false;
        if (process == 0) {
            for (var name in chinaCityGeo) {
                names.push({name: name});
            }
            geo = chinaCityGeo;
        }
        if (process == 1) {
            geo = chinaCityGeo;
            for (var name in worldCityGeo) {
                names.push({name: name});
                eval("geo." + name + "= worldCityGeo." + name);
            }
        }
        if (process == 2 || process == 3) {
            geo = worldCountryGeo;
            for (var name in worldCountryGeo) {
                names.push({name: name});
            }
        }
        if (process == 4) {
            isStartRandom = true;
            geo = regionGeo;
            for (var name in regionGeo) {
                names.push({name: name});
            }
        }
        var isFirst = true;
        for (var index in legend) {
            var names_copy = names.slice();
            var name = legend[index];
            var dataSize = randomNum(dataSizeMin, dataSizeMax);
            var start = name;
            if (process == 3)
                start = "中国";
            if (process = 4) {
                start = names[randomNum(0, names.length - 1)].name;
            }
            var randomData = randomCityToCity(names_copy, start, dataSize, valueList, dataMin, dataMax, valueList, isStartRandom);
            var data = {
                name: name,
                type: 'map',
                mapType: mapType,
                roam: false,
                data: [],
                selectedMode: selectSingle,
            };
            if (isData)
                data.data = randomNameValueList(provices, dataMin, dataMax);
            if (isLine)
                data.markLine = createMarkLine(randomData.data);
            if (isPoint)
                data.markPoint = createMarkPoint(randomData.nameValue, isOnlyPoint(isData, isLine, isPoint));

            switch (seriesType) {
                case 1:
                    data.heatmap = createHeatMap(names, randomNum(dataSizeMin, dataSizeMax), geo);
                    break;
                default:
                    break;
            }
            data.geoCoord = geo;
            ret.push(data);
        }
        return ret;
    };


    var createHeatMap = function (names, size, geo) {
        var name_copy = names.slice();
        var heatData = [];
        for (var index = 0; index < size; index++) {
            var nameIndex = randomNum(0, names.length - 1);
            var _name = names[nameIndex].name;
            var _geo = eval("geo." + _name);
            var data = _geo.slice();
            data.push(randomNum(1, 100));
            heatData.push(data);
        }
        var ret = {
            minAlpha: 0.1,
            data: heatData
        };
        return ret;
    }


    /**
     * 获取散点图配置
     * @param titleText
     * @param xFormat
     * @param yFormat
     * @param legend
     * @param series
     */
    var createScatterOption = function (titleText, xFormat, yFormat, showFormat, legend, series) {
        var option = {
            tooltip: {
                trigger: 'item',
                formatter: showFormat
            },
            title: createTitle(titleText),
            toolbox: {
                show: true,
                feature: {
                    mark: {show: true},
                    dataZoom: {show: true},
                    dataView: {show: true, readOnly: false},
                    restore: {show: true},
                    saveAsImage: {show: true}
                }
            },
            xAxis: [
                {
                    type: 'value',
                    scale: true,
                    axisLabel: {
                        formatter: xFormat
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    scale: true,
                    axisLabel: {
                        formatter: yFormat
                    }
                }
            ],
            animation: false,
        };
        if (legend.length > 1) {
            option.legend = {
                data: legend,
                y: "bottom"
            };
        }
        option.series = series;
        return option;
    }

    /**
     * 获取散点图数据
     * @param legend
     * @param dataSize
     * @param incX
     * @param incYMin
     * @param incYMax
     * @param type     0 抛物线
     * @returns {Array}
     */
    var createScatterSeries = function (legend, dataSize, incX, randomYMin, randomYMax, type, startX) {
        var series = [];
        if (ToolBase.isUndefine(startX))
            startX = 0;
        for (var index in legend) {
            var name = legend[index];
            var data = [];
            switch (type) {
                case 0:
                    data = createScatterDataParabola(name, dataSize, incX, randomYMin, randomYMax);
                    break;
                default:
                    data = createScatterDataDefault(name, dataSize, incX, randomYMin, randomYMax, startX);
            }
            series.push(data);
        }
        return series;
    }

    /**
     * 生成符合正比散步的散点图数据
     * @param name
     * @param dataSize
     * @param incX
     * @param randomYMin
     * @param randomYMax
     * @param startX
     * @returns {{name: *, type: string, symbolSize: number, data}}
     */
    var createScatterDataDefault = function (name, dataSize, incX, randomYMin, randomYMax, startX) {
        var listX = createList(dataSize, startX, incX);
        var max = 0;
        var data = {
            name: name,
            type: 'scatter',
            symbolSize: 5,
            data: (function () {
                var d = [];
                for (var index in listX) {
                    var coefficient = index * (0.5 - Math.random());
                    var nowValue = index * randomYMax;
                    var x = listX[index];
                    var randomY = randomNum(randomYMin, randomYMax);
                    var tmp = randomY * coefficient;
                    tmp = Math.round(tmp);
                    var y = nowValue + tmp;
                    d.push([x, y])
                }
                return d;
            })()
        };
        return data;
    }

    /**
     * 生成抛物线性散点图
     */
    var createScatterDataParabola = function (name, dataSize, incX, randomYMin, randomYMax) {
        var incY = randomYMax / incX;
        var xMid = 0;
        var inc = randomNum(incX / 2, incX);
        var listX = createList(dataSize, incX * 5, inc);
        xMid = listX[Math.floor(Math.max(listX.length / 1.4 - 1, 0))];
        var old = 0;
        var max = 0;
        var data = {
            name: name,
            type: 'scatter',
            symbolSize: 5,
            data: (function () {
                var d = [];
                for (var index in listX) {
                    var symbol = 1;

                    var x = listX[index];

                    if (x > xMid) {
                        symbol = -1
                        if (old < (max / 2))
                            break;
                    }
                    var coefficient = inc * 5;
                    var randomY = randomNum(randomYMin, randomYMax);
                    var tmp = randomY * coefficient;
                    tmp = Math.round(tmp);
                    var y = old + tmp * symbol;
                    if (symbol > 0)
                        old = x * randomY;
                    if (symbol < 0)
                        old = y;
                    if (y > max)
                        max = y;
                    if (y < 0)
                        break;
                    d.push([x, y])
                }
                return d;
            })()
        }
        return data;
    }


    /**
     * 创建折线图的数据
     * @param legend
     * @param dataNames
     * @param dataMin
     * @param dataMax
     * @returns {Array}
     */
    var createLineSeries = function (legend, dataSize, dataMin, dataMax) {
        var ret = [];
        for (var index in legend) {
            var data = {
                name: legend[index],
                type: 'line',
                stack: '总量',
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                data: randomList(dataSize, dataMin, dataMax)
            };
            ret.push(data);
        }
        return ret;
    };

    /**
     * 创建折线图的配置
     * @param titleText
     * @param legend
     * @param dataNames
     * @param series
     * @returns {{}}
     */
    var createLineOption = function (titleText, legend, dataNames, series) {
        var defaultOption = {
            title: createTitle(titleText),
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: legend,
                x: 'center',
                y: 'bottom'
            },
            toolbox: {
                show: true,
                feature: {
                    mark: {show: true},
                    dataView: {show: true, readOnly: false},
                    magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                    restore: {show: true},
                    saveAsImage: {show: true}
                }
            },
            calculable: true,
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: dataNames
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: series
        }
        var ret = {};
        ret.title = defaultOption.title
        ret.tooltip = defaultOption.tooltip;
        if (legend.length > 1)
            ret.legend = defaultOption.legend;
        ret.toolbox = defaultOption.toolbox;
        ret.calculable = defaultOption.calculable;
        ret.xAxis = defaultOption.xAxis;
        ret.yAxis = defaultOption.yAxis;
        ret.series = defaultOption.series;
        return ret;
    };

    /**
     * 创建柱状图配置
     * @param titleText 标题
     * @param legend    数组,标签显示
     * @param showType  x轴显示值(0),y轴显示值(1)
     * @param dataNames 数据名集合
     * @param series      数据
     */
    var createBarOption = function (titleText, legend, showType, dataNames, series) {
        var option = {
            title: createTitle(titleText),
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'line'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                containLabel: true
            },
            xAxis: {},
            yAxis: {},
            series: []
        };
        if (dataNames.length > 50) {
            option.dataZoom = {
                orient: "horizontal",
                show: true,
                realtime: true,
                start: 0,
                end: 100
            };
        }
        if (legend.length > 1) {
            option.legend = {
                data: legend,
                x: 'right',
            };
        }
        option = barShowTypeL(showType, dataNames, option);
        option.series = series;
        return option;
    };


    /**
     * 创建柱状图数据
     * @param legend   标签
     * @param dataSize 生成数据数量
     * @param dataMin  数据最小值
     * @param dataMax  数据最大值
     * @param type 0 叠加在一起显示  1 分开多个柱形显示
     * @returns {Array}
     */
    var createBarSeries = function (legend, dataSize, dataMin, dataMax, type) {
        var ret = [];
        var defaultSeries = {
            name: '',
            type: 'bar',
            stack: '总量',
            data: []
        };
        for (var index in legend) {
            var name = legend[index];
            var data = randomList(dataSize, dataMin, dataMax);
            var series = {};
            series.type = defaultSeries.type;
            series.label = defaultSeries.label;
            if (type == 0)
                series.stack = defaultSeries.stack;
            series.name = name;
            series.data = data;
            ret.push(series);
        }
        return ret;
    };

    /**
     * 生成仪表数据
     * @param legend  标签
     * @returns {{}}
     */
    var createGaugeSeries = function (name, dataName) {
        var defaultSeries = {
            name: name,
            type: 'gauge',
            splitNumber: 10,       // 分割段数，默认为5
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: [[0.2, '#228b22'], [0.8, '#48b'], [1, '#ff4500']],
                    width: 8
                }
            },
            axisTick: {            // 坐标轴小标记
                splitNumber: 10,   // 每份split细分多少段
                length: 10,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto'
                }
            },
            axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    color: 'auto'
                }
            },
            splitLine: {           // 分隔线
                show: true,        // 默认显示，属性show控制显示与否
                length: 15,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    color: 'auto'
                }
            },
            pointer: {
                width: 5
            },
            detail: {
                formatter: '{value}%',
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    color: 'auto',
                    fontWeight: 'bolder'
                }
            },
            data: []
        };

        var data = [];
        var tmp = {name: dataName, value: 0};
        tmp = randomValue(tmp, 0, 100);
        data.push(tmp);
        var series = {};
        series.name = defaultSeries.name;
        series.type = defaultSeries.type;
        series.splitNumber = defaultSeries.splitNumber;
        series.axisLine = defaultSeries.axisLine;
        series.axisTick = defaultSeries.axisTick;
        series.axisTick = defaultSeries.axisTick;
        series.axisLabel = defaultSeries.axisLabel;
        series.splitLine = defaultSeries.splitLine;
        series.pointer = defaultSeries.pointer;
        series.detail = defaultSeries.detail;
        series.data = data;
        return series;
    }


    /**
     * 生成饼图数据
     * @param legend  标签
     * @param showType 0 默认 1 半径模式 2 面积模式
     * @returns {{}}
     */
    var createPieSeries = function (legend, showType, valueMin, valueMax) {
        var defaultSeries = {
            type: 'pie',
            radius: '50%',
            center: ['50%', '50%'],
            data: [],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        };

        var data = [];
        var series = {};
        for (var index in legend) {
            var name = legend[index];
            var nameValue = {name: name, value: 0};
            nameValue = randomValue(nameValue, valueMin, valueMax);
            data.push(nameValue);
        }
        series.type = defaultSeries.type;
        series.radius = defaultSeries.radius;
        series.center = defaultSeries.center;
        series.itemStyle = defaultSeries.itemStyle;
        series.data = data;
        switch (showType) {
            case 1:
                series.roseType = 'radius';
                break;
            case 2:
                series.roseType = 'area';
                break;
            default:
                break;
        }
        return series;
    }

    /**
     * 创建饼图
     * @param titleText 标题
     * @param legend    标签显示
     * @param series    数据
     * @returns {{title: {text: *, x: string}, tooltip: {trigger: string, formatter: string}, legend: {orient: string, left: string, data: *}, series: Array}}
     */
    var createPieOption = function (titleText, legend, series) {
        var option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            series: []
        };
        if (legend.length > 1) {
            option.legend = {
                orient: 'vertical',
                x: 'right',
                data: legend
            };
        }
        if (titleText.length > 0)
            option.title = createTitle(titleText);
        option.series.push(series);
        return option;
    }


    /**
     * 创建仪表配置
     * @param series
     * @returns {{}}
     */
    var createGaugeOption = function (series) {
        var option = {
            tooltip: {
                formatter: "{a} <br/>{b} : {c}%"
            }
        };
        var tmp = {};
        tmp.tooltip = option.tooltip;
        tmp.series = [];
        tmp.series.push(series);
        return tmp;
    }


    var createChordSeries = function (name, size, formatTarget, legend) {
        var series = [];
        var data = {
            type: 'chord',
            name: name,
            sort : 'ascending',
            sortSub : 'descending',
            showScale : false,
            itemStyle : {
                normal : {
                    label : {
                        rotate : true
                    }
                }
            },
        };
        var nodes = [];
        var rootnode = [];
        for (var index in legend) {
            var rootName = {name: legend[index],category: 0,value: 30};
            rootnode.push(rootName)
            nodes = nodes.concat(rootName);
        }
        var nameFormat = formatTarget;
        var valueNames = ToolBase.randomNameList(size, nameFormat, 1,1,10);
        nodes = nodes.concat(valueNames);
        data.nodes = nodes;

        var links = [];
        for (var index in valueNames) {
            var target = valueNames[index];
            var num = ToolBase.randomNum(1, legend.length);
            var randomList = ToolBase.createList(legend.length, 0, 1);
            for (var i = 0; i < num; i++) {
                var sourceIndex = ToolBase.randomNum(0, randomList.length - 1);
                var source = legend[sourceIndex];
                randomList.splice(sourceIndex, 1);
                var link = {source: source, target: target.name, weight: 1};
                links.push(link);
                link = {source: target.name, target: source, weight: 1,name:"生产"};
                links.push(link);
            }
        }
        data.links = links;
        return data;
    }

    var createChordOption = function (title, lenged, series) {
        var option = {
            title: createTitle(title),
            legend: {
                x: 'right',
                data: lenged
            },
            series: [],
        };
        option.series.push(series);
        return option;
    }

    /**
     * 柱状显示类型处理
     * @param showType   显示类型
     * @param dataNames  数据名集合
     * @param option     配置
     * @returns {*}
     */
    var barShowTypeL = function (showType, dataNames, option) {
        var category = {
            type: 'category',
            data: dataNames
        };
        var value = {
            type: 'value'
        };

        if (showType == 0) {
            option.xAxis = category;
            option.yAxis = value;
        }
        else {
            option.yAxis = category;
            option.xAxis = value;
        }
        return option;
    };


    /**
     * 生成随机数数组
     * @param size   数组大小
     */
    var randomList = function (size, min, max) {
        var ret = [];
        for (var i = 0; i < size; i++) {
            ret.push(randomNum(min, max));
        }
        return ret;
    };

    /**
     * 创建列表
     * @param size          列表大小
     * @param defaultValue  默认值
     * @param inc           自增值
     * @returns {Array}
     */
    var createList = function (size, defaultValue, inc) {
        var ret = []
        for (var i = 0; i < size; i++) {
            ret.push(defaultValue);
            if (inc) {
                defaultValue = defaultValue + inc;
            }
        }
        return ret;
    }

    /**
     * 生成随机数
     * @param min  最小值
     * @param max  最大值
     * @returns {*}
     */
    var randomNum = function (min, max) {
        var mid = max - min;
        var num = Math.round(Math.random() * mid) + min;
        return num;
    };

    /**
     * 为名字列表生成随机value
     * @param names
     * @param min
     * @param max
     * @returns {Array}
     */
    var randomNameValueList = function (names, min, max) {
        var ret = [];
        for (var index in names) {
            var data = {name: names[index], value: 0};
            data = randomValue(data, min, max);
            ret.push(data);
        }
        return ret;
    }

    /**
     * 创建以天为间隔的时间数组
     * @param startTime
     * @param size
     * @returns {*}
     */
    var createTimeByDay = function (startTime, size) {
        var inc = 24 * 60 * 60 * 1000;
        return createTimeList(startTime, inc, size, "yyyy-MM-dd");
    }

    /**
     * 创建以年为间隔的时间数组
     * @param startTime
     * @param size
     * @returns {*}
     */
    var createTimeByYear = function (startTime, size) {
        var inc = 24 * 60 * 60 * 1000 * 365;
        return createTimeList(startTime, inc, size, "yyyy-MM-dd");
    }


    /**
     * 生成时间的数组
     * @param startTime  开始时间
     * @param incLong    间隔时间
     * @param size       数组大小
     * @param format     时间格式
     * @returns {Array}
     */
    var createTimeList = function (startTime, incLong, size, format) {
        var ret = [];
        var nowTime = startTime.getTime();
        for (var i = 0; i < size; i++) {
            var date = new Date();
            date.setTime(nowTime);
            nowTime = nowTime + incLong;
            ret.push(date.format(format));
        }
        return ret;
    }

    /**
     * 生成随机数并赋值到data.value
     * @param data
     * @param min
     * @param max
     * @returns {*}
     */
    var randomValue = function (data, min, max) {
        var num = randomNum(min, max);
        data.value = num;
        return data;
    };


    /**
     * 随机地图城市到多个城市的路径线
     * @param cityNames         城市名列表
     * @param startCity     开始城市
     * @param endPointSize  路径线数量
     * @param valueMin      值的最小值
     * @param valueMax      值的最大值
     * @returns {{data: Array, nameValue: Array}}
     */
    var randomCityToCity = function (cityNames, startCity, endPointSize, valueList, valueMin, valueMax, isStartRandom) {
        var dataList = [];
        var nameValue = [];
        var list = [];
        var isList = false;
        if (valueList.length > 0)
            isList = true;
        if (isList)
            list = valueList.slice();
        var names = cityNames.slice();
        for (var i = 0; i < endPointSize; i++) {
            if (names.length <= 0)
                break;
            if (isStartRandom) {
                startCity = cityNames[randomNum(0, cityNames.length - 1)].name;
            }
            var data = [{name: startCity}];
            var obj = {};
            if (!isList)
                obj.value = randomNum(valueMin, valueMax);
            if (isList) {
                var valueIndex = randomNum(0, list.length - 1);
                obj.value = list[valueIndex];
            }
            var nameIndex = randomNum(0, names.length - 1);
            var _name = names[nameIndex].name;
            obj.name = _name;
            names.splice(nameIndex, 1);
            if (_name != startCity) {
                data.push(obj);
                nameValue.push(obj);
                dataList.push(data);
            }
        }
        return {data: dataList, nameValue: nameValue};
    };


    return {
        chinaProvince: function () {
            return provices;
        },
        createChinaMapOption: function (selectMode, titleText, legend, isData, isLine, isPoint, dataSizeMin, dataSizeMax, dataMin, dataMax, seriesType) {
            return createBmapOption(selectMode, 0, "china", titleText, legend, isData, isLine, isPoint, dataSizeMin, dataSizeMax, dataMin, dataMax, [], seriesType);
        },
        createMapOption: function (selectMode, processType, mapType, titleText, legend, isData, isLine, isPoint, dataSizeMin, dataSizeMax, dataMin, dataMax, valueList, seriesType) {
            return createBmapOption(selectMode, processType, mapType, titleText, legend, isData, isLine, isPoint, dataSizeMin, dataSizeMax, dataMin, dataMax, valueList, seriesType);
        },
        createLineSeries: function (legend, dataSize, dataMin, dataMax) {
            return createLineSeries(legend, dataSize, dataMin, dataMax);
        },
        createLineOption: function (titleText, legend, dataNames, series) {
            return createLineOption(titleText, legend, dataNames, series);
        },
        createBarSeries: function (legend, dataSize, dataMin, dataMax, type) {
            return createBarSeries(legend, dataSize, dataMin, dataMax, type)
        },
        createPieSeries: function (legend, showType, valueMin, valueMax) {
            if (ToolBase.isUndefine(valueMin))
                valueMin = 10;
            if (ToolBase.isUndefine(valueMax))
                valueMax = 100;
            return createPieSeries(legend, showType, valueMin, valueMax);
        },
        createBarOption: function (titleText, legend, showType, dataNames, series) {
            return createBarOption(titleText, legend, showType, dataNames, series)
        },
        createPieOption: function (titleText, legend, series) {
            return createPieOption(titleText, legend, series)
        },
        createGaugeSeries: function (name, dataName) {
            return createGaugeSeries(name, dataName)
        },
        createGaugeOption: function (series) {
            return createGaugeOption(series)
        },
        randomList: function (size, min, max) {
            return randomList(size, min, max)
        },
        createList: function (size, defaultValue, inc) {
            return createList(size, defaultValue, inc)
        },
        randomNum: function (min, max) {
            return randomNum(min, max);
        },
        createTimeByDay: function (startTime, size) {
            return createTimeByDay(startTime, size);
        },
        createTimeByYear: function (startTime, size) {
            return createTimeByYear(startTime, size);
        },
        createScatterSeries: function (legend, dataSize, incX, randomYMin, randomYMax, type, startX) {
            return createScatterSeries(legend, dataSize, incX, randomYMin, randomYMax, type, startX);
        },
        createScatterOption: function (titleText, xFormat, yFormat, showFormat, legend, series) {
            return createScatterOption(titleText, xFormat, yFormat, showFormat, legend, series);
        },
        createChordSeries: function (name, size, formatTarget, legend) {
            return createChordSeries(name, size, formatTarget, legend);
        },
        createChordOption: function (title, lenged, series) {
            return createChordOption(title, lenged, series);
        },
        randomValue: function (data, min, max) {
            return randomValue(data, min, max);
        },
        chinaregion: regionNames,
        cityGeo: chinaCityGeo,
        showTypeX: 0,
        showTypeY: 1,
        selectSingle: selectSingle,
        selectMult: selectMult,
    }
}
();