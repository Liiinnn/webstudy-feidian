# flex布局

## 一、认识flex布局

- 浮动兼容性高，但是比较麻烦。

  flex布局虽然在**IE6-9**可能存在一定兼容性问题，但是随着时代进步，flex布局应用越来越多。

  

- flex布局是目前web开发中使用最多的布局方案。

  - flex布局：**Flexible布局，弹性布局**。

  - 目前在移动端用的最多，PC端也使用越来越多了。

    

- 两个重要的概念：

  - 开启了flex布局的元素叫 **flex container。**
  - flex container里面的直接元素叫做 **flex items。**

  

- 设置display属性为flex或者inline-flex可以成为flex container：

  - **display:flex**：flex container以block-level形式存在，块级元素。
  - **display:inline-flex**：flex container以inline-level形式存在，行内元素。

  

## 二、flex布局模型

> 主轴：main axis
>
> 主轴大小：main size
>
> 主轴开始位置：main start
>
> 主轴结束位置：main end

> 交叉轴：cross axis
>
> 交叉轴大小：cross size
>
> 交叉轴开始位置：cross start
>
> 交叉轴结束位置：cross end

![](.\images\flex布局模型.PNG)

## 三、flex相关属性

<img src=".\images\1.png" style="zoom:200%;" />



#### （1）应用在flex container上的css属性：

> flex-flow
>
> flex-direction
>
> flex-wrap
>
> justify-content
>
> align-items
>
> align-content



![](.\images\2.png)

---

##### flex-flow

- 是flex-direction和flex-wrap和合并缩写形式

- .box {    	

  ​	flex-flow: row wrap;  

  }   

  等价于：

   .box {    	

  ​	flex-direction: row;        

  ​	flex-wrap: wrap;    

  }

---



##### flex-direction

- flex items默认都是沿着main axis（主轴）从main start开始往main end方向排布

  ​	flex布局开启前：（block元素独占一行）

![](.\images\flex布局开启前.PNG)

​      	 flex布局开启后：

![](.\images\flex布局开启后.PNG)

- flex-direction决定了main axis的方向，有四个取值：
  - row(默认值) 从左到右
  - row-reverse 从右到左
  - column 从上往下
  - column-reverse 从下往上

![](.\images\row.jpg)

---

##### flex-wrap

- 描述如果一个轴线排列不下，如何换行
  - nowrap（默认值）：不换行，会压缩子元素
  - wrap：换行，第一行在上方
  - wrap-reverse：换行，第一行在下方

---



##### justify-content

- justify-content决定了flex items在main axis上的对齐方式：

  - flex-start（默认值）：与main start对齐
  - flex-end：与main end对齐
  - center：居中对齐
  - space-between：
    - flex items之间的距离相等
    - 与main start、main end两端对齐
  - space-evenly
    - flex items之间的距离相等
    - flex items与main start、main end 之间的距离等于flex items之间的距离
  - space-around
    - flex items之间的距离相等 
    - flex items与main start、main end之间的距离是flex items之间距离的一半

  

  ![](.\images\justify-content.png)

  ![](.\images\justify-content2.jpg)

---



##### align-items：

- align-items决定了flex items在cross axis上的堆砌方式
  - normal：在弹性布局中，效果和stretch一样（没有指定高度时才拉伸）
  
  - stretch：当flex items在cross axis方向的size为auto时，会自动拉伸至填充flex container
  
  - flex-start：与cross start对齐
  
  - flex-end：与cross end对齐
  
  - center：居中对齐
  
  - baseline：与基准线对齐,文字第一行对齐
  
    ![](.\images\alignitems.png)
  
    ![](.\images\alignitems-nomal.png)
  
    ![](.\images\basline.png)
  
    

---



##### align-content：

align-content决定了多行flex items在cross axis上的对齐方式：

- flex-start（默认值）：与cross start对齐

- flex-end：与cross end对齐

- center：居中对齐

- space-between：

  - flex items之间的距离相等
  - 与main start、main end两端对齐

- space-evenly

  - flex items之间的距离相等
  - flex items与cross start、cross end 之间的距离等于flex items之间的距离

- space-around

  - flex items之间的距离相等 

  - flex items与cross start、cross end之间的距离是flex items之间距离的一半

    

---





#### （2）应用在flex items上的css属性：

![](.\images\3.png)



> flex
>
> flex-grow
>
> flex-basis
>
> flex-shrink
>
> order
>
> align-self



---



##### flex

- flex-grow、flex-shrink、flex-basis的简写
- 单值用法：值必须为以下其中之一：
  - 一个无单位数，当作flex-grow的值
  - 一个有单位数，当作flex-basis的值
  - 关键字none，auto，initial
- 双值用法：第一个数一定为无单位数且代表flex-grow的值，第二个数：
  - 无单位数，代表flex-shrink
  - 有单位数，代表flex-basis
- 三值用法：依次代表flex-grow、flex-shrink、flex-basis的值



---



##### flex-grow

- 决定了flex items如何扩展
  - 可以设置任意非负数（正整数、正小数、0），默认值为0
  - 当flex container在main axis方向有剩余size时才生效
- 如果flex items的flex-grow总和超过1，每个flex items扩展size为（剩余size）*（flex-grown/sum）
- 如果flex items的flex-grow总和不超过1，每个flex items扩展size为（剩余size）*（flex-grown）
- flex items扩展后的最终size不能超过max-width和max-height



---



##### flex-basis

- 设置flex items在main axis方向上的base size

  - 默认为auto或者具体宽度数值

- 决定flex items最终base size的因素，优先级从高到低：

  - max-width/max-height/min-width/min-height
  - flex-basis
  - width/height
  - 内容本身的size

  

---



##### flex-shrink

- 决定了flex items如何收缩

  - 可以设置任意非负数（正整数、正小数、0），默认值为1
  - 当flex container在main axis方向超过了flex container的size时才生效

- 如果flex items的flex-grow总和超过1，每个flex items扩展size为（超出的size）*（收缩比例/比例之和）

- 如果flex items的flex-grow总和不超过1，每个flex items扩展size为（超出的size）*（sum）\*（收缩比例/比例之和）

- flex items扩展后的最终size不能小于min-width和min-height

  

---



##### order

- 可以设置任意整数（正整数、负整数、0），值越小越排在前面
- 默认值是0



---



##### align-self

- flex items可以通过align-self覆盖flex container设置的align-items
  - auto（默认值）：遵从flex container的align-items设置
  - stretch
  - flex-start
  - flex-end
  - center
  - basline

