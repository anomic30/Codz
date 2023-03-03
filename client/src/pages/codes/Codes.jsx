import React from 'react'
import "./Codes.scss"
import { Select, Skeleton, Container, SimpleGrid, Flex } from '@mantine/core';
import CodeCard from '../../components/codeCard/codeCard'
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
            transition="scale-y"
            transitionDuration={180}
            transitionTimingFunction="ease"
            placeholder="Sort by"
            data={['Newest First', 'Oldest First']}
            icon={<img src={sort_icon} alt="search" />}
            styles={(theme) => ({
              item: {
                '&[data-selected]': {
                  '&, &:hover': {
                    backgroundColor: '#306BFF',
                    color: theme.colorScheme === 'dark' ? theme.white : theme.colors.teal[9],
                  },
                },
              },
            })}
          />
        </div>
        <br />
        <br />
        {/* <SimpleGrid cols={4}>
          <CodeCard />
          <CodeCard />
          <CodeCard />
          <CodeCard />
        </SimpleGrid> */}
        <Flex
          gap={30}
          justify="space-between"
          align="center"
          direction="row"
          wrap="wrap"
        >
          <CodeCard />
          <CodeCard />
          <CodeCard />
          <CodeCard />
          <CodeCard />
        </Flex>
      </Container>
    </div>
  )
}

export default Codes