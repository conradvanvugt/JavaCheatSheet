var dat = angular.module('hoofdController', ["ngTouch"]);
dat
		.controller(
				'controlsController',
				[
						'$scope',
						'$http',
						'$sce',
						'$filter',
						'$compile', '$animate',
						function($scope, $http, $sce, $filter, $compile, $animate) {
							$scope.controls = [ {
								text : 'JCheckBox',
								desc : 'dit is een element'
							}, {
								text : 'JRadioButton'
							}, {
								text : 'JComboBox'
							}, {
								text : 'JList'
							}, {
								text : 'JScrollPane'
							}, {
								text : 'JScrollBar'
							}, {
								text : 'JSlider'
							}, {
								text : 'JToolTip'
							}, {
								text : 'JToolBar'
							}, {
								text : 'JColorChooser'
							} ];
			
								 $http.get('JSON/layout.json').
								    success(function(data, status, headers, config) {
								    	$scope.layouts = data;
								    }).
								    error(function(data, status, headers, config) {
								      // log error
								    	alert("err" + status);
								    });
								 $http.get('JSON/components2.json').
								    success(function(data, status, headers, config) {
								    	$scope.infocomp = data;
								    }).
								    error(function(data, status, headers, config) {
								      // log error
								    	alert("err" + status);
								    });
				
						} ]);


dat.directive('targetsZetten', function($compile) {
	return {
		link : function(scope, element, attrs) {

			angular.element(document).ready(
					
					function() {
						element.removeAttr('targets-zetten');
						element.attr("data-toggle","collapse"); 
						element.attr("href","#target" + element.text()); 
						$compile(element)(scope);
					});
			scope.$watch(attrs.dynamic, function(html) {
		        element.html(html);
		        $compile(element.contents())(scope);
		        
		      });
		}

	};

});
dat.directive('pasAanGui', function($compile) {
	return {
		link : function(scope, element, attrs) {

			angular.element(document).ready(
					
					function() {
						element.removeAttr('pas-aan-gui');
						element.attr("class","collapse"); 
						element.attr("id","target" + element.parent().find('a').text()); 
					});
		}

	};

});
angular.module('hoofdController')
.filter('to_trusted', ['$sce', function($sce){
    return function(text) {
        return $sce.trustAsHtml(text);
    };
}]);
//nooit meer zo doen :)
//$scope.getInfo = function(contrl, i, event) {
//	$http
//			.get('JSON/components.json')
//			.success(
//
//					function(data, status, headers,
//							config) {
//						
//						var volledigeData = data.Component[i];
//						var constructorData = (data.Component[i].Construtors);
//						var constructorinfo = (data.Component[i].ConstructorsInfo);
//						var methodesData = data.Component[i].Methoden;
//						var methodesInfo = data.Component[i].MethodenInfo;
//						var itemeventData = data.Component[i].ItemEvents;
//						var extradata = data.Component[i].Extra;
//						var constructorHtml = '<ul>';
//						var methodenHtml = '<ul>';
//						var itemeventHtml = '<ul>';
//						var extradataHtml = '<ul>';
//						angular
//								.forEach(
//										constructorData,
//										function(
//												value,
//												index) {
//											constructorHtml += '<li><b>'
//													+ value
//													+ '</b> '
//													+ constructorinfo[index]
//													+ '</li>';
//
//										});
//						angular
//								.forEach(
//										methodesData,
//										function(
//												value,
//												index) {
//											methodenHtml += '<li><b>'
//													+ value
//													+ '</b> '
//													+ methodesInfo[index]
//													+ '</li>';
//
//										});
//						angular
//								.forEach(
//										itemeventData,
//										function(
//												value) {
//											itemeventHtml += '<li><b>'
//													+ value
//													+ '</b></li>';
//
//										});
//						angular
//								.forEach(
//										extradata,
//										function(
//												value) {
//											extradataHtml += '<li>'
//													+ value
//													+ '</li>';
//
//										});
//						constructorHtml += '</ul>';
//						methodenHtml += '</ul>';
//						itemeventHtml += '</ul>';
//						extradataHtml += '</ul>';
//						var stringHtml = '';
//						if (constructorHtml.length > 10) {
//							stringHtml += '<h3>Constructors</h3>'
//									+ constructorHtml;
//
//						}
//						if (methodenHtml.length > 10) {
//							stringHtml += '<h3>Methodes</h3>'
//									+ methodenHtml;
//
//						}
//						if (itemeventHtml.length > 10) {
//							stringHtml += '<h3>ItemEvents</h3>'
//									+ itemeventHtml;
//
//						}
//						if (extradataHtml.length > 10) {
//							stringHtml += '<h3>Extra</h3>'
//									+ extradataHtml;
//							;
//						}
//
//						$scope[contrl] = $sce
//								.trustAsHtml('<div class="pushdown"><h2>'
//										+ volledigeData.Title
//										+ '</h2>'
//										+ stringHtml+ '</div>');
//					}).error(
//					function(data, status, headers,
//							config) {
//						// log error
//					});
//};
//
//dat.directive('pasAanEnCompile', function($compile) {
//	return {
//		link : function(scope, element, attrs) {
//
//			angular.element(document).ready(
//					
//					function() {
//						element.removeAttr('pas-aan-en-compile');
//						element.attr("ng-bind-html", element.parent().find('a').text());
//						element.attr("class","collapse"); 
//						element.attr("id","target" + element.parent().find('a').text()); 
//						$compile(element)(scope);
//					});
//			scope.$watch(attrs.dynamic, function(html) {
//		        element.html(html);
//		        $compile(element.contents())(scope);
//		        
//		      });
//		}
//
//	};
//
//});
//<div class="testclas divblauw lb">
//<h1 class="h1blauw">Controls</h1>
//    <ul class="testclasul">    
//      <li ng-repeat="control in controls | filter:searchText">
//      <a class="collapsed" ng-touchstart="getInfo(control.text, $index, $event)" targets-zetten ng-bind="control.text" ng-mousedown="getInfo(control.text, $index, $event)" >
//      </a>
//      <div pas-aan-en-compile></div></li>
//    </ul>
//    </div>
//
