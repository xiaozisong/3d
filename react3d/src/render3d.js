import * as THREE from 'three';
export const render = () => {
  // 创建场景
  const sence = new THREE.Scene()
  // 创建相机 -- 透视相机
  const camera = new THREE.PerspectiveCamera()
  // 调整立方体的水平位置
  camera.position.z = 10
  camera.position.y = 2
  // 创建立方体
  const geometryBox = new THREE.BoxGeometry()
  // 添加材质
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
  // 网格
  const cube = new THREE.Mesh(geometryBox, material)
  // 添加地面网格
  const gridHelper = new THREE.GridHelper()

  // 将内容添加到场景中
  sence.add(cube)
  // 将地面网格添加到场景中
  sence.add(gridHelper)
  cube.position.y = 3

  // 创造渲染器
  const renderer = new THREE.WebGLRenderer()
  // 调整渲染器的尺寸
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)

  // renderer.render(sence, camera)

  const animate = () => {
    requestAnimationFrame(animate)
    cube.rotation.x += 0.01
    // 重新渲染场景
    renderer.render(sence, camera)
  }
  animate()
}