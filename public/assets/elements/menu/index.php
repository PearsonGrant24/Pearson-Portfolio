<?php $arr = ["galore"  => ['#00e1c1','#662483'],
"ugali"  => ['#e7eb24','#29235c'],
"spicy_njano_rice"  => ['#e6332a','#f39200'],
"burger_n_wraps"  => ['#95c11f','#f6ed14'],
"lets_wing_it"  => ['#00e1c1','#ed8373'],
"combos"  => ['#e6007e','#13e1c2'],
"grill"  => ['#e30613','#ffed00'],
"sharing"  => ['#66edda','#00adef'],
"platters"  => ['#00adef','#e6007e'],
"salads"  => ['#8eff4c','#3aaa35'],
"breakfast"  => ['#f39200','#ffea00'],
"dessert"  => ['#e6007e','#66edda'],
"add_ons"  => ['#f39200','#e6332a'],
"drinks"  => ['#1d71b8','#00adef']];

foreach($arr as $k=>$v){ 

$file0 = '<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Creator: CorelDRAW 2021.5 -->
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="135px" height="45px" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
viewBox="0 0 24.03 7.92"
 xmlns:xlink="http://www.w3.org/1999/xlink"
 xmlns:xodm="http://www.corel.com/coreldraw/odm/2003">
 <defs>
  <style type="text/css">
   <![CDATA[
    .fil0 {fill:'.$v[0].';fill-rule:nonzero}
   ]]>
  </style>
 </defs>
 <g id="Layer_x0020_1">
  <metadata id="CorelCorpID_0Corel-Layer"/>
  <path class="fil0" d="M0.02 0l24.01 0c-0.31,0.56 -0.7,1.08 -1.17,1.55 -2.35,2.33 -5.83,2.69 -8.64,0.85 -0.45,-0.3 -0.53,-0.24 -0.66,0.27 -0.77,2.85 -2.61,4.65 -5.53,5.14 -2.87,0.48 -5.15,-0.59 -6.8,-2.95 -0.29,-0.42 -0.48,-0.9 -0.71,-1.35 -0.44,-1.15 -0.57,-2.32 -0.5,-3.51z"/>
 </g>
</svg>';

file_put_contents('./'.$k.'_first.svg', $file0);

$file1 = '<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Creator: CorelDRAW 2021.5 -->
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="135px" height="45px" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
viewBox="0 0 24.03 7.92"
 xmlns:xlink="http://www.w3.org/1999/xlink"
 xmlns:xodm="http://www.corel.com/coreldraw/odm/2003">
 <defs>
  <style type="text/css">
   <![CDATA[
    .fil0 {fill:'.$v[1].';fill-rule:nonzero}
   ]]>
  </style>
 </defs>
 <g id="Layer_x0020_1">
  <metadata id="CorelCorpID_0Corel-Layer"/>
  <path class="fil0" d="M0.02 0l24.01 0c-0.31,0.56 -0.7,1.08 -1.17,1.55 -2.35,2.33 -5.83,2.69 -8.64,0.85 -0.45,-0.3 -0.53,-0.24 -0.66,0.27 -0.77,2.85 -2.61,4.65 -5.53,5.14 -2.87,0.48 -5.15,-0.59 -6.8,-2.95 -0.29,-0.42 -0.48,-0.9 -0.71,-1.35 -0.44,-1.15 -0.57,-2.32 -0.5,-3.51z"/>
 </g>
</svg>';

file_put_contents('./'.$k.'_last.svg', $file1);

}