import axios from 'axios'

export const handleDownloadCv = async () => {
  try {
    await axios.post('api/send', {
      name: '',
      email: '',
      textarea: 'Congrats! Your CV have been downloaded!',
      company: '',
    })
  } catch (e) {
    if (e instanceof Error) {
      throw e
    }
  }
}
