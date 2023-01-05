document.write(`
<div id="app">
<span v-if="iszx" class="zx">·</span>
<div id="func" :style="funstyle">
  <el-tabs type="border-card" style="width: 380px; max-height: 500px; overflow: scroll">
    <el-tab-pane label="基础功能啊">
      <!-- 全局加速 -->
      <span class="text">全局速度：
        <el-tag size="mini" type="danger" effect="dark">{{ globalSpeed.value }}</el-tag>
      </span>
      <el-slider v-model="globalSpeed.value" :min="1" :max="6" :step="0.001" :show-tooltip="false"
        @change="gSpeed()">
      </el-slider>

      <span class="text">单体速度：
        <el-tag size="mini" type="danger" effect="dark">{{ playerSpeed.value }}</el-tag>
      </span>
      <el-slider v-model="playerSpeed.value" :min="1" :max="6" :step="0.001" :show-tooltip="false"
        @change="pSpeed()">
      </el-slider>

      <span class="text">第三视角：
        <el-tag size="mini" type="danger" effect="dark">{{ fov3.value }}</el-tag>
      </span>
      <el-slider v-model="fov3.value" :min="1" :max="20" :step="0.0001" :show-tooltip="false" @change="fn3Fov()">
      </el-slider>
      <span class="text">第一视角：
        <el-tag size="mini" type="danger" effect="dark">{{ fov1.value }}</el-tag>
      </span>
      <el-slider v-model="fov1.value" :min="20" :max="180" :step="0.1" :show-tooltip="false" @change="fn1Fov()">
      </el-slider>

      <div class="btns">
        <el-checkbox v-model="nightSet.enable" @change="nightVision()">夜视</el-checkbox>
        <el-checkbox v-model="Picturequality" @change="view()">画质优化</el-checkbox>
        <el-checkbox v-model="isRetDate" @change="resetDate()">重置速度</el-checkbox>
      </div>
    </el-tab-pane>
    <el-tab-pane label="绘制功能">
      <div class="btns">
        <el-checkbox v-model="esp.enable" @change="changeHz()">绘制</el-checkbox>
        <el-checkbox v-model="esp.player">玩家</el-checkbox>
        <el-checkbox v-model="esp.teamer">己方</el-checkbox>
        <el-checkbox v-model="esp.dead">下线</el-checkbox>
        <el-checkbox v-model="esp.building">建筑</el-checkbox>
        <el-checkbox v-model="esp.tamed">驯养恐龙</el-checkbox>
      </div>
      <span class="text">字体大小：
        <el-tag size="mini" type="danger" effect="dark">{{ esp.amplifyFactor }}</el-tag>
      </span>
      <el-slider :min="1" :max="1.8" :step="0.01" v-model="esp.amplifyFactor" :show-tooltip="false">
      </el-slider>
    </el-tab-pane>
    <el-tab-pane label="辅助战斗">
      <span class="text">大头：
        <el-tag size="mini" type="danger" effect="dark">{{ bHeadF.value }}</el-tag>
      </span>
      <el-slider :min="1" :max="20" v-model="bHeadF.value" @change="bigHead()" :show-tooltip="false">
      </el-slider>
      <span class="text">帧数：
        <el-tag size="mini" type="danger" effect="dark">{{ fpssvalue}}</el-tag>
      </span>
      <el-slider v-model="fpssvalue" :min="1" :max="120" :step="0.01" :show-tooltip="false" @change="fpss()">
      </el-slider>
      <div class="btns" style="margin-top: 6px">
        <el-checkbox v-model="aimLock" @change="initAimLock()">自动瞄准</el-checkbox>
        <el-checkbox v-model="btn.track" @change="track()">子弹追踪</el-checkbox>
        <el-checkbox v-model="btn.rpglf" @change="rpglf()">RPG连发</el-checkbox>
        <el-checkbox v-model="btn.hslf" @change="hslf()">火神连发</el-checkbox>
        <el-checkbox v-model="btn.jjlf" @change="jjlf()">狙击连发</el-checkbox>
        <el-checkbox v-model="iszx">显示准星</el-checkbox>
        <el-checkbox v-model="waterFire.enable" @change="waterFireF()">水下开火</el-checkbox>
        <el-checkbox v-model="vivSet.enable" @change="vivVision()">鲜艳画质</el-checkbox>
        <el-checkbox v-model="grassSet.enable" @change="grassVision()">草石透视</el-checkbox>
        <el-checkbox v-model="waterSet.enable" @change="waterVision()">水中透视</el-checkbox>
        <el-checkbox v-model="floorSet.enable" @change="floorVision()">地面透视</el-checkbox>
        <el-checkbox v-model="dungeon.enable" @change="dungeonVision()">地牢视野</el-checkbox>
      </div>
      <el-button size="mini" disabled="" type="danger">此功能必须在选择人物界面开启！！！</el-button>
      <el-checkbox v-model="rwdiy" @change="rwcolor()">人物DIY</el-checkbox>
      <p>功能菜单位置设置(重启后需要重新设置)</p>
      <el-radio-group v-model="radio1" @input="changeWz" size="mini">
        <el-radio-button label="右上"></el-radio-button>
        <el-radio-button label="左上"></el-radio-button>
        <el-radio-button label="中间"></el-radio-button>
      </el-radio-group>
    </el-tab-pane>
    <el-tab-pane label="替换功能">
      <p>
      <p>快捷栏有茅草地基和小型木头储物箱</p>
      </p>
      <el-row>
        <el-button size="small" @click="searchONE" :disabled="btndisable" type="primary">先点击我</el-button>
        <el-button size="small" @click="searchTWO" :disabled="btndisable" type="primary">在点击我</el-button>
      </el-row>
      <p>快捷替换</p>
      <el-row style="margin-top: 6px">
        <el-select size="small" v-model="valuefz" placeholder="请选择">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
        <el-button size="small" @click="handleTh" :disabled="btndisable" type="primary">执行替换</el-button>
      </el-row>
      <p>自定义快捷栏版(选用)</p>
      <el-row style="display: flex">
        <el-input size="small" style="width: 30%" v-model="valuefz1" type="text"></el-input>
        <el-button size="small" @click="inputOne" :disabled="btndisable" type="primary">先点击我</el-button>
        <el-input size="small" style="width: 30%" v-model="valuefz2" type="text"></el-input>
        <el-button size="small" @click="inputTwo" :disabled="btndisable" type="primary">在点击我</el-button>
      </el-row>
      <p>输入方式(其他物品)：</p>
      <el-row style="display: flex; margin-top: 6px">
        <el-input size="small" style="width: 61%" v-model="valuefz" type="text"></el-input>
        <el-button style="margin-left: 6px" size="small" @click="handleTh" :disabled="btndisable"
          type="primary">执行替换</el-button>
      </el-row>
    </el-tab-pane>
    <el-tab-pane label="状态">
      <el-timeline>
        <el-timeline-item v-for="(activity, index) in activities" :key="index" :timestamp="activity.timestamp"
          :color="activity.color">
          {{activity.content}}
        </el-timeline-item>
      </el-timeline>
    </el-tab-pane>
  </el-tabs>
</div>
</div>
`)
