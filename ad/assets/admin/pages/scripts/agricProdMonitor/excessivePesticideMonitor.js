
var excessivePestMonitor = function () {
	//判断浏览区是否支持canvas
    function isSupportCanvas(){
        var elem = document.createElement('canvas');
        return !!(elem.getContext && elem.getContext('2d'));
    }
    
    var countMap = function(){
    	var myChart = echarts.init(document.getElementById('countMap'));
    	option = {
		    title : {
		        text: '各省农药肥料使用情况',
		        subtext: '九次方财富咨询',
		        x:'center'
		    },
		    tooltip : {
		        trigger: 'item'
		    },
		    legend: {
		        orient: 'vertical',
		        x:'left',
		        data:['农药综合使用量','肥料综合使用量','病虫害综合统计数据']
		    },
		    dataRange: {
		        min: 0,
		        max: 2500,
		        x: 'left',
		        y: 'bottom',
		        text:['高','低'],           // 文本，默认为数值文本
		        calculable : true
		    },
		    toolbox: {
		        show: false,
		        orient : 'vertical',
		        x: 'right',
		        y: 'center',
		        feature : {
		            mark : {show: true},
		            dataView : {show: true, readOnly: false},
		            restore : {show: true},
		            saveAsImage : {show: true}
		        }
		    },
		    roamController: {
		        show: false,
		        x: 'right',
		        mapTypeControl: {
		            'china': true
		        }
		    },
		    series : [
		        {
		            name: '农药综合使用量',
		            type: 'map',
		            mapType: 'china',
		            roam: false,
		            itemStyle:{
		                normal:{label:{show:true}},
		                emphasis:{label:{show:true}}
		            },
		            data:[
		                {name: '北京',value: Math.round(Math.random()*1000)},
		                {name: '天津',value: Math.round(Math.random()*1000)},
		                {name: '上海',value: Math.round(Math.random()*1000)},
		                {name: '重庆',value: Math.round(Math.random()*1000)},
		                {name: '河北',value: Math.round(Math.random()*1000)},
		                {name: '河南',value: Math.round(Math.random()*1000)},
		                {name: '云南',value: Math.round(Math.random()*1000)},
		                {name: '辽宁',value: Math.round(Math.random()*1000)},
		                {name: '黑龙江',value: Math.round(Math.random()*1000)},
		                {name: '湖南',value: Math.round(Math.random()*1000)},
		                {name: '安徽',value: Math.round(Math.random()*1000)},
		                {name: '山东',value: Math.round(Math.random()*1000)},
		                {name: '新疆',value: Math.round(Math.random()*1000)},
		                {name: '江苏',value: Math.round(Math.random()*1000)},
		                {name: '浙江',value: Math.round(Math.random()*1000)},
		                {name: '江西',value: Math.round(Math.random()*1000)},
		                {name: '湖北',value: Math.round(Math.random()*1000)},
		                {name: '广西',value: Math.round(Math.random()*1000)},
		                {name: '甘肃',value: Math.round(Math.random()*1000)},
		                {name: '山西',value: Math.round(Math.random()*1000)},
		                {name: '内蒙古',value: Math.round(Math.random()*1000)},
		                {name: '陕西',value: Math.round(Math.random()*1000)},
		                {name: '吉林',value: Math.round(Math.random()*1000)},
		                {name: '福建',value: Math.round(Math.random()*1000)},
		                {name: '贵州',value: Math.round(Math.random()*1000)},
		                {name: '广东',value: Math.round(Math.random()*1000)},
		                {name: '青海',value: Math.round(Math.random()*1000)},
		                {name: '西藏',value: Math.round(Math.random()*1000)},
		                {name: '四川',value: Math.round(Math.random()*1000)},
		                {name: '宁夏',value: Math.round(Math.random()*1000)},
		                {name: '海南',value: Math.round(Math.random()*1000)},
		                {name: '台湾',value: Math.round(Math.random()*1000)},
		                {name: '香港',value: Math.round(Math.random()*1000)},
		                {name: '澳门',value: Math.round(Math.random()*1000)}
		            ]
		        },
		        {
		            name: '肥料综合使用量',
		            type: 'map',
		            mapType: 'china',
		            itemStyle:{
		                normal:{label:{show:true}},
		                emphasis:{label:{show:true}}
		            },
		            data:[
		                {name: '北京',value: Math.round(Math.random()*1000)},
		                {name: '天津',value: Math.round(Math.random()*1000)},
		                {name: '上海',value: Math.round(Math.random()*1000)},
		                {name: '重庆',value: Math.round(Math.random()*1000)},
		                {name: '河北',value: Math.round(Math.random()*1000)},
		                {name: '安徽',value: Math.round(Math.random()*1000)},
		                {name: '新疆',value: Math.round(Math.random()*1000)},
		                {name: '浙江',value: Math.round(Math.random()*1000)},
		                {name: '江西',value: Math.round(Math.random()*1000)},
		                {name: '山西',value: Math.round(Math.random()*1000)},
		                {name: '内蒙古',value: Math.round(Math.random()*1000)},
		                {name: '吉林',value: Math.round(Math.random()*1000)},
		                {name: '福建',value: Math.round(Math.random()*1000)},
		                {name: '广东',value: Math.round(Math.random()*1000)},
		                {name: '西藏',value: Math.round(Math.random()*1000)},
		                {name: '四川',value: Math.round(Math.random()*1000)},
		                {name: '宁夏',value: Math.round(Math.random()*1000)}
		            ]
		        },
		        {
		            name: '病虫害综合统计数据',
		            type: 'map',
		            mapType: 'china',
		            itemStyle:{
		                normal:{label:{show:true}},
		                emphasis:{label:{show:true}}
		            },
		            data:[
		                {name: '宁夏',value: Math.round(Math.random()*1000)},
		                {name: '山西',value: Math.round(Math.random()*1000)},
		                {name: '山东',value: Math.round(Math.random()*1000)},
		                {name: '广西',value: Math.round(Math.random()*1000)},
		                {name: '河南',value: Math.round(Math.random()*1000)},
		                {name: '陕西',value: Math.round(Math.random()*1000)},
		                {name: '江西',value: Math.round(Math.random()*1000)}
		            ]
		        }
		    ]
		};
    		                    
    	myChart.setOption(option);
    }
    
    var pestHarmTop = function(){
    	var myChart = echarts.init(document.getElementById('pestHarmTop'));
    	option = {
		    title : {
		        text: '病虫害危害TOP10地区',
		        subtext: '九次方财富咨询',
		        x:'center',
		        y:'top'
		    },
		    tooltip : {
		        trigger: 'axis'
		    },
		    toolbox: {
		        show : false,
		        feature : {
		            mark : {show: true},
		            dataView : {show: true, readOnly: false},
		            magicType: {show: true, type: ['line', 'bar']},
		            restore : {show: true},
		            saveAsImage : {show: true}
		        }
		    },
		    calculable : true,
		    xAxis : [
		        {
		            type : 'value',
		            boundaryGap : [0, 0.01]
		        }
		    ],
		    yAxis : [
		        {
		            type : 'category',
		            data : ['亳州','怀化','烟台','菏泽','驻马店','玉林','固原','周口','邯郸','南阳']
		        }
		    ],
		    series : [
		        {
		            name:'病虫害危害指数',
		            type:'bar',
		            data:[43, 49, 55, 59, 62, 65, 73, 78, 82, 93]
		        }
		    ]
		};
    		                    
    	myChart.setOption(option);
    }
    
    var argicWeatherIndex = function(){
    	var myChart = echarts.init(document.getElementById('argicWeatherIndex'));
    	option = {
		    title : {
		        text: '全国农业生产主要省份气象综合指数',
		        subtext: '九次方财富咨询',
		        x:'center',
		        y:'top'
		    },
		    tooltip : {
		        trigger: 'axis'
		    },
		    legend: {
		        data:['黑龙江','河南','河北','山东','四川','湖北','辽宁','安徽','新疆','江西'],
		        y:'bottom'
		    },
		    toolbox: {
		        show : false,
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
		            boundaryGap : false,
		            data : ['2006年','2007年','2008年','2009年','2010年','2011年','2012年','2013年','2014年','2015年']
		        }
		    ],
		    yAxis : [
		        {
		            type : 'value'
		        }
		    ],
		    series : [
		        {
		            name:'黑龙江',
		            type:'line',
		            stack: '气象指数',
		            data:[27, 45, 37, 39, 47, 55, 55, 64, 65, 78]
		        },
		        {
		            name:'河南',
		            type:'line',
		            stack: '气象指数',
		            data:[42, 52, 51, 54, 65, 75, 80, 71, 72, 74]
		        },
		        {
		            name:'河北',
		            type:'line',
		            stack: '气象指数',
		            data:[55, 42, 51, 64, 70, 75, 78, 81, 69, 79]
		        },
		        {
		            name:'山东',
		            type:'line',
		            stack: '气象指数',
		            data:[36, 42, 51, 64, 70, 58, 63, 72, 59, 72]
		        },
		        {
		            name:'四川',
		            type:'line',
		            stack: '气象指数',
		            data:[68, 52, 61, 74, 79, 80, 73, 82, 59, 69]
		        },
		        {
		            name:'湖北',
		            type:'line',
		            stack: '气象指数',
		            data:[59, 62, 61, 74, 70, 80, 68, 69, 70, 78]
		        },
		        {
		            name:'辽宁',
		            type:'line',
		            stack: '气象指数',
		            data:[12, 52, 61, 54, 63, 65, 72, 68, 59, 73]
		        },
		        {
		            name:'安徽',
		            type:'line',
		            stack: '气象指数',
		            data:[69, 72, 61, 74, 60, 72, 69, 72, 80, 69]
		        },
		        {
		            name:'新疆',
		            type:'line',
		            stack: '气象指数',
		            data:[62, 58, 61, 64, 70, 65, 70, 59, 72, 69]
		        },
		        {
		            name:'江西',
		            type:'line',
		            stack: '气象指数',
		            data:[53, 62, 61, 64, 70, 60, 68, 72, 68, 72]
		        }
		    ]
		};
    		                    
    		                    
    	myChart.setOption(option);
    }
    
    var pesticideResidueIndex = function(){
    	var myChart = echarts.init(document.getElementById('pesticideResidueIndex'));
    	option = {
		    title : {
		        text: '全国主要省份农药使用量及残留量情况',
		        subtext: '九次方财富咨询',
		        x:'center'
		    },
		    tooltip : {
		        trigger: 'axis'
		    },
		    legend: {
		        data:['使用量','残留量'],
		        x:'left'
		    },
		    toolbox: {
		        show : false,
		        feature : {
		            mark : {show: true},
		            dataView : {show: true, readOnly: false},
		            magicType : {show: true, type: ['line', 'bar']},
		            restore : {show: true},
		            saveAsImage : {show: true}
		        }
		    },
		    calculable : true,
		    xAxis : [
		        {
		            type : 'category',
		            data : ['河南','山东','黑龙江','湖北','宁夏','新疆','河北','江西','甘肃','山西','江苏','浙江']
		        }
		    ],
		    yAxis : [
		        {
		            type : 'value'
		        }
		    ],
		    series : [
		        {
		            name:'使用量',
		            type:'bar',
		            data:[7.0, 9.9, 17.0, 53.2, 65.6, 176.7, 235.6, 362.2, 132.6, 80.0, 16.4, 23.3],
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
		            name:'残留量',
		            type:'bar',
		            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
		            markPoint : {
		                data : [
		                    {name : '年最高', value : 182.2, xAxis: 7, yAxis: 183, symbolSize:18},
		                    {name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
		                ]
		            },
		            markLine : {
		                data : [
		                    {type : 'average', name : '平均值'}
		                ]
		            }
		        }
		    ]
		};
    		                    
    	myChart.setOption(option);
    }
    
    return {
    	init:function(){
    		countMap();
    		pestHarmTop();
    		argicWeatherIndex();
    		pesticideResidueIndex();
    	}
    };
}();

