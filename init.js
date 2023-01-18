new Vue({
  el: "#app",
  data: {
    radio1: '右上',
    funstyle: {
      top: '10px',
      right: '10px'
    },
    followInt: -123,
    fpssvalue: 30,
    sjvalue: 0.01,
    color: 'rgba(19, 206, 102, 0.8)',
    rwdiy: false,
    isRetDate: false,
    btndisable: false,
    sgbpkg: false,
    showsgbp: false,
    sgtimer: null,
    X: null,
    Picturequality: false,
    hzfun1: null,
    hzfun2: null,
    hzfun3: null,
    btn: {
      track: false,
    },
    tmp: false,
    myTeam: null,
    globalSpeed: {
      value: 1,
      address: null,
    },
    waterFire: {
      enable: false,
      address: null,
    },
    playerSpeed: {
      lasttime: 0,
      value: 1,
      address: null,
    },
    fov1: {
      value: 90,
      address: null,
    },
    fov3: {
      value: 1,
      address: null,
    },
    aimLock: false,
    log: "",
    rootComponent: null,
    esp: {
      type: null,
      amplifyFactor: 1,
      enable: false,
      player: false,
      tamed: false,
      building: false,
      dead: false,
      teamer: false,
    },
    dungeon: {
      enable: false,
    },
    netSet: {
      enable: false,
    },
    nightSet: {
      enable: false,
      address: [],
    },
    vivSet: {
      enable: false,
      address: [],
    },
    grassSet: {
      enable: false,
      address: [],
    },
    waterSet: {
      enable: false,
      address: [],
    },
    floorSet: {
      enable: false,
      address: [],
    },
    bHeadF: {
      value: 1,
      address: [],
    },
    iosScale: window.devicePixelRatio,
    sWidth: window.screen.height, //屏幕宽
    sHeight: window.screen.width, //屏幕高
    canvasDom: null, //创建画布
    ctx: null,
    fontFamily: " Arial",
    actorCache: [],
    baseAddr: null,
    GWorld: null, //世界全局变量，公用
    X: null,
    lis: [],
    visitorId: null,
    autoEq: true,
    id: 0,
    OwningGameInstance: null,
    LocalPlayers: null,
    localPlayerController: null,
    mySelf: null,
    playerCameraManager: null,
    povAddr: null,
    aimItems: [],
    CameraX: null,
    CameraY: null,
    valuefz: "306",
    valuefz1: "110",
    valuefz2: "158",
    options: [
      {
        value: '197',
        label: '金属垂直水管'
      },
      {
        value: "303",
        label: "泰克窗",
      },
      {
        value: "304",
        label: "泰克天窗",
      },
      {
        value: "305",
        label: "泰克窗框",
      },
      {
        value: "306",
        label: "泰克地基",
      },
      {
        value: "307",
        label: "泰克门",
      },
      {
        value: "308",
        label: "泰克门框",
      },
      {
        value: "309",
        label: "泰克天花板",
      },
      {
        value: "310",
        label: "泰克倾斜屋顶",
      },
      {
        value: "311",
        label: "泰克栏杆",
      },
      {
        value: "312",
        label: "泰克栅栏地基",
      },
      {
        value: "313",
        label: "泰克栅栏",
      },
      {
        value: "314",
        label: "泰克倾斜墙左",
      },
      {
        value: "315",
        label: "泰克倾斜墙右",
      },
      {
        value: "316",
        label: "泰克旋转梯子",
      },
      {
        value: "317",
        label: "泰克梯子",
      },
      {
        value: "318",
        label: "泰克斜坡",
      },
      {
        value: "319",
        label: "泰克柱子",
      },
      {
        value: "320",
        label: "泰克天窗框",
      },
      {
        value: "322",
        label: "泰克墙壁",
      },
      {
        value: "323",
        label: "泰克球",
      },
      {
        value: "324",
        label: "泰克冷冻仓",
      },
      {
        value: "325",
        label: "泰克饲料槽",
      },
      {
        value: "326",
        label: "泰克发电机",
      },
      {
        value: "327",
        label: "泰克床",
      },
      {
        value: "328",
        label: "泰克饲料转换机",
      },
      {
        value: "329",
        label: "泰克传送器",
      },
      {
        value: "330",
        label: "泰克灯",
      },
      {
        value: "331",
        label: "聚合物柱子",
      },
      {
        value: "342",
        label: "防爆甲套装",
      },
      {
        value: "343",
        label: "复活平台",
      },
      {
        value: "344",
        label: "木材厂",
      },
      {
        value: "345",
        label: "哨站",
      },
      {
        value: "346",
        label: "食物台",
      },
      {
        value: "347",
        label: "工厂",
      },
      {
        value: "348",
        label: "填装台",
      },
      {
        value: "349",
        label: "金属铸造厂",
      },
      {
        value: "350",
        label: "石材车间",
      },
      {
        value: "351",
        label: "制革厂",
      },
      {
        value: "352",
        label: "染料工厂",
      },
      {
        value: "353",
        label: "卫生纸",
      },
      {
        value: "340",
        label: "金属资源箱",
      },
      {
        value: "292",
        label: "彩虹加特林",
      },
      {
        value: "293",
        label: "聚合物地基",
      },
      {
        value: "294",
        label: "悬崖平台",
      },
      {
        value: "301",
        label: "大铁墙",
      },
      {
        value: "300",
        label: "弧形大铁墙",
      },
      {
        value: "181",
        label: "铁巨兽门",
      },
      {
        value: "182",
        label: "铁巨兽门框",
      },
      {
        value: "192",
        label: "机床",
      },
      {
        value: "67",
        label: "食人花",
      },
      {
        value: "157",
        label: "金属拒马",
      },
      {
        value: "168",
        label: "睡袋",
      },
      {
        value: "204",
        label: "大型耕地",
      },
      {
        value: "223",
        label: "火神",
      },
      {
        value: "8",
        label: "工业研磨机",
      },
      {
        value: "18",
        label: "温室窗门",
      },
      {
        value: "19",
        label: "温室斜屋顶",
      },
      {
        value: "20",
        label: "温室右斜墙",
      },
      {
        value: "21",
        label: "温室左斜墙",
      },
      {
        value: "22",
        label: "温室门",
      },
      {
        value: "23",
        label: "温室门框",
      },
      {
        value: "24",
        label: "温室天花板",
      },
      {
        value: "25",
        label: "温室墙",
      },
      {
        value: "207",
        label: "保险柜",
      },
    ],
  },
  created () {
    window.vue = this;
  },
  methods: {
    track () {
      if (!this.btn.track) {
        h5gg.clearResults()
        h5gg.searchNumber("0.1285700053", "F32", "0x100000000", "0x160000000")
        h5gg.searchNearby("0.2", "F32", "0x50")
        h5gg.editAll("30", "F32")
        h5gg.clearResults()
        ELEMENT.Message.success("开启成功");
      }
    },
    changeWz () {
      if (this.radio1 === '右上') {
        this.funstyle = {
          top: '10px',
          right: '10px'
        }
      } else if (this.radio1 === '左上') {
        this.funstyle = {
          top: '10px',
          left: '10px'
        }
      } else if (this.radio1 === '中间') {
        this.funstyle = {
          top: '10px',
          left: '50%',
        }
      }
    },
    searchONE () {
      h5gg.clearResults();
      this.btndisable = true
      h5gg.searchNumber("110", "I32", "0x00000000", "0x200000000");
      setTimeout(() => {
        ELEMENT.Message.success("搜索完成");
        this.btndisable = false
      }, 3000);
    },
    searchTWO () {
      this.btndisable = true
      h5gg.searchNumber("158", "I32", "0x00000000", "0x200000000");
      setTimeout(() => {
        ELEMENT.Message.success("请选择需要替换的物品");
        this.btndisable = false
      }, 3000);
    },
    handleSG () {
      if (this.sgbpkg) {
        this.sgtimer = setInterval(() => {
          h5gg.editAll('36', "I32");
        }, 500);
      } else {
        clearInterval(this.sgtimer)
        this.sgtimer = null
      }
    },
    handleTh () {
      h5gg.editAll(this.valuefz, "I32");
      ELEMENT.Message.success("替换成功");
    },
    inputOne () {
      this.btndisable = true
      h5gg.clearResults();
      h5gg.searchNumber(
        this.valuefz1,
        "I32",
        "0x00000000",
        "0x200000000"
      );
      setTimeout(() => {
        this.btndisable = false
        ELEMENT.Message.success("搜索完成");
      }, 3000);
    },
    inputTwo () {
      this.btndisable = true
      h5gg.searchNumber(
        this.valuefz2,
        "I32",
        "0x00000000",
        "0x200000000"
      );
      setTimeout(() => {
        this.btndisable = false
        ELEMENT.Message.success("请选择需要替换的物品");
      }, 3000);
    },
    init () {
      h5gg.clearResults();
      h5gg.searchNumber("3803761805", "I32", "0x00000000", "0x200000000");
      h5gg.searchNearby("67", "I32", "0x104");
      h5gg.searchNumber("3803761805", "I32", "0x00000000", "0x200000000");
      //Search camera angle
      this.X = h5gg.getRangesList("ShooterGame");
      let count2 = h5gg.getResultsCount();
      let r2 = h5gg.getResults(count2);
      for (let i = 0; i < count2; i++) {
        this.CameraX = Number(r2[i].address) + 488;
        this.CameraY = Number(r2[i].address) + 484;
      }
      h5gg.clearResults();
      window.vue = this;
      this.canvasDom = document.createElement("canvas");
      document.body.appendChild(this.canvasDom);
      setWindowRect(0, 0, this.sWidth, this.sHeight);
      this.canvasDom.style.height = "100%";
      this.canvasDom.style.width = "100%";
      this.canvasDom.width = this.sWidth * this.iosScale;
      this.canvasDom.height = this.sHeight * this.iosScale;
      this.canvasDom.onclick = () => {
        let menu = document.querySelector("#func");
        menu.style.display = "none";
        //隐藏菜单之后, 设置触控穿透悬浮窗口
        setWindowTouch(false);
      };
      this.ctx = this.canvasDom.getContext("2d");
      this.setLineWidth(this.iosScale);
      this.baseAddr = Number(h5gg.getRangesList(0)[0].start);
      this.GWorld = this.readLong(this.baseAddr + 0x44e9648);
      let myactor = Number(this.baseAddr) + 0x042514a8;
      myactor = Number(h5gg.getValue(myactor, "I64")) + 0x20;
      myactor = Number(h5gg.getValue(myactor, "I64")) + 0x288;
      myactor = Number(h5gg.getValue(myactor, "I64")) + 0x58;
      myactor = Number(h5gg.getValue(myactor, "I64"));
      this.myTeam = this.readInt(myactor + 0x29c);
      this.OwningGameInstance = this.readLong(this.GWorld + 0x1a8);
      this.LocalPlayers = this.readLong(this.OwningGameInstance + 0x38);
      this.localPlayerController = this.readLong(this.LocalPlayers + 0x0);
      this.mySelf = this.readLong(this.localPlayerController + 0x30);
      this.playerCameraManager = this.readLong(this.mySelf + 0x660);
      this.povAddr = this.playerCameraManager + 0xbd0 + 0x10;
      setButtonImage("https://t2.picb.cc/2023/01/12/IwlGYe.png");
      setButtonAction(function () {
        let menu = document.querySelector("#func");
        if (menu.style.display == "none") {
          menu.style.display = "block";
          //显示菜单之后, 设置触控不可穿透悬浮窗口
          setWindowTouch(true);
        } else {
          menu.style.display = "none";
          //隐藏菜单之后, 设置触控穿透悬浮窗口
          setWindowTouch(false);
        }
      });
    },
    drawCache () {
      if (!this.esp.enable && !this.aimLock) return
      let Level = this.readLong(this.GWorld + 0x58);
      let ActorArray = this.readLong(Level + 0xA0);
      let ActorCount = this.readInt(Level + 0xA8);
      let items = [];
      let items2 = [];
      for (let i = 0; i < ActorCount; i++) {
        let item = {}
        item.actor = this.readLong(ActorArray + i * 8);
        if (this.isNull(item.actor)) continue;
        item.team = this.readInt(item.actor + 0x29c);
        item.type = this.readInt(item.actor + 0xd20);
        item.isMyTeam = (item.team == this.myTeam);
        if (item.team < 1000000) continue; //野生
        if (item.type == 1150107648) item.type = "玩家"
        else if (item.type == 1153548288) item.type = "恐龙"
        else if (item.type == 0 || item.type == -549336669) item.type = "建筑"
        item.hp = this.readFloat(item.actor + 0xC44)
        if (this.aimLock && !item.isMyTeam && item.type == "玩家" && item.hp > 0) {
          items2.push(item)
        }
        if (this.esp.teamer && item.isMyTeam) {
          continue
        }
        if (item.type == "玩家") {
          item.zt = this.readInt(item.actor + 0x90)
          item.qi = this.readInt(item.actor + 0x104)
          let nameAddr = this.readLong(item.actor + 0x15c8);
          item.name = item.actor
          if (!this.isNull(nameAddr)) {
            item.name = ""
            for (let s = 0; s < 16; s++) {
              let num = Number(h5gg.getValue(nameAddr + s * 4, "U16"));
              let char = String.fromCharCode(num)
              if (num == 0) break;
              item.name += char;
            }
          }
        }

        if (item.hp == 0 && item.type != "建筑") {
          item.status = "dead"
        } else if (item.zt == -988528624 && item.qi != 1 && item.type != "建筑") {
          item.status = "sleep"
        } else {
          item.status = "normal"
        }
        if (this.esp.player && item.type == "玩家" && item.status == "normal") {
          items.push(item)
        } else if (this.esp.tamed && item.type == "恐龙" && item.status == "normal") {
          items.push(item)
        } else if (this.esp.dead && item.type == "玩家" && item.status != "normal") {
          items.push(item)
        } else if (this.esp.building && item.type == "建筑") {
          items.push(item)
        }
      }

      this.actorCache = items;
      this.aimItems = items2;
    },
    shadowDraw () {
      this.clearctx();
      if (this.esp.enable == false) return
      let povAddr = this.povAddr;
      let camViewInfo = {
        Location: {
          X: this.readFloat(povAddr),
          Y: this.readFloat(povAddr + 4),
          Z: this.readFloat(povAddr + 4 + 4)
        },
        Rotation: {
          Pitch: this.readFloat(povAddr + 0xc),
          Yaw: this.readFloat(povAddr + 0xc + 4),
          Roll: this.readFloat(povAddr + 0xc + 4 + 4)
        },
        FOV: this.readFloat(povAddr + 0x28)
      }
      //一帧只计算一次，减少性能消耗
      let tempMatrix = this.RotatorToMatrix(camViewInfo.Rotation);
      let playerCout = 0;
      let len = this.actorCache.length
      for (let i = 0; i < len; i++) {
        let item = this.actorCache[i]
        item.hp = this.readFloat(item.actor + 0xC44),
          item.hpmax = this.readFloat(item.actor + 0xC48)
        let actor = item.actor;
        let rootComponent = this.readLong(actor + 0x2c8);
        if (this.isNull(rootComponent)) continue;
        let worldPos = {
          X: this.readFloat(rootComponent + 0x290),
          Y: this.readFloat(rootComponent + 0x290 + 4),
          Z: this.readFloat(rootComponent + 0x290 + 4 + 4)
        }
        let distX = (worldPos.X - camViewInfo.Location.X) / 100;
        let distY = (worldPos.Y - camViewInfo.Location.Y) / 100;
        let distZ = (worldPos.Z - camViewInfo.Location.Z) / 100;
        let distance = Math.ceil(Math.sqrt((distZ * distZ) + (distX * distX) + (distY * distY)));
        if (distance > 2000) continue
        let zb1 = {
          X: worldPos.X,
          Y: worldPos.Y,
          Z: worldPos.Z + 80.0
        }
        let zb2 = {
          X: worldPos.X,
          Y: worldPos.Y,
          Z: worldPos.Z - 80.0
        }
        let fkzb1 = this.world2Screen(zb1, camViewInfo, tempMatrix);
        let fkzb2 = this.world2Screen(zb2, camViewInfo, tempMatrix);
        let fkgao = fkzb2.Y - fkzb1.Y;
        let fkkuan = fkgao / 2;

        let actorInfo = {
          x: fkzb1.X,
          y: fkzb1.Y,
          w: fkkuan,
          h: fkgao,
          hp: parseInt(item.hp),
          hpmax: parseInt(item.hpmax),
          isMyteam: item.isMyTeam,
          name: item.name,
          status: item.status,
          actorCache: this.actorCache[i],
          dis: distance,
        };

        this.shadowInfo(actorInfo);
        playerCout++;
      }
      this.drawText(playerCout, this.sWidth / 2, 10, 32, "#ff0000", true);
    },
    //封装数据绘制函数
    shadowInfo (objectInfo) {
      let amplifyFactor = this.esp.amplifyFactor
      let color;
      if (objectInfo.isMyteam) color = "#00FF00"
      else color = "#ff0000"

      if (objectInfo.actorCache.type != "玩家") objectInfo.name = objectInfo.actorCache.type
      //射线
      if (objectInfo.actorCache.type != "建筑")
        this.drawLine(this.sWidth / 2, 52, objectInfo.x, objectInfo.y - 15, color);
      //超出屏幕只绘制射线
      if (objectInfo.x < 0 || objectInfo.y < 0 || objectInfo.x > this.sWidth || objectInfo.y > this.sHeight) return;

      //方框
      if (objectInfo.actorCache.type != "建筑")
        this.drawRect(objectInfo.x - objectInfo.w / 2, objectInfo.y, objectInfo.w, objectInfo.h, color,
          false); //绘制方框
      if (objectInfo.status == "normal") {
        this.drawText(objectInfo.name + "[" + objectInfo.dis + "米]", objectInfo.x, objectInfo.y - 40, 12 * amplifyFactor, "#000", false);
        this.drawText(objectInfo.name + "[" + objectInfo.dis + "米]", objectInfo.x, objectInfo.y - 40, 12 * amplifyFactor, "#fff", true);
      } else if (objectInfo.status == "dead") {
        this.drawText("☠️ " + objectInfo.name + "[" + objectInfo.dis + "米]", objectInfo.x, objectInfo.y - 40, 12 * amplifyFactor, "#000", false);
        this.drawText("☠️ " + objectInfo.name + "[" + objectInfo.dis + "米]", objectInfo.x, objectInfo.y - 40, 12 * amplifyFactor, "#fff", true);
      } else if (objectInfo.status == "sleep") {
        this.drawText("💤 " + objectInfo.name + "[" + objectInfo.dis + "米]", objectInfo.x, objectInfo.y - 40, 12 * amplifyFactor, "#000", false);
        this.drawText("💤 " + objectInfo.name + "[" + objectInfo.dis + "米]", objectInfo.x, objectInfo.y - 40, 12 * amplifyFactor, "#fff", true);
      }
      //血条
      if (objectInfo.status == "normal" && objectInfo.actorCache.type != "建筑" && objectInfo.hp > 0 && objectInfo.hp < 999999) {
        let life = objectInfo.hp / objectInfo.hpmax * 100
        this.drawRoundRect(objectInfo.x - 50, objectInfo.y - 23 + 5 * amplifyFactor, 100, 12, 3, "#414141", true);
        this.drawRoundRect(objectInfo.x - 50, objectInfo.y - 23 + 5 * amplifyFactor, life, 12, 3, color, true);
        this.drawRoundRect(objectInfo.x - 50, objectInfo.y - 23 + 5 * amplifyFactor, 100, 12, 3, "#000000", false);
        this.drawText("" + objectInfo.hp + "/" + objectInfo.hpmax, objectInfo.x, objectInfo.y - 25 + 5 * amplifyFactor, 12, "#000000", true);
      }
    },
    //清空画布
    clearctx () {
      this.ctx.clearRect(0, 0, this.canvasDom.width, this.canvasDom.height);
    },
    //设置线宽
    setLineWidth (w) {
      this.ctx.lineWidth = w;
    },
    //绘制线条，起始点xy，终点xy，颜色
    drawLine (x1, y1, x2, y2, color) {
      x1 *= this.iosScale;
      y1 *= this.iosScale;
      x2 *= this.iosScale;
      y2 *= this.iosScale;

      this.ctx.beginPath();
      this.ctx.fillStyle = color;
      this.ctx.strokeStyle = color;
      this.ctx.moveTo(x1, y1);
      this.ctx.lineTo(x2, y2);
      this.ctx.stroke();
      this.ctx.closePath();
    },

    //绘制圆形 中心点xy，圆形半径，颜色，是否填充圆
    drawCircle (x, y, r, color, isFill = true) {
      x *= this.iosScale;
      y *= this.iosScale;
      r *= this.iosScale;
      this.ctx.beginPath();
      this.ctx.strokeStyle = color;
      this.ctx.fillStyle = color;
      this.ctx.arc(x, y, r, 0, 2 * Math.PI);
      if (isFill) {
        this.ctx.fill();
      } else {
        this.ctx.stroke();
      }
      this.ctx.closePath();
    },
    //绘制矩形 起点xy，矩形宽高，颜色，是否填充矩形
    drawRect (x, y, w, h, color, isFill = true) {
      x *= this.iosScale;
      y *= this.iosScale;
      w *= this.iosScale;
      h *= this.iosScale;

      this.ctx.beginPath();
      this.ctx.strokeStyle = color;
      this.ctx.fillStyle = color;
      if (isFill) {
        this.ctx.fillRect(x, y, w, h);
      } else {
        this.ctx.strokeRect(x, y, w, h);
      }
      this.ctx.closePath();
    },
    //绘制圆角矩形，起点xy，矩形宽高，圆角半径，颜色，是否填充矩形
    drawRoundRect (x, y, w, h, r, color, isFill = true) {
      x *= this.iosScale;
      y *= this.iosScale;
      w *= this.iosScale;
      h *= this.iosScale;
      r *= this.iosScale;

      this.ctx.beginPath();
      this.ctx.strokeStyle = color;
      this.ctx.fillStyle = color;
      if (w < 2 * r) r = w / 2;
      if (h < 2 * r) r = h / 2;
      this.ctx.beginPath();
      this.ctx.moveTo(x + r, y);
      this.ctx.arcTo(x + w, y, x + w, y + h, r);
      this.ctx.arcTo(x + w, y + h, x, y + h, r);
      this.ctx.arcTo(x, y + h, x, y, r);
      this.ctx.arcTo(x, y, x + w, y, r);
      if (isFill) {
        this.ctx.fill();
      } else {
        this.ctx.stroke();
      }
      this.ctx.closePath();
    },
    //绘制文字，文字内容，起点xy，文字大小，颜色，是否填充文字
    drawText (text, x, y, size, color, isFill = true, textAlign = "center") {
      x *= this.iosScale;
      y *= this.iosScale;
      size *= this.iosScale;

      this.ctx.beginPath();
      this.ctx.textAlign = textAlign;
      this.ctx.fillStyle = color;
      this.ctx.strokeStyle = color;
      this.ctx.font = size + "px" + this.fontFamily;
      if (isFill) {
        this.ctx.fillText(text, x, y + size);
      } else {
        this.ctx.strokeText(text, x, y + size);
      }
      this.ctx.closePath();
    },
    // ********************* 内存相关 *********************
    readInt (addr) {
      return Number(h5gg.getValue(addr, "I32"));
    },
    readLong (addr) {
      return Number(h5gg.getValue(addr, "I64"));
    },
    readFloat (addr) {
      return Number(h5gg.getValue(addr, "F32"));
    },
    isNull (addr) {
      return addr < 0x100000000 || addr > 0x300000000;
    },
    // ********************* UE4相关 *********************
    RotatorToMatrix (rotation) {
      let radPitch = rotation.Pitch * (Math.PI / 180.0);
      let radYaw = rotation.Yaw * (Math.PI / 180.0);
      let radRoll = rotation.Roll * (Math.PI / 180.0);

      let SP = Math.sin(radPitch);
      let CP = Math.cos(radPitch);
      let SY = Math.sin(radYaw);
      let CY = Math.cos(radYaw);
      let SR = Math.sin(radRoll);
      let CR = Math.cos(radRoll);

      let matrix = new Array(16).fill(0);

      matrix[0] = CP * CY;
      matrix[1] = CP * SY;
      matrix[2] = SP;
      matrix[3] = 0;

      matrix[4] = SR * SP * CY - CR * SY;
      matrix[5] = SR * SP * SY + CR * CY;
      matrix[6] = -SR * CP;
      matrix[7] = 0;

      matrix[8] = -(CR * SP * CY + SR * SY);
      matrix[9] = CY * SR - CR * SP * SY;
      matrix[10] = CR * CP;
      matrix[11] = 0;

      matrix[12] = 0;
      matrix[13] = 0;
      matrix[14] = 0;
      matrix[15] = 1;

      return matrix;
    },
    vectorDot (lhs, rhs) {
      return lhs.X * rhs.X + lhs.Y * rhs.Y + lhs.Z * rhs.Z;
    },
    world2Screen (worldLocation, camViewInfo, tempMatrix) {
      // let tempMatrix = RotatorToMatrix(camViewInfo.Rotation);
      let vAxisX = {
        X: tempMatrix[0],
        Y: tempMatrix[1],
        Z: tempMatrix[2],
      };
      let vAxisY = {
        X: tempMatrix[4],
        Y: tempMatrix[5],
        Z: tempMatrix[6],
      };
      let vAxisZ = {
        X: tempMatrix[8],
        Y: tempMatrix[9],
        Z: tempMatrix[10],
      };

      let vDelta = {
        X: worldLocation.X - camViewInfo.Location.X,
        Y: worldLocation.Y - camViewInfo.Location.Y,
        Z: worldLocation.Z - camViewInfo.Location.Z,
      };

      let vTransformed = {
        X: this.vectorDot(vDelta, vAxisY),
        Y: this.vectorDot(vDelta, vAxisZ),
        Z: this.vectorDot(vDelta, vAxisX),
      };

      if (vTransformed.Z < 1.0) {
        vTransformed.Z = 1.0;
      }

      let fov = camViewInfo.FOV;
      let screenCenterX = this.sWidth / 2.0;
      let screenCenterY = this.sHeight / 2.0;

      let re = {
        X: screenCenterX +
          (vTransformed.X *
            (screenCenterX / Math.tan(fov * (Math.PI / 360.0)))) /
          vTransformed.Z,
        Y: screenCenterY -
          (vTransformed.Y *
            (screenCenterX / Math.tan(fov * (Math.PI / 360.0)))) /
          vTransformed.Z,
      };

      return re;
    },
    //全局速度
    gSpeed () {
      let jz4 = Number(this.X[0].start) + 0x41cf8a8;
      jz4 = Number(h5gg.getValue(jz4, "I64")) + 0x28;
      jz4 = Number(h5gg.getValue(jz4, "I64")) + 0x90c;
      h5gg.setValue(jz4, this.globalSpeed.value, "F32");
    },
    //人物速度
    pSpeed () {
      let jz2 = Number(this.X[0].start) + 0x042514a8;
      jz2 = Number(h5gg.getValue(jz2, "I64")) + 0x20;
      jz2 = Number(h5gg.getValue(jz2, "I64")) + 0x288;
      jz2 = Number(h5gg.getValue(jz2, "I64")) + 0x58;
      jz2 = Number(h5gg.getValue(jz2, "I64")) + 0x88;
      h5gg.setValue(jz2, this.playerSpeed.value, "F32");
    },
    //第一人称视角
    fn1Fov () {
      if (this.fov1.address == null) {
        this.fov1.address = [];
        h5gg.clearResults();
        h5gg.searchNumber("89.9", "F32", "0x00000000", "0x200000000");
        h5gg.searchNearby("90", "F32", "0x100");
        h5gg.searchNumber("90", "F32", "0x00000000", "0x200000000");
        h5gg.getResults("100", "0", "F32");
        let count48 = h5gg.getResultsCount();
        let r48 = h5gg.getResults(count48);
        for (let i = 0; i < count48; i++) {
          this.fov1.address.push(r48[i].address);
        }
        h5gg.clearResults();
      }
      let len = this.fov1.address.length;
      for (let i = 0; i < len; i++) {
        h5gg.setValue(this.fov1.address[i], this.fov1.value, "F32");
      }
    },
    //第三人称视角
    fn3Fov () {
      if (this.fov3.address == null) {
        h5gg.clearResults();
        h5gg.searchNumber("256", "F32", "0x00000000", "0x200000000");
        h5gg.searchNearby("4", "I32", "0x20");
        h5gg.searchNearby("0.8", "F32", "0x20");
        h5gg.searchNumber("256", "F32", "0x00000000", "0x200000000");
        h5gg.getResults("1", "F32");
        this.fov3.address = h5gg.getResults(1)[0].address;
        h5gg.clearResults();
      }
      h5gg.setValue(this.fov3.address, this.fov3.value * 256, "F32");
    },
    //大头
    bigHead () {
      if (this.bHeadF.address.length == 0) {
        h5gg.clearResults();
        h5gg.searchNumber("-7.296562", "F32", "0x00000000", "0x200000000");
        h5gg.searchNearby("1", "F32", "0x10");
        h5gg.searchNumber("1", "F32", "0x00000000", "0x200000000");
        h5gg.getResults("100", "0", "F32");

        let count47 = h5gg.getResultsCount();
        let r47 = h5gg.getResults(count47);
        h5gg.clearResults();
        for (let i = 0; i < count47; i++) {
          let addr47 = r47[i].address;
          h5gg.setValue(addr47, this.bHeadF.value, "F32");
          this.bHeadF.address.push(addr47);
        }
      } else {
        let len = this.bHeadF.address.length;
        for (let i = 0; i < len; i++) {
          h5gg.setValue(this.bHeadF.address[i], this.bHeadF.value, "F32");
        }
      }
    },
    //自动瞄准
    initAimLock () {
      this.clearctx();
      if (this.followInt != -123) clearInterval(this.followInt);
      this.followInt = -123;
      this.rootComponent = null;
    },
    aimLockF () {
      if (!this.aimLock) return;
      let povAddr = this.povAddr;
      let camViewInfo = {
        Location: {
          X: this.readFloat(povAddr),
          Y: this.readFloat(povAddr + 4),
          Z: this.readFloat(povAddr + 4 + 4),
        },
        Rotation: {
          Pitch: this.readFloat(povAddr + 0xc),
          Yaw: this.readFloat(povAddr + 0xc + 4),
          Roll: this.readFloat(povAddr + 0xc + 4 + 4),
        },
        FOV: this.readFloat(povAddr + 0x28),
      };
      this.Pitch = this.readFloat(povAddr + 0xc);
      this.Yaw = this.readFloat(povAddr + 0xc + 4);
      this.Roll = this.readFloat(povAddr + 0xc + 4 + 4);
      // this.drawText(this.Pitch+" "+this.Yaw, this.sWidth / 2, this.sHeight/2, 18, "#green", true);
      let tempMatrix = this.RotatorToMatrix(camViewInfo.Rotation);
      let playerCout = 0;
      let minnDis = 1000;
      let minnComponent = null;
      let len = this.aimItems.length;
      for (let i = 0; i < len; i++) {
        let item = this.aimItems[i];
        // if (item.isMyTeam) continue
        item.hp = this.readFloat(item.actor + 0xc44);
        let actor = item.actor;
        let rootComponent = this.readLong(actor + 0x2c8);
        // if (this.isNull(rootComponent)) continue;
        let worldPos = {
          X: this.readFloat(rootComponent + 0x290),
          Y: this.readFloat(rootComponent + 0x290 + 4),
          Z: this.readFloat(rootComponent + 0x290 + 4 + 4),
        };
        let distX = (worldPos.X - camViewInfo.Location.X) / 100;
        let distY = (worldPos.Y - camViewInfo.Location.Y) / 100;
        let distZ = (worldPos.Z - camViewInfo.Location.Z) / 100;
        let distance = Math.ceil(
          Math.sqrt(distZ * distZ + distX * distX + distY * distY)
        );
        if (distance > 1200) continue;
        let zb = {
          X: worldPos.X,
          Y: worldPos.Y,
          Z: worldPos.Z + 70,
        };
        let fkzb1 = this.world2Screen(zb, camViewInfo, tempMatrix);
        distX = fkzb1.X - this.sWidth / 2;
        distY = fkzb1.Y - this.sHeight / 2;
        distance = Math.sqrt(distX * distX + distY * distY);
        if (distance < 35 && distance < minnDis) {
          minnDis = distance;
          minnComponent = rootComponent;
        }
        this.drawCircle(
          this.sWidth / 2,
          this.sHeight / 2,
          5,
          "green",
          true
        );
        this.drawCircle(fkzb1.X, fkzb1.Y, 3, "red", false);
      }
      if (this.rootComponent != minnComponent && minnComponent != null) {
        if (this.followInt != -123) clearInterval(this.followInt);
        this.followInt = setInterval(this.followAim, 10, minnComponent);
      }
    },
    followAim (rootComponent) {
      this.rootComponent = rootComponent;
      let worldPos = {
        X: this.readFloat(rootComponent + 0x290),
        Y: this.readFloat(rootComponent + 0x290 + 4),
        Z: this.readFloat(rootComponent + 0x290 + 4 + 4) + 70,
      };
      let povAddr = this.povAddr;
      let camViewInfo = {
        Location: {
          X: this.readFloat(povAddr),
          Y: this.readFloat(povAddr + 4),
          Z: this.readFloat(povAddr + 4 + 4),
        },
      };
      let angle1 =
        (Math.atan2(
          worldPos.Y - camViewInfo.Location.Y,
          worldPos.X - camViewInfo.Location.X
        ) *
          180) /
        Math.PI;
      //  if(worldPos.X - camViewInfo.Location.X>0)angle1 = angle1 - 180
      let angle2 = this.getAngle(
        worldPos.X - camViewInfo.Location.X,
        worldPos.Y - camViewInfo.Location.Y,
        worldPos.Z - camViewInfo.Location.Z,
        0,
        0,
        1
      );
      if (
        Math.abs(angle1 - h5gg.getValue(this.CameraX, "F32")) > 10 ||
        Math.abs(angle2 - h5gg.getValue(this.CameraY, "F32")) > 10
      ) {
        if (this.followInt != -123) clearInterval(this.followInt);
        this.followInt = -123;
        this.rootComponent = null;
      }
      h5gg.setValue(this.CameraX, angle1, "F32");
      h5gg.setValue(this.CameraY, angle2, "F32");
      // this.drawText(angle1+" "+ angle2, this.sWidth / 2, this.sHeight/2 + 40, 18, "black", true);
      // this.drawText(h5gg.getValue(this.CameraX, "F32")+" "+h5gg.getValue(this.CameraY, "F32"), this.sWidth / 2, this.sHeight/2, 18, "green", true);
    },
    getAngle (a, b, c, n, m, p) {
      let ns = a * n + b * m + c * p;
      let len1 = Math.sqrt(a * a + b * b + c * c);
      let len2 = Math.sqrt(n * n + m * m + p * p);
      return (Math.asin(ns / len1 / len2) * 180) / Math.PI;
    },
    //鲜艳画质
    vivVision () {
      if (!this.vivSet.address.length) {
        h5gg.clearResults();
        h5gg.searchNumber("1.205", "F32", "0x100000000", "0x160000000");
        h5gg.getResults("100", "F32");
        let count32 = h5gg.getResultsCount();
        let r32 = h5gg.getResults(count32);

        for (let i = 0; i < count32; i++) {
          let addr32 = r32[i].address;
          h5gg.setValue(addr32, 999, "F32");
          this.vivSet.address.push(addr32);
        }
        h5gg.clearResults();
      } else {
        let len = this.vivSet.address.length;
        for (let i = 0; i < len; i++) {
          if (this.vivSet.enable)
            h5gg.setValue(this.vivSet.address[i], "999", "F32");
          else h5gg.setValue(this.vivSet.address[i], "1.205", "F32");
        }
      }
    },
    //草石透视
    grassVision () {
      if (!this.grassSet.address.length) {
        h5gg.clearResults();
        h5gg.searchNumber(
          "2.575036587209649e-314",
          "F64",
          "0x100000000",
          "0x160000000"
        );
        h5gg.getResults("100", "F64");
        let count35 = h5gg.getResultsCount();
        let r35 = h5gg.getResults(count35);
        for (let i = 0; i < count35; i++) {
          let addr35 = r35[i].address;
          h5gg.setValue(addr35, 2.716841317300385e-314, "F64");
          this.grassSet.address.push(addr35);
        }
        h5gg.clearResults();
      } else {
        let len = this.grassSet.address.length;
        for (let i = 0; i < len; i++) {
          if (this.grassSet.enable)
            h5gg.setValue(
              this.grassSet.address[i],
              "2.716841317300385e-314",
              "F64"
            );
          else
            h5gg.setValue(
              this.grassSet.address[i],
              "2.575036587209649e-314",
              "F64"
            );
        }
      }
    },
    //地牢视野
    dungeonVision () {
      h5gg.clearResults();
      // h5gg.searchNumber(
      //   "7.292903900800989e-304",
      //   "F64",
      //   "0x100000000",
      //   "0x160000000"
      // );
      // h5gg.searchNearby("0.85", "F32", "0x10");
      // h5gg.editAll("30", "F32");
      // h5gg.clearResults();
      let count451 = ''
      let addr451 = ''
      let r451 = ''
      const avs = this.dungeon.enable ? 30 : 1;
      if (!addr451) {
        h5gg.searchNumber(
          "7.292903900800989e-304",
          "F64",
          "0x100000000",
          "0x160000000"
        );
        h5gg.searchNearby("0.85", "F32", "0x100");
        h5gg.getResults("100", "F32");
        count451 = h5gg.getResultsCount();
        r451 = h5gg.getResults(count451);
        for (var i = 0; i < count451; i++) {
          addr451 = r451[i].address;
          h5gg.setValue(addr451, avs, "F32");
        }
        h5gg.clearResults();
      } else {
        for (var i = 0; i < count451; i++) {
          addr451 = r451[i].address;
          h5gg.setValue(addr451, avs, "F32");
        }
      }
    },
    //水下视野
    waterVision () {
      if (!this.waterSet.address.length) {
        h5gg.clearResults();
        h5gg.searchNumber(
          "-8.538039785799280e+24",
          "F64",
          "0x100000000",
          "0x160000000"
        );
        h5gg.searchNearby("1", "I32", "0x100");
        h5gg.searchNearby("1", "F32", "0x4");
        h5gg.searchNearby("1", "I32", "0x4");
        h5gg.searchNumber("1", "I32", "0x100000000", "0x160000000");
        h5gg.getResults("100", "I32");
        let count36 = h5gg.getResultsCount();
        let r36 = h5gg.getResults(count36);
        for (let i = 0; i < count36; i++) {
          let addr36 = r36[i].address;
          h5gg.setValue(addr36, 12, "I32");
          this.waterSet.address.push(addr36);
        }
        h5gg.clearResults();
      } else {
        let len = this.waterSet.address.length;
        for (let i = 0; i < len; i++) {
          if (this.waterSet.enable)
            h5gg.setValue(this.waterSet.address[i], 12, "I32");
          else h5gg.setValue(this.waterSet.address[i], 1, "I32");
        }
      }
    },
    //地面透视
    floorVision () {
      if (!this.floorSet.address.length) {
        h5gg.clearResults();
        h5gg.searchNumber("671152128", "I32", "0x100000000", "0x160000000");
        h5gg.getResults("100", "I32");
        let count36 = h5gg.getResultsCount();
        let r36 = h5gg.getResults(count36);
        for (let i = 0; i < count36; i++) {
          let addr36 = r36[i].address;
          h5gg.setValue(addr36, -1, "I32");
          this.floorSet.address.push(addr36);
        }
        h5gg.clearResults();
      } else {
        let len = this.floorSet.address.length;
        for (let i = 0; i < len; i++) {
          if (this.floorSet.enable)
            h5gg.setValue(this.floorSet.address[i], "-1", "I32");
          else h5gg.setValue(this.floorSet.address[i], "671152128", "I32");
        }
      }
    },
    //水下开枪
    waterFireF () {
      h5gg.clearResults();
      const avs = this.waterFire.enable ? 0.0000001 : 999;
      if (this.waterFire.address == null) {
        h5gg.searchNumber("56623104", "I32", "0x000000000", "0x200000000");
        h5gg.searchNearby("6", "F32", "0x30");
        h5gg.searchNumber("6", "F32", "0x000000000", "0x200000000");
        h5gg.getResults("1", "F32");
        let count31 = h5gg.getResultsCount();
        let r31 = h5gg.getResults(count31);
        for (let i = 0; i < count31; i++) {
          let addr31 = r31[i].address;
          h5gg.setValue(addr31, avs, "F32");
          this.waterFire.address = addr31;
        }
        h5gg.clearResults();
      } else {
        h5gg.setValue(this.waterFire.address, avs, "F32");
      }
    },
    //夜晚视野
    nightVision () {
      h5gg.clearResults();
      const avs = this.nightSet.enable ? 8 : 1;
      let address = this.nightSet.address;
      // alert(address.length)
      if (address.length == 0) {
        h5gg.searchNumber("17.99", "F32", "0x100000000", "0x160000000");
        h5gg.searchNearby("0.34", "F32", "0x100");
        h5gg.searchNearby("0.4", "F32", "0x100");
        h5gg.getResults("100", "F32");
        let len = h5gg.getResultsCount();
        let res = h5gg.getResults(len);
        for (let i = 0; i < len; i++) {
          address.push(res[i].address);
          h5gg.setValue(res[i].address, avs, "F32");
        }
        h5gg.clearResults();
      } else {
        let len = address.length;
        for (let i = 0; i < len; i++) {
          h5gg.setValue(address[i], avs, "F32");
        }
      }
    },
    // 移植功能 画质优化
    view () {
      h5gg.clearResults();
      if (this.Picturequality == true) {
        let jz10 = Number(this.X[0].start) + 0x41cf8a8;
        jz10 = Number(h5gg.getValue(jz10, "I64")) + 0x40;
        jz10 = Number(h5gg.getValue(jz10, "I64")) + 0x6b8;
        jz10 = Number(h5gg.getValue(jz10, "I64")) + 0x7c0;
        h5gg.setValue(jz10, "99999999999", "F32");
        h5gg.setValue(jz10 + 0x70, "10000", "F32");
      } else {
        let jz10 = Number(this.X[0].start) + 0x41cf8a8;
        jz10 = Number(h5gg.getValue(jz10, "I64")) + 0x40;
        jz10 = Number(h5gg.getValue(jz10, "I64")) + 0x6b8;
        jz10 = Number(h5gg.getValue(jz10, "I64")) + 0x7c0;
        h5gg.setValue(jz10, "1.205", "F32");
        h5gg.setValue(jz10 + 0x70, "1", "F32");
      }
    },
    // 修改帧数
    fpss () {
      let jzp = Number(this.X[0].start) + 0x44e7ab8;
      jzp = Number(h5gg.getValue(jzp, "I64")) + 0x65c;
      h5gg.setValue(jzp, this.fpssvalue, "F32");
    },
    // 人物颜色修改
    rwcolor () {
      if (this.rwdiy) {
        h5gg.clearResults();
        h5gg.searchNumber("0.08152", "F32", "0x00000000", "0x200000000");
        h5gg.getResults("20", "F32");
        count1 = h5gg.getResultsCount();
        r1 = h5gg.getResults(count1);
        h5gg.clearResults();
        for (let i = 0; i < count1; i++) {
          let color = Number(r1[i].address) - 0x14;
          h5gg.setValue(color, "10", "F32");
          h5gg.setValue(color + 0x24, "10", "F32");
          h5gg.setValue(color + 0x38, "10", "F32");
          h5gg.setValue(color + 0x50, "10", "F32");
          h5gg.setValue(color + 0x58, "10", "F32");
          h5gg.setValue(color + 0x68, "10", "F32");
          h5gg.setValue(color + 0x6c, "10", "F32");
          h5gg.setValue(color + 0x70, "10", "F32");
        }
        h5gg.clearResults();
        h5gg.searchNumber("0.325607", "F32", "0x00000000", "0x200000000");
        h5gg.getResults("20", "F32");
        count2 = h5gg.getResultsCount();
        r2 = h5gg.getResults(count2);
        h5gg.clearResults();
        for (let i = 0; i < count2; i++) {
          let color2 = Number(r2[i].address) - 0x14;
          h5gg.setValue(color2, "10", "F32");
          h5gg.setValue(color2 + 0x24, "10", "F32");
          h5gg.setValue(color2 + 0x38, "10", "F32");
          h5gg.setValue(color2 + 0x50, "10", "F32");
          h5gg.setValue(color2 + 0x58, "10", "F32");
          h5gg.setValue(color2 + 0x68, "10", "F32");
          h5gg.setValue(color2 + 0x6c, "10", "F32");
          h5gg.setValue(color2 + 0x70, "10", "F32");
        }
        h5gg.clearResults();
        h5gg.searchNumber("0.651214", "F32", "0x00000000", "0x200000000");
        h5gg.getResults("20", "F32");
        count4 = h5gg.getResultsCount();
        r4 = h5gg.getResults(count4);
        h5gg.clearResults();
        for (let i = 0; i < count4; i++) {
          let color3 = Number(r4[i].address) - 0x14;
          h5gg.setValue(color3, "10", "F32");
          h5gg.setValue(color3 + 0x24, "10", "F32");
          h5gg.setValue(color3 + 0x38, "10", "F32");
          h5gg.setValue(color3 + 0x50, "10", "F32");
          h5gg.setValue(color3 + 0x58, "10", "F32");
          h5gg.setValue(color3 + 0x68, "10", "F32");
          h5gg.setValue(color3 + 0x6c, "10", "F32");
          h5gg.setValue(color3 + 0x70, "10", "F32");
        }
      } else {
        h5gg.setValue(color, "0", "F32");
        h5gg.setValue(color + 0x24, "0", "F32");
        h5gg.setValue(color + 0x38, "0", "F32");
        h5gg.setValue(color + 0x50, "0", "F32");
        h5gg.setValue(color + 0x58, "0", "F32");
        h5gg.setValue(color + 0x68, "0", "F32");
        h5gg.setValue(color + 0x6c, "0", "F32");
        h5gg.setValue(color + 0x70, "0", "F32");
        h5gg.setValue(color2, "0", "F32");
        h5gg.setValue(color2 + 0x24, "0", "F32");
        h5gg.setValue(color2 + 0x38, "0", "F32");
        h5gg.setValue(color2 + 0x50, "0", "F32");
        h5gg.setValue(color2 + 0x58, "0", "F32");
        h5gg.setValue(color2 + 0x68, "0", "F32");
        h5gg.setValue(color2 + 0x6c, "0", "F32");
        h5gg.setValue(color2 + 0x70, "0", "F32");
        h5gg.setValue(color3, "0", "F32");
        h5gg.setValue(color3 + 0x24, "0", "F32");
        h5gg.setValue(color3 + 0x38, "0", "F32");
        h5gg.setValue(color3 + 0x50, "0", "F32");
        h5gg.setValue(color3 + 0x58, "0", "F32");
        h5gg.setValue(color3 + 0x68, "0", "F32");
        h5gg.setValue(color3 + 0x6c, "0", "F32");
        h5gg.setValue(color3 + 0x70, "0", "F32");
      }
    },
    //取消全部绘制
    changeHz () {
      if (!this.esp.enable) {
        this.clearctx();
        clearInterval(this.hzfun1);
        clearInterval(this.hzfun2);
        clearInterval(this.hzfun3);
        this.hzfun1 = null;
        this.hzfun2 = null;
        this.hzfun3 = null;
        this.esp.player = false;
        this.esp.building = false;
        this.esp.dead = false;
        this.esp.tamed = false;
        this.esp.teamer = false;
        this.actorCache = [];
        this.aimItems = [];
      } else {
        this.hzfun1 = setInterval(this.drawCache, 2000);
        this.hzfun2 = setInterval(this.shadowDraw, 50);
        this.hzfun3 = setInterval(this.aimLockF, 50);
      }
    },
    //重置速度
    async resetDate () {
      if (this.isRetDate) {
        this.globalSpeed.value = 1;
        this.playerSpeed.value = 1;
        await this.gSpeed();
        await this.pSpeed();
      }
    },
  },
});
window.vue.init()