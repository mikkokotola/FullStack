import axios from 'axios'

const url = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(url)
  return response.data
}
const createNew = async (content) => {
  const response = await axios.post(url, { content, votes: 0 })
  return response.data
}

const updateVotes = async (id) => {
  const currentList = await axios.get(url)
  console.log('Loggin currrentlist...')
  console.log(typeof (currentList))
  console.log(currentList)
  const currentAnect = currentList.data.find(a => a.id === id)
  const response = await axios.put(`${url}/${id}`, { content: currentAnect.content, votes: 1 + currentAnect.votes })
  return response.data
}

export default { getAll, createNew, updateVotes }
