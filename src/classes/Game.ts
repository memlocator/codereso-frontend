import {BoxGeometry, MeshBasicMaterial, Mesh, OrthographicCamera, Scene, WebGLRenderer, Camera, GridHelper, Vector3, PerspectiveCamera} from 'three';

export class Game {
    scene: Scene
    camera: Camera
    renderer: WebGLRenderer

    constructor() {
        this.scene = new Scene();
        this.camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);//OrthographicCamera(window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2, 1, 1000 ); 

        var canvas = document.getElementById("maincanvas");
        this.renderer = new WebGLRenderer({canvas: canvas});
        this.renderer.setSize(window.outerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);
        this.scene.add(new GridHelper(10, 10))
        this.camera.position.set(0, 1, 10)

        //Vector2
    }
}



// const scene = new Scene();
// const camera = new OrthographicCamera(window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2, 1, 1000 ); //THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// const renderer = new WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// const geometry = new BoxGeometry(1, 1, 1);
// const material = new MeshBasicMaterial({ color: 0x00ff00 });
// const cube = new Mesh(geometry, material);
// scene.add(cube);

// camera.position.z = 5;

