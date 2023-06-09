import React from 'react'
import {Text,StyleSheet} from 'react-native' 
import theme from '../theme.js'


const styles = StyleSheet.create({
    text:{
        fontSize:theme.fontSizes.body ,  
        color: theme.colors.textPrimary,
        fontFamily : theme.fonts.main ,
        fontWeight : theme.fontWeight.normal , 

    },
    colorPrimary: {
        color : theme.colors.textPrimary , 
    }, 
    colorSecondary: {
        color : theme.colors.textSecondary
    },
     bold: {
        fontWeight: theme.fontWeight.bold
    },
    subheading: {
        fontSize:theme.fontSizes.subheading
     },
})


export default function StyledText ({children , color, fontSize,fontWeight,style,...restOfProps }) {
  
    const textStyle = [
        styles.text,
        color === 'primary'  && styles.colorPrimary ,
        color === 'secondary' && styles.colorSecondary , 
        fontSize === "subheading" && styles.subheading , 
        fontWeight === "bold" && styles.bold , 
        
     ] ; 
  return (
    <Text style={textStyle}{...restOfProps} >
      {children}
        </Text>
  )

}