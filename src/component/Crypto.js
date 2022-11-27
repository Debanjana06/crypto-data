import { useEffect, useState } from 'react'
import axios from 'axios'
import {Container, Table} from 'react-bootstrap'
const Crypto = () =>{
const [cryptodata,setData] =useState([])

useEffect(() => {
   axios
   .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
   .then((res)=>{setData(res.data)})
   .catch((err)=>{console.log(err)})
}, [])
  return (
    <Container fluid='md'>
         <Table striped bordered hover variant="dark" className="mt-2 mb-2">
          {cryptodata.map((datas)=>(
           
                <tbody key={datas.ath}>
                    <tr>
                    <td>{datas.name}</td>
                    <td>{datas.id}</td>
                    <td><img src={datas.image} style={{height:'20px'}} alt="icons"/></td>
                    <td>{datas.symbol}</td>
                    <td>{datas.current_price}</td>
                    <td>{datas.total_volume}</td>
                    
                    </tr>
                </tbody>
          
        ))}
        </Table>
       
    </Container>
  )
}

export default Crypto