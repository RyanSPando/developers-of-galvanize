(function () {

  'use strict';

//Create the renderer
var renderer = PIXI.autoDetectRenderer(1200, 1200);
//Add the canvas to the HTML document
document.body.appendChild(renderer.view);
//Create a container object called the `stage`
var stage = new PIXI.Container();
//Tell the `renderer` to `render` the `stage`
var graphics = new PIXI.Graphics();
//----- First Row -----//
//top left hexagon
graphics.beginFill(0x277f00);
graphics.drawPolygon([390, 75,//starting point x,y
                      290, 125,//left top first line x,y
                      290, 250,//left side line x,y
                      390, 300,//left bottom line x,y
                      490, 250,//right bottom line x,y
                      490, 125//right side line x,
                    ]);
graphics.endFill();
//middle hexagon
graphics.beginFill(0x277f00);
graphics.drawPolygon([600, 75,//starting point x,y
                      500, 125,//left top first line x,y
                      500, 250,//left side line x,y
                      600, 300,//left bottom line x,y
                      700, 250,//right bottom line x,y
                      700, 125//right side line x,
                    ]);
graphics.endFill();
//right hexagon
graphics.beginFill(0x277f00);
graphics.drawPolygon([810, 75,//starting point x,y
                      710, 125,//left top first line x,y
                      710, 250,//left side line x,y
                      810, 300,//left bottom line x,y
                      910, 250,//right bottom line x,y
                      910, 125//right side line x,
                    ]);
graphics.endFill();
//-----End First Row -----//

//-----Second Row -----//
//left hexagon
graphics.beginFill(0x277f00);
graphics.drawPolygon([285, 260,//starting point x,y
                      185, 310,//left top first line x,y
                      185, 435,//left side line x,y
                      285, 485,//left bottom line x,y
                      385, 435,//right bottom line x,y
                      385, 310//right side line x,
                    ]);
graphics.endFill();
//left center
graphics.beginFill(0x277f00);
graphics.drawPolygon([495, 260,//starting point x,y
                      395, 310,//left top first line x,y
                      395, 435,//left side line x,y
                      495, 485,//left bottom line x,y
                      595, 435,//right bottom line x,y
                      595, 310//right side line x,
                    ]);
graphics.endFill();
//right center
graphics.beginFill(0x277f00);
graphics.drawPolygon([705, 260,//starting point x,y
                      605, 310,//left top first line x,y
                      605, 435,//left side line x,y
                      705, 485,//left bottom line x,y
                      805, 435,//right bottom line x,y
                      805, 310//right side line x,
                    ]);
graphics.endFill();
//right
graphics.beginFill(0x277f00);
graphics.drawPolygon([915, 260,//starting point x,y
                      815, 310,//left top first line x,y
                      815, 435,//left side line x,y
                      915, 485,//left bottom line x,y
                      1015, 435,//right bottom line x,y
                      1015, 310//right side line x,
                    ]);
graphics.endFill();
//-----End Second Row-----//

//-----Third Row-----//
//left hexagon
graphics.beginFill(0x277f00);
graphics.drawPolygon([180, 445,//starting point x,y
                      80, 495,//left top first line x,y
                      80, 620,//left side line x,y
                      180, 670,//left bottom line x,y
                      280, 620,//right bottom line x,y
                      280, 495//right side line x,
                    ]);
graphics.endFill();
//left center hexagon
graphics.beginFill(0x277f00);
graphics.drawPolygon([390, 445,//starting point x,y
                      290, 495,//left top first line x,y
                      290, 620,//left side line x,y
                      390, 670,//left bottom line x,y
                      490, 620,//right bottom line x,y
                      490, 495//right side line x,
                    ]);
graphics.endFill();
//center hexagon
graphics.beginFill(0x277f00);
graphics.drawPolygon([600, 445,//starting point x,y
                      500, 495,//left top first line x,y
                      500, 620,//left side line x,y
                      600, 670,//left bottom line x,y
                      700, 620,//right bottom line x,y
                      700, 495//right side line x,
                    ]);
graphics.endFill();
//right center hexagon
graphics.beginFill(0x277f00);
graphics.drawPolygon([810, 445,//starting point x,y
                      710, 495,//left top first line x,y
                      710, 620,//left side line x,y
                      810, 670,//left bottom line x,y
                      910, 620,//right bottom line x,y
                      910, 495//right side line x,
                    ]);
graphics.endFill();
//right hexagon
graphics.beginFill(0x277f00);
graphics.drawPolygon([1020, 445,//starting point x,y
                      920, 495,//left top first line x,y
                      920, 620,//left side line x,y
                      1020, 670,//left bottom line x,y
                      1120, 620,//right bottom line x,y
                      1120, 495//right side line x,
                    ]);
graphics.endFill();
//-----End Third Row-----//

//-----Fourth Row-----//
//left hexagon
graphics.beginFill(0x277f00);
graphics.drawPolygon([285, 630,//starting point x,y
                      185, 680,//left top first line x,y
                      185, 805,//left side line x,y
                      285, 855,//left bottom line x,y
                      385, 805,//right bottom line x,y
                      385, 680//right side line x,
                    ]);
graphics.endFill();
//left center hexagon
graphics.beginFill(0x277f00);
graphics.drawPolygon([495, 630,//starting point x,y
                      395, 680,//left top first line x,y
                      395, 805,//left side line x,y
                      495, 855,//left bottom line x,y
                      595, 805,//right bottom line x,y
                      595, 680//right side line x,
                    ]);
graphics.endFill();
//right center hexagon
graphics.beginFill(0x277f00);
graphics.drawPolygon([705, 630,//starting point x,y
                      605, 680,//left top first line x,y
                      605, 805,//left side line x,y
                      705, 855,//left bottom line x,y
                      805, 805,//right bottom line x,y
                      805, 680//right side line x,
                    ]);
graphics.endFill();
//right hexagon
graphics.beginFill(0x277f00);
graphics.drawPolygon([915, 630,//starting point x,y
                      815, 680,//left top first line x,y
                      815, 805,//left side line x,y
                      915, 855,//left bottom line x,y
                      1015, 805,//right bottom line x,y
                      1015, 680//right side line x,
                    ]);
graphics.endFill();
//-----End Fourth Row-----//

//-----Fifth Row-----//
//left hexagon
graphics.beginFill(0x277f00);
graphics.drawPolygon([390, 815,//starting point x,y
                      290, 865,//left top first line x,y
                      290, 990,//left side line x,y
                      390, 1040,//left bottom line x,y
                      490, 990,//right bottom line x,y
                      490, 865//right side line x,
                    ]);
graphics.endFill();
//center hexagon
graphics.beginFill(0x277f00);
graphics.drawPolygon([600, 815,//starting point x,y
                      500, 865,//left top first line x,y
                      500, 990,//left side line x,y
                      600, 1040,//left bottom line x,y
                      700, 990,//right bottom line x,y
                      700, 865//right side line x,
                    ]);
graphics.endFill();
//right hexagon
graphics.beginFill(0x277f00);
graphics.drawPolygon([810, 815,//starting point x,y
                      710, 865,//left top first line x,y
                      710, 990,//left side line x,y
                      810, 1040,//left bottom line x,y
                      910, 990,//right bottom line x,y
                      910, 865//right side line x,
                    ]);
graphics.endFill();
//-----End Fifth Row-----//

//Add the graphics to the stage
stage.addChild(graphics);
renderer.backgroundColor = 0x6153255;
renderer.render(stage);

})();
