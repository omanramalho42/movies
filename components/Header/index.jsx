import React from 'react'

import { 
  HomeIcon,
  BadgeCheckIcon,
  CollectionIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon
} from "@heroicons/react/outline"

import Image from "next/image"
import HeaderItem from "../HeaderItem"

const Header = () => {
  return (
    <header className='
      flex 
      flex-col 
      sm:flex-row 
      m-5 
      justify-between 
      items-center
    '>
      <div className='
        flex 
        flex-grow 
        justify-evenly 
        max-w-2xl
      '>
        <HeaderItem 
          title="HOME"
          Icon={HomeIcon}
        />
        <HeaderItem 
          title="BOMBANDO"
          Icon={LightningBoltIcon}
        />
        <HeaderItem 
          title="VERIFICADO"
          Icon={BadgeCheckIcon}
        />
        <HeaderItem 
          title="COLEÇAO"
          Icon={CollectionIcon}
        />
        <HeaderItem 
          title="PESQUISAR"
          Icon={SearchIcon}
        />
        <HeaderItem 
          title="CONTA"
          Icon={UserIcon}
        />
      </div>
      <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
      />
    </header>
  )
}

export default Header