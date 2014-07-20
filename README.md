city-picker
===========
A region-provice-city selector designed for the Chinese. It is combined with three select controls in HTML, and it's implemented in Java Script.
(中国地区-省份-城市三级联动选择器)

----------

### How to use it ?

Import Java Script:
```
<script type="text/javascript" src="jquery-1.11.1.min.js"></script>
<script type="text/javascript" src="city-picker.js"></script>
```

Add following lines to the HTML:
```
<div class="city-picker">
	<span>
		Region: <select class="region" /></select>
	</span>
	<span>
		Province: <select class="province"></select>
	</span>
	<span>
		City: <select class="city"></select>
	</span>
</div> <!-- .city-picker -->

// Initialize the controls
<script type="text/javascript">
	$('.city-picker').cityPicker({
		required: true
	});
</script>
```

> **Tip:** See [<i class="icon-share"></i> Example](https://github.com/zjhzxhz/city-picker/blob/master/example.html) in the repository.

----------

### Screenshot
![Screenshot][1]

----------

### License

This project is open sourced under Apache License v2.



  [1]: https://raw2.github.com/zjhzxhz/city-picker/master/screenshot.png