<h1>city360 开发笔记 </h1>
<p>SO FAR SO GOOD </p>
<a href="http://urp360.org">城市360</a>
<h2>数据库信息</h2>
<ul>
    <li>
        表名：<code>city360data_demo</code>，存放用户上传的待改造项目
    </li>
</ul>
<table>
    <thead>
        <tr>
            <th align="center">序号</th>
            <th align="center">字段名称</th>
            <th align="center">字段说明</th>
            <th align="center">类型</th>
            <th align="center">长度</th>
            <th align="center">必填</th>
            <th align="center">备注</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td align="center">1</td>
            <td align="center"><code>id</code></td>
            <td align="center">项目id</td>
            <td align="center"><code>int</code></td>
            <td align="center">11</td>
            <td align="center"></td>
            <td align="center"><code>PRIMARY KEY</code><br><code>AUTO_INCREMENT</code></td>
        </tr>
        <tr>
            <td align="center">2</td>
            <td align="center"><code>name</code></td>
            <td align="center">项目名称</td>
            <td align="center"><code>text</code></td>
            <td align="center"></td>
            <td align="center">√</td>
            <td align="center"><code></code></td>
        </tr>
        <tr>
            <td align="center">3</td>
            <td align="center"><code>author</code></td>
            <td align="center">上传组织</td>
            <td align="center"><code>text</code></td>
            <td align="center"></td>
            <td align="center">√</td>
            <td align="center"></td>
        </tr>
        <tr>
            <td align="center">4</td>
            <td align="center"><code>street</code></td>
            <td align="center">所属街道</td>
            <td align="center"><code>text</code></td>
            <td align="center"></td>
            <td align="center"></td>
            <td align="center"><code></code></td>
        </tr>

        <tr>
            <td align="center">5</td>
            <td align="center"><code>tel</code></td>
            <td align="center">联系方式</td>
            <td align="center"><code>text</code></td>
            <td align="center"></td>
            <td align="center">√</td>
            <td align="center"><code></code></td>
        </tr>
        <tr>
            <td align="center">6</td>
            <td align="center"><code>budget</code></td>
            <td align="center">预算</td>
            <td align="center"><code>text</code></td>
            <td align="center"></td>
            <td align="center"></td>
            <td align="center"><code></code></td>
        </tr>
        <tr>
            <td align="center">7</td>
            <td align="center"><code>demand</code></td>
            <td align="center">改造意向</td>
            <td align="center"><code>text</code></td>
            <td align="center"></td>
            <td align="center">√</td>
            <td align="center"><code></code></td>
        </tr><tr>
            <td align="center">8</td>
            <td align="center"><code>time</code></td>
            <td align="center">项目上传时间</td>
            <td align="center"><code>text</code></td>
            <td align="center"></td>
            <td align="center">√</td>
            <td align="center"><code></code></td>
        </tr><tr>
            <td align="center">9</td>
            <td align="center"><code>address</code></td>
            <td align="center">项目地址</td>
            <td align="center"><code>text</code></td>
            <td align="center"></td>
            <td align="center">√</td>
            <td align="center"><code></code></td>
        </tr>
        <tr>
            <td align="center">10</td>
            <td align="center"><code>lng</code></td>
            <td align="center">地图经度</td>
            <td align="center"><code>text</code></td>
            <td align="center"></td>
            <td align="center">√</td>
            <td align="center"><code></code></td>
        </tr><tr>
            <td align="center">11</td>
            <td align="center"><code>lat</code></td>
            <td align="center">地图纬度</td>
            <td align="center"><code>text</code></td>
            <td align="center"></td>
            <td align="center">√</td>
            <td align="center"><code></code></td>
        </tr>


    </tbody>
</table>
<ul><li>表名：<code>designdatabase</code>，存放已有的设计方案，<a href="http://urp360.org/adddesign.html">参考链接</a></li></ul>
<table>
    <thead>
        <tr>
            <th align="center">序号</th>
            <th align="center">字段名称</th>
            <th align="center">字段说明</th>
            <th align="center">类型</th>
            <th align="center">长度</th>
            <th align="center">必填</th>
            <th align="center">备注</th>
        </tr>
    </thead>
    <tr>
        <td align="center">1</td>
        <td align="center"><code>id</code></td>
        <td align="center">项目id</td>
        <td align="center"><code>int</code></td>
        <td align="center">11</td>
        <td align="center"></td>
        <td align="center"><code>PRIMARY KEY</code><br><code>AUTO_INCREMENT</code></td>
    </tr>
    <tr>
        <td align="center">2</td>
        <td align="center"><code>name</code></td>
        <td align="center">设计方案名字</td>
        <td align="center"><code>text</code></td>
        <td align="center"></td>
        <td align="center">√</td>
        <td align="center"><code></code></td>
    </tr>
    <tr>
        <td align="center">3</td>
        <td align="center"><code>shape</code></td>
        <td align="center">形态</td>
        <td align="center"><code>text</code></td>
        <td align="center"></td>
        <td align="center">√</td>
        <td align="center"></td>
    </tr>
    <tr>
        <td align="center">4</td>
        <td align="center"><code>size</code></td>
        <td align="center">大小</td>
        <td align="center"><code>text</code></td>
        <td align="center"></td>
        <td align="center">√</td>
        <td align="center"><code></code></td>
    </tr>

    <tr>
        <td align="center">5</td>
        <td align="center"><code>type</code></td>
        <td align="center">属性</td>
        <td align="center"><code>text</code></td>
        <td align="center"></td>
        <td align="center">√</td>
        <td align="center"><code></code></td>
    </tr>
    <tr>
        <td align="center">6</td>
        <td align="center"><code>designage</code></td>
        <td align="center">年限</td>
        <td align="center"><code>text</code></td>
        <td align="center"></td>
        <td align="center">√</td>
        <td align="center"><code></code></td>
    </tr>
    <tr>
        <td align="center">7</td>
        <td align="center"><code>outdoor</code></td>
        <td align="center">室内/室外</td>
        <td align="center"><code>text</code></td>
        <td align="center"></td>
        <td align="center">√</td>
        <td align="center"><code>室内 室外</code></td>
    </tr><tr>
        <td align="center">8</td>
        <td align="center"><code>district</code></td>
        <td align="center">区域</td>
        <td align="center"><code>text</code></td>
        <td align="center"></td>
        <td align="center">√</td>
        <td align="center"><code>杨浦区 浦东新区</code></td>
    </tr><tr>
        <td align="center">9</td>
        <td align="center"><code>region</code></td>
        <td align="center">周边环境</td>
        <td align="center"><code>text</code></td>
        <td align="center"></td>
        <td align="center">√</td>
        <td align="center"><code>居住区 商业区 混合区域</code></td>
    </tr>
    <tr>
        <td align="center">10</td>
        <td align="center"><code>function</code></td>
        <td align="center">功能</td>
        <td align="center"><code>text</code></td>
        <td align="center"></td>
        <td align="center">√</td>
        <td align="center"><code>社交 健身 互动</code></td>
    </tr><tr>
        <td align="center">11</td>
        <td align="center"><code>detail</code></td>
        <td align="center">介绍</td>
        <td align="center"><code>text</code></td>
        <td align="center"></td>
        <td align="center">√</td>
        <td align="center"><code></code></td>
    </tr>
    <tr>
        <td align="center">12</td>
        <td align="center"><code>image</code></td>
        <td align="center">图片</td>
        <td align="center"><code>text</code></td>
        <td align="center"></td>
        <td align="center">√</td>
        <td align="center"><code>tongji.jpg</code></td>
    </tr>
    <tr>
        <td align="center">13</td>
        <td align="center"><code>code</code></td>
        <td align="center">代码</td>
        <td align="center"><code>text</code></td>
        <td align="center"></td>
        <td align="center">√</td>
        <td align="center"><code>2323101211000000</code>用数码表示的每一个选项的值（选择：十进制数，判断：二进制数）</td>
    </tr>
    
</table>
<ul><li>表名：<code>userdata</code>，存放注册用户数据</li></ul>
<table>
    <thead>
        <tr>
            <th align="center">序号</th>
            <th align="center">字段名称</th>
            <th align="center">字段说明</th>
            <th align="center">类型</th>
            <th align="center">长度</th>
            <th align="center">必填</th>
            <th align="center">备注</th>
        </tr>
    </thead>
    <tr>
        <td align="center">1</td>
        <td align="center"><code>id</code></td>
        <td align="center">用户id</td>
        <td align="center"><code>int</code></td>
        <td align="center">11</td>
        <td align="center"></td>
        <td align="center"><code>PRIMARY KEY</code><br><code>AUTO_INCREMENT</code></td>
    </tr>
    <tr>
        <td align="center">2</td>
        <td align="center"><code>nickname</code></td>
        <td align="center">用户昵称</td>
        <td align="center"><code>text</code></td>
        <td align="center"></td>
        <td align="center">√</td>
        <td align="center"><code></code></td>
    </tr>
    <tr>
        <td align="center">3</td>
        <td align="center"><code>password</code></td>
        <td align="center">加盐hash后的用户密码</td>
        <td align="center"><code>text</code></td>
        <td align="center"></td>
        <td align="center">√</td>
        <td align="center"></td>
    </tr>
    <tr>
        <td align="center">4</td>
        <td align="center"><code>salt</code></td>
        <td align="center">用户盐</td>
        <td align="center"><code>text</code></td>
        <td align="center"></td>
        <td align="center">√</td>
        <td align="center"><code></code></td>
    </tr>

    <tr>
        <td align="center">5</td>
        <td align="center"><code>email</code></td>
        <td align="center">用户邮箱</td>
        <td align="center"><code>text</code></td>
        <td align="center"></td>
        <td align="center">√</td>
        <td align="center"><code></code></td>
    </tr>
    <tr>
        <td align="center">6</td>
        <td align="center"><code>job</code></td>
        <td align="center">用户工作类型</td>
        <td align="center"><code>text</code></td>
        <td align="center"></td>
        <td align="center">√</td>
        <td align="center"><code></code></td>
    </tr>
    <tr>
        <td align="center">7</td>
        <td align="center"><code>jobdetail</code></td>
        <td align="center">用户工作</td>
        <td align="center"><code>text</code></td>
        <td align="center"></td>
        <td align="center">√</td>
        <td align="center"><code></code></td>
    </tr><tr>
        <td align="center">8</td>
        <td align="center"><code>tel</code></td>
        <td align="center">用户电话</td>
        <td align="center"><code>text</code></td>
        <td align="center"></td>
        <td align="center">√</td>
        <td align="center"><code></code></td>
    </tr><tr>
        <td align="center">9</td>
        <td align="center"><code>birth</code></td>
        <td align="center">用户生日</td>
        <td align="center"><code>text</code></td>
        <td align="center"></td>
        <td align="center">√</td>
        <td align="center"><code></code></td>
    </tr>
    <tr>
        <td align="center">10</td>
        <td align="center"><code>avatar</code></td>
        <td align="center">用户头像链接</td>
        <td align="center"><code>text</code></td>
        <td align="center"></td>
        <td align="center">√</td>
        <td align="center"><code></code></td>
    </tr>
</table>
