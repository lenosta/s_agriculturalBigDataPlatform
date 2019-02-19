
var agricInsuranceMarket = function () {
	//判断浏览区是否支持canvas
    function isSupportCanvas(){
        var elem = document.createElement('canvas');
        return !!(elem.getContext && elem.getContext('2d'));
    }

    var mapCoverage = function(){
        var option = ToolEcharts.createChinaMapOption("single","投保覆盖率",["农作物保险","森林保险","牲畜保险","家畜,家禽保险","水产养殖保险"],true,false,false,1,1,1,60,0);
        return option;
    };

    var mapHot = function(){
        var option = ToolEcharts.createChinaMapOption("single","农业生产状况",["投保人数"],false,false,false,500,1000,1,100,1);
        return option;
    };

    var typeInfo = function(){

        var legend = ["农作物保险","森林保险","牲畜保险","家畜,家禽保险","水产养殖保险"];
        var series = ToolEcharts.createBarSeries(legend,ToolEcharts.chinaProvince().length,1,1000,0);
        var option = ToolEcharts.createBarOption("各省投保情况（千万元）",legend,0,ToolEcharts.chinaProvince(),series);
        return option;
    };

    var coverageInfo = function()
    {
        var legend =  ["宣传投入","参保金额"];
        var names = ToolEcharts.createTimeByDay(new Date(2015,1,1), 15);
        var series = ToolEcharts.createLineSeries(legend,50,10,100);
        var option = ToolEcharts.createLineOption("投保趋势分析",legend,names,series);
        return option;
    };

    var insureAnalyse = function()
    {
        var legend = ['种植业保险','养殖业保险'];
        var series = ToolEcharts.createPieSeries(legend,0);
        var option = ToolEcharts.createPieOption("保险类型占比（亿元）",legend,series);
        return option;
    };

    var typeTop = function()
    {
        var legend = ["金额"];
        var series = ToolEcharts.createBarSeries(legend,5,1,1000,1);
        var option = ToolEcharts.createBarOption("保险赔偿统计 （百万）",legend,1,["农作物保险","森林保险","牲畜保险","家畜,家禽保险","水产养殖保险"],series);
        return option;
    };
    
    
    return {
    	init:function(){
            var mapCoverage = initEchart("agricInsuranceMarket.mapCoverage");
            var mapHot = initEchart("agricInsuranceMarket.mapHot");
            var typeInfo = initEchart("agricInsuranceMarket.typeInfo");
            var coverageInfo = initEchart("agricInsuranceMarket.coverageInfo");
            var insureAnalyse = initEchart("agricInsuranceMarket.insureAnalyse");
            var typeTop = initEchart("agricInsuranceMarket.typeTop");

    	},
        mapCoverage: function()
        {
            return mapCoverage();
        },
        mapHot: function()
        {
            return mapHot();
        },
        typeInfo: function()
        {
            return typeInfo();
        },
        coverageInfo: function()
        {
            return coverageInfo();
        },
        insureAnalyse: function()
        {
            return insureAnalyse();
        },
        typeTop: function()
        {
            return typeTop();
        },


    };
}();

