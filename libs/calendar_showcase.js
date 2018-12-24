/** 
 * 作者： 于晓明
 * 创建时间：2018/12/21 14:47:28
 * 版本： [1.0, 2018/12/21]
 * 版权： 青岛明晓软件科技有限公司
 * 描述： 日历样式 
**/
var selectedDate; //声明被选日期变量

"use strict";
var customBiz = {
	init: function() {
		var self = this;
		// 初始化日历
		var calendar = new Calendar({
			// swiper滑动容器
			container: "#calendar",
			// 上一月节点
			pre: ".pre",
			// 下一月节点
			next: ".next",
			// 回到今天
			backToToday: ".backToday",
			// 业务数据改变
			dataRequest: function(currdate, callback, _this) {
				// 无日程安排
				var data = selectedDate;//由后台接口返回应被标识的日期2018-12-22
				callback && callback(data);
			},
			// 点击日期事件
			onItemClick: function(item) {
				var defaultDate = item.date;
				//alert(defaultDate);
				// 设置标题
				setTitle(defaultDate);
				document.getElementById("div_tip").innerHTML="您刚才选择的日期是："+defaultDate;
			},
			// 滑动回调
			swipeCallback: function(item) {
				var defaultDate = item.date;
				// 设置标题
				setTitle(defaultDate);
				
				// 动态新增点击样式
				calendar.addActiveStyleFordate(defaultDate);
				
			},
			// 调试
			isDebug: false
		});
		
		// 设置标题
		var titleNode = document.querySelector('.mid span');

		function setTitle(date) {
			titleNode.innerText = date;
		}

	}
}

// 初始化
customBiz.init();
