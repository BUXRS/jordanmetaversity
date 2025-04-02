"use client"

import { useEffect, useRef, useState } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

interface ModelViewerProps {
  modelUrl: string
  downloadUrl?: string
  downloadFileName?: string
  height?: number | string
  backgroundColor?: string
}

export default function ModelViewer({
  modelUrl,
  downloadUrl,
  downloadFileName = "3DModel.glb",
  height = 500,
  backgroundColor = "transparent",
}: ModelViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const modelRef = useRef<THREE.Object3D | null>(null)
  const controlsRef = useRef<OrbitControls | null>(null)
  const frameIdRef = useRef<number>(0)
  const [isRotating, setIsRotating] = useState(true)

  // Clean up function to handle component unmounting
  const cleanup = () => {
    if (frameIdRef.current) {
      cancelAnimationFrame(frameIdRef.current)
    }

    if (rendererRef.current && containerRef.current) {
      containerRef.current.removeChild(rendererRef.current.domElement)
    }

    if (controlsRef.current) {
      controlsRef.current.dispose()
    }

    if (rendererRef.current) {
      rendererRef.current.dispose()
    }
  }

  useEffect(() => {
    if (!containerRef.current) return

    // Set up scene
    const scene = new THREE.Scene()
    sceneRef.current = scene

    // Set up camera
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000,
    )
    camera.position.set(0, 2, 5)
    cameraRef.current = camera

    // Set up renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: backgroundColor === "transparent",
    })
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    renderer.setClearColor(
      backgroundColor === "transparent" ? 0x000000 : backgroundColor,
      backgroundColor === "transparent" ? 0 : 1,
    )
    renderer.outputEncoding = THREE.sRGBEncoding
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.2
    renderer.shadowMap.enabled = true
    containerRef.current.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
    directionalLight.position.set(10, 10, 10)
    directionalLight.castShadow = true
    scene.add(directionalLight)

    // Add orbit controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controlsRef.current = controls

    // Handle user interaction to toggle rotation
    controls.addEventListener("start", () => setIsRotating(false))
    controls.addEventListener("end", () => setIsRotating(true))

    // Load the model
    const loader = new GLTFLoader()
    loader.load(
      modelUrl,
      (gltf) => {
        // Center and scale the model
        const box = new THREE.Box3().setFromObject(gltf.scene)
        const center = box.getCenter(new THREE.Vector3())
        const size = box.getSize(new THREE.Vector3())

        const maxDim = Math.max(size.x, size.y, size.z)
        const scale = 2 / maxDim

        gltf.scene.position.x = -center.x * scale
        gltf.scene.position.y = -center.y * scale
        gltf.scene.position.z = -center.z * scale
        gltf.scene.scale.multiplyScalar(scale)

        scene.add(gltf.scene)
        modelRef.current = gltf.scene
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded")
      },
      (error) => {
        console.error("An error occurred loading the model:", error)
      },
    )

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current) return

      const width = containerRef.current.clientWidth
      const height = containerRef.current.clientHeight

      cameraRef.current.aspect = width / height
      cameraRef.current.updateProjectionMatrix()

      rendererRef.current.setSize(width, height)
    }

    window.addEventListener("resize", handleResize)

    // Animation loop
    const animate = () => {
      frameIdRef.current = requestAnimationFrame(animate)

      if (modelRef.current && isRotating) {
        modelRef.current.rotation.y += 0.01
      }

      if (controlsRef.current) {
        controlsRef.current.update()
      }

      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current)
      }
    }

    animate()

    // Clean up on unmount
    return () => {
      window.removeEventListener("resize", handleResize)
      cleanup()
    }
  }, [modelUrl, backgroundColor])

  return (
    <div className="model-viewer-container">
      <div
        ref={containerRef}
        className="model-viewer"
        style={{
          width: "100%",
          height: typeof height === "number" ? `${height}px` : height,
          position: "relative",
        }}
      />
      {downloadUrl && (
        <a href={downloadUrl} download={downloadFileName} className="download-link">
          Download 3D Model
        </a>
      )}
      <style jsx>{`
        .model-viewer-container {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .model-viewer {
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }
        .download-link {
          display: inline-block;
          margin-top: 16px;
          padding: 8px 16px;
          background-color: #3b82f6;
          color: white;
          border-radius: 4px;
          text-decoration: none;
          font-weight: 500;
          transition: background-color 0.2s;
        }
        .download-link:hover {
          background-color: #2563eb;
        }
      `}</style>
    </div>
  )
}

