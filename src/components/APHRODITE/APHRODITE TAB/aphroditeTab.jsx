import './aphroditeTab.scss'
import { useSelector } from 'react-redux'
import React from 'react'
import SizeBar from '../Size Bar/Size Bar'
import Headline from '../../headline/headline'
import MaterialBar from '../Material Bar/Material Bar'
import WoodHDBar from '../Wood Handle Bar/Wood Handle'

export default function AphroditeTab() {
  const selectedSize = useSelector(state=>state.bag.selectedSize)
  return (
    <div className='aphrodite'>
      <Headline title="APHRODITE"></Headline>
      <MaterialBar></MaterialBar>
      <SizeBar></SizeBar>
      {selectedSize!=='CLUTCH'?<WoodHDBar></WoodHDBar>:''}
    </div>
  )
}
