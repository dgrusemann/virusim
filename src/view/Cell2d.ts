import { AdvancedDynamicTexture, TextBlock } from '@babylonjs/gui'
import { Vector3 } from '@babylonjs/core/Maths/math'
import { MeshBuilder } from '@babylonjs/core/Meshes'
import { LinesMesh } from '@babylonjs/core/Meshes/linesMesh'

import { Cell } from '../models'

export function createCellMesh(cell: Cell, scene): LinesMesh {
    const tes = 60
    const pi2 = Math.PI * 2
    const step = pi2 / tes
    const path = []
    for (let i = 0; i < pi2; i += step) {
        const x = cell.x + cell.radius * Math.sin(i)
        const z = 0
        const y = cell.y + cell.radius * Math.cos(i)
        path.push(new Vector3(x, y, z))
    }
    path.push(path[0])
    const mesh = MeshBuilder.CreateLineSystem('circle', { lines: [path] }, scene)

    const advancedTexture = AdvancedDynamicTexture.CreateFullscreenUI('UI')
    const text1 = new TextBlock()
    text1.text = cell.name
    text1.color = 'white'
    text1.fontSize = 12
    advancedTexture.addControl(text1)
    text1.linkWithMesh(mesh)
    text1.linkOffsetY = cell.radius + 160

    return mesh
}
