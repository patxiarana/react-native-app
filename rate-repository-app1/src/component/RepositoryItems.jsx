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
             <View>
            <StyledText fontWeight='bold'>ReviewCount</StyledText>
            <StyledText fontWeight='bold'>{props.reviewCount}</StyledText>
            </View>
            <View>
            <StyledText fontWeight='bold'>Forks Counts</StyledText>
            <StyledText>{props.forkscount}</StyledText>
            </View>
            <View>
            <StyledText fontWeight='bold'>Rating Average</StyledText>
            <StyledText>{props.ratingAverage}</StyledText>
            </View>
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