/**
 * Created by Administrator on 2016-5-18.
 */
driveUpPricesMarks=function () {
    var pricesMarks = function () {
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
        var option = {
            title : {
                text: '全国粮食存放量展示图',
                subtext: '九次方财富资询'
            },
            tooltip : {
                trigger: 'item'
            },

            dataRange: {
                orient: 'horizontal',
                min: 0,
                max: 55000,
                text:['高','低'],           // 文本，默认为数值文本
                splitNumber:0
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
                    name: '全国粮食存放量展示图',
                    type: 'map',
                    mapType: 'china',
                    heatmap: {
                        minAlpha: 0.1,
                        data: heatData
                    },
                    mapLocation: {
                        x: 'center'
                    },
                    selectedMode : 'single',
                    itemStyle:{
                        normal:{label:{show:true}},
                        emphasis:{label:{show:true}}
                    },
                    data:[
                        {name:'西藏', value:605.83},
                        {name:'青海', value:1670.44},
                        {name:'宁夏', value:2102.21},
                        {name:'海南', value:2522.66},
                        {name:'甘肃', value:5020.37},
                        {name:'贵州', value:5701.84},
                        {name:'新疆', value:6610.05},
                        {name:'云南', value:8893.12},
                        {name:'重庆', value:10011.37},
                        {name:'吉林', value:10568.83},
                        {name:'山西', value:11237.55},
                        {name:'天津', value:11307.28},
                        {name:'江西', value:11702.82},
                        {name:'广西', value:11720.87},
                        {name:'陕西', value:12512.3},
                        {name:'黑龙江', value:12582},
                        {name:'内蒙古', value:14359.88},
                        {name:'安徽', value:15300.65},
                        {name:'北京', value:16251.93},
                        {name:'福建', value:17560.18},
                        {name:'上海', value:19195.69},
                        {name:'湖北', value:19632.26},
                        {name:'湖南', value:19669.56},
                        {name:'四川', value:21026.68, selected:true},
                        {name:'辽宁', value:22226.7},
                        {name:'河北', value:24515.76},
                        {name:'河南', value:26931.03},
                        {name:'浙江', value:32318.85},
                        {name:'山东', value:45361.85},
                        {name:'江苏', value:49110.27},
                        {name:'广东', value:53210.28}
                    ]
                }
            ],
            animation: true
        };
        return option;
        
    };
    var blackList = function (name) {

        var option = {

            title : {
                text: name+"省哄抬物价企业",
                subtext: '九次方财富资询',
                x:'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient : 'vertical',
                x : 'left',
                data:[name+'XXX公司A',name+'XXX公司B',name+'XXX公司C',name+'XXX公司D',name+'XXX公司E']
            },
            toolbox: {
                show : true,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {
                        show: true,
                        type: ['pie', 'funnel'],
                        option: {
                            funnel: {
                                x: '25%',
                                width: '50%',
                                funnelAlign: 'left',
                                max: 1548
                            }
                        }
                    },
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            calculable : true,
            series : [
                {
                    name:'访问来源',
                    type:'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {value:Math.random()*1000, name:name+'XXX公司A'},
                        {value:Math.random()*1000, name:name+'XXX公司B'},
                        {value:Math.random()*1000, name:name+'XXX公司C'},
                        {value:Math.random()*1000, name:name+'XXX公司D'},
                        {value:Math.random()*1000, name:name+'XXX公司E'}
                    ]
                }
            ],
            animation: true
        };
    return option;
    };

    var randomBlack = function(name) {
        return blackList(name);
    };
    return {
        init: function () {
            var pricesMarks = initEchart("driveUpPricesMarks.pricesMarks");
            var blackList = echarts.init(document.getElementById("driveUpPricesMarks.blackList"));
            blackList.setOption(randomBlack("四川"));
            //var blackList = echarts.init( document.getElementById("driveUpPricesMarks.blackList"));
            //blackList.setOption(option);
            pricesMarks.on(echarts.config.EVENT.MAP_SELECTED,function(param){
                blackList.setOption(randomBlack(param.target),true)
            });
        },
        pricesMarks:function () {
            return pricesMarks();
        }
    }
}();