agriWaterMonitor = function () {

    var proviceCache = new HashMap();

    var waterUseMonitor = function () {
        var pieSeries = ToolEcharts.createPieSeries(ToolEcharts.chinaProvince(),0);
        return ToolEcharts.createPieOption("农业地下水量监控", ToolEcharts.chinaProvince(), pieSeries);
    };

    var waterUseDate = function () {
        var barSeries = ToolEcharts.createBarSeries(['地下水使用量'], 200, 1000, 10000,0);
        var barOption = ToolEcharts.createBarOption("", ['地下水使用量'], 0, ToolEcharts.createTimeByDay(new Date(2015,1,1), 200), barSeries);
        return barOption;
    };

    var mapWaterUse = function () {
        return ToolEcharts.createChinaMapOption(ToolEcharts.selectSingle,"地下水量监控",['地下水量监控'],true,false,false,5,20,1,100);
    };

    var placeWaterUseDate = function (name) {
        var barSeries = ToolEcharts.createBarSeries(['地下水使用量'], 200, 100, 1000,0);
        var barOption = ToolEcharts.createBarOption(name, ['地下水使用量'], 0, ToolEcharts.createTimeByDay(new Date(2015,1,1), 200), barSeries);
        return barOption;
    };

    var placeWaterUseType = function (name) {
        var barSeries = ToolEcharts.createBarSeries(['水价情况'],200, 10, 100,0);
        var barOption = ToolEcharts.createBarOption(name, ['水价情况'], 0, ToolEcharts.createTimeByDay(new Date(2015,1,1), 200), barSeries);
        return barOption;
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


            var placeWaterUseDateName = name  + "用水情况";
            var placeWaterUseTypeNmae = name  + "水价情况";


            var province = {
                name: name,
                placeWaterUseDate: placeWaterUseDate(placeWaterUseDateName),
                placeWaterUseType: placeWaterUseType(placeWaterUseTypeNmae),
            };
            proviceCache.set(province.name, province);
        }
    };

    return {
        init: function () {
            randomProvice();
            var waterUseMonitor = initEchart("agriWaterMonitor.waterUseMonitor");
            var waterUseDate = initEchart("agriWaterMonitor.waterUseDate");
            var mapWaterUse = initEchart("agriWaterMonitor.mapWaterUse");
            var placeWaterUseDate = echarts.init( document.getElementById("agriWaterMonitor.placeWaterUseDate"));
            var placeWaterUseType = echarts.init( document.getElementById("agriWaterMonitor.placeWaterUseType"));
            placeWaterUseDate.setOption(getProvince("四川","placeWaterUseDate"));
            placeWaterUseType.setOption(getProvince("四川","placeWaterUseType"));
            mapWaterUse.on(echarts.config.EVENT.MAP_SELECTED,function(params){
                placeWaterUseDate.setOption(getProvince(params.target,"placeWaterUseDate"));
                placeWaterUseType.setOption(getProvince(params.target,"placeWaterUseType"));
            });
        },

        waterUseMonitor: function () {
            return waterUseMonitor();
        },

        waterUseDate: function () {
            return waterUseDate();
        },

        mapWaterUse: function () {
            return mapWaterUse();
        },
        placeWaterUseDate: function () {
            return placeWaterUseDate();
        },
        placeWaterUseType: function () {
            return placeWaterUseType();
        },
    }
}();