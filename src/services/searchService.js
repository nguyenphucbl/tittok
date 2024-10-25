import * as httpRequest from '@/utils/httpRequest'

const handleSearch = async (q, type = 'less') => {
  try {
    const data = await httpRequest.get('users/search', { params: { q, type } })
    return data
  } catch (err) {
    console.log(err)
  }
}

export { handleSearch }
