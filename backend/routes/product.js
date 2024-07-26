const express=require("express")
const router=express.Router()
const axios = require('axios');
const accessToken=process.env.ACCESS_TOKEN

router.route('/:company/:category/:n/:minp/:maxp').get(async(req,res)=>{
    const company=req.params.company
    const category=req.params.category
    const n =req.params.n
    const minp=req.params.minp
    const maxp=req.params.maxp
    console.log(company)
    const companies=['AMZ','FLP','SNP','MYN','AZO']
    const categories= ["Phone", "Computer", "TV", "Earphone", "Tablet", "Charger", "House", "Keypad", "Bluetooth", "Pendrive", "Remote", "Speaker", "Headset", "Laptop", "PC"]
    
    if (! company in companies){
        res.status(401).json({
            message: 'You must provide valid credentials to access this resource.'
          });
    }
    if (! category in categories){
        res.status(401).json({
            message: 'You must provide valid credentials to access this resource.'
          });
    }

    const apiUrl = `http://20.244.56.144/test/companies/${company}/categories/${category}/products/top-${n}?minPrice=${minp}&maxPrice=${maxp}`;  

       
    try {  
   
                const response = await axios.get(apiUrl,{
                    headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Accept': 'application/json'
                }});  
                
         
                return res.json(response.data);  
            } catch (error) {   
                console.error(error);  
                return res.status(500).json({ error: 'An error occurred while fetching product data' });  
            }   
})
module.exports = router