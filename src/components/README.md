# UI相关参数记录

# AddNewTestItemBox

### 总宽度

300 px + margin 10px * 2 = 320px





## addTestItemCard

### 总宽度

220 px + margin 15px * 2 = 250px

### 总高度

60px + margin 10px *  2 = 80px





# 数据结构相关记录

## 万用表字典映射

```javascript
  accuracy: 0.1,  //    0: 3.00E-5 |  1: 2.00E-5 | 2: 1.5E-6
  range: 0,  //      0: 0.1V | 1: 1V  | 2: 10V  | 3: 100V
```


## 卡片颜色定义
  修改卡片的颜色位于main.js中的testItemDict字典





# 组件对照单

voltage    ----    VoltageTestItemSettingBox

current    ----   CurrentTestItemSettingBox

dmmConfig --- Na

oscilloscope  ----   NA

oscillgetWave ---   Osc

ethernet   --- ethTestItemBox

serialPort --  serialPortTestItemSettingBox

wait   ----- waitSettingBox

powerSupplyOn -----   powerSupplyOnSettingBox

powerSupplyOff -----  powerSupplyOffSettingBox

loadOn ----    loadOnSettingBox

loadOff  ----  loadOffSettingBox
