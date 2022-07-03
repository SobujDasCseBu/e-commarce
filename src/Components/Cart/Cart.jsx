import React from 'react'
import { Grid, Container, Typography, Button } from '@material-ui/core'
import useStyle from './style'

const Cart = ({cart}) => {
  console.log("cart",cart);
  const classes = useStyle()
  //const isEmpty = !cart.line_items.length
  // const EmptyCart = ()=>{
  //   <Typography variant='subtitle1'>You have no iteam in your shoping cart</Typography>
  // }

  const FieldCart = ()=>{
    <>
       
       <Grid container spacing={3}>
          {cart.line_items.map((item) => (
              
              <Grid item xs={12} sm={4} key={item.id} >
                 <div>{item.name} </div>
              </Grid>
          ))}
       </Grid>
       <div className={classes.cardDetails} >
           <Typography variant='h4' >
             Subtotal : {cart.subtotal.formatted_with_symbol}
           </Typography>

           <div>
             <Button className={classes.emptyButton} type='button' variant='contained' size='large' color='secondary' >Empty Cart</Button>
             <Button className={classes.checkoutButton} type='button' variant='contained' size='large' color='primary' >Empty Cart</Button>
          
           </div>
       </div>
    </>
  }

  if(!cart.line_items) return 'Loading'

  return (
   <Container >
       <div className={classes.toolbar} />
       <Typography className={classes.title} variant='h3' >Your Shoping Cart</Typography>

      {2>1? "i am a students": <FieldCart />}

   </Container>
  )
}

export default Cart