import { AfterViewInit, Component, ElementRef, inject, OnDestroy, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { isPlatformBrowser } from '@angular/common';

let camera: THREE.PerspectiveCamera, scene: THREE.Scene, renderer: THREE.WebGLRenderer;
let mesh: THREE.Mesh;

function init(element: Element) {
  camera = new THREE.PerspectiveCamera(70, element.clientWidth / element.clientHeight, 0.01, 2000);
  camera.position.z = 1;

  scene = new THREE.Scene();
  // scene.background = new THREE.Color( 0xffffff );

  const geometry = new THREE.BoxGeometry(5, 5, 5);
  // geometry = new THREE.ConeGeometry(0.2, 0.2);
  const material = new THREE.MeshBasicMaterial({ color: 0xc49620, wireframe: true, transparent: true, opacity: 0.15 });

  mesh = new THREE.Mesh(geometry, material);

  // Set random rotation
  mesh.rotation.x = Math.random() * 2 * Math.PI;
  mesh.rotation.y = Math.random() * 2 * Math.PI;
  mesh.rotation.z = Math.random() * 2 * Math.PI;

  scene.add(mesh);

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setClearColor(0xffffff, 0);
  renderer.setSize(element.clientWidth, element.clientHeight);
  element.appendChild(renderer.domElement);
}

function animate() {
  requestAnimationFrame(animate);

  const speed = 0.05;
  mesh.rotation.x -= 0.01 * speed;
  mesh.rotation.y -= 0.02 * speed;
  mesh.rotation.z -= 0.01 * speed;

  // Listen for window resize events

  renderer.render(scene, camera);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

@Component({
  standalone: true,
  selector: 'gilles-nx-three-card',
  template: ` <div class="canvas" #canvas></div> `,
  styleUrls: ['./three-card.component.css'],
})
export class ThreeCardComponent implements AfterViewInit, OnInit, OnDestroy {
  @ViewChild('canvas') canvas!: ElementRef;

  platformID = inject(PLATFORM_ID);

  ngOnInit(): void {
    window.addEventListener('resize', onWindowResize, false);
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformID)) {
      init(this.canvas.nativeElement);
      animate();
    }
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', onWindowResize);
  }
}
