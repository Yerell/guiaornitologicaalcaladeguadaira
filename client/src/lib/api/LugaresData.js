export const getLugares = async () => {
  try {
    const response = await fetch("/lugares");
    return await response.json();
  
  } catch (error) {
    console.log(error)
  }

}