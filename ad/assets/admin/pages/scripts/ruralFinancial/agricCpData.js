agricCpData = function(){

    var companyChord = function(){
        var legend = ["种子","农药","化肥","农具"];
        var name = "涉农企业产品统计";
        var series = ToolEcharts.createChordSeries(name,30,"公司{0}",legend);
        var option = ToolEcharts.createChordOption(name,legend,series);
        return option;
    }

    var gauge_1 = function(){
        var name = "种子";
        var series = ToolEcharts.createGaugeSeries("种子安全指数","种子");
        series.detail= {
            formatter: '{value}',
            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                color: 'auto',
                fontWeight: 'bolder'
            }
        };
        var option = ToolEcharts.createGaugeOption(series);
        option.tooltip = {
            formatter: "{a} <br/>{b} : {c}"
        };
        return option;
    }

    var gauge_2 = function(){
        var name = "种子";
        var series = ToolEcharts.createGaugeSeries("农药安全指数","农药");
        series.detail= {
            formatter: '{value}',
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                color: 'auto',
                    fontWeight: 'bolder'
            }
        };
        var option = ToolEcharts.createGaugeOption(series);
        option.tooltip = {
            formatter: "{a} <br/>{b} : {c}"
        };
        return option;
    }

    var gauge_3 = function(){
        var name = "种子";
        var series = ToolEcharts.createGaugeSeries("化肥安全指数","化肥");
        series.detail= {
            formatter: '{value}',
            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                color: 'auto',
                fontWeight: 'bolder'
            }
        };
        var option = ToolEcharts.createGaugeOption(series);
        option.tooltip = {
            formatter: "{a} <br/>{b} : {c}"
        };
        return option;
    }

    var gauge_4 = function(){
        var name = "种子";
        var series = ToolEcharts.createGaugeSeries("农具安全指数","农具");
        series.detail= {
            formatter: '{value}',
            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                color: 'auto',
                fontWeight: 'bolder'
            }
        };
        var option = ToolEcharts.createGaugeOption(series);
        option.tooltip = {
            formatter: "{a} <br/>{b} : {c}"
        };
        return option;
    }

    return {
        init : function() {
            var companyChord = initEchart('agricCpData.companyChord');
            var gauge_1 = initEchart('agricCpData.gauge_1');
            var gauge_2 = initEchart('agricCpData.gauge_2');
            var gauge_3 = initEchart('agricCpData.gauge_3');
            var gauge_4 = initEchart('agricCpData.gauge_4');
        },
        companyChord: function() {
            return companyChord();
        },
        gauge_1: function() {
            return gauge_1();
        },
        gauge_2: function() {
            return gauge_2();
        },
        gauge_3: function() {
            return gauge_3();
        },
        gauge_4: function() {
            return gauge_4();
        },
    }
}();