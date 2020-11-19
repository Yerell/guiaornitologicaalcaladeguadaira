const { REACT_APP_SERVER_URL }= process.env

export const getPajaros = async () => {
  try {
    const response = await fetch(`${REACT_APP_SERVER_URL}/pajaros`);
    return await response.json();
  }
  
  
  catch (error) {
    console.log(error)
  }

}
export const getPajaros1 = async (id) => {
  try {
    const response = await fetch(`${REACT_APP_SERVER_URL}/pajaros/${id}`)
    return await response.json();
 } 
  catch (error) {
    console.log(error)
  }
}