import { View,Text, StyleSheet } from "react-native"
import StyledText from './StyledText.jsx'

const styles =   StyleSheet.create({
    container : {
        padding:20, 
        paddingBottom:5,
         paddingTop:5
    },
})
const RepositoryStats = (props) => {
    return(
        <View style={{flexDirection:'row', justifyContent:'space-around'}}>
        <StyledText>ReviewCount: {props.reviewCount}</StyledText>
        <StyledText>Forkscount: {props.forkscount}</StyledText>
        <StyledText>ReviewCount: {props.reviewCount}</StyledText>
        </View>
    )
}


const RepositoryItem = (props) => (
   <View key={props.id} style={styles.container}>
    <StyledText fontSizes='subheading' fontWeight='bold'>{props.FullName}</StyledText>
    <StyledText>{props.description}</StyledText>
    <StyledText>{props.languaje}</StyledText>
    <StyledText>{props.ownerAvatarUrl}</StyledText>
     <RepositoryStats {...props}/>
    </View>

)


export default  RepositoryItem  ; 