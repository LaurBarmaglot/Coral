/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'bg',
                type: 'image',
                rect: ['-1630px', '-851px','3524px','1880px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bg.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 'ba',
                type: 'image',
                rect: ['25px', '-213px','440px','550px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ba.svg",'0px','0px'],
                transform: [[],[],[],['0.07','0.07']]
            },
            {
                id: 'f',
                type: 'image',
                rect: ['-15px', '-84px','369px','403px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"f.svg",'0px','0px'],
                transform: [[],['-79'],[],['0.05','0.05']]
            },
            {
                id: 't',
                type: 'image',
                rect: ['-908px', '-195px','1977px','550px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"t.svg",'0px','0px'],
                transform: [[],[],[],['0.08','0.08']]
            },
            {
                id: 'Text6',
                type: 'text',
                rect: ['-3px', '37px','168px','142px','auto', 'auto'],
                clip: ['rect(0px 168px 40.38758087158203px 0px)'],
                text: "Єгипет<br>Домінікана<br>ОАЕ<br>Занзібар",
                align: "center",
                font: ['\'Arial Black\', Gadget, sans-serif', 25, "rgba(241,241,14,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Coral_Travel_logotype_blue',
                type: 'image',
                rect: ['-650px', '-135px','1488px','321px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Coral_Travel_logotype_blue.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['4px', '113px','auto','auto','auto', 'auto'],
                text: "м.Чернівці<br>вул.Небесної сотні 23<br>тел 066 20 155 25",
                font: ['Arial Black, Gadget, sans-serif', 13, "rgba(255,255,255,1.00)", "normal", "none", ""]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_f}": [
                ["style", "top", '-82px'],
                ["transform", "scaleX", '0.05'],
                ["transform", "scaleY", '0.05'],
                ["transform", "rotateZ", '-79deg'],
                ["style", "height", '403px'],
                ["style", "opacity", '0'],
                ["style", "left", '-19px'],
                ["style", "width", '369px']
            ],
            "${_ba}": [
                ["transform", "scaleX", '0.07'],
                ["style", "left", '25px'],
                ["transform", "scaleY", '0.07'],
                ["style", "top", '-211px']
            ],
            "${_bg}": [
                ["style", "top", '-851px'],
                ["style", "height", '1880px'],
                ["style", "left", '-1630px'],
                ["style", "width", '3524px']
            ],
            "${_Coral_Travel_logotype_blue}": [
                ["style", "top", '-135px'],
                ["transform", "scaleY", '0'],
                ["style", "height", '321px'],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '0'],
                ["style", "left", '-650px'],
                ["style", "width", '1488px']
            ],
            "${_Text}": [
                ["transform", "scaleX", '0.3'],
                ["style", "opacity", '0'],
                ["style", "left", '4px'],
                ["style", "font-size", '13px'],
                ["style", "top", '109px'],
                ["transform", "scaleY", '0.175'],
                ["style", "font-family", 'Arial Black, Gadget, sans-serif'],
                ["style", "clip", [0,162,24,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["color", "color", 'rgba(255,255,255,1.00)']
            ],
            "${_Text6}": [
                ["color", "color", 'rgba(241,241,14,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '-3px'],
                ["style", "font-size", '25px'],
                ["style", "top", '37px'],
                ["style", "text-align", 'center'],
                ["style", "height", '142px'],
                ["transform", "scaleY", '0'],
                ["style", "clip", [0,168,1.3876419067382813,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["transform", "scaleX", '0']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '300px'],
                ["style", "height", '180px'],
                ["style", "overflow", 'hidden']
            ],
            "${_t}": [
                ["style", "top", '-195px'],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "height", '550px'],
                ["style", "opacity", '1'],
                ["style", "left", '-908px'],
                ["style", "width", '1977px']
            ],
            "${_TextCopy}": [
                ["style", "top", '109px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["transform", "scaleY", '0.175'],
                ["style", "font-family", 'Arial Black, Gadget, sans-serif'],
                ["transform", "scaleX", '0.3'],
                ["style", "opacity", '0'],
                ["style", "left", '5px'],
                ["style", "font-size", '13px']
            ],
            "${_cl}": [
                ["style", "left", '133px'],
                ["style", "top", '-3px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 12000,
            autoPlay: true,
            timeline: [
                { id: "eid206", tween: [ "transform", "${_Text6}", "scaleX", '0.8', { fromValue: '0'}], position: 6164, duration: 688 },
                { id: "eid208", tween: [ "transform", "${_Text6}", "scaleX", '0', { fromValue: '0.8'}], position: 9750, duration: 1029 },
                { id: "eid71", tween: [ "transform", "${_t}", "scaleY", '0.06', { fromValue: '0'}], position: 1646, duration: 1069 },
                { id: "eid130", tween: [ "transform", "${_t}", "scaleY", '0.08', { fromValue: '0.06'}], position: 5033, duration: 1029 },
                { id: "eid76", tween: [ "style", "${_t}", "opacity", '0', { fromValue: '1'}], position: 5091, duration: 972 },
                { id: "eid94", tween: [ "transform", "${_Coral_Travel_logotype_blue}", "scaleY", '0.12', { fromValue: '0'}], position: 0, duration: 1123 },
                { id: "eid127", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 3500, duration: 1533 },
                { id: "eid69", tween: [ "transform", "${_t}", "scaleX", '0.06', { fromValue: '0'}], position: 1646, duration: 1069 },
                { id: "eid129", tween: [ "transform", "${_t}", "scaleX", '0.08', { fromValue: '0.06'}], position: 5033, duration: 1029 },
                { id: "eid16", tween: [ "style", "${_f}", "left", '-15px', { fromValue: '-19px'}], position: 0, duration: 1328 },
                { id: "eid14", tween: [ "style", "${_f}", "left", '-12px', { fromValue: '-15px'}], position: 1328, duration: 1328 },
                { id: "eid17", tween: [ "style", "${_f}", "left", '22px', { fromValue: '-12px'}], position: 2656, duration: 2656 },
                { id: "eid34", tween: [ "style", "${_f}", "left", '-12px', { fromValue: '22px'}], position: 6641, duration: 2656 },
                { id: "eid42", tween: [ "style", "${_f}", "left", '-15px', { fromValue: '-12px'}], position: 9297, duration: 1328 },
                { id: "eid38", tween: [ "style", "${_f}", "left", '-19px', { fromValue: '-15px'}], position: 10625, duration: 1328 },
                { id: "eid95", tween: [ "style", "${_Coral_Travel_logotype_blue}", "opacity", '1', { fromValue: '0'}], position: 842, duration: 804 },
                { id: "eid117", tween: [ "style", "${_Coral_Travel_logotype_blue}", "opacity", '1', { fromValue: '0'}], position: 9750, duration: 1123 },
                { id: "eid115", tween: [ "style", "${_Coral_Travel_logotype_blue}", "opacity", '0', { fromValue: '1'}], position: 10873, duration: 1123 },
                { id: "eid7", tween: [ "transform", "${_f}", "rotateZ", '-42deg', { fromValue: '-79deg'}], position: 0, duration: 1328 },
                { id: "eid15", tween: [ "transform", "${_f}", "rotateZ", '1deg', { fromValue: '-42deg'}], position: 1328, duration: 1328 },
                { id: "eid19", tween: [ "transform", "${_f}", "rotateZ", '56deg', { fromValue: '1deg'}], position: 2656, duration: 2656 },
                { id: "eid47", tween: [ "transform", "${_f}", "rotateZ", '242deg', { fromValue: '56deg'}], position: 5313, duration: 529 },
                { id: "eid50", tween: [ "transform", "${_f}", "rotateZ", '188deg', { fromValue: '242deg'}], position: 6456, duration: 2686 },
                { id: "eid51", tween: [ "transform", "${_f}", "rotateZ", '116deg', { fromValue: '188deg'}], position: 9142, duration: 2812 },
                { id: "eid242", tween: [ "style", "${_Text6}", "clip", [0,168,145.3875732421875,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,168,1.3876419067382813,0]}], position: 7106, duration: 2036 },
                { id: "eid137", tween: [ "style", "${_Text}", "clip", [0,162,54,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,162,24,0]}], position: 3500, duration: 1533 },
                { id: "eid217", tween: [ "style", "${_Text6}", "opacity", '1', { fromValue: '0'}], position: 5842, duration: 972 },
                { id: "eid239", tween: [ "style", "${_Text6}", "opacity", '0', { fromValue: '1'}], position: 9750, duration: 972 },
                { id: "eid83", tween: [ "transform", "${_Text}", "scaleY", '1', { fromValue: '0.175'}], position: 3500, duration: 1108 },
                { id: "eid86", tween: [ "transform", "${_Text}", "scaleY", '0', { fromValue: '1'}], position: 6351, duration: 755 },
                { id: "eid55", tween: [ "style", "${_ba}", "top", '-253px', { fromValue: '-211px'}], position: 0, duration: 2201 },
                { id: "eid124", tween: [ "style", "${_ba}", "top", '-293px', { fromValue: '-253px'}], position: 2201, duration: 2779 },
                { id: "eid56", tween: [ "style", "${_ba}", "top", '-211px', { fromValue: '-293px'}], position: 4981, duration: 7019 },
                { id: "eid135", tween: [ "style", "${_f}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1043 },
                { id: "eid44", tween: [ "style", "${_f}", "opacity", '0', { fromValue: '1'}], position: 4250, duration: 1043 },
                { id: "eid46", tween: [ "style", "${_f}", "opacity", '1', { fromValue: '0'}], position: 6456, duration: 1043 },
                { id: "eid53", tween: [ "style", "${_f}", "opacity", '0', { fromValue: '1'}], position: 10957, duration: 1043 },
                { id: "eid92", tween: [ "transform", "${_Coral_Travel_logotype_blue}", "scaleX", '0.12', { fromValue: '0'}], position: 0, duration: 1123 },
                { id: "eid4", tween: [ "style", "${_f}", "top", '-104px', { fromValue: '-82px'}], position: 0, duration: 1328 },
                { id: "eid13", tween: [ "style", "${_f}", "top", '-121px', { fromValue: '-104px'}], position: 1328, duration: 873 },
                { id: "eid125", tween: [ "style", "${_f}", "top", '-123px', { fromValue: '-121px'}], position: 2201, duration: 455 },
                { id: "eid18", tween: [ "style", "${_f}", "top", '-134px', { fromValue: '-123px'}], position: 2656, duration: 2656 },
                { id: "eid35", tween: [ "style", "${_f}", "top", '-123px', { fromValue: '-134px'}], position: 6641, duration: 2656 },
                { id: "eid43", tween: [ "style", "${_f}", "top", '-104px', { fromValue: '-123px'}], position: 9297, duration: 1328 },
                { id: "eid39", tween: [ "style", "${_f}", "top", '-84px', { fromValue: '-104px'}], position: 10625, duration: 1328 },
                { id: "eid81", tween: [ "transform", "${_Text}", "scaleX", '0.9', { fromValue: '0.3'}], position: 3500, duration: 1108 },
                { id: "eid87", tween: [ "transform", "${_Text}", "scaleX", '0', { fromValue: '0.9'}], position: 6351, duration: 755 },
                { id: "eid214", tween: [ "transform", "${_Text6}", "scaleY", '0.8', { fromValue: '0'}], position: 6164, duration: 688 },
                { id: "eid216", tween: [ "transform", "${_Text6}", "scaleY", '0', { fromValue: '0.8'}], position: 9750, duration: 1029 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-15526204");
