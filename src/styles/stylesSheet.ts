import {StyleSheet,Dimensions} from 'react-native'
import {Nunito_600SemiBold,Nunito_700Bold,Nunito_800ExtraBold} from '@expo-google-fonts/nunito'

import { useFonts}  from 'expo-font'


export default  function renderStyle() {

  const [fontsLoaded] =  useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold
  })
 
    
  const styles = StyleSheet.create({
        container: {
          flex: 1
        },
      
        map: {
          width: Dimensions.get('window').width,
          height: Dimensions.get('screen').height
        }
      ,
        callOutContainer:{
          width:160,
          height:46,
          paddingHorizontal:16,
          backgroundColor: 'rgba(255,255,255,0.9)',
          borderRadius:16,
          justifyContent:'center',
    
        },
        callOutText: {
          color: '#0089',
          fontSize: 14
        
        },
        footer: {
          position: 'absolute',
          left:24,
          right:24,
          bottom: 42,
      
          backgroundColor: '#FFF',
          borderRadius:20,
          height:56,
          paddingLeft:24,
      
          flexDirection:'row',
          justifyContent: 'space-between',
          alignItems: 'center',
    
          elevation:5
        },
      
        footerText: {
          color: '#8fa7b3',
          fontFamily: 'Nunito_700Bold'
      
        },
      
        createOrphanageButton:{
          width:56,
          height:56,
          backgroundColor: '#15c3d6',
          borderRadius:20,
      
          justifyContent:'center',
          alignItems: 'center'
        }
      
      });
    
return styles;

}

