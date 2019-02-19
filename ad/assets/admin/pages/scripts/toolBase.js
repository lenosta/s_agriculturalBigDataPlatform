ToolBase = function(){

    String.prototype.format = function()
    {
        var args = arguments;
        return this.replace(/\{(\d+)\}/g,
            function(m,i){
                return args[i];
            });
    }



    String.format = function() {
        if( arguments.length == 0 )
            return null;

        var str = arguments[0];
        for(var i=1;i<arguments.length;i++) {
            var re = new RegExp('\\{' + (i-1) + '\\}','gm');
            str = str.replace(re, arguments[i]);
        }
        return str;
    }

    var isUndefine = function(param)
    {
        if(typeof(param)=="undefined")
            return true;
        return false;
    }


    var randomNameList = function(size,formatStr,inc,category,value)
    {
        var ret = [];
        for(var i=0;i<size;i=i+inc)
        {
            var name = formatStr.format(i);
            ret.push({name: name,category:category,value:value});
        }
        return ret;
    }

    /**
     * 生成随机数数组
     * @param size   数组大小
     */
    var randomList = function (size, min, max) {
        var ret = [];
        for (var i = 0; i < size; i++) {
            ret.push(randomNum(min, max));
        }
        return ret;
    };

    /**
     * 创建列表
     * @param size          列表大小
     * @param defaultValue  默认值
     * @param inc           自增值
     * @returns {Array}
     */
    var createList = function (size, defaultValue, inc) {
        var ret = []
        for (var i = 0; i < size; i++) {
            ret.push(defaultValue);
            if (inc) {
                defaultValue = defaultValue + inc;
            }
        }
        return ret;
    }


    /**
     * 生成随机数
     * @param min
     * @param max
     * @returns {*}
     */
    var randomDouble = function(min,max)
    {
        var dis = (max - min);
        var mid = min + dis/2.0;
        var randNum = Math.random() - 0.5;
        var ret = mid + dis*randNum;
        return ret;
    }

    /**
     * 生成随机数
     * @param min  最小值
     * @param max  最大值
     * @returns {*}
     */
    var randomNum = function (min, max) {
        var mid = max - min;
        var num = Math.round(Math.random() * mid) + min;
        return num;
    };

    /**
     * 创建以天为间隔的时间数组
     * @param startTime
     * @param size
     * @returns {*}
     */
    var createTimeByDay = function (startTime, size) {
        var inc = 24 * 60 * 60 * 1000;
        return createTimeList(startTime, inc, size, "yyyy-MM-dd");
    }


    /**
     * 创建以年为间隔的时间数组
     * @param startTime
     * @param size
     * @returns {*}
     */
    var createTimeByYear = function (startTime, size) {
        var inc = 24 * 60 * 60 * 1000 * 365;
        return createTimeList(startTime, inc, size, "yyyy-MM-dd");
    }


    /**
     * 生成时间的数组
     * @param startTime  开始时间
     * @param incLong    间隔时间
     * @param size       数组大小
     * @param format     时间格式
     * @returns {Array}
     */
    var createTimeList = function (startTime, incLong, size, format) {
        var ret = [];
        var nowTime = startTime.getTime();
        for (var i = 0; i < size; i++) {
            var date = new Date();
            date.setTime(nowTime);
            nowTime = nowTime + incLong;
            ret.push(date.format(format));
        }
        return ret;
    }


    return {
        init : function() {

        },
        randomList: function (size, min, max) {
            return randomList(size, min, max)
        },
        createList: function (size, defaultValue, inc) {
            return createList(size, defaultValue, inc)
        },
        randomNum: function (min, max) {
            return randomNum(min, max);
        },
        createTimeByDay: function (startTime, size) {
            return createTimeByDay(startTime, size);
        },
        createTimeByYear: function (startTime, size) {
            return createTimeByYear(startTime, size);
        },
        randomDouble: function(min,max){
            return randomDouble(min,max);
        },
        isUndefine: function(param)
        {
            return isUndefine(param);
        },
        randomNameList: function(size,format,inc,category,value)
        {
            return randomNameList(size,format,inc,category,value);
        }

    }
}();