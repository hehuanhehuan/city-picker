city-picker
===========
A region-provice-city selector designed for the Chinese. It is combined with three select controls in HTML, and it's implemented in Java Script.
(中国地区-省份-城市三级联动选择器)

----------

### How to use it ?

Import Java Script:
```
<script type="text/javascript" src="city-picker.js"></script>
```

Add following lines to the HTML:
```
<form action="#">
    <span>Region: 
        <select onchange="setProvince(this, province, city)" name="region" />
    		<option value="" selected>任意地区</option>
    		<script type="text/javascript">setRegions();</script>
    	</select>
	</span>
	<span>Province: 
	    <select name="province" disabled="disabled" onchange="setCity(this, city)"></select>
	</span>
	<span>
		City: <select name="city" disabled="disabled"></select>
	</span>
</form>
```

> **Tip:** See [<i class="icon-share"></i> Example](https://github.com/zjhzxhz/city-picker/blob/master/example.html) in the repository.

----------

### Screenshot
![Screenshot][1]

----------

### License

This project is open sourced under Apache License v2.



  [1]: https://raw2.github.com/zjhzxhz/city-picker/master/screenshot.png