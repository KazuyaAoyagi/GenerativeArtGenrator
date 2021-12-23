const app = new PIXI.Application({
  width: 208, height: 299, backgroundColor: 0x1099bb, resolution: window.devicePixelRatio || 1,
});
document.body.appendChild(app.view);

const container = new PIXI.Container();

app.stage.addChild(container);
const DIR = 'https://raw.githubusercontent.com/KazuyaAoyagi/GenerativeArtGenrator/main/images/'

let num = 0
setInterval(() => {
  container.removeChildren()
  num = Math.floor(Math.random() * 4)
  let skin = new PIXI.Sprite.from(`${DIR}skin_${num === 0 ? 1:num}.png`, {
    resourceOptions: {
      crossorigin: 'anonymous'
    }
  });
  num = Math.floor(Math.random() * 4)
  let eye = new PIXI.Sprite.from(`${DIR}eye_${num === 0 ? 1:num}.png`, {
    resourceOptions: {
      crossorigin: 'anonymous'
    }
  });
  num = Math.floor(Math.random() * 4)
  let nose = new PIXI.Sprite.from(`${DIR}nose_${num === 0 ? 1:num}.png`, {
    resourceOptions: {
      crossorigin: 'anonymous'
    }
  });

  num = Math.floor(Math.random() * 4)
  let mouse = new PIXI.Sprite.from(`${DIR}mouse_${num === 0 ? 1:num}.png`, {
    resourceOptions: {
      crossorigin: 'anonymous'
    }
  });

  num = Math.floor(Math.random() * 4)
  let head = new PIXI.Sprite.from(`${DIR}head_${num === 0 ? 1:num}.png`, {
    resourceOptions: {
      crossorigin: 'anonymous'
    }
  });

  head.scale.x = 0.5
  head.scale.y = 0.5
  head.anchor.set(0,0)

  mouse.scale.x = 0.5
  mouse.scale.y = 0.5
  mouse.anchor.set(0, 0);

  nose.scale.x = 0.5
  nose.scale.y = 0.5
  nose.anchor.set(0, 0);

  skin.scale.x = 0.5
  skin.scale.y = 0.5
  skin.anchor.set(0, 0);

  eye.scale.x = 0.5
  eye.scale.y = 0.5
  eye.anchor.set(0, 0);
  container.addChild(skin);
  container.addChild(eye);
  container.addChild(nose)
  container.addChild(mouse)
  container.addChild(head)
}, 100)