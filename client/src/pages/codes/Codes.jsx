import React, { useState, useEffect } from 'react'
import "./Codes.scss"
import { Select, Skeleton, Container, SimpleGrid, Flex } from '@mantine/core';
import CodeCard from '../../components/codeCard/codeCard'
import search_icon from '../../assets/icons/search.svg'
import sort_icon from '../../assets/icons/sort.svg'
import filter_icon from '../../assets/icons/filter.svg'
import kebab_icon from '../../assets/icons/kebab.svg'
import { useSelector } from 'react-redux';

const Codes = () => {

  const userData = useSelector(state => state.user.value);
  const [sortOption, setSortOption] = useState('Newest First');
  const [sortedCodes, setSortedCodes] = useState([]);

  useEffect(() => {
    if (userData?.codes) {
      const sorted = userData.codes.slice().sort((a, b) => {
        if (sortOption === 'Newest First') {
          return new Date(b.created_at) - new Date(a.created_at);
        } else {
          return new Date(a.created_at) - new Date(b.created_at);
        }
      });
      setSortedCodes(sorted);
    }
  }, [userData, sortOption]);

  const handleSortOptionChange = (value) => {
    setSortOption(value);
  }

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
            onChange={handleSortOptionChange}
            value={sortOption}
          />
        </div>
        <br />
        <br />
        <Flex
          gap={30}
          justify="flex-start"
          align="center"
          direction="row"
          wrap="wrap"
        >
          {sortedCodes?.length > 0 ? (
            sortedCodes.map(code => <CodeCard code={code} />)
          ) : <p>You haven't saved any file yet!</p>}
        </Flex>
      </Container>
    </div>
  )
}

export default Codes