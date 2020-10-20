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
                id: 'logo2',
                type: 'image',
                rect: ['-6px', '-6px','341px','196px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"logo2.png",'0px','0px']
            },
            {
                id: '_0',
                type: 'image',
                rect: ['-48px', '-24px','405px','228px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"0.png",'0px','0px'],
                transform: [[],[],[],['0.79','0.79']]
            },
            {
                id: '_1',
                type: 'image',
                rect: ['-23px', '-6px','425px','193px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"1.png",'0px','0px'],
                transform: [[],[],[],['0.97','0.97']]
            },
            {
                id: '_2',
                type: 'image',
                rect: ['-43px', '-13px','425px','206px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"2.png",'0px','0px'],
                transform: [[],[],[],['0.9','0.9']]
            },
            {
                id: '_3',
                type: 'image',
                rect: ['-72px', '-18px','425px','210px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"3.png",'0px','0px'],
                transform: [[],[],[],['0.9','0.9']]
            },
            {
                id: '_4',
                type: 'image',
                rect: ['-24px', '-13px','365px','210px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"4.png",'0px','0px'],
                transform: [[],[],[],['0.9','0.9']]
            },
            {
                id: '_12',
                type: 'image',
                rect: ['-2854px', '-196px','5850px','610px','auto', 'auto'],
                clip: ['rect(0px 3712.5px 610px 2137.5px)'],
                fill: ["rgba(0,0,0,0)",im+"1.svg",'0px','0px'],
                transform: [[],[],[],['0.08','0.08']]
            },
            {
                id: '_42',
                type: 'image',
                rect: ['-720px', '-123px','1680px','560px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"4.svg",'0px','0px'],
                transform: [[],[],[],['0.04','0.04']]
            },
            {
                id: '_5',
                type: 'image',
                rect: ['-1823px', '-137px','4050px','570px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"5.svg",'0px','0px'],
                transform: [[],[],[],['0.04','0.04']]
            },
            {
                id: 'logo',
                type: 'image',
                rect: ['-9px', '-10px','201px','97px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"logo.png",'0px','0px']
            },
            {
                id: '_22',
                type: 'image',
                rect: ['-1333px', '-274px','3130px','590px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"2.svg",'0px','0px'],
                transform: [[],[],[],['0.04','0.04']]
            },
            {
                id: '_32',
                type: 'image',
                rect: ['-2768px', '-239px','5790px','650px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"3.svg",'0px','0px'],
                transform: [[],[],[],['0.04','0.04']]
            },
            {
                id: 't',
                type: 'image',
                rect: ['-1122px', '-304px','2550px','854px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"t.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${__32}": [
                ["style", "top", '-225px'],
                ["transform", "scaleY", '0.04'],
                ["transform", "scaleX", '0.04'],
                ["style", "opacity", '0'],
                ["style", "left", '-2768px']
            ],
            "${_logo}": [
                ["style", "top", '-10px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '97px'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '-9px'],
                ["style", "width", '201px']
            ],
            "${__22}": [
                ["style", "top", '-260px'],
                ["transform", "scaleY", '0.04'],
                ["transform", "scaleX", '0.04'],
                ["style", "opacity", '0'],
                ["style", "left", '-1333px']
            ],
            "${__4}": [
                ["style", "top", '-13px'],
                ["transform", "scaleY", '0.9'],
                ["style", "height", '210px'],
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["style", "left", '-24px'],
                ["style", "width", '365px']
            ],
            "${__3}": [
                ["style", "top", '-18px'],
                ["transform", "scaleY", '0.9'],
                ["style", "height", '210px'],
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["style", "left", '-72px'],
                ["style", "width", '425px']
            ],
            "${__2}": [
                ["style", "top", '-13px'],
                ["transform", "scaleY", '0.9'],
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["style", "left", '-43px']
            ],
            "${__12}": [
                ["style", "top", '-182px'],
                ["transform", "scaleY", '0.08'],
                ["transform", "scaleX", '0.08'],
                ["style", "opacity", '0'],
                ["style", "left", '-2854px'],
                ["style", "clip", [0,3712.5,610,2137.5], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${__0}": [
                ["style", "top", '-24px'],
                ["transform", "scaleY", '0.79'],
                ["style", "height", '228px'],
                ["transform", "scaleX", '0.79'],
                ["style", "opacity", '1'],
                ["style", "left", '-48px'],
                ["style", "width", '405px']
            ],
            "${__1}": [
                ["style", "top", '-6px'],
                ["transform", "scaleY", '0.97'],
                ["transform", "scaleX", '0.97'],
                ["style", "opacity", '0'],
                ["style", "left", '-23px']
            ],
            "${__5}": [
                ["style", "top", '-125px'],
                ["transform", "scaleY", '0.04'],
                ["transform", "scaleX", '0.04'],
                ["style", "opacity", '0'],
                ["style", "left", '-1823px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '300px'],
                ["style", "height", '180px'],
                ["style", "overflow", 'hidden']
            ],
            "${_t}": [
                ["style", "top", '-304px'],
                ["style", "left", '-1122px'],
                ["style", "height", '854px'],
                ["style", "opacity", '0'],
                ["style", "clip", [0,2550,294,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '2550px']
            ],
            "${_logo2}": [
                ["style", "top", '-6px'],
                ["style", "height", '196px'],
                ["style", "opacity", '0'],
                ["style", "left", '-6px'],
                ["style", "width", '341px']
            ],
            "${__42}": [
                ["style", "top", '-110px'],
                ["transform", "scaleY", '0.04'],
                ["transform", "scaleX", '0.04'],
                ["style", "opacity", '0'],
                ["style", "left", '-719px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 20000,
            autoPlay: true,
            timeline: [
                { id: "eid69", tween: [ "transform", "${_logo}", "scaleY", '0.6', { fromValue: '1'}], position: 3040, duration: 250 },
                { id: "eid54", tween: [ "style", "${__32}", "opacity", '1', { fromValue: '0'}], position: 12250, duration: 250 },
                { id: "eid55", tween: [ "style", "${__32}", "opacity", '0', { fromValue: '1'}], position: 14710, duration: 250 },
                { id: "eid50", tween: [ "style", "${__42}", "opacity", '1', { fromValue: '0'}], position: 6204, duration: 250 },
                { id: "eid51", tween: [ "style", "${__42}", "opacity", '0', { fromValue: '1'}], position: 8664, duration: 250 },
                { id: "eid88", tween: [ "style", "${_t}", "clip", [0,2550,854,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,2550,294,0]}], position: 15460, duration: 2210 },
                { id: "eid90", tween: [ "style", "${__12}", "top", '-196px', { fromValue: '-182px'}], position: 500, duration: 250 },
                { id: "eid92", tween: [ "style", "${__5}", "top", '-137px', { fromValue: '-125px'}], position: 3290, duration: 86 },
                { id: "eid29", tween: [ "style", "${__2}", "opacity", '1', { fromValue: '0'}], position: 9000, duration: 250 },
                { id: "eid30", tween: [ "style", "${__2}", "opacity", '0', { fromValue: '1'}], position: 11750, duration: 250 },
                { id: "eid48", tween: [ "style", "${__5}", "opacity", '1', { fromValue: '0'}], position: 3290, duration: 166 },
                { id: "eid49", tween: [ "style", "${__5}", "opacity", '0', { fromValue: '1'}], position: 5750, duration: 250 },
                { id: "eid84", tween: [ "style", "${_t}", "opacity", '1', { fromValue: '0'}], position: 15210, duration: 250 },
                { id: "eid85", tween: [ "style", "${_t}", "opacity", '0', { fromValue: '1'}], position: 19750, duration: 250 },
                { id: "eid70", tween: [ "style", "${_logo}", "left", '-50px', { fromValue: '-9px'}], position: 3040, duration: 250 },
                { id: "eid100", tween: [ "style", "${__32}", "top", '-239px', { fromValue: '-225px'}], position: 12250, duration: 121 },
                { id: "eid82", tween: [ "style", "${_logo2}", "opacity", '1', { fromValue: '0'}], position: 14960, duration: 250 },
                { id: "eid83", tween: [ "style", "${_logo2}", "opacity", '0', { fromValue: '1'}], position: 19750, duration: 250 },
                { id: "eid98", tween: [ "style", "${__22}", "top", '-274px', { fromValue: '-260px'}], position: 9250, duration: 125 },
                { id: "eid96", tween: [ "style", "${__42}", "top", '-123px', { fromValue: '-110px'}], position: 6204, duration: 122 },
                { id: "eid27", tween: [ "style", "${__3}", "opacity", '1', { fromValue: '0'}], position: 5954, duration: 250 },
                { id: "eid28", tween: [ "style", "${__3}", "opacity", '0', { fromValue: '1'}], position: 8750, duration: 250 },
                { id: "eid64", tween: [ "style", "${_logo}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 250 },
                { id: "eid65", tween: [ "style", "${_logo}", "opacity", '0', { fromValue: '1'}], position: 2750, duration: 250 },
                { id: "eid66", tween: [ "style", "${_logo}", "opacity", '1', { fromValue: '0'}], position: 3250, duration: 250 },
                { id: "eid67", tween: [ "style", "${_logo}", "opacity", '0', { fromValue: '1'}], position: 5750, duration: 250 },
                { id: "eid72", tween: [ "style", "${_logo}", "opacity", '1', { fromValue: '0'}], position: 6204, duration: 250 },
                { id: "eid73", tween: [ "style", "${_logo}", "opacity", '0', { fromValue: '1'}], position: 8704, duration: 250 },
                { id: "eid76", tween: [ "style", "${_logo}", "opacity", '1', { fromValue: '0'}], position: 9250, duration: 250 },
                { id: "eid77", tween: [ "style", "${_logo}", "opacity", '0', { fromValue: '1'}], position: 11750, duration: 250 },
                { id: "eid80", tween: [ "style", "${_logo}", "opacity", '1', { fromValue: '0'}], position: 12250, duration: 250 },
                { id: "eid81", tween: [ "style", "${_logo}", "opacity", '0', { fromValue: '1'}], position: 14750, duration: 250 },
                { id: "eid71", tween: [ "style", "${_logo}", "top", '-23px', { fromValue: '-10px'}], position: 3040, duration: 250 },
                { id: "eid52", tween: [ "style", "${__22}", "opacity", '1', { fromValue: '0'}], position: 9250, duration: 250 },
                { id: "eid53", tween: [ "style", "${__22}", "opacity", '0', { fromValue: '1'}], position: 11710, duration: 250 },
                { id: "eid46", tween: [ "style", "${__12}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 250 },
                { id: "eid47", tween: [ "style", "${__12}", "opacity", '0', { fromValue: '1'}], position: 2750, duration: 250 },
                { id: "eid31", tween: [ "style", "${__1}", "opacity", '1', { fromValue: '0'}], position: 12000, duration: 250 },
                { id: "eid32", tween: [ "style", "${__1}", "opacity", '0', { fromValue: '1'}], position: 14750, duration: 250 },
                { id: "eid8", tween: [ "style", "${__0}", "opacity", '0', { fromValue: '1'}], position: 2750, duration: 250 },
                { id: "eid25", tween: [ "style", "${__4}", "opacity", '1', { fromValue: '0'}], position: 3040, duration: 250 },
                { id: "eid26", tween: [ "style", "${__4}", "opacity", '0', { fromValue: '1'}], position: 5704, duration: 250 },
                { id: "eid68", tween: [ "transform", "${_logo}", "scaleX", '0.6', { fromValue: '1'}], position: 3040, duration: 250 }            ]
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
})(jQuery, AdobeEdge, "EDGE-7838920");
