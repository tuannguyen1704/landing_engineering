import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function SphereCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    
    // Get initial dimensions with fallback
    const width = container.clientWidth || 600;
    const height = container.clientHeight || 600;
    
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.display = 'block';
    container.appendChild(renderer.domElement);

    // Main Particle Sphere - Purple/Cyan gradient
    const particlesCount = 25000;
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);
    const radius = 2.5;

    for (let i = 0; i < particlesCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / particlesCount);
      const theta = Math.sqrt(particlesCount * Math.PI) * phi;

      const r = radius + (Math.random() - 0.5) * 0.2;

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);

      // Purple to Cyan gradient
      const mixture = Math.random();
      // Purple: rgb(188, 19, 254) / Cyan: rgb(0, 242, 255)
      colors[i * 3] = mixture * 0.0 + (1 - mixture) * 0.74;     // R
      colors[i * 3 + 1] = 0.07 + mixture * 0.89;               // G
      colors[i * 3 + 2] = 1.0 - mixture * 0.01;                // B
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.018,
      sizeAttenuation: true,
      vertexColors: true,
      transparent: true,
      opacity: 1,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Inner glow sphere (smaller, brighter)
    const innerGeometry = new THREE.SphereGeometry(1.5, 32, 32);
    const innerMaterial = new THREE.MeshBasicMaterial({
      color: 0xbc13fe,
      transparent: true,
      opacity: 0.1,
      wireframe: true,
    });
    const innerSphere = new THREE.Mesh(innerGeometry, innerMaterial);
    scene.add(innerSphere);

    camera.position.z = 6;

    // Mouse tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    // Animation
    let frameId: number;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      points.rotation.y += 0.0008;
      points.rotation.x += 0.0003;
      points.rotation.y += mouseX * 0.015;
      points.rotation.x += mouseY * 0.015;
      
      innerSphere.rotation.y += 0.001;
      innerSphere.rotation.x += 0.0005;
      
      renderer.render(scene, camera);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth || 600;
      const newHeight = container.clientHeight || 600;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(frameId);
      container.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
      innerGeometry.dispose();
      innerMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }} />;
}
