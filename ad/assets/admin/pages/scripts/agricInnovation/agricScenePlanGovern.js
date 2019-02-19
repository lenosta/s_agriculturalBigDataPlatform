agricScenePlanGovern = function () {

    var processNumPeopleSeries = function (series, dataName) {
        var data = [];
        var tmp = {name: dataName, value: 0};
        tmp = ToolEcharts.randomValue(tmp, 1000, 10000);
        series.axisLine = {            // 坐标轴线
            lineStyle: {       // 属性lineStyle控制线条样式
                width: 60
            }
        };
        series.axisTick = {            // 坐标轴小标记
            splitNumber: 10,   // 每份split细分多少段
            length: 12,        // 属性length控制线长
        };
        series.axisLabel = {           // 坐标轴文本标签，详见axis.axisLabel
            formatter: function (v) {
                switch (v + '') {
                    case '1000':
                        return '安全';
                    case '5000':
                        return '一般';
                    case '9000':
                        return '危险';
                    default:
                        return '';
                }
            },
            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                color: '#fff',
                fontSize: 15,
                fontWeight: 'bolder'
            }
        };
        series.pointer = {
            length: '80%',
            width: 8,
            color: 'auto'
        };

        series.detail = {
            show: true,
            backgroundColor: 'rgba(0,0,0,0)',
            borderWidth: 0,
            borderColor: '#ccc',
            width: 100,
            height: 40,
            formatter: '{value}人',
            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontSize: 50
            }
        };
        series.min = 0;
        series.max = 10000;
        data.push(tmp);
        series.data = data;
        return series;
    }

    var nowNumPeople = function () {
        var series = ToolEcharts.createGaugeSeries("实时人数", "实时人数");
        series = processNumPeopleSeries(series, "实时人数");
        var option = ToolEcharts.createGaugeOption(series);
        option.tooltip = {
            formatter: "{a} <br/>{b} : {c}人"
        };
        return option;
    };


    var futureNumPeople = function () {
        var series = ToolEcharts.createGaugeSeries("明日预测", "明日预测");
        series = processNumPeopleSeries(series, "明日预测");
        var option = ToolEcharts.createGaugeOption(series);
        option.tooltip = {
            formatter: "{b} : {c}人 <br/>"
        };
        return option;
    };


    var  addHeatMap = function(map)
    {
        var points = ToolMaps.radomHeatMapPoints([116.336931,40.31513],[116.283607,40.263067],1,100,300);
        var map = ToolMaps.addHeatMap(map,points);
        return map;
    }

    var streamPeople = function()
    {
        var legend = ["北","东北","东","东南","南","西南","西","西北"];
        var serise = ToolEcharts.createPieSeries(legend,2,100,1000);
        var option = ToolEcharts.createPieOption("",legend,serise);
        return option;
    }

    return {
        init: function () {
            var nowNumPeople = initEchart("agricScenePlanGovern.nowNumPeople");
            var futureNumPeople = initEchart("agricScenePlanGovern.futureNumPeople");
            var peopleDistribute = ToolMaps.init("agricScenePlanGovern.peopleDistribute",[116.315946,40.278867],13,false);
            peopleDistribute = addHeatMap(peopleDistribute);
            var streamPeople = initEchart("agricScenePlanGovern.streamPeople");
        },
        nowNumPeople: function () {
            return nowNumPeople();
        },
        futureNumPeople: function () {
            return futureNumPeople();
        },
        streamPeople: function() {
            return streamPeople();
        }
    }
}();