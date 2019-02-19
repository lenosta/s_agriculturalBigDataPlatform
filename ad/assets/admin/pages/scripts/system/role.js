var Page = function() {
	var roleTable;
	var columns = [
			{
				sTitle : '角色名',
				className : 'column-left',
				data : "name"
			},
			{
				sTitle : '创建者',
				data : "creator"
			},
			{
				sTitle : '是否启用',
				data : "enabled",
				render : function(data, type, full) {
					if (data === 1) {
						return '<span class="label label-sm label-success">启用 </span>';
					} else {
						return '<span class="label label-sm label-danger">禁用 </span>';
					}
				}
			},
			{
				sTitle : '描述',
				data : "description"
			},
			{
				sTitle : '操作',
				"bSortable" : false,
				data : "id",
				"render" : function(data, type, full) {
					return '<a class="btn btn-xs default" onClick="Page.editRole('
							+ data
							+ ')"> <i class="fa fa-edit">编辑</i> </a>'
							+ '<a class="btn btn-xs red" onClick="Page.deleteRole('
							+ data
							+ ',\''
							+ full.name
							+ '\')" > <i class="fa fa-times"></i> 删除</a>'
							+ '<a class="btn btn-xs default" onClick="Page.setModulesOfRole('
							+ data
							+ ',\''
							+ full.name
							+ '\')" > <i class="fa fa-cogs"></i>设置权限</a>';
				}
			} ];
     var initModuleTree=function(){
		$("#moduleTree").jstree({
			plugins : [ "wholerow", "checkbox", "types" ],
			core :{
				'data' : {
	            'url' : 'findAllModules.do'
	            }
			},
			types : {
				"default" : {
					icon : "fa fa-folder icon-state-warning icon-lg"
				},
				file : {
					icon : "fa fa-file icon-state-warning icon-lg"
				}
			}
		});
	}
	var initTable = function() {
		roleTable = $('#data_list')
				.DataTable(
						{
							ajax : {
								url : "roleList.do",
								type : "POST",
								data : function(data) {
									data['orderColumn'] = data.columns[data.order[0].column].data;
									data['orderDir'] = data.order[0].dir;
									data["params[roleName]"] = $('#model_name')
											.val();
									Metronic.blockUI({
										message : '请求中...',
										target : '.table-scrollable',
										overlayColor : 'none',
										cenrerY : true,
										boxed : true
									});
								},
								dataSrc : function(res) {
									Metronic.unblockUI('.table-scrollable');
									return res.data;
								}
							},
							columnDefs : [ {
								targets : '_all',
								className : "column-right"
							} ],
							columns : columns,
							createdRow : function(row, data, dataIndex) {
								$(row).attr('id', 'role_' + data.id);
							}
						});
	}
	initValidate = function() {
		$('#edit_role').validate({
			errorElement : 'span', // default input error message container
			errorClass : 'help-block', // default input error message class
			focusInvalid : false, // do not focus the last invalid input
			rules : {
				name : {
					required : true
				}
			},
			messages : {
				name : {
					required : "请输入角色名!"
				}
			},
			highlight : function(element) {
				$(element).closest('.form-group').addClass('has-error');
			},
			success : function(label) {
				label.closest('.form-group').removeClass('has-error');
				label.remove();
			},
			errorPlacement : function(error, element) {
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
			initModuleTree();
			$('#edit_role').ajaxForm({
				beforeSubmit : function() {
					return $('#edit_role').valid();
				},
				success : function(data) {
					if (data.success) {
						toastr['info'](data.msg, data.action);
						$('#basic').modal('hide');
						roleTable.ajax.reload();
					} else {
						bootbox.alert(data.msg);
					}
				}
			});
			$('#add_role').click(function() {
				$('#edit_role_title').html('添加角色');
				$('#edit_role').resetForm();
				$('#basic').modal({
					backdrop : false
				});
			});
		},
		editRole : function(id) {
			$('#edit_role_title').html('修改角色');
			populate('#edit_role', roleTable.rows('#role_' + id).data()[0]);
			$('#basic').modal({
				backdrop : false
			});
		},
		deleteRole : function(id, name) {
			bootbox.confirm('确定删除"' + name + '"吗?', function(result) {
				if (result) {
					$.get('deleteRole.do', {
						'id' : id
					}, function(data) {
						if (data.success) {
							toastr['info'](data.msg, data.action);
							roleTable.ajax.reload();
						} else {
							bootbox.alert(data.msg);
						}
					});
				}
			});
		},
		saveExcel : function() {
			var url = "exportRoleExcel.do?&params[roleName]="
					+ $('#model_name').val();
			url += "&orderColumn="
					+ roleTable.column(roleTable.order()[0][0]).dataSrc()
					+ "&orderDir=" + roleTable.order()[0][1];
			url += "&start=" + roleTable.page.info().start + "&length="
					+ roleTable.page.info().length;
			var columnsStr = '';
			for (var i = 0; i < columns.length - 1; i++) {
				columnsStr += columns[i].data + ':' + columns[i].sTitle + ";"
			}
			url += "&params[columns]="
					+ encodeURI(columnsStr.replace(/%/g, '_percent_'));
			window.open(url);
		},
		reload : function() {
			roleTable.ajax.reload();
		},
		setModulesOfRole : function(id, name) {
			$("#role_Module_id").val(id);
			$("#edit_role_module_title").html(name+"—设置模块权限")
			$.get('modulesOfRole.do', {
				'roleId' : id
			}, function(data) {
				var moduleTree=$("#moduleTree");
				moduleTree.jstree("unselect_all")
				moduleTree.jstree("open_all")
				$.each(data,function(key,value){
					moduleTree.jstree("check_node",$("#"+value.id))
				});
              });
			$('#moduleList').modal({
				backdrop : false
			});
		},
		editRoleModules : function(){
			var  ids =$('#moduleTree').jstree().get_checked().join(",");
			var  roleId=$("#role_Module_id").val();
			  $.ajax({
		            type:"POST",
		            url:"editModulesRole.do",
		            data:{editModuleRoleId:roleId,moduleIds:ids},
		            datatype: "json",
		            success:function(data){
		            	if (data.success) {
							toastr['info'](data.msg, data.action);
							$('#moduleList').modal('hide');
						} else {
							bootbox.alert(data.msg);
						}
		            },
		         });
		}

	};
}();
