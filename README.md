# 项目简介

配合Django后端实现界面化的自动化测试的前端应用，项目基于VUE3， 软件的主界面分为顶栏和左边栏以及主要的内容区，软件的后端Django 服务器的代码请参考 https://gitee.com/seeed-te/file-server.git 库的内容

## 左侧边栏

主要有五个按钮负责切换这个app的五个不同的功能区,

### 主页

软件进入以后显示的就是主页，主页通过一个表格显示目前后端数据库储存的测试方案，

### 测试

在主页里面点击测试方案后面的测试按钮就可以跳转至该页，该页是每个测试方案测试时显示的主界面，会显示指定的测试方案的每一步以及测试中的状态与测试结果

### 新增

用来添加新的测试流程

### LOG

负责显示每次测试记录的LOG数据，通过表格显示

### 设置

用来对服务器的参数和界面app进行设置



# 第一阶段开发记录与进度

# 简介

第一阶段要实现最基础的测试方案的查改增删以及对单条测试记录的测试，这个阶段只为验证流程设计是否合理，不会对不影响主要逻辑的UI细节进行调整，这个阶段的开发会聚焦在实现软件的**主页**， **测试**与**新增**三个主要的界面中。

## 进度



### 24-8-2

- 完成了新增测试记录

### 24-8-10

- 完成了主页的显示

### 24-8-19

- 主页

  - 新增了用于直接跳转测试界面的按钮


### 24-8-29

- 新增测试界面
  - 新增了基础的流程判断：必须有开始和结束节点，同时每个步骤的信息必须要被初始化









## 已知BUG











# 启动方式

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### 

# 结构
