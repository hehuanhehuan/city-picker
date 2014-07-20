/* =========================================================
 * city-picker.js 
 * Copyright 2014 HApPy Studio (http://www.zjhzxhz.com)
 *
 * @author: 谢浩哲 <zjhzxhz@gmail.com>
 * =========================================================
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, 
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */
 

////////////////////////////////////////////////////////////////////////////
//                                  Data                                  //
////////////////////////////////////////////////////////////////////////////
var province = Object();

province['华东地区'] 	= '山东省|江苏省|安徽省|浙江省|福建省|上海市';
province['华南地区'] 	= '广东省|广西壮族自治区|海南省';
province['华中地区'] 	= '湖北省|湖南省|河南省|江西省';
province['华北地区'] 	= '北京市|天津市|河北省|山西省|内蒙古自治区';
province['西北地区'] 	= '宁夏回族自治区|新疆维吾尔自治区|青海省|陕西省|甘肃省';
province['西南地区'] 	= '四川省|云南省|贵州省|西藏自治区|重庆市';
province['东北地区'] 	= '辽宁省|吉林省|黑龙江省';
province['港澳台地区'] 	= '台湾省|香港特别行政区|澳门特别行政区';

////////////////////////////////////////////////////////////////////////////

var city = Object();

// 华东地区
city['山东省'] 			= '济南市|青岛市|聊城市|德州市|东营市|淄博市|潍坊市|烟台市|威海市|日照市|临沂市|枣庄市|济宁市|泰安市|莱芜市|滨州市|菏泽市';
city['江苏省'] 			= '南京市|徐州市|连云港市|宿迁市|淮安市|盐城市|扬州市|泰州市|南通市|镇江市|常州市|无锡市|苏州市';
city['安徽省'] 			= '合肥市|宿州市|淮北市|阜阳市|蚌埠市|淮南市|滁州市|马鞍山市|芜湖市|铜陵市|安庆市|黄山市|六安市|池州市|宣城市|亳州市';
city['浙江省'] 			= '杭州市|宁波市|湖州市|嘉兴市|舟山市|绍兴市|衢州市|金华市|台州市|温州市|丽水市';
city['福建省'] 			= '福州市|厦门市|南平市|三明市|莆田市|泉州市|漳州市|龙岩市|宁德市';
city['上海市'] 			= '';

// 华南地区
city['广东省'] 			= ' 广州市|深圳市|清远市|韶关市|河源市|梅州市|潮州市|汕头市|揭阳市|汕尾市|惠州市|东莞市|珠海市|中山市|江门市|佛山市|肇庆市|云浮市|阳江市|茂名市|湛江市';
city['广西壮族自治区'] 	= '南宁市|桂林市|柳州市|梧州市|贵港市|玉林市|钦州市|北海市|防城港市|崇左市|百色市|河池市|来宾市|贺州市';
city['海南省'] 			= '海口市|三亚市|三沙市';

// 华中地区
city['湖北省'] 			= '武汉市|十堰市|襄阳市|荆门市|孝感市|黄冈市|鄂州市|黄石市|咸宁市|荆州市|宜昌市|随州市';
city['湖南省'] 			= '长沙市|衡阳市|张家界市|常德市|益阳市|岳阳市|株洲市|湘潭市|郴州市|永州市|邵阳市|怀化市|娄底市';
city['河南省'] 			= '郑州市|开封市|洛阳市|平顶山市|安阳市|鹤壁市|新乡市|焦作市|濮阳市|许昌市|漯河市|三门峡市|南阳市|商丘市|周口市|驻马店市|信阳市';
city['江西省'] 			= '南昌市|九江市|景德镇市|鹰潭市|新余市|萍乡市|赣州市|上饶市|抚州市|宜春市|吉安市';

// 华北地区
city['北京市'] 			= '';
city['天津市'] 			= '';
city['河北省'] 			= '石家庄市|邯郸市|唐山市|保定市|秦皇岛市|邢台市|张家口市|承德市|沧州市|廊坊市|衡水市';
city['山西省'] 			= '太原市|大同市|朔州市|阳泉市|长治市|晋城市|忻州市|吕梁市|晋中市|临汾市|运城市';
city['内蒙古自治区'] 	= '呼和浩特市|包头市|乌海市|赤峰市|呼伦贝尔市|通辽市|乌兰察布市|鄂尔多斯市|巴彦淖尔市';

// 西北地区
city['宁夏回族自治区'] 	= '银川市|石嘴山市|吴忠市|中卫市|固原市';
city['新疆维吾尔自治区']	= '乌鲁木齐市|克拉玛依市';
city['青海省'] 			= '西宁市|海东市';
city['陕西省'] 			= '西安市|延安市|铜川市|渭南市|咸阳市|宝鸡市|汉中市|榆林市|商洛市|安康市';
city['甘肃省'] 			= '兰州市|嘉峪关市|金昌市|白银市|天水市|酒泉市|张掖市|武威市|庆阳市|平凉市|定西市|陇南市';

// 西南地区
city['四川省'] 			= '成都市|广元市|绵阳市|德阳市|南充市|广安市|遂宁市|内江市|乐山市|自贡市|泸州市|宜宾市|攀枝花市|巴中市|达州市|资阳市|眉山市|雅安市';
city['云南省'] 			= '昆明市|曲靖市|玉溪市|丽江市|昭通市|普洱市|临沧市|保山市';
city['贵州省'] 			= '贵阳市|六盘水市|遵义市|安顺市|毕节市|铜仁市';
city['西藏自治区'] 		= '拉萨市';
city['重庆市'] 			= '';

// 东北地区
city['辽宁省'] 			= '沈阳市|大连市|朝阳市|阜新市|铁岭市|抚顺市|本溪市|辽阳市|鞍山市|丹东市|营口市|盘锦市|锦州市|葫芦岛市';
city['吉林省'] 			= '长春市|吉林市|白城市|松原市|四平市|辽源市|通化市|白山市';
city['黑龙江省'] 		= '哈尔滨市|齐齐哈尔市|黑河市|大庆市|伊春市|鹤岗市|佳木斯市|双鸭山市|七台河市|鸡西市|牡丹江市|绥化市';

// 港澳台地区
city['台湾省'] 			= '';
city['香港特别行政区'] 	= '';
city['澳门特别行政区'] 	= '';


////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

(function($){
    $.fn.cityPicker = function(settings){
        if ( $(this).length < 1 )   return;

        var cityPickerObject        = $(this),
            regionSelectorObject    = $('.region', this),
            provinceSelectorObject  = $('.province', this),
            citySelectorObject      = $('.city', this);

        // Default Settings
        settings = $.extend({
            required: true
        }, settings);

        var setRegions = function() {
            if ( !settings['required'] ) {
                regionSelectorObject.append('<option value="">任意地区</option>');
            }
            for ( region in province ) {
                regionSelectorObject.append('<option value="' + region + '">' + region + '</option>');
            }
        }

        var setProvince = function() {
            var provinceArray   = [],
                regionName      = $(regionSelectorObject).find(':selected').val();

            provinceSelectorObject.empty();
            if ( province[regionName] ) {
                provinceArray = province[regionName].split('|');
                if ( !settings['required'] ) {
                    provinceSelectorObject.append('<option value="">任意省份</option>');
                }
                for (var i = 0; i < provinceArray.length; i++) {
                    provinceSelectorObject.append('<option value="' + provinceArray[i] + '">' + provinceArray[i] + '</option>');
                }
                provinceSelectorObject.removeAttr('disabled');
            } else {
                provinceSelectorObject.attr('disabled', 'disabled');
            }
        }

        var setCity = function() {
            var cityArray       = [],
                provinceName    = $(provinceSelectorObject).find(':selected').val();

            citySelectorObject.empty();
            if ( city[provinceName] ) {
                cityArray = city[provinceName].split('|');
                if ( !settings['required'] ) {
                    citySelectorObject.append('<option value="">任意城市</option>');
                }
                for (var i = 0; i < cityArray.length; i++) {
                    citySelectorObject.append('<option value="' + cityArray[i] + '">' + cityArray[i] + '</option>');
                }
                citySelectorObject.removeAttr('disabled');
            } else {
                citySelectorObject.attr('disabled', 'disabled');
            }
        }

        var initializeCityPicker = function() {
            setRegions();
            if ( settings['required'] ) {
                setProvince();
                setCity();
            } else {
                provinceSelectorObject.attr('disabled', 'disabled');
                citySelectorObject.attr('disabled', 'disabled');
            }

            regionSelectorObject.bind('change', function(){
                setProvince();
                setCity();
            });
            provinceSelectorObject.bind('change', function() {
                setCity();
            });
        }
        initializeCityPicker();
    }
})(jQuery);