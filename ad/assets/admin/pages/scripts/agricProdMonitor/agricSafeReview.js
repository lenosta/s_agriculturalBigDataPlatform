agricSafeReview = function(){
    var safeReview = function(){
       return ToolEcharts.createChinaMapOption(ToolEcharts.selectMult,"农产品安全追溯平台",["水稻", "土豆", "洋葱", "大蒜","茶叶","玉米","大豆","香蕉"],false,true,true,5,20,1,100,0);
    };

    return {
        init : function() {
            var safeReview =initEchart("agricSafeReview.safeReview");
        },
        safeReview: function(){
            return safeReview();
        }
    }
}();