const app = new PIXI.Application();
const graphics = new PIXI.Graphics();

app.renderer.autoResize = true;
app.renderer.resize(innerWidth, innerHeight);

graphics.beginFill(0x00ff00);
graphics.drawCircle(innerWidth / 2.5, innerHeight / 2, 200);
graphics.endFill();

const drawingUsingNativeCanvas = () => {
  const canvas = document.createElement('canvas');
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  const canvasContext = canvas.getContext('2d');
  canvasContext.beginPath();
  canvasContext.fillStyle = 'blue';
  canvasContext.arc(innerWidth / 1.6, innerHeight / 2, 200, 0, 2 * Math.PI);
  canvasContext.fill();

  canvasContext.font = "30px Arial";
  canvasContext.shadowColor = "black";
  canvasContext.shadowBlur = 4;
  canvasContext.lineWidth = 3;
  canvasContext.textAlign = 'center';
  canvasContext.strokeText("Cell drawn using canvas", innerWidth / 1.6, 500);
  canvasContext.shadowBlur = 0;
  canvasContext.fillStyle = "white";
  canvasContext.fillText("Cell drawn using canvas", innerWidth / 1.6, 500);

  return canvas;
}

const texture = PIXI.Texture.fromCanvas(drawingUsingNativeCanvas());
const fg = new PIXI.Sprite(texture);

const style = new PIXI.TextStyle({
    fill: "white",
    fontFamily: "Arial",
    lineJoin: "bevel",
    align: 'center',
    fontSize: 30,
    strokeThickness: 3
});

const text = new PIXI.Text('Cell drawn using PixiJS', style);
text.x = innerWidth / 2.5;
text.y = 490;
text.anchor.set(0.5);

const container = app.stage.addChild(graphics, fg, text);
app.renderer.render(container);

document.body.appendChild(app.view);
