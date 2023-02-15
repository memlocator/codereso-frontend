
import { Euler, Vector3 } from "three";
import { radToDeg } from "three/src/math/MathUtils";
import {Entity} from "./classes/Entity"
import {Game} from "./classes/Game"

// const socket = new WebSocket('wss://localhost:7243');
const socket = new WebSocket('ws://localhost:5000');

const game = new Game()
var entities = new Array(); 

// Connection opened
socket.addEventListener('open', (event) => {
    socket.send('Hello Server!');
});

// Listen for messages
socket.addEventListener('message', (event) => {
    let data = JSON.parse(event.data)
    // console.log('Message from server ', data);
    data.hasProperty

    if (data["type"]) {
      // console.log(data["type"])
      const type = data["type"]
      
      switch(type) { 
        case "NewEntityEvent": { 
           //statements; 
          console.log("Create new entity event")
          const entityData = data["entity"]

          const entity = new Entity(entityData["id"], game.scene)
          entities.push(entity)
          break; 
        } 
        case "UpdateEntityEvent": { 
          console.log("Update entity event", data)
          const entityData = data["entity"]
          let entityID = Number(entityData["id"])
          let realEntity = getEntityByID(entityID)

          let x = entityData["transform"]["position"]["x"]
          let y = entityData["transform"]["position"]["y"]
          realEntity.mesh.position.set(x, y, 0);

          let rotation = entityData["transform"]["rotation"]
          realEntity.mesh.rotation.set(0, 0, rotation)//rotateOnAxis(new Vector3(0, 0, 1), rotation)
          break; 
        } 
        case "DestroyedEntityEvent": {
          console.log("Destroy entity event")
          break;
        }
        default: { 
           //statements; 
           break; 
        } 
     } 
    }
    //entity.mesh.position.set(data["x"], 0, 0)
    //entity.mesh.scale.set(data["scale"]["x"], data["scale"]["y"], 0)
    //entity.mesh.position.set(data["position"]["x"], data["position"]["y"], 0)
    //entity.mesh.setRotationFromAxisAngle(new Vector3(0, 0, 1), radToDeg(data["rotation"]))
});

function getEntityByID(id : Number) : Entity
{
  let foundEntity : Entity  = null;
  entities.forEach(entityItem => {
    if (id == entityItem.id){
      foundEntity = entityItem
    }
  });

  return foundEntity;
}

function animate() {
  requestAnimationFrame(animate);

  game.renderer.render(game.scene, game.camera);
};

animate();
