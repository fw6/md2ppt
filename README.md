
## 转正汇报

👨‍💻 针对入职两个月以来在工作上的成果、成长、不足以及对未来工作的计划进行阐述

<br />

<p style="text-align: center;font-size: 12px; line-height: 20px;">June 28, 2019</p>

<br/>

<p style="text-align: center; line-height: 20px;">汇报人：冯伟</p>

##

个人工作成果总结

工作上的个人成长

目前存在的不足

规划展望

## 个人工作成果总结

###

- 封装组件

- 完善国际化

- 优化代码

### 对当前项目的一点思考 🤔


1. 业务逻辑复杂，入手时间长
2. 状态分散，数据维护困难
3. 代码多处复用
4. 代码风格不统一

###

集中处理异步请求？

###

```js
{
  actions: {
    someOtherAction ({dispatch}) {
      dispatch('someAction')
    }
  },
  modules: {
    foo: {
      namespaced: true,

      actions: {
        someAction: {
          root: true,
          handler (namespacedContext, payload) { ... } // -> 'someAction'
        }
      }
    }
  }
}
```

###

```js
computed: {
  ...mapState({
    a: state => state.some.nested.module.a,
    b: state => state.some.nested.module.b
  })
},
methods: {
  ...mapActions([
    'some/nested/module/foo', // -> this['some/nested/module/foo']()
    'some/nested/module/bar' // -> this['some/nested/module/bar']()
  ])
}
```

###

- yuan 数字转换
- 文本溢出处理 el-tooltip 的限制（动态提示信息无法合适地换行）
- 输入框搜索结果 友好提示
- 表格＋分页（组件整体）
- Divider(（分隔器，当前 element-ui 版本 不支持）
- 骨架屏
- 数字输入框（当前需要每次使用加验证）
- 空状态组件
- 状态徽标（文字前 表示状态的小圆点）


## 学到了什么？

###

1. 了解公司产品
2. 编程能力提升
3. 解决问题能力提升
4. 熟悉开发调试工具
5. 沟通能力


## 存在的不足

###

对编程中的基础知识和理论基础还不太熟悉，如算法与数据结构、操作系统体系结构、计算机网络、数据库等。

###

对所开发产品的业务流程、业务逻辑等不甚明晰，在一些涉及合同发起、业务分类等业务逻辑复杂的需求，在开发中易遇到困难。

###

沟通中容易紧张，讲话抓不住重点，在表达方式上还有待提升。


## 规划展望

### 🤓持续学习



### 🏊‍增强体魄



### 🎻培养爱好



## 谢谢您的观看🙇
