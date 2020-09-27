'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var TITLE_X = 130;
var TITLE_Y = 40;
var NAME_Y = 260;
var BAR_X = CLOUD_X + (GAP * 5);
var BAR_Y = 240;
var BAR_GAP = ((GAP * 5) + BAR_WIDTH);
var TIME_Y = (GAP * 23);
var basicColor = '#000';
var cloudColor = '#fff';
var shadowColor = 'rgba(0, 0, 0, 0.7)';

var getRandom = (number) => {
  return Math.ceil(Math.random() * number);
};

var renderCloud = (ctx, x, y, color) => {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = (arr) => {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = (ctx, names, times) => {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, shadowColor);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, cloudColor);

  ctx.fillStyle = basicColor;

  var maxTime = getMaxElement(times);

  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', TITLE_X, TITLE_Y);
  ctx.fillText('Список результатов:', TITLE_X, TITLE_Y + GAP + GAP);

  for (var i = 0; i < names.length; i++) {

    var barH = (-BAR_HEIGHT * times[i]) / maxTime;

    ctx.fillStyle = basicColor;

    ctx.fillText(names[i], BAR_X + BAR_GAP * i, NAME_Y);

    var colorBar = names[i] === 'Вы' ? 'hsl(0, 100%, 50%)' : 'hsl(240, ' + getRandom(100) + '%, 50%)';
    ctx.fillStyle = colorBar;
    ctx.fillRect(BAR_X + BAR_GAP * i, BAR_Y, BAR_WIDTH, barH);

    ctx.fillStyle = basicColor;

    ctx.fillText(Math.round(times[i]), BAR_X + BAR_GAP * i, barH + TIME_Y);
  }
};
