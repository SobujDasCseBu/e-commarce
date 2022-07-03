import React from 'react'
import { AppBar , Toolbar, IconButton , Badge  , Typography  } from '@material-ui/core'
import useStyle from './styles'
import logo from '../../assests/commerce.png'
import { ShoppingCart } from '@material-ui/icons'


const Navbar = ({totalItem}) => {
    const classes = useStyle()

  return (
    <>
       <AppBar className={classes.appBar} color='inherit' position='fixed'>
           <Toolbar >
               <Typography variant='h5' color='inherit' className={classes.title} >
                   <img src={logo} alt='Commerce.js' height='25px'  />
                   Commerce.js
               </Typography>

               <div className={classes.grow} />
               <div className={classes.button} >

                   <IconButton aria-label='Show cart items' color='inherit'>

                       <Badge badgeContent={totalItem} color='secondary'>
                           <ShoppingCart />
                       </Badge>

                   </IconButton>

               </div>

           </Toolbar>
       </AppBar>

    </>
  )
}

export default Navbar


