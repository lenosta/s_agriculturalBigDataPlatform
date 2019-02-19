unqualifiedFoodMap = function () {
    var map = function () {
        var option = ToolEcharts.createChinaMapOption(ToolEcharts.selectMult,"全国农品分布", ["水稻", "土豆", "洋葱", "大蒜","茶叶","玉米","大豆","香蕉"], false, false, true, 5, 20, 1, 100,0);
        return option;
    };
    return {
        init: function () {
            var map = initEchart("unqualifiedFoodMap.map");
        },
        map: function () {
            return map();
        }
    }
}();