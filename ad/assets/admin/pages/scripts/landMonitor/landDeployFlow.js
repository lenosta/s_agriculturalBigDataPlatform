landDeployFlow = function () {

    var proviceCache = new HashMap();

    var landTypeDistribute = function () {
        var legend = ['商业','住宅','工业','其它'];
        var series = ToolEcharts.createPieSeries(legend,1,1,100);
        var option = ToolEcharts.createPieOption("土地成交额（百亿）",legend,series);
        return option;
    };
    var provinceInfo = function () {
        var legend = ["交易量","库存量"]
        var serise = ToolEcharts.createBarSeries(legend,ToolEcharts.chinaProvince().length,100,10000,0);
        var option = ToolEcharts.createBarOption("各省交易和库存统计",legend,0,ToolEcharts.chinaProvince(),serise);
        return option;
    };
    var timeInfo = function () {
        var legend = ["交易量","库存量"];
        var series = ToolEcharts.createBarSeries(legend,500,100,1000,0);
        var option = ToolEcharts.createBarOption("全国交易和库存统计",legend,0,ToolBase.createTimeByDay(new Date(2014,1,1),500),series);
        return option;
    };
    var volumeOfBusiness = function (name) {
        var legend = ['交易额'];
        var series = ToolEcharts.createBarSeries(legend,8,100,1000,0);
        var option = ToolEcharts.createBarOption(name,legend,1,["地块1","地块2","地块3","地块4","地块5","地块6","地块7","地块8"],series);
        return option;
    };

    var tradeDistribute = function (name) {
        var lenged =["住宅","商业用地","工业用地"];
        var formatFunction = function(params){return params.seriesName + ' :<br/>'
            + params.value[0] + "元/平米" + ' <br/>'
            + params.value[1] + "百万";}
        var series = ToolEcharts.createScatterSeries(lenged,300,100,100,1000,1,3000);
        var option = ToolEcharts.createScatterOption(name, "{value}元/平米", "{value}百万",formatFunction,lenged,series);
        return option;
    };

    var getProvince = function (name, type) {
        var data = proviceCache.get(name);
        var ret = eval('data.' + type);
        return ret;
    };

    var randomProvice = function () {
        var provices = ToolEcharts.chinaProvince();
        for (var index in provices) {
            var name = provices[index];


            var volumeOfBusinessName = name  + "土地交易量";
            var tradeDistributeName = name  + "土地交易分布";


            var province = {
                name: name,
                volumeOfBusiness: volumeOfBusiness(volumeOfBusinessName),
                tradeDistribute: tradeDistribute(tradeDistributeName),
            };
            proviceCache.set(province.name, province);
        }
    };
    return {
        init: function () {
            randomProvice();
            var landTypeDistribute = initEchart("landDeployFlow.landTypeDistribute");
            var provinceInfo = initEchart("landDeployFlow.provinceInfo");
            var timeInfo = initEchart("landDeployFlow.timeInfo");
            var volumeOfBusiness = echarts.init( document.getElementById("landDeployFlow.volumeOfBusiness"));
            var tradeDistribute = echarts.init( document.getElementById("landDeployFlow.tradeDistribute"));
            volumeOfBusiness.setOption(getProvince("四川","volumeOfBusiness"));
            tradeDistribute.setOption(getProvince("四川","tradeDistribute"));
            provinceInfo.on(echarts.config.EVENT.CLICK,function(params){
                volumeOfBusiness.setOption(getProvince(params.name,"volumeOfBusiness"));
                tradeDistribute.setOption(getProvince(params.name,"tradeDistribute"));
            });
        },
        landTypeDistribute: function () {
            return landTypeDistribute();
        },
        provinceInfo: function () {
            return provinceInfo();
        },
        timeInfo: function () {
            return timeInfo();
        },
        volumeOfBusiness: function () {
            return volumeOfBusiness();
        },
        tradeDistribute: function () {
            return tradeDistribute();
        }

    }
}();