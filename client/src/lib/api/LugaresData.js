const { REACT_APP_SERVER_URL }= process.env

export const getLugares = async () => {
  try {
    const response = await fetch(`${REACT_APP_SERVER_URL}/lugares`);
    return await response.json();
  
  } catch (error) {
    console.log(error)
  }

}