
var cultivatedLand = function () {
	//判断浏览区是否支持canvas
    function isSupportCanvas(){
        var elem = document.createElement('canvas');
        return !!(elem.getContext && elem.getContext('2d'));
    }
    
    var landMap = function(){
    	var myChart = echarts.init(document.getElementById('landMap'));
    	option = {
		    title : {
		        text: '全国耕地资源分布',
		        subtext: '',
		        x:'center'
		    },
		    tooltip : {
		        trigger: 'item'
		    },
		    legend: {
		        orient: 'vertical',
		        x:'left',
		        data:['耕地资源']
		    },
		    dataRange: {
		        x: 'left',
		        y: 'bottom',
		        splitList: [
		            {start: 1500, label:'1500万公顷以上'},
		            {start: 900, end: 1500, label:'900万-1500万公顷'},
		            {start: 300, end: 1000, label:'300万-900万公顷'},
		            {start: 200, end: 300, label:'200万-300万公顷'},
		            {start: 10, end: 200, label: '10万-200万公顷'},
		            {start: 5, end: 10, label: '5万-10万公顷', color: 'black'},
		            {end: 5, label:'5万公顷以下'}
		        ],
		        color: ['#E0022B', '#E09107', '#A3E00B']
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
		            name: '耕地资源',
		            type: 'map',
		            mapType: 'china',
		            roam: false,
		            itemStyle:{
		                normal:{
		                    label:{
		                        show:true,
		                        textStyle: {
		                           color: "rgb(249, 249, 249)"
		                        }
		                    }
		                },
		                emphasis:{label:{show:true}}
		            },
		            data:[
		                {name: '北京',value: Math.round(Math.random()*10)},
		                {name: '天津',value: Math.round(Math.random()*10)},
		                {name: '上海',value: Math.round(Math.random()*10)},
		                {name: '重庆',value: Math.round(Math.random()*100)},
		                {name: '河北',value: Math.round(Math.random()*1000)},
		                {name: '河南',value: Math.round(Math.random()*3000)},
		                {name: '云南',value: 5},
		                {name: '辽宁',value: Math.round(Math.random()*5000)},
		                {name: '黑龙江',value: Math.round(Math.random()*6000)},
		                {name: '湖南',value: Math.round(Math.random()*1000)},
		                {name: '安徽',value: Math.round(Math.random()*3000)},
		                {name: '山东',value: Math.round(Math.random()*3000)},
		                {name: '新疆',value: Math.round(Math.random()*5000)},
		                {name: '江苏',value: Math.round(Math.random()*2000)},
		                {name: '浙江',value: Math.round(Math.random()*2000)},
		                {name: '江西',value: Math.round(Math.random()*2000)},
		                {name: '湖北',value: Math.round(Math.random()*2000)},
		                {name: '广西',value: Math.round(Math.random()*2000)},
		                {name: '甘肃',value: Math.round(Math.random()*2000)},
		                {name: '山西',value: Math.round(Math.random()*2000)},
		                {name: '内蒙古',value: Math.round(Math.random()*1000)},
		                {name: '陕西',value: Math.round(Math.random()*2000)},
		                {name: '吉林',value: Math.round(Math.random()*3000)},
		                {name: '福建',value: Math.round(Math.random()*2000)},
		                {name: '贵州',value: Math.round(Math.random()*2000)},
		                {name: '广东',value: Math.round(Math.random()*2000)},
		                {name: '青海',value: Math.round(Math.random()*1000)},
		                {name: '西藏',value: Math.round(Math.random()*100)},
		                {name: '四川',value: Math.round(Math.random()*2000)},
		                {name: '宁夏',value: Math.round(Math.random()*2000)},
		                {name: '海南',value: Math.round(Math.random()*2000)}
		            ]
		        }
		    ]
		};
    		                    
    	myChart.setOption(option);
    }
    
    var landSort = function(){
    	var myChart = echarts.init(document.getElementById('landSort'));
    	option = {
		    title : {
		        text: '全国各省土地分布',
		        subtext: '(单位；万平方千米)'
		    },
		    tooltip : {
		        trigger: 'axis'
		    },
		    legend: {
		        data:['可耕地','土地量']
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
		            data : ['新疆','西藏','内蒙古','青海','四川','黑龙江','甘肃','云南','广西','湖南',
		                    '陕西','河北','吉林','湖北','广东','贵州','江西','河南','山西','山东',
		                    '辽宁','安徽','福建','江苏','浙江','重庆','宁夏','海南',
		                   '北京','天津','上海']
		        }
		    ],
		    yAxis : [
		        {
		            type : 'value'
		        }
		    ],
		    series : [
		        {
		            name:'可耕地',
		            type:'bar',
		            data:[35, 29, 48, 38, 16, 15.8, 12.8, 16.2, 12.6, 10.2, 6.4, 7.3, 
		                 7.5, 7.3, 6.3, 7.2, 5.9, 6.2, 5.8, 6.54, 5.48, 4.38, 4.32, 3.98, 3.87, 1.25, 2.35, 0.45, 0.23, 0.28, 0.21],
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
		            name:'土地量',
		            type:'bar',
		            data:[106, 59, 90, 64, 28, 35, 25, 28, 18, 22, 16, 15, 
		                  13, 14, 13.2, 14.3, 12.8, 12.3, 11.8, 13.2, 12.1, 9.8, 8.5, 8.4, 7.5, 3.7, 3.9, 1.9, 0.7, 0.85, 0.43],
		            markPoint : {
		                data : [
		                    {name : '最大值', value : 106, xAxis: 7, yAxis: 106, symbolSize:18},
		                    {name : '最小值', value : 0.43, xAxis: 11, yAxis: 0.43}
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
    var areaLandType = function(){
    	var myChart = echarts.init(document.getElementById('areaLandType'));
    	option = {
		    title : {
		        text: '四川省土地类型构成',
		        subtext: '(单位:万平方千米)',
		        x:'center',
		        y:'top'
		    },
		    tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c} ({d}%)"
		    },
		    legend: {
		        orient : 'vertical',
		        x : 'left',
		        data:['耕地面积','荒地面积','滩涂面积','绿化面积',
		              '草原面积','弃地面积'],
		    },
		    toolbox: {
		        show : false,
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
		                        funnelAlign: 'center',
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
		            name:'土地构成',
		            type:'pie',
		            radius : ['50%', '70%'],
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
		                        show : true,
		                        position : 'center',
		                        textStyle : {
		                            fontSize : '30',
		                            fontWeight : 'bold'
		                        }
		                    }
		                }
		            },
		            data:[
		                {value:28.3, name:'耕地面积'},
		                {value:0.93, name:'荒地面积'},
		                {value:5.4, name:'滩涂面积'},
		                {value:3.58, name:'绿化面积'},
		                {value:6.34, name:'草原面积'},
		                {value:0.85, name:'弃地面积'}
		            ]
		        }
		    ]
		};
    		                    
    	myChart.setOption(option);
    }
    
    var landGeoType = function(){
    	var myChart = echarts.init(document.getElementById('landGeoType'));
    	option = {
		    title : {
		        text: '四川地质资源情况',
		        subtext: '(单位:立方米)',
		        x:'center',
		        y:'top'
		    },
		    tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c} ({d}%)"
		    },
		    legend: {
		        orient : 'vertical',
		        x : 'left',
		        data:['矿产资源','能用资源','建筑材料资源','水资源',
		              '地质景观资源','地质空间资源'],
		    },
		    toolbox: {
		        show : false,
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
		                        funnelAlign: 'center',
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
		            name:'地质资源',
		            type:'pie',
		            radius : ['50%', '70%'],
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
		                        show : true,
		                        position : 'center',
		                        textStyle : {
		                            fontSize : '30',
		                            fontWeight : 'bold'
		                        }
		                    }
		                }
		            },
		            data:[
		                {value:28.3, name:'矿产资源'},
		                {value:2.93, name:'能用资源'},
		                {value:15.4, name:'建筑材料资源'},
		                {value:32.58, name:'水资源'},
		                {value:6.34, name:'地质景观资源'},
		                {value:2.85, name:'地质空间资源'}
		            ]
		        }
		    ]
		};
    		                    
    	myChart.setOption(option);
    }
    
    return {
    	init:function(){
    		landMap();
    		landSort();
    		areaLandType();
    		landGeoType();
    	}
    };
}();

