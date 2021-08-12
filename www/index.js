import { Universe } from "wasm-game-of-life";

const pre = document.getElementById("game-of-life-canvas");
const universe = Universe.new();

const renderLoop = () => {
    pre.textContent = universe.render();
    universe.tick();

    // レンダリングプロセスを開始する
    requestAnimationFrame(renderLoop);
};

requestAnimationFrame(renderLoop);
// wasm.greet("Web Assembly");
