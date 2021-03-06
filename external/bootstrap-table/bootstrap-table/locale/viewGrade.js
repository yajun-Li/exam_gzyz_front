var baseUrl='http://123.57.18.186:8080/exam_gzyz_ssm'
$(function () {
    load();
})
function reload(){
    $("#gradeViewTab").bootstrapTable("refresh");
}

function load() {
    console.log(localStorage.getItem("pId"))
    let url=baseUrl+"/exam/queryGrageBypid";
    $("#gradeViewTab").bootstrapTable({
        url:url,
        method:"POST",
        dataType:"JSON",

        // sidePagination:"server", //服务器端分页
        striped:true,  //是否显示行间隔色
        pageNumber:1,   //初始化加载第一页
        // pagination:true,  //是否分页
        // pageSize:5,   //单页记录数

        //查询时携带的参数  data:JSON.stringify()
        queryParams:function(params){   //上传服务器的参数
            var temp={
                pId:localStorage.getItem("pId")
            };
            return JSON.stringify(temp);
        },
        columns:[
            {
                checkbox:true,
                visible:true
            },
            {
                title:'行号',
                align:"center",
                halign:"center",
                formatter:function (value,row,index) {
                    return index+1;
                }

            },
            {
                title:'登录号',
                field:'pId',
            },


            {
                title:'学生姓名',
                field:'stuName',
            },
            {
                title:'学生手机',
                field:'stuPhone',
            },
            {
                title:'学生成绩',
                field:'psgGrade',
            }


        ]
    })


}




