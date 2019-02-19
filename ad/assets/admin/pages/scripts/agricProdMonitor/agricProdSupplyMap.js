agricProdSupplyMap = function () {

    var lenged = ["水稻", "土豆", "洋葱", "大蒜","茶叶","玉米","大豆","香蕉"];
    var proviceCache = new HashMap();

    var mapWorld = function () {
        return ToolEcharts.createMapOption("multiple", 4, "china", "农产品流向", lenged, false, true, true, 5, 20, 1, 100, [],0);
    };
    var statistical = function () {
        var series = ToolEcharts.createBarSeries(ToolEcharts.chinaregion,lenged.length, 1, 100,0);
        var option = ToolEcharts.createBarOption("农产品产出", ToolEcharts.chinaregion, 0, lenged, series);
        return option;
    };

    var productTypeValue = function (name) {
        var series = ToolEcharts.createPieSeries(lenged, 1);
        var option = ToolEcharts.createPieOption(name, lenged, series);
        return option;
    }

    var barOne = function (name) {
        var series = ToolEcharts.createBarSeries(lenged,5, 1, 100,0);
        var option = ToolEcharts.createBarOption(name, lenged, 0, ToolEcharts.createTimeByYear(new Date("2010-01-01"), 5), series);
        return option;
    };

    var barTwo = function (name) {
        var series = ToolEcharts.createBarSeries(lenged, 5, 1, 10000,0);
        var option = ToolEcharts.createBarOption(name, lenged, 0, ToolEcharts.createTimeByYear(new Date("2010-01-01"), 5), series);
        return option;
    };

    var barThree = function (name) {
        var series = ToolEcharts.createBarSeries(["总产出"], 5, 10000, 40000,0);
        var option = ToolEcharts.createBarOption(name, ["总产出"], 1, ToolEcharts.createTimeByYear(new Date("2010-01-01"), 5), series);
        return option;
    };

    var moneyPeople = function (name) {
        var formatFunction = function(params){return params.seriesName + ' :<br/>'
            + params.value[0] + "万人" + ' <br/>'
            + params.value[1] + "元/吨";}
        var series = ToolEcharts.createScatterSeries(lenged, 100, 10, 3, 10, 0);
        var option = ToolEcharts.createScatterOption(name, "{value} 万人", "{value} 元/吨",formatFunction,lenged,series);
        return option;
    }

    var randomProvice = function () {
        var provices = ToolEcharts.chinaProvince();
        for (var index in provices) {
            var name = provices[index];


            var typeName = name  + "农产品类型";
            var barOneName = name  + "农产品价格";
            var barTwoName = name + "农产品产量";
            var barThreeName = name  + "农产品输出";
            var moneyPeopleName = name + "价格和生产人数";


            var province = {
                name: name,
                productTypeValue: productTypeValue(typeName),
                barOne: barOne(barOneName),
                barTwo: barTwo(barTwoName),
                barThree: barThree(barThreeName),
                moneyPeople: moneyPeople(moneyPeopleName)
            };
            proviceCache.set(province.name, province);
        }
    };


    var getProvince = function (name, type) {
        var data = proviceCache.get(name);
        var ret = eval('data.' + type);
        return ret;
    };

    var initByProvince = function (id, name, type) {
        var chart = echarts.init(document.getElementById(id));
        chart.setOption(getProvince(name, type));
        return chart;
    }
    return {
        init: function () {
            randomProvice();
            var mapWorld = initEchart("agricProdSupplyMap.mapWorld");
            var statistical = initEchart("agricProdSupplyMap.statistical");

            var productTypeValue = initByProvince("agricProdSupplyMap.productTypeValue", "四川", "productTypeValue");
            var barOne = initByProvince("agricProdSupplyMap.barOne", "四川", "barOne");
            var barTwo = initByProvince("agricProdSupplyMap.barTwo", "四川", "barTwo");
            var barThree = initByProvince("agricProdSupplyMap.barThree", "四川", "barThree");
            var moneyPeople = initByProvince("agricProdSupplyMap.moneyPeople", "四川", "moneyPeople");
            mapWorld.on(echarts.config.EVENT.MAP_SELECTED, function (params) {
                productTypeValue.setOption(getProvince(params.target, "productTypeValue"));
                barOne.setOption(getProvince(params.target, "barOne"));
                barTwo.setOption(getProvince(params.target, "barTwo"));
                barThree.setOption(getProvince(params.target, "barThree"));
                moneyPeople.setOption(getProvince(params.target, "moneyPeople"));
            });
        },
        mapWorld: function () {
            return mapWorld();
        },
        statistical: function () {
            return statistical();
        },

    }
}();