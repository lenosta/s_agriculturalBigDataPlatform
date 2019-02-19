var Page = function() {
	var userTable = null;
	var columns=[
					{
						sTitle:'用户名',
						data : "username",
					},
					{
						sTitle:'电话号码',
						data : "phoneNum",
					},
					{   sTitle:'email',
						data : "email",
					},
					{
						sTitle:'创建人',
						data : "creator",
					},
					{
						sTitle:'创建时间',
						data : "createTime",
					},
					{
						sTitle:'最后登录时间',
						"bVisible" : true,
						data : "lastLogin",
					},
					{
						sTitle:'职位',
						"bVisible" : true,
						data : "position",
					},
					{
						sTitle:'状态',
						data : "status",
						"mRender" : function(data, type, full) {
							if (data == 1) {
								return '<span class="label label-sm label-success"> 正  常 </span>'
							} else {
								return '<span class="label label-sm label-warning"> 禁   用 </span>'
							}
						},
					},
					{
						sTitle:'操作',
						"bSortable": false ,
						data : "id",
						"mRender" : function(data, type, full) {
							return '<a class="btn btn-xs default" onClick="Page.editUser('+data+')"> <i class="fa fa-edit">编辑</i> </a>'
							  +'<a class="btn btn-xs red" onClick="Page.deleteUser('+data+',\''+full.username+'\')" > <i class="fa fa-times"></i> 删除</a>'
							  +'<a class="btn btn-xs default" onClick="Page.setRole('+data+',\''+full.username+'\')" > <i class="fa fa-cogs"></i> 设置角色</a>';
						}
					}];
	var initTable = function() {
		userTable = $('#user_list').DataTable({
			ajax : {
				url : "userList.do",
				type: "POST",
				data: function(data) {
					data['orderColumn'] = data.columns[data.order[0].column].data;
					data['orderDir'] = data.order[0].dir;
                    data["params[userName]"] = $('#model_name').val();
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
					"aoColumns" : columns,  
	                createdRow: function( row, data, dataIndex ) {
	    				$(row).attr('id','user_'+data.id);
	        		}
        });
	}

	var initValidate = function() {
		$("#edit_user").validate({
			errorElement : 'span', // default input error message container
			errorClass : 'help-block', // default input error message class
			focusInvalid : false, // do not focus the last invalid input
			rules : {
				username : {
					required : true,
					remote:{
                        url: "exists.do",
                        type: "post",
                        dataType: "json",
                        data:{username:function(){
                           return $("#editUserName").val();                   	
                        },id:function(){
                           return $("#editUserId").val();  
                        }},
                        dataFilter: function (data) {
                        	var  json=eval('('+data+')');
                        	return json.exists;
                        }
                    }
				},
				password : {
					required : true
				},
				email : {
					email : true,
					required : true
				},
				phoneNum : {
					required : true,
					isPhone : true
				}
			},
			messages : {
				username : {
					required : "用户名为必填项",
					remote: "用户名已经存在"
				},
				password : {
					required : "密码为必填项"
				},
				email : {
					email : "邮箱格式不正确",
					required : "邮箱为必填项",

				},
				phoneNum : {
					required : "电话号码为必填项",
					isPhone : "请输入合法的电话号码",
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
	initRolesTable = function(){
		$('#roles_table').DataTable({
			paging:   false,
            ordering: false,
            info:     false,
        	ajax : {
				url : "findAllRoles.do",
				type: "GET",
				data: function(data) {
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
            columns : [{
                "mDataProp": "id",
                sTitle:'选择',
                "fnCreatedCell": function (nTd, sData, oData, iRow, iCol) {
                    $(nTd).html("<input id='role_"+sData+"' type='checkbox' name='roleIds' value='" + sData + "'>");
                }
            },{
        		sTitle:'角色名称',
        		className:'column-left',
            	data: "name"
            }],
			createdRow: function( row, data, dataIndex ) {
				$(row).attr('id','roleOfUser_'+data.id);
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
			initRolesTable();
			$('#selectRoles').ajaxForm({
				  success: function(data) {
					  if(data.success){
						  toastr['info'](data.msg, data.action);
						  $('#rolesList').modal('hide');
					  }else{
						  bootbox.alert(data.msg);
					  }
				  }
			});
			$('#edit_user').ajaxForm({
				  beforeSubmit: function() {
				    return $('#edit_user').valid();
				  },
				  success: function(data) {
					  if(data.success){
						  toastr['info'](data.msg, data.action);
						  $('#basic').modal('hide');
						  userTable.ajax.reload();
					  }else{
						  bootbox.alert(data.msg);
					  }
				  }
			});
			$('#add_user_button').click(function() {
				$('#edit_user_title').html('添加用户');
				$('#edit_user').resetForm();
				$('#basic').modal({backdrop:false});
			});
		},
		editUser : function(id){
			$('#edit_user_title').html('修改用户');
			$("#editUserId").val(id);
			populate('#edit_user',userTable.rows('#user_'+id).data()[0]);
			$('#basic').modal({backdrop:false});
		},
		deleteUser : function(id,name) {
			 bootbox.confirm('确定删除"'+name+'"吗?', function(result) {
				 if(result){
					 $.get('removeUser.do',{'id':id}, function(data) {
							if(data.success){
								toastr['info'](data.msg, data.action);
								userTable.ajax.reload();
							}else{
								bootbox.alert(data.msg);  
							}
					 });
				 }
              }); 
		},
		setRole:function(id,name){
			$('#fields_user_title').html(name+'-分配字段');
			$('#user_id').val(id);
			$.get('rolesOfUser.do',{'userId':id}, function(data) {
				$("input[name='roleIds']").each(function(){
					 $(this).removeAttr("checked");
				});
				$.each(data,function(key,value){
					$('#role_'+value.id).attr("checked","checked");
				});
			 });
			$('#rolesList').modal({backdrop:false});
		
		},
		saveExcel:function(){
            var url = "exportUserExcel.do?&params[userName]="+$('#model_name').val();
            url += "&orderColumn="+userTable.column(userTable.order()[0][0]).dataSrc()+"&orderDir="+userTable.order()[0][1];
            url += "&start="+userTable.page.info().start+"&length="+userTable.page.info().length;
            var columnsStr = '';
            for (var i = 0; i < columns.length-1; i++) {
            	columnsStr+=columns[i].data+':'+columns[i].sTitle+";"
			}
            url += "&params[columns]="+encodeURI(columnsStr.replace(/%/g,'_percent_'));
			window.open(url);
		},
		reload : function() {
			userTable.ajax.reload();
		}

	};
}();

