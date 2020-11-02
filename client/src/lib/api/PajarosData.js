export const getPajaros = async () => {
  try {
    const response = await fetch("/pajaros");
    return await response.json();
  }
  
  
  catch (error) {
    console.log(error)
  }

}
export const getPajaros1 = async (id) => {
  try {
    const response = await fetch(`/pajaros/${id}`)
    return await response.json();
 } 
  catch (error) {
    console.log(error)
  }
}