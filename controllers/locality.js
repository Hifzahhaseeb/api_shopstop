export const handleLocality=(req,res,db)=>{

    const {locality_pin_code}=req.body;

    const sql=`select * from shop where locality_pin_code=${locality_pin_code}`;

    db.query(sql,(err,shop)=>{
        if(err) {   return;}
    
        res.json(shop);
       
    })
    


}

