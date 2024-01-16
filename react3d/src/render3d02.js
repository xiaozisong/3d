import * as THREE from 'three';
// 引入轨道控制器，轨道控制器必须显示引入
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
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

  // 添加轨道控制器
  const controls = new OrbitControls(camera, renderer.domElement)

  // 轨道控制器的change事件
  controls.addEventListener('change', (e) => {
    console.log('触发了change事件', e)
  })

  // 轨道控制器添加阻尼
  controls.enableDamping = true
  // 控制阻尼的大小
  controls.dampingFactor = 0.01
  // 轨道控制器开启自动旋转
  controls.autoRotate = true
  // 控制轨道控制器自动旋转的速率 默认2.0
  controls.autoRotateSpeed = 0.5

  // renderer.render(sence, camera)

  const animate = () => {
    requestAnimationFrame(animate)
    // 每次鼠标点击 需要调用控制器的update方法
    controls.update()
    // 重新渲染场景
    renderer.render(sence, camera)
  }
  animate()
}