import * as Request from '@/utils/request'

const handleSearch = async (q, type = 'less') => {
  try {
    const data = await Request.get('users/search', { params: { q, type } })
    return data
  } catch (err) {
    console.log(err)
  }
}

export { handleSearch }
