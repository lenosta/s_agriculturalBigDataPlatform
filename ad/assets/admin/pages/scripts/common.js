/**
 * json数据填充form
 * 
 * @param frm
 * @param data
 */
function populate(frm, data) { 
	for(key in data){
		var $ctrl = $('[name='+key+']', frm);  
	    switch($ctrl.attr("type"))  
	    {  
	        case "text" :   
	        case "hidden":  
	        $ctrl.val(data[key]);   
	        break;   
	        case "radio" : case "checkbox":   
	        $ctrl.each(function(){
	           if($(this).attr('value') == data[key]) {  $(this).attr("checked",data[key]); } });   
	        break;  
	        default:
	        $ctrl.val(data[key]); 
	    }  
	}
}

var chinieseProvince = {
         '北京': 'beijing',
         '天津': 'tianjin',
         '上海': 'shanghai',
         '重庆': 'chongqing',
         '河北': 'hebei',
         '河南': 'henan',
         '云南': 'yunnan',
         '辽宁': 'liaoning',
         '黑龙江': 'heilongjiang',
         '湖南': 'hunan',
         '安徽': 'anhui',
         '山东': 'shandong',
         '新疆': 'xinjiang',
         '江苏': 'jiangsu',
         '浙江': 'zhejiang',
         '江西': 'jiangxi',
         '湖北': 'hubei',
         '广西': 'guangxi',
         '甘肃': 'gansu',
         '山西': 'shanxi',
         '内蒙古': 'neimenggu',
         '陕西': 'shanxi1',
         '吉林': 'jilin',
         '福建': 'fujian',
         '贵州': 'guizhou',
         '广东': 'guangxi',
         '青海': 'qinghai',
         '西藏': 'xizang',
         '四川': 'sichuan',
         '宁夏': 'ningxia',
         '海南': 'hainan',
         '台湾': 'taiwan',
         '香港': 'xianggang',
         '澳门': 'aomen'
	};

var chinieseCities = [
    {name: '城口县'},
    {name: '巫溪县'},
    {name: '开县'},
    {name: '云阳县'},
    {name: '巫山县'},
    {name: '奉节县'},
    {name: '梁平县'},
    {name: '万州区'},
    {name: '忠县'},
    {name: '垫江县'},
    {name: '石柱土家族自治县'},
    {name: '长寿区'},
    {name: '丰都县'},
    {name: '合川区'},
    {name: '北碚区'},
    {name: '渝北区'},
    {name: '涪陵区'},
    {name: '黔江区'},
    {name: '潼南县'},
    {name: '铜梁县'},
    {name: '沙坪坝区'},
    {name: '江北区'},
    {name: '彭水苗族土家族自治县'},
    {name: '大足县'},
    {name: '璧山县'},
    {name: '渝中区'},
    {name: '南岸区'},
    {name: '武隆县'},
    {name: '大渡口区'},
    {name: '九龙坡区'},
    {name: '南川区'},
    {name: '双桥区'},
    {name: '荣昌县'},
    {name: '永川区'},
    {name: '江津区'},
    {name: '万盛区'},
    {name: '綦江县'},
    {name: '巴南区'},
    {name: '酉阳土家族苗族自治县'},
    {name: '秀山土家族苗族自治县'},
    {name: '怀柔区'},
    {name: '延庆县'},
    {name: '昌平区'},
    {name: '密云县'},
    {name: '顺义区'},
    {name: '平谷区'},
    {name: '通州区'},
    {name: '大兴区'},
    {name: '东城区'},
    {name: '海淀区'},
    {name: '石景山区'},
    {name: '宣武区'},
    {name: '朝阳区'},
    {name: '西城区'},
    {name: '丰台区'},
    {name: '通州区'},
    {name: '门头沟区'},
    {name: '房山区'},
    {name: '崇文区'},
    {name: '蓟县'},
    {name: '宝坻区'},
    {name: '武清区'},
    {name: '宁河县'},
    {name: '汉沽区'},
    {name: '北辰区'},
    {name: '静海县'},
    {name: '大港区'},
    {name: '津南区'},
    {name: '塘沽区'},
    {name: '河西区'},
    {name: '东丽区'},
    {name: '南开区'},
    {name: '红桥区'},
    {name: '河北区'},
    {name: '河东区'},
    {name: '西青区'},
    {name: '和平区'},
    {name: '崇明县'},
    {name: '宝山区'},
    {name: '浦东新区'},
    {name: '杨浦区'},
    {name: '嘉定区'},
    {name: '虹口区'},
    {name: '闸北区'},
    {name: '普陀区'},
    {name: '静安区'},
    {name: '黄浦区'},
    {name: '卢湾区'},
    {name: '长宁区'},
    {name: '徐汇区'},
    {name: '闵行区'},
    {name: '青浦区'},
    {name: '南汇区'},
    {name: '松江区'},
    {name: '金山区'},
    {name: '奉贤区'},
    {name: '香港'},
    {name: '澳门'},
    {name: '巴音郭楞蒙古自治州'},
    {name: '和田地区'},
    {name: '哈密地区'},
    {name: '阿克苏地区'},
    {name: '阿勒泰地区'},
    {name: '喀什地区'},
    {name: '塔城地区'},
    {name: '昌吉回族自治州'},
    {name: '克孜勒苏柯尔克孜自治州'},
    {name: '吐鲁番地区'},
    {name: '伊犁哈萨克自治州'},
    {name: '博尔塔拉蒙古自治州'},
    {name: '乌鲁木齐市'},
    {name: '克拉玛依市'},
    {name: '阿拉尔市'},
    {name: '图木舒克市'},
    {name: '五家渠市'},
    {name: '石河子市'},
    {name: '那曲地区'},
    {name: '阿里地区'},
    {name: '日喀则地区'},
    {name: '林芝地区'},
    {name: '昌都地区'},
    {name: '山南地区'},
    {name: '拉萨市'},
    {name: '呼伦贝尔市'},
    {name: '阿拉善盟'},
    {name: '锡林郭勒盟'},
    {name: '鄂尔多斯市'},
    {name: '赤峰市'},
    {name: '巴彦淖尔市'},
    {name: '通辽市'},
    {name: '乌兰察布市'},
    {name: '兴安盟'},
    {name: '包头市'},
    {name: '呼和浩特市'},
    {name: '乌海市'},
    {name: '海西蒙古族藏族自治州'},
    {name: '玉树藏族自治州'},
    {name: '果洛藏族自治州'},
    {name: '海南藏族自治州'},
    {name: '海北藏族自治州'},
    {name: '黄南藏族自治州'},
    {name: '海东地区'},
    {name: '西宁市'},
    {name: '甘孜藏族自治州'},
    {name: '阿坝藏族羌族自治州'},
    {name: '凉山彝族自治州'},
    {name: '绵阳市'},
    {name: '达州市'},
    {name: '广元市'},
    {name: '雅安市'},
    {name: '宜宾市'},
    {name: '乐山市'},
    {name: '南充市'},
    {name: '巴中市'},
    {name: '泸州市'},
    {name: '成都市'},
    {name: '资阳市'},
    {name: '攀枝花市'},
    {name: '眉山市'},
    {name: '广安市'},
    {name: '德阳市'},
    {name: '内江市'},
    {name: '遂宁市'},
    {name: '自贡市'},
    {name: '黑河市'},
    {name: '大兴安岭地区'},
    {name: '哈尔滨市'},
    {name: '齐齐哈尔市'},
    {name: '牡丹江市'},
    {name: '绥化市'},
    {name: '伊春市'},
    {name: '佳木斯市'},
    {name: '鸡西市'},
    {name: '双鸭山市'},
    {name: '大庆市'},
    {name: '鹤岗市'},
    {name: '七台河市'},
    {name: '酒泉市'},
    {name: '张掖市'},
    {name: '甘南藏族自治州'},
    {name: '武威市'},
    {name: '陇南市'},
    {name: '庆阳市'},
    {name: '白银市'},
    {name: '定西市'},
    {name: '天水市'},
    {name: '兰州市'},
    {name: '平凉市'},
    {name: '临夏回族自治州'},
    {name: '金昌市'},
    {name: '嘉峪关市'},
    {name: '普洱市'},
    {name: '红河哈尼族彝族自治州'},
    {name: '文山壮族苗族自治州'},
    {name: '曲靖市'},
    {name: '楚雄彝族自治州'},
    {name: '大理白族自治州'},
    {name: '临沧市'},
    {name: '迪庆藏族自治州'},
    {name: '昭通市'},
    {name: '昆明市'},
    {name: '丽江市'},
    {name: '西双版纳傣族自治州'},
    {name: '保山市'},
    {name: '玉溪市'},
    {name: '怒江傈僳族自治州'},
    {name: '德宏傣族景颇族自治州'},
    {name: '百色市'},
    {name: '河池市'},
    {name: '桂林市'},
    {name: '南宁市'},
    {name: '柳州市'},
    {name: '崇左市'},
    {name: '来宾市'},
    {name: '玉林市'},
    {name: '梧州市'},
    {name: '贺州市'},
    {name: '钦州市'},
    {name: '贵港市'},
    {name: '防城港市'},
    {name: '北海市'},
    {name: '怀化市'},
    {name: '永州市'},
    {name: '邵阳市'},
    {name: '郴州市'},
    {name: '常德市'},
    {name: '湘西土家族苗族自治州'},
    {name: '衡阳市'},
    {name: '岳阳市'},
    {name: '益阳市'},
    {name: '长沙市'},
    {name: '株洲市'},
    {name: '张家界市'},
    {name: '娄底市'},
    {name: '湘潭市'},
    {name: '榆林市'},
    {name: '延安市'},
    {name: '汉中市'},
    {name: '安康市'},
    {name: '商洛市'},
    {name: '宝鸡市'},
    {name: '渭南市'},
    {name: '咸阳市'},
    {name: '西安市'},
    {name: '铜川市'},
    {name: '清远市'},
    {name: '韶关市'},
    {name: '湛江市'},
    {name: '梅州市'},
    {name: '河源市'},
    {name: '肇庆市'},
    {name: '惠州市'},
    {name: '茂名市'},
    {name: '江门市'},
    {name: '阳江市'},
    {name: '云浮市'},
    {name: '广州市'},
    {name: '汕尾市'},
    {name: '揭阳市'},
    {name: '珠海市'},
    {name: '佛山市'},
    {name: '潮州市'},
    {name: '汕头市'},
    {name: '深圳市'},
    {name: '东莞市'},
    {name: '中山市'},
    {name: '延边朝鲜族自治州'},
    {name: '吉林市'},
    {name: '白城市'},
    {name: '松原市'},
    {name: '长春市'},
    {name: '白山市'},
    {name: '通化市'},
    {name: '四平市'},
    {name: '辽源市'},
    {name: '承德市'},
    {name: '张家口市'},
    {name: '保定市'},
    {name: '唐山市'},
    {name: '沧州市'},
    {name: '石家庄市'},
    {name: '邢台市'},
    {name: '邯郸市'},
    {name: '秦皇岛市'},
    {name: '衡水市'},
    {name: '廊坊市'},
    {name: '恩施土家族苗族自治州'},
    {name: '十堰市'},
    {name: '宜昌市'},
    {name: '襄樊市'},
    {name: '黄冈市'},
    {name: '荆州市'},
    {name: '荆门市'},
    {name: '咸宁市'},
    {name: '随州市'},
    {name: '孝感市'},
    {name: '武汉市'},
    {name: '黄石市'},
    {name: '神农架林区'},
    {name: '天门市'},
    {name: '仙桃市'},
    {name: '潜江市'},
    {name: '鄂州市'},
    {name: '遵义市'},
    {name: '黔东南苗族侗族自治州'},
    {name: '毕节地区'},
    {name: '黔南布依族苗族自治州'},
    {name: '铜仁地区'},
    {name: '黔西南布依族苗族自治州'},
    {name: '六盘水市'},
    {name: '安顺市'},
    {name: '贵阳市'},
    {name: '烟台市'},
    {name: '临沂市'},
    {name: '潍坊市'},
    {name: '青岛市'},
    {name: '菏泽市'},
    {name: '济宁市'},
    {name: '德州市'},
    {name: '滨州市'},
    {name: '聊城市'},
    {name: '东营市'},
    {name: '济南市'},
    {name: '泰安市'},
    {name: '威海市'},
    {name: '日照市'},
    {name: '淄博市'},
    {name: '枣庄市'},
    {name: '莱芜市'},
    {name: '赣州市'},
    {name: '吉安市'},
    {name: '上饶市'},
    {name: '九江市'},
    {name: '抚州市'},
    {name: '宜春市'},
    {name: '南昌市'},
    {name: '景德镇市'},
    {name: '萍乡市'},
    {name: '鹰潭市'},
    {name: '新余市'},
    {name: '南阳市'},
    {name: '信阳市'},
    {name: '洛阳市'},
    {name: '驻马店市'},
    {name: '周口市'},
    {name: '商丘市'},
    {name: '三门峡市'},
    {name: '新乡市'},
    {name: '平顶山市'},
    {name: '郑州市'},
    {name: '安阳市'},
    {name: '开封市'},
    {name: '焦作市'},
    {name: '许昌市'},
    {name: '濮阳市'},
    {name: '漯河市'},
    {name: '鹤壁市'},
    {name: '大连市'},
    {name: '朝阳市'},
    {name: '丹东市'},
    {name: '铁岭市'},
    {name: '沈阳市'},
    {name: '抚顺市'},
    {name: '葫芦岛市'},
    {name: '阜新市'},
    {name: '锦州市'},
    {name: '鞍山市'},
    {name: '本溪市'},
    {name: '营口市'},
    {name: '辽阳市'},
    {name: '盘锦市'},
    {name: '忻州市'},
    {name: '吕梁市'},
    {name: '临汾市'},
    {name: '晋中市'},
    {name: '运城市'},
    {name: '大同市'},
    {name: '长治市'},
    {name: '朔州市'},
    {name: '晋城市'},
    {name: '太原市'},
    {name: '阳泉市'},
    {name: '六安市'},
    {name: '安庆市'},
    {name: '滁州市'},
    {name: '宣城市'},
    {name: '阜阳市'},
    {name: '宿州市'},
    {name: '黄山市'},
    {name: '巢湖市'},
    {name: '亳州市'},
    {name: '池州市'},
    {name: '合肥市'},
    {name: '蚌埠市'},
    {name: '芜湖市'},
    {name: '淮北市'},
    {name: '淮南市'},
    {name: '马鞍山市'},
    {name: '铜陵市'},
    {name: '南平市'},
    {name: '三明市'},
    {name: '龙岩市'},
    {name: '宁德市'},
    {name: '福州市'},
    {name: '漳州市'},
    {name: '泉州市'},
    {name: '莆田市'},
    {name: '厦门市'},
    {name: '丽水市'},
    {name: '杭州市'},
    {name: '温州市'},
    {name: '宁波市'},
    {name: '舟山市'},
    {name: '台州市'},
    {name: '金华市'},
    {name: '衢州市'},
    {name: '绍兴市'},
    {name: '嘉兴市'},
    {name: '湖州市'},
    {name: '盐城市'},
    {name: '徐州市'},
    {name: '南通市'},
    {name: '淮安市'},
    {name: '苏州市'},
    {name: '宿迁市'},
    {name: '连云港市'},
    {name: '扬州市'},
    {name: '南京市'},
    {name: '泰州市'},
    {name: '无锡市'},
    {name: '常州市'},
    {name: '镇江市'},
    {name: '吴忠市'},
    {name: '中卫市'},
    {name: '固原市'},
    {name: '银川市'},
    {name: '石嘴山市'},
    {name: '儋州市'},
    {name: '文昌市'},
    {name: '乐东黎族自治县'},
    {name: '三亚市'},
    {name: '琼中黎族苗族自治县'},
    {name: '东方市'},
    {name: '海口市'},
    {name: '万宁市'},
    {name: '澄迈县'},
    {name: '白沙黎族自治县'},
    {name: '琼海市'},
    {name: '昌江黎族自治县'},
    {name: '临高县'},
    {name: '陵水黎族自治县'},
    {name: '屯昌县'},
    {name: '定安县'},
    {name: '保亭黎族苗族自治县'},
    {name: '五指山市'}
];

var genRandomChinieseCitiesValue = function(v){
	var value  = !v ? 10000: v;
	var res = [];
	for (var index in chinieseCities){
		res.push({name: chinieseCities[index].name, value: Math.round(Math.random() * value )})
	}
	return res;
};

var loadJsonMap = function (id, province, option){
	var chart = echarts.init(document.getElementById(id));
	chart.showLoading();
	$.get('../assets/global/plugins/echarts/map/province/' + chinieseProvince[province] + '.json', function (jsonMap) {
		chart.hideLoading();
	    echarts.registerMap(chinieseProvince[province], jsonMap);
//	    console.log(option);
	    chart.setOption(option);
	});
};

var checkAlarmCount=function(datastr){
	var map = {};
	if(datastr!=null){
	var str=datastr.split(",");  
	for(var i=0;i<str.length ;i++){
		 var newStr=str[i].split(":");
		 map[newStr[0]] = newStr[1];
	}
	return map;
}
}
jQuery.validator.addMethod("isPhone", function(value, element) {
		var length = value.length;
		var mobile = /^(((13[0-9]{1})|(15[0-9]{1}))+\d{8})$/;
		return this.optional(element) || (length == 11 && mobile.test(value));
}, "请正确填写您的手机号码");
bootbox.setDefaults({locale:'zh_CN'});

$.extend(true, $.fn.dataTable.defaults, {
	searching:false,
	bServerSide : true,
	bPaginate : true,
	bInfo : true,
    dom : "<'row'<'col-md-8 col-sm-12'<'table-group-search'>><'col-md-4 col-sm-12'<'table-group-actions pull-right'>>Rr> <'table-scrollable't><'row'<'col-md-5 col-sm-12'li><'col-md-7 col-sm-12'p>>",
    language : {
		"sProcessing" : "处理中...",
		"lengthMenu": "显示 _MENU_ 记录",
		"sZeroRecords" : "没有匹配结果",
		"info" : "<span class='seperator'>|</span>共 _TOTAL_ 项",
		"sInfoEmpty" : "共 0 项",
		"sInfoFiltered" : "(由 _MAX_ 项结果过滤)",
		"sInfoPostFix" : "",
		"sSearch" : "搜索:",
		"sUrl" : "",
		"sEmptyTable" : "表中数据为空",
        "sLoadingRecords": "载入中...",
        "sInfoThousands": ",",
        "oPaginate": {
            "sFirst": "首页",
            "sPrevious": "上页",
            "sNext": "下页",
            "sLast": "末页"
        },
        "oAria": {
            "sSortAscending": ": 以升序排列此列",
            "sSortDescending": ": 以降序排列此列"
        }
    }
});
$.fn.dataTableExt.oStdClasses.sWrapper = $.fn.dataTableExt.oStdClasses.sWrapper + " dataTables_extended_wrapper";



toastr.options = {
  "closeButton": true,
  "debug": false,
  "positionClass": "toast-bottom-right",
  "onclick": null,
  "showDuration": "1000",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}

function drawChart(container,categories,chartData,yAxisText,chartType){
	 $('#'+container).highcharts({
			credits: {enabled: false},
			chart: {
	            type: chartType,
	            height:422
	        },
			xAxis : {
				categories: categories
			},
			title : {
				text : ''
			},
			tooltip : {
			},
			legend : {
				enabled : false
			},
			exporting : {
				enabled : false
			},
			yAxis : {
				lineWidth : 1,
				title: {
	               text: yAxisText
	           }
			},
			series: chartData
		});
}

function booleanRender(data, type, full){
	if(data===1){
		return '<span class="label label-sm label-success">是 </span>';
	}else{
		return '<span class="label label-sm label-danger">否 </span>';
	}
}

function initEchart(id){
    var element = document.getElementById(id);
    var chart = echarts.init(element);
    chart.setOption(eval(id + '()'));
    //console.log(chart);
    return chart;
}

function initMapEchart(id){
    // 初始化地图
    var element = document.getElementById(id);
    var BMapExt = new BMapExtension(element, BMap, require('echarts'), require('zrender'));
    var map = BMapExt.getMap();
    var container = BMapExt.getEchartsContainer();
    var point = new BMap.Point(startPoint.x, startPoint.y);
    map.centerAndZoom(point, 5);
    map.enableScrollWheelZoom(true);


    var myChart = echarts.init(element);
    if (myChart && myChart.dispose) {
        myChart.dispose();
    }
    myChart = BMapExt.initECharts(container, curTheme);
    window.onresize = myChart.resize;
    myChart.setOption(eval(id + '()'));
    return myChart;
}
