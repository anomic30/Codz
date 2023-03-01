import React from 'react'
import "./Codes.scss"
import { Select, Skeleton, Container } from '@mantine/core';
import search_icon from '../../assets/icons/search.svg'
import sort_icon from '../../assets/icons/sort.svg'
import filter_icon from '../../assets/icons/filter.svg'
import kebab_icon from '../../assets/icons/kebab.svg'

const Codes = () => {
  return (
    <div className='Codes'>
      <Container size={1200}>
        <div className="welcome-box">
          <h1>My Codes</h1>
        </div>
        <br />
        <div className="search-con">
          <div className="search-inp">
            <img src={search_icon} alt="search" />
            <input
              type="text"
              placeholder="Search"
            />
          </div>
          <Select
      placeholder="Sort by"
      data={['React', 'Angular', 'Svelte', 'Vue']}
      icon={<img src={sort_icon} alt="search"/> }
      // color={colorScheme ='dark'}
    />
          {/* <div className="func-btn">
            <img src={sort_icon} alt="search" />
            <p>Sort</p>
          </div> */}
        </div>
      </Container>
    </div>
  )
}

export default Codes