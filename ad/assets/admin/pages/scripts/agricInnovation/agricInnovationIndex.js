/**
 * Created by Administrator on 2016-5-24.
 */
var agricInnovationIndex = function () {
    var distribution = function () {
        var heatData = [];
        for (var i = 0; i < 200; ++i) {
            heatData.push([
                100 + Math.random() * 20,
                24 + Math.random() * 16,
                Math.random()
            ]);
        }
        for (var j = 0; j < 10; ++j) {
            var x = 100 + Math.random() * 16;
            var y = 24 + Math.random() * 12;
            var cnt = 30 * Math.random();
            for (var i = 0; i < cnt; ++i) {
                heatData.push([
                    x + Math.random() * 2,
                    y + Math.random() * 2,
                    Math.random()
                ]);
            }
        }
        option = {
            title : {
                'text':'全国农企数量及分布',
                'subtext':'九次方财富资询'
            },
            tooltip : {
                trigger: 'item'
            },
            toolbox: {
                show : true,
                orient: 'vertical',
                x:'right',
                y:'center',
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false}
                }
            },
            series : [
                {
                    tooltip: {
                        trigger: 'item',
                        formatter: '{b}'
                    },
                    heatmap: {
                        minAlpha: 0.1,
                        data: heatData
                    },
                    name: '选择器',
                    type: 'map',
                    mapType: 'china',
                    mapLocation: {
                        x: 'left',
                        y: 'center',
                        width: '50%'
                    },
                    roam: true,
                    selectedMode : 'single',
                    itemStyle:{
                        //normal:{label:{show:true}},
                        emphasis:{label:{show:true}}
                    },
                    data:[
                        {name: '北京', selected:false,value:Math.round(Math.random()*1000)},
                        {name: '天津', selected:false,value:Math.round(Math.random()*1000)},
                        {name: '上海', selected:false,value:Math.round(Math.random()*1000)},
                        {name: '重庆', selected:false,value:Math.round(Math.random()*1000)},
                        {name: '河北', selected:false,value:Math.round(Math.random()*1000)},
                        {name: '河南', selected:false,value:Math.round(Math.random()*1000)},
                        {name: '云南', selected:false,value:Math.round(Math.random()*1000)},
                        {name: '辽宁', selected:false,value:Math.round(Math.random()*1000)},
                        {name: '黑龙江', selected:false,value:Math.round(Math.random()*1000)},
                        {name: '湖南', selected:false,value:Math.round(Math.random()*1000)},
                        {name: '安徽', selected:false,value:Math.round(Math.random()*1000)},
                        {name: '山东', selected:false,value:Math.round(Math.random()*1000)},
                        {name: '新疆', selected:false,value:Math.round(Math.random()*1000)},
                        {name: '江苏', selected:false,value:Math.round(Math.random()*1000)},
                        {name: '浙江', selected:false,value:Math.round(Math.random()*1000)},
                        {name: '江西', selected:false,value:Math.round(Math.random()*1000)},
                        {name: '湖北', selected:false,value:Math.round(Math.random()*1000)},
                        {name: '广西', selected:false,value:Math.round(Math.random()*1000)},
                        {name: '甘肃', selected:false,value:Math.round(Math.random()*1000)},
                        {name: '山西', selected:false,value:Math.round(Math.random()*1000)},
                        {name: '内蒙古', selected:false,value:Math.round(Math.random()*1000)},
                        {name: '陕西', selected:false,value:Math.round(Math.random()*1000)},
                        {name: '吉林', selected:false,value:Math.round(Math.random()*1000)},
                        {name: '福建', selected:false,value:Math.round(Math.random()*1000)},
                        {name: '贵州', selected:false,value:Math.round(Math.random()*1000)},
                        {name: '广东', selected:false,value:Math.round(Math.random()*1000)},
                        {name: '青海', selected:false,value:Math.round(Math.random()*1000)},
                        {name: '西藏', selected:false,value:Math.round(Math.random()*1000)},
                        {name: '四川', selected:false,value:Math.round(Math.random()*1000)},
                        {name: '宁夏', selected:false,value:Math.round(Math.random()*1000)},
                        {name: '海南', selected:false,value:Math.round(Math.random()*1000)},
                        {name: '台湾', selected:false,value:Math.round(Math.random()*1000)},
                        {name: '香港', selected:false,value:Math.round(Math.random()*1000)},
                        {name: '澳门', selected:false,value:Math.round(Math.random()*1000)}
                    ]
                }
            ],
            animation: false
        };
        return option;
    };
    var randomDistribution = function() {
        return distribution();
    };
    var patentType = function () {
        option1 = {
            title : {
                text: '农业专利类型',
                subtext: '九次方财富资询',
                x:'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                x : 'center',
                y : 'bottom',
                data:['专利类型1','专利类型2','专利类型3','专利类型4','专利类型5','专利类型6','专利类型7','专利类型8']
            },
            toolbox: {
                show : true,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {
                        show: true,
                        type: ['pie', 'funnel']
                    },
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            calculable : true,
            series : [
                {
                    name:'半径模式',
                    type:'pie',
                    radius : [40, 70],
                    center : ['50%', 140],
                    roseType : 'radius',
                    width: '40%',       // for funnel
                    max: 40,            // for funnel
                    itemStyle : {
                        normal : {
                            label : {
                                show : false
                            },
                            labelLine : {
                                show : false
                            }
                        },
                        emphasis : {
                            label : {
                                show : true
                            },
                            labelLine : {
                                show : true
                            }
                        }
                    },
                    data:[
                        {value:10, name:'专利类型1'},
                        {value:5, name:'专利类型2'},
                        {value:15, name:'专利类型3'},
                        {value:25, name:'专利类型4'},
                        {value:20, name:'专利类型5'},
                        {value:35, name:'专利类型6'},
                        {value:30, name:'专利类型7'},
                        {value:40, name:'专利类型8'}
                    ]
                }

            ]
        };
    return option1;
    };
    var expenditure = function () {
        option1 = {
            title : {
                text: '农业研发经费',
                subtext: '九次方财富资询',
                x:'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}万元)"
            },
            legend: {
                x : 'center',
                y : 'bottom',
                data:['专利类型1','专利类型2','专利类型3','专利类型4','专利类型5','专利类型6','专利类型7','专利类型8']
            },
            toolbox: {
                show : true,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {
                        show: true,
                        type: ['pie', 'funnel']
                    },
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            calculable : true,
            series : [

                {
                    name:'面积模式',
                    type:'pie',
                    radius : [0, 70],
                    center : ['50%', 140],
                    roseType : 'area',
                    x: '50%',               // for funnel
                    max: 40,                // for funnel
                    sort : 'ascending',     // for funnel
                    data:[
                        {value:10, name:'专利类型1'},
                        {value:5, name:'专利类型2'},
                        {value:15, name:'专利类型3'},
                        {value:25, name:'专利类型4'},
                        {value:20, name:'专利类型5'},
                        {value:35, name:'专利类型6'},
                        {value:30, name:'专利类型7'},
                        {value:40, name:'专利类型8'}
                    ]
                }
            ]
        };
    return option1
    };
    var rank = function () {
        option1 = {
            title : {
                text: '企业创新水平排名',
                subtext: '九次方财富资询',
            },
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                },
                formatter: function (params){
                    return params[0].name + '<br/>'
                        + params[0].seriesName + ' : ' + params[0].value + '<br/>'
                        + params[1].seriesName + ' : ' + (params[1].value + params[0].value);
                }
            },
            legend: {
                selectedMode:false,
                data:['创新能力', '研发能力']
            },
            toolbox: {
                show : true,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    data : ['农企A','农企B','农企C','农企D','农企E','农企F']
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    boundaryGap: [0, 0.1]
                }
            ],
            series : [
                {
                    name:'创新能力',
                    type:'bar',
                    stack: 'sum',
                    barCategoryGap: '50%',
                    itemStyle: {
                        normal: {
                            color: 'tomato',
                            barBorderColor: 'tomato',
                            barBorderWidth: 6,
                            barBorderRadius:0,
                            label : {
                                show: true, position: 'insideTop'
                            }
                        }
                    },
                    data:[260, 200, 220, 120, 100, 80]
                },
                {
                    name:'研发能力',
                    type:'bar',
                    stack: 'sum',
                    itemStyle: {
                        normal: {
                            color: '#fff',
                            barBorderColor: 'tomato',
                            barBorderWidth: 6,
                            barBorderRadius:0,
                            label : {
                                show: true,
                                position: 'top',
                                formatter: function (params) {
                                    for (var i = 0, l = option1.xAxis[0].data.length; i < l; i++) {
                                        if (option1.xAxis[0].data[i] == params.name) {
                                            return option1.series[0].data[i] + params.value;
                                        }
                                    }
                                },
                                textStyle: {
                                    color: 'tomato'
                                }
                            }
                        }
                    },
                    data:[40, 80, 50, 80,80, 70]
                }
            ]
        };
    return option1;
    };
    var newProject = function () {
        option1 = {
            title: {
                text: '农企新型项目数量',
                subtext: '九次方财富资询',
            },
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                },
                formatter: function (params) {
                    var tar = params[0];
                    return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
                }
            },
            toolbox: {
                show : true,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            xAxis : [
                {
                    type : 'category',
                    splitLine: {show:false},
                    data : ['农企A','农企B','农企C','农企C','农企D','农企E']
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'项目设想数量',
                    type:'bar',
                    stack: '总量',
                    itemStyle:{
                        normal:{
                            barBorderColor:'rgba(0,0,0,0)',
                            color:'rgba(0,0,0,0)'
                        },
                        emphasis:{
                            barBorderColor:'rgba(0,0,0,0)',
                            color:'rgba(0,0,0,0)'
                        }
                    },
                    data:[0, 1700, 1400, 1200, 300, 0]
                },
                {
                    name:'项目实施数量',
                    type:'bar',
                    stack: '总量',
                    itemStyle : { normal: {label : {show: true, position: 'inside'}}},
                    data:[2900, 1200, 300, 200, 900, 300]
                }
            ]
        };
    return option1
    };
    var overall = function () {
        option1 = {
            title : {
                text: '农企综合数据展示',
                subtext: '九次方财富资询'
            },
            tooltip : {
                trigger: 'axis',
                showDelay : 0,
                formatter : function (params) {
                    if (params.value.length > 1) {
                        return params.seriesName + ' :<br/>'
                            + params.value[0] + '万元 '
                            + params.value[1] + '万';
                    }
                    else {
                        return params.seriesName + ' :<br/>'
                            + params.name + ' : '
                            + params.value + '万';
                    }
                },
                axisPointer:{
                    show: true,
                    type : 'cross',
                    lineStyle: {
                        type : 'dashed',
                        width : 1
                    }
                }
            },
            legend: {
                data:['项目','经费']
            },
            toolbox: {
                show : true,
                feature : {
                    mark : {show: true},
                    dataZoom : {show: true},
                    dataView : {show: true, readOnly: false},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            xAxis : [
                {
                    type : 'value',
                    scale:true,
                    axisLabel : {
                        formatter: '{value} 万元'
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    scale:true,
                    axisLabel : {
                        formatter: '{value} 万'
                    }
                }
            ],
            series : [
                {
                    name:'项目',
                    type:'scatter',
                    data: [[161.2, 51.6], [167.5, 59.0], [159.5, 49.2], [157.0, 63.0], [155.8, 53.6],
                        [170.0, 59.0], [159.1, 47.6], [166.0, 69.8], [176.2, 66.8], [160.2, 75.2],
                        [172.5, 55.2], [170.9, 54.2], [172.9, 62.5], [153.4, 42.0], [160.0, 50.0],
                        [147.2, 49.8], [168.2, 49.2], [175.0, 73.2], [157.0, 47.8], [167.6, 68.8],
                        [159.5, 50.6], [175.0, 82.5], [166.8, 57.2], [176.5, 87.8], [170.2, 72.8],
                        [174.0, 54.5], [173.0, 59.8], [179.9, 67.3], [170.5, 67.8], [160.0, 47.0],
                        [154.4, 46.2], [162.0, 55.0], [176.5, 83.0], [160.0, 54.4], [152.0, 45.8],
                        [162.1, 53.6], [170.0, 73.2], [160.2, 52.1], [161.3, 67.9], [166.4, 56.6],
                        [168.9, 62.3], [163.8, 58.5], [167.6, 54.5], [160.0, 50.2], [161.3, 60.3],
                        [167.6, 58.3], [165.1, 56.2], [160.0, 50.2], [170.0, 72.9], [157.5, 59.8],
                        [167.6, 61.0], [160.7, 69.1], [163.2, 55.9], [152.4, 46.5], [157.5, 54.3],
                        [168.3, 54.8], [180.3, 60.7], [165.5, 60.0], [165.0, 62.0], [164.5, 60.3],
                        [156.0, 52.7], [160.0, 74.3], [163.0, 62.0], [165.7, 73.1], [161.0, 80.0],
                        [162.0, 54.7], [166.0, 53.2], [174.0, 75.7], [172.7, 61.1], [167.6, 55.7],
                        [151.1, 48.7], [164.5, 52.3], [163.5, 50.0], [152.0, 59.3], [169.0, 62.5],
                        [164.0, 55.7], [161.2, 54.8], [155.0, 45.9], [170.0, 70.6], [176.2, 67.2],
                        [170.0, 69.4], [162.5, 58.2], [170.3, 64.8], [164.1, 71.6], [169.5, 52.8],
                        [163.2, 59.8], [154.5, 49.0], [159.8, 50.0], [173.2, 69.2], [170.0, 55.9],
                        [161.4, 63.4], [169.0, 58.2], [166.2, 58.6], [159.4, 45.7], [162.5, 52.2],
                        [159.0, 48.6], [162.8, 57.8], [159.0, 55.6], [179.8, 66.8], [162.9, 59.4],
                        [161.0, 53.6], [151.1, 73.2], [168.2, 53.4], [168.9, 69.0], [173.2, 58.4],
                        [171.8, 56.2], [178.0, 70.6], [164.3, 59.8], [163.0, 72.0], [168.5, 65.2],
                        [166.8, 56.6], [172.7, 105.2], [163.5, 51.8], [169.4, 63.4], [167.8, 59.0],
                        [159.5, 47.6], [167.6, 63.0], [161.2, 55.2], [160.0, 45.0], [163.2, 54.0],
                        [162.2, 50.2], [161.3, 60.2], [149.5, 44.8], [157.5, 58.8], [163.2, 56.4],
                        [172.7, 62.0], [155.0, 49.2], [156.5, 67.2], [164.0, 53.8], [160.9, 54.4],
                        [162.8, 58.0], [167.0, 59.8], [160.0, 54.8], [160.0, 43.2], [168.9, 60.5],
                        [158.2, 46.4], [156.0, 64.4], [160.0, 48.8], [167.1, 62.2], [158.0, 55.5],
                        [167.6, 57.8], [156.0, 54.6], [162.1, 59.2], [173.4, 52.7], [159.8, 53.2],
                        [170.5, 64.5], [159.2, 51.8], [157.5, 56.0], [161.3, 63.6], [162.6, 63.2],
                        [160.0, 59.5], [168.9, 56.8], [165.1, 64.1], [162.6, 50.0], [165.1, 72.3],
                        [166.4, 55.0], [160.0, 55.9], [152.4, 60.4], [170.2, 69.1], [162.6, 84.5],
                        [170.2, 55.9], [158.8, 55.5], [172.7, 69.5], [167.6, 76.4], [162.6, 61.4],
                        [167.6, 65.9], [156.2, 58.6], [175.2, 66.8], [172.1, 56.6], [162.6, 58.6],
                        [160.0, 55.9], [165.1, 59.1], [182.9, 81.8], [166.4, 70.7], [165.1, 56.8],
                        [177.8, 60.0], [165.1, 58.2], [175.3, 72.7], [154.9, 54.1], [158.8, 49.1],
                        [172.7, 75.9], [168.9, 55.0], [161.3, 57.3], [167.6, 55.0], [165.1, 65.5],
                        [175.3, 65.5], [157.5, 48.6], [163.8, 58.6], [167.6, 63.6], [165.1, 55.2],
                        [165.1, 62.7], [168.9, 56.6], [162.6, 53.9], [164.5, 63.2], [176.5, 73.6],
                        [168.9, 62.0], [175.3, 63.6], [159.4, 53.2], [160.0, 53.4], [170.2, 55.0],
                        [162.6, 70.5], [167.6, 54.5], [162.6, 54.5], [160.7, 55.9], [160.0, 59.0],
                        [157.5, 63.6], [162.6, 54.5], [152.4, 47.3], [170.2, 67.7], [165.1, 80.9],
                        [172.7, 70.5], [165.1, 60.9], [170.2, 63.6], [170.2, 54.5], [170.2, 59.1],
                        [161.3, 70.5], [167.6, 52.7], [167.6, 62.7], [165.1, 86.3], [162.6, 66.4],
                        [152.4, 67.3], [168.9, 63.0], [170.2, 73.6], [175.2, 62.3], [175.2, 57.7],
                        [160.0, 55.4], [165.1, 104.1], [174.0, 55.5], [170.2, 77.3], [160.0, 80.5],
                        [167.6, 64.5], [167.6, 72.3], [167.6, 61.4], [154.9, 58.2], [162.6, 81.8],
                        [175.3, 63.6], [171.4, 53.4], [157.5, 54.5], [165.1, 53.6], [160.0, 60.0],
                        [174.0, 73.6], [162.6, 61.4], [174.0, 55.5], [162.6, 63.6], [161.3, 60.9],
                        [156.2, 60.0], [149.9, 46.8], [169.5, 57.3], [160.0, 64.1], [175.3, 63.6],
                        [169.5, 67.3], [160.0, 75.5], [172.7, 68.2], [162.6, 61.4], [157.5, 76.8],
                        [176.5, 71.8], [164.4, 55.5], [160.7, 48.6], [174.0, 66.4], [163.8, 67.3]
                    ],
                    markPoint : {
                        data : [
                            {type : 'max', name: '最大值'},
                            {type : 'min', name: '最小值'}
                        ]
                    },
                    markLine : {
                        data : [
                            {type : 'average', name: '平均值'}
                        ]
                    }
                },
                {
                    name:'经费',
                    type:'scatter',
                    data: [[174.0, 65.6], [175.3, 71.8], [193.5, 80.7], [186.5, 72.6], [187.2, 78.8],
                        [181.5, 74.8], [184.0, 86.4], [184.5, 78.4], [175.0, 62.0], [184.0, 81.6],
                        [180.0, 76.6], [177.8, 83.6], [192.0, 90.0], [176.0, 74.6], [174.0, 71.0],
                        [184.0, 79.6], [192.7, 93.8], [171.5, 70.0], [173.0, 72.4], [176.0, 85.9],
                        [176.0, 78.8], [180.5, 77.8], [172.7, 66.2], [176.0, 86.4], [173.5, 81.8],
                        [178.0, 89.6], [180.3, 82.8], [180.3, 76.4], [164.5, 63.2], [173.0, 60.9],
                        [183.5, 74.8], [175.5, 70.0], [188.0, 72.4], [189.2, 84.1], [172.8, 69.1],
                        [170.0, 59.5], [182.0, 67.2], [170.0, 61.3], [177.8, 68.6], [184.2, 80.1],
                        [186.7, 87.8], [171.4, 84.7], [172.7, 73.4], [175.3, 72.1], [180.3, 82.6],
                        [182.9, 88.7], [188.0, 84.1], [177.2, 94.1], [172.1, 74.9], [167.0, 59.1],
                        [169.5, 75.6], [174.0, 86.2], [172.7, 75.3], [182.2, 87.1], [164.1, 55.2],
                        [163.0, 57.0], [171.5, 61.4], [184.2, 76.8], [174.0, 86.8], [174.0, 72.2],
                        [177.0, 71.6], [186.0, 84.8], [167.0, 68.2], [171.8, 66.1], [182.0, 72.0],
                        [167.0, 64.6], [177.8, 74.8], [164.5, 70.0], [192.0, 101.6], [175.5, 63.2],
                        [171.2, 79.1], [181.6, 78.9], [167.4, 67.7], [181.1, 66.0], [177.0, 68.2],
                        [174.5, 63.9], [177.5, 72.0], [170.5, 56.8], [182.4, 74.5], [197.1, 90.9],
                        [180.1, 93.0], [175.5, 80.9], [180.6, 72.7], [184.4, 68.0], [175.5, 70.9],
                        [180.6, 72.5], [177.0, 72.5], [177.1, 83.4], [181.6, 75.5], [176.5, 73.0],
                        [175.0, 70.2], [174.0, 73.4], [165.1, 70.5], [177.0, 68.9], [192.0, 102.3],
                        [176.5, 68.4], [169.4, 65.9], [182.1, 75.7], [179.8, 84.5], [175.3, 87.7],
                        [184.9, 86.4], [177.3, 73.2], [167.4, 53.9], [178.1, 72.0], [168.9, 55.5],
                        [157.2, 58.4], [180.3, 83.2], [170.2, 72.7], [177.8, 64.1], [172.7, 72.3],
                        [165.1, 65.0], [186.7, 86.4], [165.1, 65.0], [174.0, 88.6], [175.3, 84.1],
                        [185.4, 66.8], [177.8, 75.5], [180.3, 93.2], [180.3, 82.7], [177.8, 58.0],
                        [177.8, 79.5], [177.8, 78.6], [177.8, 71.8], [177.8, 116.4], [163.8, 72.2],
                        [188.0, 83.6], [198.1, 85.5], [175.3, 90.9], [166.4, 85.9], [190.5, 89.1],
                        [166.4, 75.0], [177.8, 77.7], [179.7, 86.4], [172.7, 90.9], [190.5, 73.6],
                        [185.4, 76.4], [168.9, 69.1], [167.6, 84.5], [175.3, 64.5], [170.2, 69.1],
                        [190.5, 108.6], [177.8, 86.4], [190.5, 80.9], [177.8, 87.7], [184.2, 94.5],
                        [176.5, 80.2], [177.8, 72.0], [180.3, 71.4], [171.4, 72.7], [172.7, 84.1],
                        [172.7, 76.8], [177.8, 63.6], [177.8, 80.9], [182.9, 80.9], [170.2, 85.5],
                        [167.6, 68.6], [175.3, 67.7], [165.1, 66.4], [185.4, 102.3], [181.6, 70.5],
                        [172.7, 95.9], [190.5, 84.1], [179.1, 87.3], [175.3, 71.8], [170.2, 65.9],
                        [193.0, 95.9], [171.4, 91.4], [177.8, 81.8], [177.8, 96.8], [167.6, 69.1],
                        [167.6, 82.7], [180.3, 75.5], [182.9, 79.5], [176.5, 73.6], [186.7, 91.8],
                        [188.0, 84.1], [188.0, 85.9], [177.8, 81.8], [174.0, 82.5], [177.8, 80.5],
                        [171.4, 70.0], [185.4, 81.8], [185.4, 84.1], [188.0, 90.5], [188.0, 91.4],
                        [182.9, 89.1], [176.5, 85.0], [175.3, 69.1], [175.3, 73.6], [188.0, 80.5],
                        [188.0, 82.7], [175.3, 86.4], [170.5, 67.7], [179.1, 92.7], [177.8, 93.6],
                        [175.3, 70.9], [182.9, 75.0], [170.8, 93.2], [188.0, 93.2], [180.3, 77.7],
                        [177.8, 61.4], [185.4, 94.1], [168.9, 75.0], [185.4, 83.6], [180.3, 85.5],
                        [174.0, 73.9], [167.6, 66.8], [182.9, 87.3], [160.0, 72.3], [180.3, 88.6],
                        [167.6, 75.5], [186.7, 101.4], [175.3, 91.1], [175.3, 67.3], [175.9, 77.7],
                        [175.3, 81.8], [179.1, 75.5], [181.6, 84.5], [177.8, 76.6], [182.9, 85.0],
                        [177.8, 102.5], [184.2, 77.3], [179.1, 71.8], [176.5, 87.9], [188.0, 94.3],
                        [174.0, 70.9], [167.6, 64.5], [170.2, 77.3], [167.6, 72.3], [188.0, 87.3],
                        [174.0, 80.0], [176.5, 82.3], [180.3, 73.6], [167.6, 74.1], [188.0, 85.9],
                        [180.3, 73.2], [167.6, 76.3], [183.0, 65.9], [183.0, 90.9], [179.1, 89.1],
                        [170.2, 62.3], [177.8, 82.7], [179.1, 79.1], [190.5, 98.2], [177.8, 84.1],
                        [180.3, 83.2], [180.3, 83.2]
                    ],
                    markPoint : {
                        data : [
                            {type : 'max', name: '最大值'},
                            {type : 'min', name: '最小值'}
                        ]
                    },
                    markLine : {
                        data : [
                            {type : 'average', name: '平均值'}
                        ]
                    }
                }
            ]
        };
    return option1
    };
    return {
        init:function () {
            var distribution = echarts.init(document.getElementById("agricInnovationIndex.distribution"));
            distribution.setOption(randomDistribution());
            distribution.on(echarts.config.EVENT.MAP_SELECTED,function(param){
                var selected = param.selected;
                var selectedProvince;
                var name;
                var heatData2 = 0;
                for (var i = 0, l = option.series[0].data.length; i < l; i++) {
                    name = option.series[0].data[i].name;
                    option.series[0].data[i].selected = selected[name];
                    if (selected[name]) {
                        selectedProvince = name;
                        option.series[0].heatmap = null;
                    }
                }
                if (typeof selectedProvince == 'undefined') {
                    option.series.splice(1);
                    option.legend = null;
                    option.dataRange = null;
                    distribution.setOption(option, true);
                    return;
                }
                option.series[1] = {
                    name: '农企分布',
                    type: 'map',
                    mapType: selectedProvince,
                    itemStyle:{
                        normal:{label:{show:true}},
                        emphasis:{label:{show:true}}
                    },
                    mapLocation: {
                        x: '50%'
                    },
                    roam: true,
                    data:[
                        {name: '重庆市',value: Math.round(Math.random()*1000)},
                        {name: '北京市',value: Math.round(Math.random()*1000)},
                        {name: '天津市',value: Math.round(Math.random()*1000)},
                        {name: '上海市',value: Math.round(Math.random()*1000)},
                        {name: '香港',value: Math.round(Math.random()*1000)},
                        {name: '澳门',value: Math.round(Math.random()*1000)},
                        {name: '巴音郭楞蒙古自治州',value: Math.round(Math.random()*1000)},
                        {name: '和田地区',value: Math.round(Math.random()*1000)},
                        {name: '哈密地区',value: Math.round(Math.random()*1000)},
                        {name: '阿克苏地区',value: Math.round(Math.random()*1000)},
                        {name: '阿勒泰地区',value: Math.round(Math.random()*1000)},
                        {name: '喀什地区',value: Math.round(Math.random()*1000)},
                        {name: '塔城地区',value: Math.round(Math.random()*1000)},
                        {name: '昌吉回族自治州',value: Math.round(Math.random()*1000)},
                        {name: '克孜勒苏柯尔克孜自治州',value: Math.round(Math.random()*1000)},
                        {name: '吐鲁番地区',value: Math.round(Math.random()*1000)},
                        {name: '伊犁哈萨克自治州',value: Math.round(Math.random()*1000)},
                        {name: '博尔塔拉蒙古自治州',value: Math.round(Math.random()*1000)},
                        {name: '乌鲁木齐市',value: Math.round(Math.random()*1000)},
                        {name: '克拉玛依市',value: Math.round(Math.random()*1000)},
                        {name: '阿拉尔市',value: Math.round(Math.random()*1000)},
                        {name: '图木舒克市',value: Math.round(Math.random()*1000)},
                        {name: '五家渠市',value: Math.round(Math.random()*1000)},
                        {name: '石河子市',value: Math.round(Math.random()*1000)},
                        {name: '那曲地区',value: Math.round(Math.random()*1000)},
                        {name: '阿里地区',value: Math.round(Math.random()*1000)},
                        {name: '日喀则地区',value: Math.round(Math.random()*1000)},
                        {name: '林芝地区',value: Math.round(Math.random()*1000)},
                        {name: '昌都地区',value: Math.round(Math.random()*1000)},
                        {name: '山南地区',value: Math.round(Math.random()*1000)},
                        {name: '拉萨市',value: Math.round(Math.random()*1000)},
                        {name: '呼伦贝尔市',value: Math.round(Math.random()*1000)},
                        {name: '阿拉善盟',value: Math.round(Math.random()*1000)},
                        {name: '锡林郭勒盟',value: Math.round(Math.random()*1000)},
                        {name: '鄂尔多斯市',value: Math.round(Math.random()*1000)},
                        {name: '赤峰市',value: Math.round(Math.random()*1000)},
                        {name: '巴彦淖尔市',value: Math.round(Math.random()*1000)},
                        {name: '通辽市',value: Math.round(Math.random()*1000)},
                        {name: '乌兰察布市',value: Math.round(Math.random()*1000)},
                        {name: '兴安盟',value: Math.round(Math.random()*1000)},
                        {name: '包头市',value: Math.round(Math.random()*1000)},
                        {name: '呼和浩特市',value: Math.round(Math.random()*1000)},
                        {name: '乌海市',value: Math.round(Math.random()*1000)},
                        {name: '海西蒙古族藏族自治州',value: Math.round(Math.random()*1000)},
                        {name: '玉树藏族自治州',value: Math.round(Math.random()*1000)},
                        {name: '果洛藏族自治州',value: Math.round(Math.random()*1000)},
                        {name: '海南藏族自治州',value: Math.round(Math.random()*1000)},
                        {name: '海北藏族自治州',value: Math.round(Math.random()*1000)},
                        {name: '黄南藏族自治州',value: Math.round(Math.random()*1000)},
                        {name: '海东地区',value: Math.round(Math.random()*1000)},
                        {name: '西宁市',value: Math.round(Math.random()*1000)},
                        {name: '甘孜藏族自治州',value: Math.round(Math.random()*1000)},
                        {name: '阿坝藏族羌族自治州',value: Math.round(Math.random()*1000)},
                        {name: '凉山彝族自治州',value: Math.round(Math.random()*1000)},
                        {name: '绵阳市',value: Math.round(Math.random()*1000)},
                        {name: '达州市',value: Math.round(Math.random()*1000)},
                        {name: '广元市',value: Math.round(Math.random()*1000)},
                        {name: '雅安市',value: Math.round(Math.random()*1000)},
                        {name: '宜宾市',value: Math.round(Math.random()*1000)},
                        {name: '乐山市',value: Math.round(Math.random()*1000)},
                        {name: '南充市',value: Math.round(Math.random()*1000)},
                        {name: '巴中市',value: Math.round(Math.random()*1000)},
                        {name: '泸州市',value: Math.round(Math.random()*1000)},
                        {name: '成都市',value: Math.round(Math.random()*1000)},
                        {name: '资阳市',value: Math.round(Math.random()*1000)},
                        {name: '攀枝花市',value: Math.round(Math.random()*1000)},
                        {name: '眉山市',value: Math.round(Math.random()*1000)},
                        {name: '广安市',value: Math.round(Math.random()*1000)},
                        {name: '德阳市',value: Math.round(Math.random()*1000)},
                        {name: '内江市',value: Math.round(Math.random()*1000)},
                        {name: '遂宁市',value: Math.round(Math.random()*1000)},
                        {name: '自贡市',value: Math.round(Math.random()*1000)},
                        {name: '黑河市',value: Math.round(Math.random()*1000)},
                        {name: '大兴安岭地区',value: Math.round(Math.random()*1000)},
                        {name: '哈尔滨市',value: Math.round(Math.random()*1000)},
                        {name: '齐齐哈尔市',value: Math.round(Math.random()*1000)},
                        {name: '牡丹江市',value: Math.round(Math.random()*1000)},
                        {name: '绥化市',value: Math.round(Math.random()*1000)},
                        {name: '伊春市',value: Math.round(Math.random()*1000)},
                        {name: '佳木斯市',value: Math.round(Math.random()*1000)},
                        {name: '鸡西市',value: Math.round(Math.random()*1000)},
                        {name: '双鸭山市',value: Math.round(Math.random()*1000)},
                        {name: '大庆市',value: Math.round(Math.random()*1000)},
                        {name: '鹤岗市',value: Math.round(Math.random()*1000)},
                        {name: '七台河市',value: Math.round(Math.random()*1000)},
                        {name: '酒泉市',value: Math.round(Math.random()*1000)},
                        {name: '张掖市',value: Math.round(Math.random()*1000)},
                        {name: '甘南藏族自治州',value: Math.round(Math.random()*1000)},
                        {name: '武威市',value: Math.round(Math.random()*1000)},
                        {name: '陇南市',value: Math.round(Math.random()*1000)},
                        {name: '庆阳市',value: Math.round(Math.random()*1000)},
                        {name: '白银市',value: Math.round(Math.random()*1000)},
                        {name: '定西市',value: Math.round(Math.random()*1000)},
                        {name: '天水市',value: Math.round(Math.random()*1000)},
                        {name: '兰州市',value: Math.round(Math.random()*1000)},
                        {name: '平凉市',value: Math.round(Math.random()*1000)},
                        {name: '临夏回族自治州',value: Math.round(Math.random()*1000)},
                        {name: '金昌市',value: Math.round(Math.random()*1000)},
                        {name: '嘉峪关市',value: Math.round(Math.random()*1000)},
                        {name: '普洱市',value: Math.round(Math.random()*1000)},
                        {name: '红河哈尼族彝族自治州',value: Math.round(Math.random()*1000)},
                        {name: '文山壮族苗族自治州',value: Math.round(Math.random()*1000)},
                        {name: '曲靖市',value: Math.round(Math.random()*1000)},
                        {name: '楚雄彝族自治州',value: Math.round(Math.random()*1000)},
                        {name: '大理白族自治州',value: Math.round(Math.random()*1000)},
                        {name: '临沧市',value: Math.round(Math.random()*1000)},
                        {name: '迪庆藏族自治州',value: Math.round(Math.random()*1000)},
                        {name: '昭通市',value: Math.round(Math.random()*1000)},
                        {name: '昆明市',value: Math.round(Math.random()*1000)},
                        {name: '丽江市',value: Math.round(Math.random()*1000)},
                        {name: '西双版纳傣族自治州',value: Math.round(Math.random()*1000)},
                        {name: '保山市',value: Math.round(Math.random()*1000)},
                        {name: '玉溪市',value: Math.round(Math.random()*1000)},
                        {name: '怒江傈僳族自治州',value: Math.round(Math.random()*1000)},
                        {name: '德宏傣族景颇族自治州',value: Math.round(Math.random()*1000)},
                        {name: '百色市',value: Math.round(Math.random()*1000)},
                        {name: '河池市',value: Math.round(Math.random()*1000)},
                        {name: '桂林市',value: Math.round(Math.random()*1000)},
                        {name: '南宁市',value: Math.round(Math.random()*1000)},
                        {name: '柳州市',value: Math.round(Math.random()*1000)},
                        {name: '崇左市',value: Math.round(Math.random()*1000)},
                        {name: '来宾市',value: Math.round(Math.random()*1000)},
                        {name: '玉林市',value: Math.round(Math.random()*1000)},
                        {name: '梧州市',value: Math.round(Math.random()*1000)},
                        {name: '贺州市',value: Math.round(Math.random()*1000)},
                        {name: '钦州市',value: Math.round(Math.random()*1000)},
                        {name: '贵港市',value: Math.round(Math.random()*1000)},
                        {name: '防城港市',value: Math.round(Math.random()*1000)},
                        {name: '北海市',value: Math.round(Math.random()*1000)},
                        {name: '怀化市',value: Math.round(Math.random()*1000)},
                        {name: '永州市',value: Math.round(Math.random()*1000)},
                        {name: '邵阳市',value: Math.round(Math.random()*1000)},
                        {name: '郴州市',value: Math.round(Math.random()*1000)},
                        {name: '常德市',value: Math.round(Math.random()*1000)},
                        {name: '湘西土家族苗族自治州',value: Math.round(Math.random()*1000)},
                        {name: '衡阳市',value: Math.round(Math.random()*1000)},
                        {name: '岳阳市',value: Math.round(Math.random()*1000)},
                        {name: '益阳市',value: Math.round(Math.random()*1000)},
                        {name: '长沙市',value: Math.round(Math.random()*1000)},
                        {name: '株洲市',value: Math.round(Math.random()*1000)},
                        {name: '张家界市',value: Math.round(Math.random()*1000)},
                        {name: '娄底市',value: Math.round(Math.random()*1000)},
                        {name: '湘潭市',value: Math.round(Math.random()*1000)},
                        {name: '榆林市',value: Math.round(Math.random()*1000)},
                        {name: '延安市',value: Math.round(Math.random()*1000)},
                        {name: '汉中市',value: Math.round(Math.random()*1000)},
                        {name: '安康市',value: Math.round(Math.random()*1000)},
                        {name: '商洛市',value: Math.round(Math.random()*1000)},
                        {name: '宝鸡市',value: Math.round(Math.random()*1000)},
                        {name: '渭南市',value: Math.round(Math.random()*1000)},
                        {name: '咸阳市',value: Math.round(Math.random()*1000)},
                        {name: '西安市',value: Math.round(Math.random()*1000)},
                        {name: '铜川市',value: Math.round(Math.random()*1000)},
                        {name: '清远市',value: Math.round(Math.random()*1000)},
                        {name: '韶关市',value: Math.round(Math.random()*1000)},
                        {name: '湛江市',value: Math.round(Math.random()*1000)},
                        {name: '梅州市',value: Math.round(Math.random()*1000)},
                        {name: '河源市',value: Math.round(Math.random()*1000)},
                        {name: '肇庆市',value: Math.round(Math.random()*1000)},
                        {name: '惠州市',value: Math.round(Math.random()*1000)},
                        {name: '茂名市',value: Math.round(Math.random()*1000)},
                        {name: '江门市',value: Math.round(Math.random()*1000)},
                        {name: '阳江市',value: Math.round(Math.random()*1000)},
                        {name: '云浮市',value: Math.round(Math.random()*1000)},
                        {name: '广州市',value: Math.round(Math.random()*1000)},
                        {name: '汕尾市',value: Math.round(Math.random()*1000)},
                        {name: '揭阳市',value: Math.round(Math.random()*1000)},
                        {name: '珠海市',value: Math.round(Math.random()*1000)},
                        {name: '佛山市',value: Math.round(Math.random()*1000)},
                        {name: '潮州市',value: Math.round(Math.random()*1000)},
                        {name: '汕头市',value: Math.round(Math.random()*1000)},
                        {name: '深圳市',value: Math.round(Math.random()*1000)},
                        {name: '东莞市',value: Math.round(Math.random()*1000)},
                        {name: '中山市',value: Math.round(Math.random()*1000)},
                        {name: '延边朝鲜族自治州',value: Math.round(Math.random()*1000)},
                        {name: '吉林市',value: Math.round(Math.random()*1000)},
                        {name: '白城市',value: Math.round(Math.random()*1000)},
                        {name: '松原市',value: Math.round(Math.random()*1000)},
                        {name: '长春市',value: Math.round(Math.random()*1000)},
                        {name: '白山市',value: Math.round(Math.random()*1000)},
                        {name: '通化市',value: Math.round(Math.random()*1000)},
                        {name: '四平市',value: Math.round(Math.random()*1000)},
                        {name: '辽源市',value: Math.round(Math.random()*1000)},
                        {name: '承德市',value: Math.round(Math.random()*1000)},
                        {name: '张家口市',value: Math.round(Math.random()*1000)},
                        {name: '保定市',value: Math.round(Math.random()*1000)},
                        {name: '唐山市',value: Math.round(Math.random()*1000)},
                        {name: '沧州市',value: Math.round(Math.random()*1000)},
                        {name: '石家庄市',value: Math.round(Math.random()*1000)},
                        {name: '邢台市',value: Math.round(Math.random()*1000)},
                        {name: '邯郸市',value: Math.round(Math.random()*1000)},
                        {name: '秦皇岛市',value: Math.round(Math.random()*1000)},
                        {name: '衡水市',value: Math.round(Math.random()*1000)},
                        {name: '廊坊市',value: Math.round(Math.random()*1000)},
                        {name: '恩施土家族苗族自治州',value: Math.round(Math.random()*1000)},
                        {name: '十堰市',value: Math.round(Math.random()*1000)},
                        {name: '宜昌市',value: Math.round(Math.random()*1000)},
                        {name: '襄樊市',value: Math.round(Math.random()*1000)},
                        {name: '黄冈市',value: Math.round(Math.random()*1000)},
                        {name: '荆州市',value: Math.round(Math.random()*1000)},
                        {name: '荆门市',value: Math.round(Math.random()*1000)},
                        {name: '咸宁市',value: Math.round(Math.random()*1000)},
                        {name: '随州市',value: Math.round(Math.random()*1000)},
                        {name: '孝感市',value: Math.round(Math.random()*1000)},
                        {name: '武汉市',value: Math.round(Math.random()*1000)},
                        {name: '黄石市',value: Math.round(Math.random()*1000)},
                        {name: '神农架林区',value: Math.round(Math.random()*1000)},
                        {name: '天门市',value: Math.round(Math.random()*1000)},
                        {name: '仙桃市',value: Math.round(Math.random()*1000)},
                        {name: '潜江市',value: Math.round(Math.random()*1000)},
                        {name: '鄂州市',value: Math.round(Math.random()*1000)},
                        {name: '遵义市',value: Math.round(Math.random()*1000)},
                        {name: '黔东南苗族侗族自治州',value: Math.round(Math.random()*1000)},
                        {name: '毕节地区',value: Math.round(Math.random()*1000)},
                        {name: '黔南布依族苗族自治州',value: Math.round(Math.random()*1000)},
                        {name: '铜仁地区',value: Math.round(Math.random()*1000)},
                        {name: '黔西南布依族苗族自治州',value: Math.round(Math.random()*1000)},
                        {name: '六盘水市',value: Math.round(Math.random()*1000)},
                        {name: '安顺市',value: Math.round(Math.random()*1000)},
                        {name: '贵阳市',value: Math.round(Math.random()*1000)},
                        {name: '烟台市',value: Math.round(Math.random()*1000)},
                        {name: '临沂市',value: Math.round(Math.random()*1000)},
                        {name: '潍坊市',value: Math.round(Math.random()*1000)},
                        {name: '青岛市',value: Math.round(Math.random()*1000)},
                        {name: '菏泽市',value: Math.round(Math.random()*1000)},
                        {name: '济宁市',value: Math.round(Math.random()*1000)},
                        {name: '德州市',value: Math.round(Math.random()*1000)},
                        {name: '滨州市',value: Math.round(Math.random()*1000)},
                        {name: '聊城市',value: Math.round(Math.random()*1000)},
                        {name: '东营市',value: Math.round(Math.random()*1000)},
                        {name: '济南市',value: Math.round(Math.random()*1000)},
                        {name: '泰安市',value: Math.round(Math.random()*1000)},
                        {name: '威海市',value: Math.round(Math.random()*1000)},
                        {name: '日照市',value: Math.round(Math.random()*1000)},
                        {name: '淄博市',value: Math.round(Math.random()*1000)},
                        {name: '枣庄市',value: Math.round(Math.random()*1000)},
                        {name: '莱芜市',value: Math.round(Math.random()*1000)},
                        {name: '赣州市',value: Math.round(Math.random()*1000)},
                        {name: '吉安市',value: Math.round(Math.random()*1000)},
                        {name: '上饶市',value: Math.round(Math.random()*1000)},
                        {name: '九江市',value: Math.round(Math.random()*1000)},
                        {name: '抚州市',value: Math.round(Math.random()*1000)},
                        {name: '宜春市',value: Math.round(Math.random()*1000)},
                        {name: '南昌市',value: Math.round(Math.random()*1000)},
                        {name: '景德镇市',value: Math.round(Math.random()*1000)},
                        {name: '萍乡市',value: Math.round(Math.random()*1000)},
                        {name: '鹰潭市',value: Math.round(Math.random()*1000)},
                        {name: '新余市',value: Math.round(Math.random()*1000)},
                        {name: '南阳市',value: Math.round(Math.random()*1000)},
                        {name: '信阳市',value: Math.round(Math.random()*1000)},
                        {name: '洛阳市',value: Math.round(Math.random()*1000)},
                        {name: '驻马店市',value: Math.round(Math.random()*1000)},
                        {name: '周口市',value: Math.round(Math.random()*1000)},
                        {name: '商丘市',value: Math.round(Math.random()*1000)},
                        {name: '三门峡市',value: Math.round(Math.random()*1000)},
                        {name: '新乡市',value: Math.round(Math.random()*1000)},
                        {name: '平顶山市',value: Math.round(Math.random()*1000)},
                        {name: '郑州市',value: Math.round(Math.random()*1000)},
                        {name: '安阳市',value: Math.round(Math.random()*1000)},
                        {name: '开封市',value: Math.round(Math.random()*1000)},
                        {name: '焦作市',value: Math.round(Math.random()*1000)},
                        {name: '许昌市',value: Math.round(Math.random()*1000)},
                        {name: '濮阳市',value: Math.round(Math.random()*1000)},
                        {name: '漯河市',value: Math.round(Math.random()*1000)},
                        {name: '鹤壁市',value: Math.round(Math.random()*1000)},
                        {name: '大连市',value: Math.round(Math.random()*1000)},
                        {name: '朝阳市',value: Math.round(Math.random()*1000)},
                        {name: '丹东市',value: Math.round(Math.random()*1000)},
                        {name: '铁岭市',value: Math.round(Math.random()*1000)},
                        {name: '沈阳市',value: Math.round(Math.random()*1000)},
                        {name: '抚顺市',value: Math.round(Math.random()*1000)},
                        {name: '葫芦岛市',value: Math.round(Math.random()*1000)},
                        {name: '阜新市',value: Math.round(Math.random()*1000)},
                        {name: '锦州市',value: Math.round(Math.random()*1000)},
                        {name: '鞍山市',value: Math.round(Math.random()*1000)},
                        {name: '本溪市',value: Math.round(Math.random()*1000)},
                        {name: '营口市',value: Math.round(Math.random()*1000)},
                        {name: '辽阳市',value: Math.round(Math.random()*1000)},
                        {name: '盘锦市',value: Math.round(Math.random()*1000)},
                        {name: '忻州市',value: Math.round(Math.random()*1000)},
                        {name: '吕梁市',value: Math.round(Math.random()*1000)},
                        {name: '临汾市',value: Math.round(Math.random()*1000)},
                        {name: '晋中市',value: Math.round(Math.random()*1000)},
                        {name: '运城市',value: Math.round(Math.random()*1000)},
                        {name: '大同市',value: Math.round(Math.random()*1000)},
                        {name: '长治市',value: Math.round(Math.random()*1000)},
                        {name: '朔州市',value: Math.round(Math.random()*1000)},
                        {name: '晋城市',value: Math.round(Math.random()*1000)},
                        {name: '太原市',value: Math.round(Math.random()*1000)},
                        {name: '阳泉市',value: Math.round(Math.random()*1000)},
                        {name: '六安市',value: Math.round(Math.random()*1000)},
                        {name: '安庆市',value: Math.round(Math.random()*1000)},
                        {name: '滁州市',value: Math.round(Math.random()*1000)},
                        {name: '宣城市',value: Math.round(Math.random()*1000)},
                        {name: '阜阳市',value: Math.round(Math.random()*1000)},
                        {name: '宿州市',value: Math.round(Math.random()*1000)},
                        {name: '黄山市',value: Math.round(Math.random()*1000)},
                        {name: '巢湖市',value: Math.round(Math.random()*1000)},
                        {name: '亳州市',value: Math.round(Math.random()*1000)},
                        {name: '池州市',value: Math.round(Math.random()*1000)},
                        {name: '合肥市',value: Math.round(Math.random()*1000)},
                        {name: '蚌埠市',value: Math.round(Math.random()*1000)},
                        {name: '芜湖市',value: Math.round(Math.random()*1000)},
                        {name: '淮北市',value: Math.round(Math.random()*1000)},
                        {name: '淮南市',value: Math.round(Math.random()*1000)},
                        {name: '马鞍山市',value: Math.round(Math.random()*1000)},
                        {name: '铜陵市',value: Math.round(Math.random()*1000)},
                        {name: '南平市',value: Math.round(Math.random()*1000)},
                        {name: '三明市',value: Math.round(Math.random()*1000)},
                        {name: '龙岩市',value: Math.round(Math.random()*1000)},
                        {name: '宁德市',value: Math.round(Math.random()*1000)},
                        {name: '福州市',value: Math.round(Math.random()*1000)},
                        {name: '漳州市',value: Math.round(Math.random()*1000)},
                        {name: '泉州市',value: Math.round(Math.random()*1000)},
                        {name: '莆田市',value: Math.round(Math.random()*1000)},
                        {name: '厦门市',value: Math.round(Math.random()*1000)},
                        {name: '丽水市',value: Math.round(Math.random()*1000)},
                        {name: '杭州市',value: Math.round(Math.random()*1000)},
                        {name: '温州市',value: Math.round(Math.random()*1000)},
                        {name: '宁波市',value: Math.round(Math.random()*1000)},
                        {name: '舟山市',value: Math.round(Math.random()*1000)},
                        {name: '台州市',value: Math.round(Math.random()*1000)},
                        {name: '金华市',value: Math.round(Math.random()*1000)},
                        {name: '衢州市',value: Math.round(Math.random()*1000)},
                        {name: '绍兴市',value: Math.round(Math.random()*1000)},
                        {name: '嘉兴市',value: Math.round(Math.random()*1000)},
                        {name: '湖州市',value: Math.round(Math.random()*1000)},
                        {name: '盐城市',value: Math.round(Math.random()*1000)},
                        {name: '徐州市',value: Math.round(Math.random()*1000)},
                        {name: '南通市',value: Math.round(Math.random()*1000)},
                        {name: '淮安市',value: Math.round(Math.random()*1000)},
                        {name: '苏州市',value: Math.round(Math.random()*1000)},
                        {name: '宿迁市',value: Math.round(Math.random()*1000)},
                        {name: '连云港市',value: Math.round(Math.random()*1000)},
                        {name: '扬州市',value: Math.round(Math.random()*1000)},
                        {name: '南京市',value: Math.round(Math.random()*1000)},
                        {name: '泰州市',value: Math.round(Math.random()*1000)},
                        {name: '无锡市',value: Math.round(Math.random()*1000)},
                        {name: '常州市',value: Math.round(Math.random()*1000)},
                        {name: '镇江市',value: Math.round(Math.random()*1000)},
                        {name: '吴忠市',value: Math.round(Math.random()*1000)},
                        {name: '中卫市',value: Math.round(Math.random()*1000)},
                        {name: '固原市',value: Math.round(Math.random()*1000)},
                        {name: '银川市',value: Math.round(Math.random()*1000)},
                        {name: '石嘴山市',value: Math.round(Math.random()*1000)},
                        {name: '儋州市',value: Math.round(Math.random()*1000)},
                        {name: '文昌市',value: Math.round(Math.random()*1000)},
                        {name: '乐东黎族自治县',value: Math.round(Math.random()*1000)},
                        {name: '三亚市',value: Math.round(Math.random()*1000)},
                        {name: '琼中黎族苗族自治县',value: Math.round(Math.random()*1000)},
                        {name: '东方市',value: Math.round(Math.random()*1000)},
                        {name: '海口市',value: Math.round(Math.random()*1000)},
                        {name: '万宁市',value: Math.round(Math.random()*1000)},
                        {name: '澄迈县',value: Math.round(Math.random()*1000)},
                        {name: '白沙黎族自治县',value: Math.round(Math.random()*1000)},
                        {name: '琼海市',value: Math.round(Math.random()*1000)},
                        {name: '昌江黎族自治县',value: Math.round(Math.random()*1000)},
                        {name: '临高县',value: Math.round(Math.random()*1000)},
                        {name: '陵水黎族自治县',value: Math.round(Math.random()*1000)},
                        {name: '屯昌县',value: Math.round(Math.random()*1000)},
                        {name: '定安县',value: Math.round(Math.random()*1000)},
                        {name: '保亭黎族苗族自治县',value: Math.round(Math.random()*1000)},
                        {name: '五指山市',value: Math.round(Math.random()*1000)}
                    ]
                };
                option.legend = {
                    x:'right',
                    data:['农企分布']
                };
                option.dataRange = {
                    orient: 'horizontal',
                    x: 'right',
                    min: 0,
                    max: 1000,
                    color:['#DBFCFE','#0A75DF'],
                    text:['高','低'],           // 文本，默认为数值文本
                    splitNumber:0
                };

                distribution.setOption(option, true);
            });
            var patentType = initEchart("agricInnovationIndex.patentType");
            var expenditure = initEchart("agricInnovationIndex.expenditure");
            var rank = initEchart("agricInnovationIndex.rank");
            var newProject = initEchart("agricInnovationIndex.newProject");
            var overall = initEchart("agricInnovationIndex.overall");
        },
        patentType:function () {
            return patentType()
        },
        expenditure:function () {
            return expenditure()
        },
        rank:function () {
            return rank()
        },
        newProject:function () {
            return newProject()
        },
        overall:function () {
            return overall()
        }
    }

}();