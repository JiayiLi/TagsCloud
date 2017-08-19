# TagsCloud
> 标签云
> Everyday, it gets a little easier.

### 项目目录结构
. <br/>
|____build          工具类脚本 <br/>
|____dist			项目输出目录 <br/>
|____doc			API 使用文档 <br/>
|____package.json <br/>
|____README.md <br/>
|____src            项目源码 <br/>
| |____css <br/>
| |____js <br/>
|____test			测试 <br/>
|____vendor         第三方依赖 <br/>



### some thinking
1、`$("#id").TagsCloud(options)`   or  `TagsCloud($("#id"),options)`
2、some functions : noConflict,version,增删改查,动画效果
3、原型继承 or 对象关联
4、数据格式： [{tag:"哈哈",weight:2},{tag:"xixi",weight:5}]  or {tag:["haha","xixi"],weight:[2,5]} or both
5、maybe a problem: weight 过大、过小、离谱


