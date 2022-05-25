const app = new PIXI.Application({
  width: 208, height: 299, backgroundColor: 0xd7d7d7, resolution: window.devicePixelRatio || 1,
});

const renderer = PIXI.autoDetectRenderer(208, 299, {preserveDrawingBuffer: true});
document.body.appendChild(app.view);

const container = new PIXI.Container();
const captureList = document.getElementById('captureList')

app.stage.addChild(container);
const DIR = 'https://raw.githubusercontent.com/KazuyaAoyagi/GenerativeArtGenrator/main/images/'

let num = 0
return
setInterval(() => {
  container.removeChildren()
  num = Math.floor(Math.random() * 3) + 1
  let skin = new PIXI.Sprite.from(`${DIR}skin_${num}.png?v=11`, {
    resourceOptions: {
      crossorigin: 'anonymous'
    }
  });
  num = Math.floor(Math.random() * 3) + 1
  let eye = new PIXI.Sprite.from(`${DIR}eye_${num}.png?v=11`, {
    resourceOptions: {
      crossorigin: 'anonymous'
    }
  });
  num = Math.floor(Math.random() * 3) + 1
  let nose = new PIXI.Sprite.from(`${DIR}nose_${num}.png?v=11`, {
    resourceOptions: {
      crossorigin: 'anonymous'
    }
  });

  num = Math.floor(Math.random() * 3) + 1
  let mouse = new PIXI.Sprite.from(`${DIR}mouse_${num}.png?v=11`, {
    resourceOptions: {
      crossorigin: 'anonymous'
    }
  });

  num = Math.floor(Math.random() * 3) + 1
  let head = new PIXI.Sprite.from(`${DIR}head_${num}.png?v=11`, {
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

  var imgUrl = renderer.view.toDataURL("image/png");
  document.getElementById('captureImg').src = imgUrl.replace("image/png", "image/octet-stream")
  // renderer.render(stage);
}, 1000)