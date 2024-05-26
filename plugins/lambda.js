/* eslint-disable no-console */
import axios from 'axios'

const list = async function () {
  try {
    const res = await axios.get('api')
    return res.data
  } catch (error) {
    console.error('Erro ao tentar listar usuários:')
    throw error
  }
}

const remove = async function (id) {
  try {
    await axios.delete('api', { params: { id } })
    return true
  } catch (error) {
    console.error('Erro ao tentar deletar usuário com ID: ' + id)
    throw error
  }
}

export default { list, remove }
