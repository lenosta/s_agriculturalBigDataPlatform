var agricPaMaterialsTrace = function () {
    //判断浏览区是否支持canvas
    function isSupportCanvas() {
        var elem = document.createElement('canvas');
        return !!(elem.getContext && elem.getContext('2d'));
    }

    var allMap = function () {
        var legend = ['扶贫物质1', '扶贫物质2', '扶贫物质3', '扶贫物质4', '扶贫物质5', '扶贫物质6', '扶贫物质7', '扶贫物质8'];
        var option = ToolEcharts.createChinaMapOption("single", "扶贫物资跟踪", legend, false, true, false, 1, 1, 0, 100,0);
        return option;
    }

    var typeInfo = function(){
        var legend = ['种子','化肥','幼苗']
        var series = ToolEcharts.createPieSeries(legend,0);
        var option = ToolEcharts.createPieOption("物资种类(万吨)",legend,series);
        return option;
    }

    var recInfo = function(){
        var legend = ['种子','化肥','幼苗']
        var series = ToolEcharts.createBarSeries(legend,ToolEcharts.chinaProvince().length,1,100,0);
        var option = ToolEcharts.createBarOption("各省物资接收情况（万吨）",legend,0,ToolEcharts.chinaProvince(),series);
        return option;
    }

    /**
     * 创建地图
     * @param id
     * @returns {BMap.Map}
     */
    function getMap(id) {
        var map = new BMap.Map(id);
        map.enableScrollWheelZoom();
        var centerPoint = new BMap.Point(116.404, 39.915);
        map.centerAndZoom(centerPoint, 5);
        return map;
    };

    /**
     * 获取流量情况
     * @param map
     */
    function getTrafficControl(map) {
        var ctrl = new BMapLib.TrafficControl({
            showPanel: false //是否显示路况提示面板
        });
        map.addControl(ctrl);
        ctrl.setAnchor(BMAP_ANCHOR_BOTTOM_RIGHT);
    }

    /**
     * 显示行驶轨迹
     * @param map
     * @param start
     * @param end
     * @param endTime
     */
    function mapLuShu(map, start, end, endTime) {
        var startPointName = start;
        var endPointName = end;
        var showContent = startPointName + "到" + endPointName + "<br/>到达时间: " + endTime;
        var lushu;
        // 实例化一个驾车导航用来生成路线
        var drv = new BMap.DrivingRoute('中国', {
            onSearchComplete: function (res) {
                if (drv.getStatus() == BMAP_STATUS_SUCCESS) {
                    var plan = res.getPlan(0);
                    var arrPois = [];
                    for (var j = 0; j < plan.getNumRoutes(); j++) {
                        var route = plan.getRoute(j);
                        arrPois = arrPois.concat(route.getPath());
                    }
                    map.addOverlay(new BMap.Polyline(arrPois, {strokeColor: '#111'}));
                    map.setViewport(arrPois);
                    map.centerAndZoom(centerPoint, 13);
                    lushu = new BMapLib.LuShu(map, arrPois, {
                        defaultContent: showContent,
                        autoView: true,//是否开启自动视野调整，如果开启那么路书在运动过程中会根据视野自动调整
                        icon: new BMap.Icon('http://developer.baidu.com/map/jsdemo/img/car.png', new BMap.Size(52, 26), {anchor: new BMap.Size(27, 13)}),
                        speed: 1000,
                        enableRotation: true,//是否设置marker随着道路的走向进行旋转
                        landmarkPois: [
                            {
                                lng: 116.404,
                                lat: 39.915,
                                html: '开始的点<div><img src="http://map.baidu.com/img/logo-map.gif"/></div>',
                                pauseTime: 1000
                            },
                            {
                                lng: 116.315391,
                                lat: 39.964429,
                                html: '高速公路收费<div><img src="http://map.baidu.com/img/logo-map.gif"/></div>',
                                pauseTime: 10000
                            },
                            {
                                lng: 116.381476,
                                lat: 39.974073,
                                html: '肯德基早餐<div><img src="http://ishouji.baidu.com/resource/images/map/show_pic04.gif"/></div>',
                                pauseTime: 2
                            }
                        ]
                    });
                }
                lushu.start();
            }
        });
        drv.search(start, end);
    }


    function mapDriving(map, startAddress, endAddress, waypoints, driving) {
        var lushu;
        driving.search(startAddress, endAddress, {waypoints: waypoints});
        driving.setSearchCompleteCallback(function (res) {
            var plan = res.getPlan(0);
            var distance = plan.getDistance(true);
            var useTime = plan.getDuration(true);
            var content = "从" + startAddress + "到" + endAddress + "\n" + "里程:" + distance + "\n" + "预计用时: " + useTime;
            var arrPois = [];
            for (var j = 0; j < plan.getNumRoutes(); j++) {
                var route = plan.getRoute(j);
                arrPois = arrPois.concat(route.getPath());
            }
            var startPoint = new BMap.Point(arrPois[0][0], arrPois[0][1]);
            var maxLength = arrPois.length;
            var num = ToolEcharts.randomNum()
            map.addOverlay(new BMap.Polyline(arrPois, {strokeColor: '#111'}));
            map.setViewport(arrPois);
            map.centerAndZoom(startPoint, 16);
            lushu = new BMapLib.LuShu(map, arrPois, {
                defaultContent: content,
                autoView: true,//是否开启自动视野调整，如
                // 果开启那么路书在运动过程中会根据视野自动调整
                icon: new BMap.Icon('http://developer.baidu.com/map/jsdemo/img/car.png', new BMap.Size(52, 26), {anchor: new BMap.Size(27, 13)}),
                speed: 50,
                enableRotation: true,//是否设置marker随着道路的走向进行旋转
                landmarkPois: []
            });
            lushu.start();
        });
    }


    return {
        init: function () {
            var map = getMap('map_canvas');
            var allMap = initEchart("agricPaMaterialsTrace.allMap");
            var typeInfo = initEchart("agricPaMaterialsTrace.typeInfo");
            var recInfo = initEchart("agricPaMaterialsTrace.recInfo");
            var driving = new BMap.DrivingRoute('中国', {});
            allMap.on(echarts.config.EVENT.CLICK, function (params) {
                var nameStr = params.name;
                var names = nameStr.split('>');
                if (names.length == 2) {
                    var map = getMap('map_canvas');
                    mapDriving(map, names[0], names[1], [], driving);
                    getTrafficControl(map);
                }
            });
        },
        allMap: function () {
            return allMap();
        },
        typeInfo: function () {
            return typeInfo();
        },
        recInfo: function () {
            return recInfo();
        }
    };
}();

