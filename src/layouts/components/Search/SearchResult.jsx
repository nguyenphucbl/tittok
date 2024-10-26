import React, { memo } from 'react'
import { AccountItems } from '@/components/AccountItems'
import PropTypes from 'prop-types'
SearchResult.propTypes = {
  searchResults: PropTypes.array,
}

function SearchResult({ searchResults }) {
  return (
    <>
      {searchResults.map(result => (
        <AccountItems key={result.id} data={result} />
      ))}
    </>
  )
}

export default memo(SearchResult)
