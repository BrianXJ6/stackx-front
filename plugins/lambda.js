/* eslint-disable no-console */
import axios from 'axios'

const list = async function () {
  try {
    const res = await axios.get('/api')
    return res.data
  } catch (error) {
    console.error('Erro ao tentar listar usuários:')
    throw error
  }
}

const getById = async function (id) {
  try {
    const res = await axios.get('/api', { params: { id } })
    return res.data
  } catch (error) {
    console.error('Erro ao tentar localizar usuário com ID: ' + id)
    throw error
  }
}

const remove = async function (id) {
  try {
    await axios.delete('/api', { params: { id } })
    return true
  } catch (error) {
    console.error('Erro ao tentar deletar usuário com ID: ' + id)
    throw error
  }
}

const createOrUpdate = async function (form) {
  try {
    await axios.post('/api', form)
    return true
  } catch (error) {
    console.error('Erro ao tentar criar ou atualizar usuário: ' + form.name)
    throw error
  }
}

export default { list, remove, getById, createOrUpdate }
