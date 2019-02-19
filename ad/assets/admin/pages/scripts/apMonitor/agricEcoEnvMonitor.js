var agricEcoEnvMonitor = function () {

    //判断浏览区是否支持canvas
    function isSupportCanvas(){
        var elem = document.createElement('canvas');
        return !!(elem.getContext && elem.getContext('2d'));
    }


    var map = function() {
        var option =  ToolEcharts.createChinaMapOption(ToolEcharts.selectSingle,"土壤云图",['土壤污染情况'],true,false,false,5,20,1,100,0);
        return option;
    };

    var proviceCache = new HashMap();

    var getProvince = function (name, type) {
        var data = proviceCache.get(name);
        var ret = eval('data.' + type);
        return ret;
    };

    var randomEchart = function(name,type)
    {
        var id = "agricEcoEnvMonitor."+type;
        var chart = echarts.init(document.getElementById(id));
        chart.setOption(getProvince(name,type));
        return chart;
    };

    var randomProvice = function () {
        var provices = ToolEcharts.chinaProvince();
        for (var index in provices) {
            var name = provices[index];


            var soilEnvTitleNames = name  + "土壤环境";
            var soilEnvLenge =  ["受污染面积","土壤退化面积"];
            var soilDataNames = ToolEcharts.createTimeByYear(new Date(1970,1,1),50);
            var soilEnvSerise = ToolEcharts.createLineSeries(soilEnvLenge,50,10,100);
            var soilEnvOption = ToolEcharts.createLineOption(soilEnvTitleNames,soilEnvLenge,soilDataNames,soilEnvSerise);

            var weatherTitleNames = name  + "气象变化趋势";
            var weatherLenge =  ["平均温度变化","恶劣天气天数"];
            var weatherDataNames = ToolEcharts.createTimeByYear(new Date(1970,1,1),50);
            var weatherSerise = ToolEcharts.createLineSeries(weatherLenge,50,10,100);
            var weatherOption = ToolEcharts.createLineOption(weatherTitleNames,weatherLenge,weatherDataNames,weatherSerise);

            var rainfailTitleNames = name  + "降雨量";
            var rainfailLenge = ["降雨量","灌溉量"];
            var rainfailDataNames = ToolEcharts.createTimeByYear(new Date(1970,1,1),50);
            var rainfailSerise = ToolEcharts.createBarSeries(rainfailLenge,50,50,200,0);
            var rainfallOption = ToolEcharts.createBarOption(rainfailTitleNames,rainfailLenge,ToolEcharts.showTypeX,rainfailDataNames,rainfailSerise);


            var province = {
                name: name,
                humidity: ToolEcharts.createGaugeOption(ToolEcharts.createGaugeSeries(name,"湿度")),
                pressure: ToolEcharts.createGaugeOption(ToolEcharts.createGaugeSeries(name,"压力")),
                rainfall: rainfallOption,
                soilEnv: soilEnvOption,
                weather: weatherOption
            };
            proviceCache.set(province.name, province);
        }
    };

    return {
        init:function(){
            randomProvice();
            var map = initEchart("agricEcoEnvMonitor.map");
            var humidity = randomEchart("北京","humidity");
            var pressure = randomEchart("北京","pressure");
            var rainfall = randomEchart("北京","rainfall");
            var soilEnv = randomEchart("北京","soilEnv");
            var weather = randomEchart("北京","weather");
            map.on(echarts.config.EVENT.MAP_SELECTED,function(params){
                humidity.setOption(getProvince(params.target,"humidity"));
                pressure.setOption(getProvince(params.target,"pressure"));
                rainfall.setOption(getProvince(params.target,"rainfall"));
                soilEnv.setOption(getProvince(params.target,"soilEnv"));
                weather.setOption(getProvince(params.target,"weather"));
            });
        },

        map: function(){
            return map();
        }
    };
}();
