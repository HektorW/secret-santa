import Ball from './Ball'
import Bell from './Bell'
import MistleToe from './MistleToe'
import Polka from './Polka'
import Present from './Present'
import SantaHat from './SantaHat'
import Tree from './Tree'

export const icons = [
  Tree,
  Polka,
  Bell,
  Ball,
  MistleToe,
  Present,
  SantaHat
]

export function getIconByIndex(index) {
  return icons[index % icons.length]
}
