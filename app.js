import { Application } from 'https://esm.sh/@splinetool/runtime';

// ── Spline 3D Scene ───────────────────────────────────────────────────────────
const canvas = document.getElementById('canvas3d');
const loader = document.getElementById('spline-loader');

if (canvas) {
    const spline = new Application(canvas);
    spline.load('https://prod.spline.design/i99U9K63An9pGv9m/scene.splinecode')
        .then(() => {
            if (loader) {
                loader.style.opacity = '0';
                setTimeout(() => { loader.style.display = 'none'; }, 400);
            }
        })
        .catch(() => {
            // fallback: show a subtle pulsing gradient instead
            if (loader) loader.innerHTML = `
                <div style="width:200px;height:200px;border-radius:50%;
                background:radial-gradient(circle,rgba(212,255,0,0.15),transparent 70%);
                animation:spin 6s linear infinite;"></div>
                <span>3D Scene Ready</span>`;
        });
}

