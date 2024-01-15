import { useEffect, useState } from 'react'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js'
function App() {
  useEffect(() => {
    const scene = new THREE.Scene()

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    // 添加坐标轴辅助器
    const axesHelper = new THREE.AxesHelper(5)
    // 3.设置相机位置
    camera.position.set(0, 0, 10)
    // 4.添加相机
    scene.add(camera)
    scene.add(axesHelper)
    // 5.添加物体
    // 创建几何体对象
    const cubeGeometry = new THREE.BoxGeometry()
    // 设置几何体的材质
    const geometryMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 })
    // 根据几何体和材质创建物体
    const cube = new THREE.Mesh(cubeGeometry, geometryMaterial)

    // 修改物体的位置
    // cube.position.set(5,0,0)
    cube.position.x = 0

    // 旋转
    cube.rotation.x = Math.PI / 4;

    // 将几何体添加进场景
    scene.add(cube)

    // 添加渲染器
    const render = new THREE.WebGL1Renderer()
    // 设置渲染的尺寸大小
    render.setSize(window.innerWidth, window.innerHeight)
    // 将webgl渲染的canvas内容添加到body
    document.body.appendChild(render.domElement)
    // 使用渲染器 通过相机将场景渲染进来
    // render.render(scene, camera)
    // 创建轨道控制器
    const controls = new OrbitControls(camera, render.domElement)

    controls.enableDamping = true

    let eventObj = {
      fullScreen: () => {
        document.body.requestFullscreen()
      },
      exitFullSreen: () => {
        document.exitFullscreen()
      }
    }

    const gui = new GUI()
    gui.add(eventObj, 'fullScreen')
    gui.add(eventObj, 'exitFullSreen')
    gui.add(cube.position, 'x', -5,-5).name('立方体X轴的位置')

    function renderer() {
      // 不停的移动
      // cube.position.x += 0.1
      // if (cube.position.x >= 5) {
      //   cube.position.x = 1
      // }
      // 使用渲染器 通过相机将场景渲染进来
      render.render(scene, camera)
      controls.update()
      requestAnimationFrame(renderer)
    }

    renderer()
  }, [])

  return (
    <>
    <div></div>
    </>
  )
}

export default App
