import { View,Text, StyleSheet } from "react-native"
import StyledText from './StyledText.jsx'

const styles =   StyleSheet.create({
    container : {
        padding:20, 
        paddingBottom:5,
         paddingTop:5
    },
    strong : {
        color : '#09f' , 
        fontWeight: 'bold',
        marginBottom: 5 , 
    }
})


const RepositoryItem = (props) => (
   <View key={props.id} style={styles.container}>
    <StyledText fontSizes='subheading' fontWeigth='bold'>{props.FullName}</StyledText>
    <StyledText>{props.description}</StyledText>
    <StyledText>{props.ownerAvatarUrl}</StyledText>
    <StyledText>ReviewCount: {props.reviewCount}</StyledText>
    <StyledText>Forkscount: {props.forkscount}</StyledText>
    <StyledText>ReviewCount: {props.reviewCount}</StyledText>
    </View>

)


export default  RepositoryItem  ; 