import request from "superagent";
// import xml2jsParser from 'superagent-xml2jsparser'

const Url =
  "http://www.craftbeercapital.com/api/beta/?key=TY9ERWB92X&output=xml&request=purveyor&id=31&list=tap";

export function getTaplist() {
  return (
    request
      .get(Url)
      .accept("xml")
      .buffer(true)
      // .parse(xml2jsParser)
      .then((res) => res.text)
  );
}
