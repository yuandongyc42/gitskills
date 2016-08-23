/**
 * Created by Administrator on 2016/8/17.
 */
/**
 * Created by Administrator on 2016/6/30.
 */
WebRcTwo.directive("appMap", function () {
    return {
        restrict: "E",
        replace: true,
        template: "<div id='allmap'></div>",
        scope: {
            center: "=",		// Center point on the map (e.g. <code>{ latitude: 10, longitude: 10 }</code>).
            markers: "=",	   // Array of map markers (e.g. <code>[{ lat: 10, lon: 10, name: "hello" }]</code>).
            width: "@",		 // Map width in pixels.
            height: "@",		// Map height in pixels.
            zoom: "@",		  // Zoom level (one is totally zoomed out, 25 is very much zoomed in).
            zoomControl: "@",   // Whether to show a zoom control on the map.
            scaleControl: "@",   // Whether to show scale control on the map.
            address:"@"
        },
        link: function (scope, element, attrs) {
            //var map;
            //// 百度地图API功能
            //map = new BMap.Map("allMap");
            //map.addControl(new BMap.ZoomControl());
            //// 创建地址解析器实例
            //var myGeo = new BMap.Geocoder();
            //// 将地址解析结果显示在地图上,并调整地图视野
            //myGeo.getPoint(scope.address, function(point){
            //    if (point) {
            //        map.centerAndZoom(point, 16);
            //        map.addOverlay(new BMap.Marker(point));
            //    }
            //}, "");


            // 百度地图API功能
            var map = new BMap.Map("allmap");    // 创建Map实例
            map.centerAndZoom(new BMap.Point(114.251806,30.604285), 17);  // 初始化地图,设置中心点坐标和地图级别
            map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
            map.setCurrentCity("武汉");          // 设置地图显示的城市 此项是必须设置的,北京
            map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放

        }

    };
});
