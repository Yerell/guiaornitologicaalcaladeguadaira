import express from 'express'
import bodyParser from 'body-parser'

const server = express()
const pajaros = [
  {
    title: "Abejaruco europeo", mediaCaption: "Merops apiaster", place: "Entorno del río, Campiña, Sierra"
  },
  {
    title: "Abubilla", mediaCaption: "Upupa epops", place: "Entorno del río, Campiña, Sierra"
  }
]
const handleGet = (request, response) => {
  response.status(200).json(pajaros)
}
server.use(bodyParser.json())
server.get("/", handleGet)
server.listen(5000, () => console.log("running"))