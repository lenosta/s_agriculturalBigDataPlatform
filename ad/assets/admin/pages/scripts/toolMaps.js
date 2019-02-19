/**
 * 百度地图工具类
 * 用于生成随机地图
 * @type {{init}}
 */
ToolMaps = function(){
    /**
     * 创建地图,并定位到地址
     * @param divID   DIV组件ID
     * @param city    地址所在城市
     * @param address 地址
     * @param zoomSize  缩放等级
     * @param enabelZoom 是否允许缩放
     * @returns {BMap.Map}
     */
    var getMap =  function(divID,city,address,zoomSize,enabelZoom) {
        var map = new BMap.Map(divID);
        map.enableScrollWheelZoom();
        var centerPoint = new BMap.Point(116.404, 39.915);
        map.centerAndZoom(centerPoint, zoomSize);
        var myGeo = new BMap.Geocoder();
        myGeo.getPoint(address, function(point){
            map.centerAndZoom(point, zoomSize);
        }, city);
        if(enabelZoom)
            map.enableScrollWheelZoom(); // 允许滚轮缩放
        return map;
    };

    /**
     * 创建地图
     * @param divID   DIV组件ID
     * @param geo     经纬度坐标
     * @param zoomSize  缩放等级
     * @param enabelZoom 是否允许缩放
     * @returns {BMap.Map}
     */
    var getMap =  function(divID,geo,zoomSize,enabelZoom) {
        var map = new BMap.Map(divID);
        map.enableScrollWheelZoom();
        var centerPoint = new BMap.Point(geo[0],geo[1]);
        map.centerAndZoom(centerPoint, zoomSize);
        if(enabelZoom)
            map.enableScrollWheelZoom(); // 允许滚轮缩放
        else {
            map.disableScrollWheelZoom(); //不允许缩放
        }
        return map;
    };

    /**
     * 检查浏览器是否支持CAVAS
     * @returns {boolean}
     */
    var isSupportCanvas = function(){
        var elem = document.createElement('canvas');
        return !!(elem.getContext && elem.getContext('2d'));
    };


    /**
     * 随机生成日力图数据
     * @param startGeo  开始的经纬度 [0,0]
     * @param endGeo    结束的经纬度  [0,0]
     * @param minValue  value最小值
     * @param maxValue  value最大值
     * @param size      生成点数量
     * @param size
     */
    var radomHeatMapPoints = function(startGeo,endGeo,minValue,maxValue,size)
    {
        var ret = [];
        for(var i =0;i<size;i++)
        {
            var data = {};
           for(var j=0;j<2;j++)
           {
               var start = startGeo[j];
               var end = endGeo[j];
               var randGeo = ToolBase.randomDouble(start,end);
               data[getGeoTypeName(j)] = randGeo;
           }
            data["count"]=ToolBase.randomNum(minValue,maxValue);
            ret.push(data);
        }
        return ret;
    };


    var getGeoTypeName = function(geoIndx)
    {
        switch(geoIndx)
        {
            case 0:
                return "lng";
            default:
                return "lat";
        }
    }


    /**
     * 添加热力图
     * @param map
     * @param points
     * @returns {*}
     */
    var addHeatMap = function(map,points) {
        heatmapOverlay = new BMapLib.HeatmapOverlay({"radius":20});
        map.addOverlay(heatmapOverlay);
        heatmapOverlay.setDataSet({data:points,max:100});
        return map;
    };


    return {
        init: function(divID,geo,zoomSize,enabelZoom)
        {
            return getMap(divID,geo,zoomSize,enabelZoom);
        },
        init: function(divID,city,address,zoomSize,enabelZoom)
        {
            return getMap(divID,city,address,zoomSize,enabelZoom);
        },
        addHeatMap: function(map,points) {
            return addHeatMap(map,points);
        },
        radomHeatMapPoints: function(startGeo,endGeo,minValue,maxValue,size)
        {
            return radomHeatMapPoints(startGeo,endGeo,minValue,maxValue,size);
        }
    }
}();