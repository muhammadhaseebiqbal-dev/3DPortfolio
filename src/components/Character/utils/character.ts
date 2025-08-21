import * as THREE from "three";
import { DRACOLoader, GLTF, GLTFLoader } from "three-stdlib";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll";
import { decryptFile } from "./decrypt";

const setCharacter = (
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera
) => {
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco/");
  loader.setDRACOLoader(dracoLoader);

  const loadCharacter = () => {
    return new Promise<GLTF | null>(async (resolve, reject) => {
      try {
        const encryptedBlob = await decryptFile(
          "/models/character.enc",
          "Character3D#@"
        );
        const blobUrl = URL.createObjectURL(new Blob([encryptedBlob]));

        let character: THREE.Object3D;
        loader.load(
          blobUrl,
          async (gltf) => {
            character = gltf.scene;
            await renderer.compileAsync(character, camera, scene);
            character.traverse((child: any) => {
              if (child.isMesh) {
                const mesh = child as THREE.Mesh;
                child.castShadow = true;
                child.receiveShadow = true;
                // Keep frustum culling disabled for better quality
                mesh.frustumCulled = false;
                
                // Enhance texture quality
                if (mesh.material) {
                  if (Array.isArray(mesh.material)) {
                    mesh.material.forEach((mat: any) => {
                      if (mat.map) {
                        mat.map.anisotropy = renderer.capabilities.getMaxAnisotropy();
                        mat.map.generateMipmaps = true;
                        mat.map.minFilter = THREE.LinearMipmapLinearFilter;
                        mat.map.magFilter = THREE.LinearFilter;
                      }
                    });
                  } else {
                    const material = mesh.material as any;
                    if (material.map) {
                      material.map.anisotropy = renderer.capabilities.getMaxAnisotropy();
                      material.map.generateMipmaps = true;
                      material.map.minFilter = THREE.LinearMipmapLinearFilter;
                      material.map.magFilter = THREE.LinearFilter;
                    }
                  }
                }
              }
            });
            resolve(gltf);
            // Call async functions properly
            (async () => {
              try {
                await setCharTimeline(character, camera);
                await setAllTimeline();
              } catch (error) {
                console.error("Error setting up GSAP timelines:", error);
              }
            })();
            character!.getObjectByName("footR")!.position.y = 3.36;
            character!.getObjectByName("footL")!.position.y = 3.36;
            dracoLoader.dispose();
          },
          undefined,
          (error) => {
            console.error("Error loading GLTF model:", error);
            reject(error);
          }
        );
      } catch (err) {
        reject(err);
        console.error(err);
      }
    });
  };

  return { loadCharacter };
};

export default setCharacter;
