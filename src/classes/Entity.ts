import { BoxGeometry, Material, Mesh, MeshBasicMaterial, Scene } from "three";

export class Entity {
    id: string;
    geometry: BoxGeometry
    material: Material
    mesh: Mesh

    constructor(id: string, scene: Scene) {
        this.id = id

        this.geometry = new BoxGeometry(1, 1, 1);
        this.material = new MeshBasicMaterial({ color: 0x00ff00 });
        this.mesh = new Mesh(this.geometry, this.material);
        scene.add(this.mesh);
    }
}