import request from "superagent";
import xml2js from 'react-native-xml2js'


const Url = "http://www.craftbeercapital.com/api/beta/?key=TY9ERWB92X&output=xml&request=purveyor&id=31&list=tap";

export function getTaplist() {
   return request
      .get(Url)
      .accept("xml")
      .buffer(true)
      // .parse(xml2jsParser)
      .then((res) => {
        // const parsedData = xml2js.parseString(res.text, (err, result) => {
          return new Promise((resolve, reject) => {
            xml2js.parseString(res.text, (err, result) => {
              if(err) reject(err)
              else {
                console.log(result)
                const parsedData = {
                  name: result.BeerList.Purveyor[0].Name[0],
                  beerList: result.BeerList.Beers[0].Beer
                }
                resolve(parsedData)
              }
          })
          
          
        })   
        // console.log(parsedData)
      })
}
