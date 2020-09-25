'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var barX = CLOUD_X + (GAP * 5);
var basicColor = '#000';

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
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = basicColor;

  var maxTime = getMaxElement(times);

  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 130, 40);
  ctx.fillText('Список результатов:', 130, 60);

  for (var i = 0; i < names.length; i++) {

    var barY = (-BAR_HEIGHT * times[i]) / maxTime;

    ctx.fillStyle = basicColor;

    ctx.fillText(names[i], barX + ((GAP * 5) + BAR_WIDTH) * i, CLOUD_Y * 26);

    var colorBar = names[i] === 'Вы' ? ctx.fillStyle = 'hsl(0, 100%, 50%)' : ctx.fillStyle = 'hsl(240, ' + getRandom(100) + '%, 50%)';
    ctx.fillStyle = colorBar;
    ctx.fillRect(barX + ((GAP * 5) + BAR_WIDTH) * i, CLOUD_Y * 24, BAR_WIDTH, barY);

    ctx.fillStyle = basicColor;

    ctx.fillText(Math.round(times[i]), barX + ((GAP * 5) + BAR_WIDTH) * i, barY + (GAP * 23));
  }
};
