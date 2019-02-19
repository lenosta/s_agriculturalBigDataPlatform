
var agricProdQualiSafety = function () {
	//判断浏览区是否支持canvas
    function isSupportCanvas(){
        var elem = document.createElement('canvas');
        return !!(elem.getContext && elem.getContext('2d'));
    }
    var PassRate_first = function () {
        PassRate_option = {
            title : {
                text: '农产品质量合格率指针',
                subtext: '九次方财富资询'
            },
            tooltip : {
                formatter: "{a} <br/>{b} : {c}%"
            },
            toolbox: {
                show : true,
                feature : {
                    mark : {show: true},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            series : [
                {
                    name:'农产品质量指标',
                    type:'gauge',
                    detail : {formatter:'{value}%'},
                    data:[{value: 50, name: '合格率'}]
                }
            ]
        };
        return PassRate_option;
    };
    var PassRate_second = function () {
        PassRate_option = {
            title : {
                text: '农产品质量合格率指针',
                subtext: '九次方财富资询'
            },
            tooltip : {
                formatter: "{a} <br/>{b} : {c}%"
            },
            toolbox: {
                show : true,
                feature : {
                    mark : {show: true},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            series : [
                {
                    name:'农产品质量指标',
                    type:'gauge',
                    detail : {formatter:'{value}%'},
                    data:[{value: 50, name: '合格率'}]
                }
            ]
        };
    return PassRate_option;
    };
    var PassRate_third = function () {
        PassRate_option = {
            title : {
                text: '农产品质量合格率指针',
                subtext: '九次方财富资询'
            },
            tooltip : {
                formatter: "{a} <br/>{b} : {c}%"
            },
            toolbox: {
                show : true,
                feature : {
                    mark : {show: true},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            series : [
                {
                    name:'农产品指标',
                    type:'gauge',
                    detail : {formatter:'{value}%'},
                    data:[{value: 50, name: '合格率'}]
                }
            ]
        };
        return PassRate_option;
    };
    var Products = function () {
        option = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data:['小麦','稻谷','玉米','杂豆类','薯类','非食用油料作物产品','茄果菜类','果用瓜类','糖料作物产品']
            },
            toolbox: {
                show : true,
                orient: 'vertical',
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
                    type : 'category',
                    data : ['华东地区','华南地区','华中地区','华北地区','西北地区','西南地区','东北地区']
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'小麦',
                    type:'bar',
                    data:[320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name:'稻谷',
                    type:'bar',
                    stack: '广告',
                    data:[120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name:'玉米',
                    type:'bar',
                    stack: '广告',
                    data:[220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name:'杂豆类',
                    type:'bar',
                    stack: '广告',
                    data:[150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name:'薯类',
                    type:'bar',
                    data:[862, 1018, 964, 1026, 1679, 1600, 1570],
                    markLine : {
                        itemStyle:{
                            normal:{
                                lineStyle:{
                                    type: 'dashed'
                                }
                            }
                        },
                        data : [
                            [{type : 'min'}, {type : 'max'}]
                        ]
                    }
                },
                {
                    name:'非食用油料作物产品',
                    type:'bar',
                    barWidth : 5,
                    stack: '搜索引擎',
                    data:[620, 732, 701, 734, 1090, 1130, 1120]
                },
                {
                    name:'茄果菜类',
                    type:'bar',
                    stack: '搜索引擎',
                    data:[120, 132, 101, 134, 290, 230, 220]
                },
                {
                    name:'果用瓜类',
                    type:'bar',
                    stack: '搜索引擎',
                    data:[60, 72, 71, 74, 190, 130, 110]
                },
                {
                    name:'糖料作物产品',
                    type:'bar',
                    stack: '搜索引擎',
                    data:[62, 82, 91, 84, 109, 110, 120]
                }
            ]
        };

        return option;
    };
    return {
    	init:function(){
            var PassRate_first = initEchart("agricProdQualiSafety.PassRate_first");
            var PassRate_second = initEchart("agricProdQualiSafety.PassRate_second");
            var PassRate_third = initEchart("agricProdQualiSafety.PassRate_third");
            clearInterval(timeTicket);
            var timeTicket = setInterval(function (){
                PassRate_option.series[0].data[0].value = (Math.random()*100).toFixed(2) - 0;
                PassRate_first.setOption(PassRate_option, true);
                PassRate_second.setOption(PassRate_option, true);
                PassRate_third.setOption(PassRate_option, true);
            },2000);
            var Products = initEchart("agricProdQualiSafety.Products");

    	},
        PassRate_first:function () {
            return PassRate_first()
        },
        PassRate_second:function () {
            return PassRate_second()
        },
        PassRate_third:function () {
            return PassRate_third()
        },
        Products:function () {
            return Products()
        }
    };

}();

