const app = new PIXI.Application({
  width: 208, height: 299, backgroundColor: 0x1099bb, resolution: window.devicePixelRatio || 1,
});
document.body.appendChild(app.view);

const container = new PIXI.Container();

app.stage.addChild(container);

const bunny = new PIXI.Sprite.from('./image/head_1.png', {
  resourceOptions: {
    crossorigin: 'anonymous'
  }
});

bunny.anchor.set(0.5);
container.addChild(bunny);