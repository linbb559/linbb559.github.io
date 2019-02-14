var content = document.getElementById("answer-content");

// 设置答题框的高度
var getViewPortSize = function() {
    var w = window;
    if (w.innerWidth != null) return { x: w.innerWidth, y: w.innerHeight };
    var d = w.document;
    // 表明是标准模式
    if (document.compatMode == "CSS1Compat") {
        return {
            x: d.documentElement.clientWidth,
            y: d.documentElement.clientHeight
        }
    }
    // 怪异模式
    return { x: d.body.clientWidth, y: d.body.clientHeight }
}

this.clientHeight = getViewPortSize().y;
this.clientWidth = getViewPortSize().x;

content.style.height = this.clientHeight - this.clientWidth / 2 + 'px'

var addClass = function(element, className) {
    var classNames = element.className.split(/\s+/);
    if (classNames.indexOf(className) == -1) {
        classNames.push(className);
    }
    element.className = classNames.join(' ')
}

// 打字效果
var arr = [
    { type: 'text', text: '  谢邀，我家小栾啊' },
    { type: "br" },
    { type: 'wait', time: 1000 },
    { type: "text", text: "超可爱的，是个十足的老司机，嗯？"},
    { type: 'wait', time: 1000 },
    { type: 'delete', num: 6 },
    { type: 'text', text: '粗犷汉子，嗯？？？' },
    { type: 'wait', time: 1000 },
    { type: 'delete', num: 9 },
    { type: 'text', text: '小宝贝！！！' },
    { type: 'br' },
    { type: 'text', text: '她温柔美丽，善良大方' },
    { type: 'text', text: '，国色天香，沉鱼落雁，如花似玉，闭月羞花，贤良淑德，花容月貌，和蔼可亲，面容慈祥，秋水伊人，一笑倾城，冰清玉洁，娇俏佳人，朱颜玉润，花前月下，窈窕淑女，美若天仙，一顾倾城，出水芙蓉，阿娇金屋，面朝大海，春暖花开', time: 50 },
    { type: 'br' },
    { type: 'text', text: '咦，' },
    { type: 'wait', time: 1000 },
    { type: 'text', text: '好像有什么奇奇怪怪的词语混进来了。' },
    { type: 'wait', time: 1000 },
    { type: 'text', text: '不管了，给你们看张她的照片吧~' },
    { type: 'wait', time: 1000 },
    { type: 'img', src: 'img/luan.jpg', id: "cat", style: "width: 200px; height:200px; display: block;margin-left: auto;margin-right: auto;margin-top: 20px;margin-bottom: 20px;" },
    { type: 'wait', time: 1000 },
    { type: 'text', text: '诺！是不是美美哒~' },
    { type: 'br' },
    { type: "wait", time: 1000 },
    { type: "text", text: "是不是最可爱(*^o^*)" }
]

var autoType = new AutoType(content, arr);
autoType.once("end", function() {
    addClass(content, 'end')
})