var Page = function () {
	var moduleTable=null;
	
	var columns=[{
		sTitle:'ID',
		bVisible:false,
		className:'column-left',
    	data: "id"
    },{
		sTitle:'上级ID',
		bVisible:false,
		className:'column-left',
    	data: "parentId"
    },{
		sTitle:'模块名',
		className:'column-left',
    	data: "name"
    },{
    	sTitle:'请求路径',
    	className:'column-left',
        data : "urlLink"
    },{
    	sTitle:'描述',
    	className:'column-left',
    	data: "description"
    },{
    	sTitle:'菜单显示',
    	data: "visible",
    	className:'column-center',
    	render:function(data, type, full){
        	if(data){
        		return '<span class="label label-sm label-success">是 </span>';
        	}else{
        		return '<span class="label label-sm label-danger">否 </span>';
        	}
        }
    },{
    	sTitle:'是否启用',
    	data: "enabled",
    	className:'column-center',
    	render:function(data, type, full){
        	if(data){
        		return '<span class="label label-sm label-success">启用 </span>';
        	}else{
        		return '<span class="label label-sm label-danger">禁用 </span>';
        	}
        }
    },{
    	sTitle:'操作',
    	"bSortable": false ,
    	data : "id",
    	className:'column-left',
		"render" : function(data, type, full) {
			var actionHtml =  '<a class="btn btn-xs default" onClick="Page.editModel('+data+')"> <i class="fa fa-edit">编辑</i> </a>'
				  +'<a class="btn btn-xs red" onClick="Page.deleteModel('+data+',\''+full.name+'\')" > <i class="fa fa-times"></i> 删除</a>';
			return actionHtml;
			 
		}
	}];
	var initTable = function () {
		moduleTable = $('#data_list').DataTable({
			paging:   false,
            ordering: false,
            info:     false,
        	ajax : {
				url : "moduleList.do",
				type: "POST",
				data: function(data) {
                    data["params[name]"] = $('#model_name').val();
                    Metronic.blockUI({
                        message: '请求中...',
                        target: '.table-scrollable',
                        overlayColor: 'none',
                        cenrerY: true,
                        boxed: true
                    });
	            },
	            dataSrc:function(res){
	            	Metronic.unblockUI('.table-scrollable');
                    return res.data;
	            }
			},
			columnDefs:[{
				targets : '_all',
				className : "column-right"
			}],
            columns : columns,
			createdRow: function( row, data, dataIndex ) {
				$(row).attr('id','module_'+data.id);
				$(row).addClass('treegrid-'+data.id);
				if(data.parentId!=0){
					$(row).addClass('treegrid-parent-'+data.parentId);
				}
				$(row).contextmenu({
		            target: '#context-menu',
		            onItem: function (context, e) {
		            	$('#edit_model_title').html('添加模块');
		            	$('#edit_model').resetForm();
		            	populate('#edit_model',{parentId:$(context).attr('id').replace('module_','')});
						$('#basic').modal({backdrop:false});
		            }
		        });
			},
			drawCallback:function(){
				$('.dataTable').treegrid({initialState:'collapsed'});
			}
        });
    }
	initValidate = function(){
		$('#edit_model').validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            rules: {
                name: {
                    required: true
                }
            },
            messages: {
            	name: {
                    required: "请输入模块名!"
                }
            },
            highlight: function(element) {
                $(element).closest('.form-group').addClass('has-error');
            },
            success: function(label) {
                label.closest('.form-group').removeClass('has-error');
                label.remove();
            },
            errorPlacement: function(error, element) {
                error.insertAfter(element.closest('.form-control'));
            }
        });
	}
	return {
		init : function() {
			if (!jQuery().dataTable) {
				return;
			}
			initTable();
			initValidate();
			$('.bs-select').selectpicker({
	            iconBase: 'fa',
	            tickIcon: 'fa-check'
	        });
			$('#edit_model').ajaxForm({
				  beforeSubmit: function() {
				    return $('#edit_model').valid();
				  },
				  success: function(data) {
					  if(data.success){
						  toastr['info'](data.msg, data.action);
						  $('#basic').modal('hide');
						  moduleTable.ajax.reload();
					  }else{
						  bootbox.alert(data.msg);
					  }
				  }
			});
			$('#add_module').click(function() {
				$('#edit_model_title').html('添加模块');
				$('#edit_model').resetForm();
				$('#basic').modal({backdrop:false});
			});
		},
		editModel : function(id){
			$('#edit_model_title').html('修改模块');
			populate('#edit_model',moduleTable.rows('#module_'+id).data()[0]);
			$('#basic').modal({backdrop:false});
		},
		deleteModel : function(id,name) {
			bootbox.confirm('确定删除"'+name+'"吗?', function(result) {
				 if(result){
					 $.get('deleteModule.do',{'id':id}, function(data) {
						if(data.success){
							toastr['info'](data.msg, data.action);
							moduleTable.ajax.reload();
						}else{
							bootbox.alert(data.msg);  
						}
					 });
				 }
             }); 
		},
		filedsManager:function(id,name){
			$('#fields_model_title').html(name+'-分配字段');
			$('#module_id').val(id);
			$.get('fieldsOfModule.do',{'moduleId':id}, function(data) {
				$("input[name='fieldIds']").each(function(){
					 $(this).removeAttr("checked");
				});
				$.each(data,function(key,value){
					$('#field_'+value.id).attr("checked","checked");
				});
			 });
			$('#fieldsList').modal({backdrop:false});
		},
		saveExcel:function(){
            var url = "exportModuleExcel.do?&params[name]="+$('#model_name').val();
            url += "&orderColumn="+moduleTable.column(moduleTable.order()[0][0]).dataSrc()+"&orderDir="+moduleTable.order()[0][1];
            url += "&start="+moduleTable.page.info().start+"&length="+moduleTable.page.info().length;
            var columnsStr = '';
            for (var i = 0; i < columns.length-1; i++) {
            	columnsStr+=columns[i].data+':'+columns[i].sTitle+";"
			}
            url += "&params[columns]="+encodeURI(columnsStr.replace(/%/g,'_percent_'));
			window.open(url);
		},
		reload : function() {
			moduleTable.ajax.reload();
		}

	};
}();
