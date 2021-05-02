/*import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import React, {useRef,  useState}  from 'react';
import COLORS from '../consts/colors';
import {LinearGradient} from 'expo-linear-gradient';
import {useTheme} from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import {beautyServices} from '../model/beautyServices';
import CardServicesProf from '../components/CardServicesProf';
import StarRating2 from '../components/StarRating2';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  StatusBar,
  Platform,
  Animated,
  TouchableOpacity,
  FlatList,
  ScrollView,
   ImageBackground,
   Modal,
   TextInput,
   SafeAreaView
} from 'react-native';
import HeaderImageScrollView, {
  TriggeringView,
} from 'react-native-image-header-scroll-view';
import Icon from 'react-native-vector-icons/MaterialIcons'
import * as Animatable from 'react-native-animatable';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {comments} from '../model/comments';
import CardComments from '../components/CardComments';
import { Container, Content, List, ListItem, Header, Item, Input } from 'native-base';
import { useEffect } from 'react';
import { LogBox } from 'react-native';
const MIN_HEIGHT = Platform.OS === 'ios' ? 90 : 55;
const MAX_HEIGHT = 350;

 
  const ProfileScreenServicesProfesional = ({navigation}) => {
     const {colors} = useTheme();
    const [data, setData] = React.useState({
  username: '',
  password: '',
  confirm_password: '',
  check_textInputChange: false,
  secureTextEntry: true,
  confirm_secureTextEntry: true,
});


const textInputChange = (val) => {
    if( val.length !== 0 ) {
        setData({
            ...data,
            username: val,
            check_textInputChange: true
        });
    } else {
        setData({
            ...data,
            username: val,
            check_textInputChange: false
        });
    }
}

    const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);
    useEffect(() => {
      LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }, [])
  const navTitleView = useRef(null);
  const theme = useTheme();
  const categories = ['Descripción', 'Servicios', 'Turnos'];
  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />   
        <View
          style={styles.section}
          onHide={() => navTitleView.current.fadeInUp(200)}
          onDisplay={() => navTitleView.current.fadeOut(100)}>

<View style={styles.categoryListContainerDesc}>
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setSelectedCategoryIndex(index)}>
            <View>
              <Text
                style={{
                  ...styles.categoryListText,
                  color:
                    selectedCategoryIndex == index
                      ? COLORS.rubik
                      : COLORS.grey,
                }}>
                {item}
              </Text>
              {selectedCategoryIndex == index && (
                <View
                  style={{
                    height: 3,
                    width: 30,
                    backgroundColor: COLORS.rubik,
                    marginTop: 2,
                  }}
                />
              )}
            </View>
          </TouchableOpacity>
        ))}
      </View>

           </View>
      
           <View style={{backgroundColor: 'white'}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 20, color: '#ff2167', marginHorizontal: 10}}>Agrega una descripción a tu perfil</Text>
      <SafeAreaView style={styles.input}>
      
      <TextInput
        
        style={{fontSize: 20, fontWeight: 'bold', marginLeft: 5, marginTop: 5}}
        multiline
        placeholder="Deja tu descripción aquí"
        
      />
    </SafeAreaView>
    </View>

    <View style={styles.sectionReserve}>
       
       <TouchableOpacity
                   style={styles.signIn}
                   
               >
       <LinearGradient
                   colors={['#ff2167', '#ff2167']}
                   style={styles.signIn}
               >
                   <Text style={[styles.textSign, {
                       color:'#fff'
                   }]}>Guardar descripción</Text>
               </LinearGradient>

               </TouchableOpacity>
              
               </View>


    </View>
  );
};

export default ProfileScreenServicesProfesional;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  image: {
    height: MAX_HEIGHT,
    width: Dimensions.get('window').width,
    alignSelf: 'stretch',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  name: {
    fontWeight: 'bold',
  },
  section: {
    padding: 20,
   
    borderBottomColor: '#cccccc',
    backgroundColor: 'white',
  },
  sectionDesc: {
    padding: 20,
    paddingTop: 0,
    marginTop: -10,
    borderBottomColor: '#cccccc',
    backgroundColor: 'white',
  },
  sectionReserve: {
    padding: 20,
    paddingTop: 10,
    
    borderBottomColor: '#cccccc',
    backgroundColor: 'white',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionContent: {
    fontSize: 16,
    textAlign: 'justify',
  },
  categories: {
    flexDirection: 'row',
    
  },
  categoryContainer: {
   flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 10,
  },
  category: {
    fontSize: 14,
    color: '#fff',
    marginLeft: 5,
    paddingRight: 4
  },
  titleContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageTitle: {
    color: 'white',
    backgroundColor: 'transparent',
    fontSize: 24,
  },
  navTitleView: {
    height: MIN_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 40 : 5,
    opacity: 0,
  },
  navTitle: {
    color: 'white',
    fontSize: 18,
    backgroundColor: 'transparent',
  },
  sectionLarge: {
    minHeight: 50,
  },
  cardDiscount:{
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'red',
    marginHorizontal: 8,
    fontSize: 15
  },
  categoryListContainerDesc: {
    flexDirection: 'row',
    marginBottom: 20,
    marginTop: 10,
    justifyContent: 'space-between',
  },
  categoryListContainerComment: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryListText: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  iconContainer: {
    height: 60,
    width: 60,
    position: 'absolute',
    marginTop: 285,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    right: 20,
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonDesc: {
    alignItems: 'center',
    color: '#ff2167',
    fontSize: 18,
    fontWeight: 'bold'
},
buttonComent: {
  alignItems: 'center',
  color: '#ff2167',
  fontSize: 18,
  fontWeight: 'bold',
  marginLeft: 40
},
signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
},
textSign: {
    fontSize: 20,
    fontWeight: 'bold'
},
categoryIcon: {
  borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 70,
    height: 70,
    backgroundColor: '#ff2167',
    borderRadius: 50,
},
categoryBtnTxt: {
  alignSelf: 'center',
  marginTop: 5,
  color: '#ff2167',
  fontSize: 18,
  marginLeft: 0
},
categoryBtn: {
  flex: 1,
    width: '30%',
    marginHorizontal: 0,
    alignSelf: 'center',
},
input: {
  height: 200,
  margin: 10,
  marginTop: 20,
  borderWidth: 1,
  borderColor: '#cccccc'
},
});
*/


/*import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import React, {useRef,  useState}  from 'react';
import COLORS from '../consts/colors';
import {beautyServices} from '../model/beautyServices';
import CardServicesProf from '../components/CardServicesProf';
import {LinearGradient} from 'expo-linear-gradient';
import {useTheme} from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import StarRating2 from '../components/StarRating2';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  StatusBar,
  Platform,
  Animated,
  TouchableOpacity,
  FlatList,
  ScrollView,
   ImageBackground,
   Modal,
   TextInput,
   SafeAreaView,
} from 'react-native';
import HeaderImageScrollView, {
  TriggeringView,
} from 'react-native-image-header-scroll-view';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {comments} from '../model/comments';
import CardComments from '../components/CardComments';
import { Container, Content, List, ListItem, Header, Item, Input } from 'native-base';
import { useEffect } from 'react';
import { LogBox } from 'react-native';
const MIN_HEIGHT = Platform.OS === 'ios' ? 90 : 55;
const MAX_HEIGHT = 350;

 
  const ProfileScreenServicesProfesional = ({navigation}) => {
    const {colors} = useTheme();
    const [data, setData] = React.useState({
      username: '',
      password: '',
      confirm_password: '',
      check_textInputChange: false,
      secureTextEntry: true,
      confirm_secureTextEntry: true,
    });
    
    
    const textInputChange = (val) => {
        if( val.length !== 0 ) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false
            });
        }
    }
    
    const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);
    useEffect(() => {
      LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }, [])
  const navTitleView = useRef(null);
  const theme = useTheme();
  const categories = ['Descripción', 'Servicios', 'Turnos'];
  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(2);
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />   
        <View
          style={styles.section}
          onHide={() => navTitleView.current.fadeInUp(200)}
          onDisplay={() => navTitleView.current.fadeOut(100)}>

<View style={styles.categoryListContainerDesc}>
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setSelectedCategoryIndex(index)}>
            <View>
              <Text
                style={{
                  ...styles.categoryListText,
                  color:
                    selectedCategoryIndex == index
                      ? COLORS.rubik
                      : COLORS.grey,
                }}>
                {item}
              </Text>
              {selectedCategoryIndex == index && (
                <View
                  style={{
                    height: 3,
                    width: 30,
                    backgroundColor: COLORS.rubik,
                    marginTop: 2,
                  }}
                />
              )}
            </View>
          </TouchableOpacity>
        ))}
      </View>

           </View>
      <Text style={{fontSize: 25, fontWeight: 'bold', alignSelf: 'center', marginTop: -10, width: '100%', paddingLeft: 15}}>Seleccionar turnos disponibles</Text>
    <View style={{ marginHorizontal: 15, marginBottom: 30, marginTop: 20}}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Lunes</Text>
      <View style={styles.action}>
            <SafeAreaView style={styles.input}>    
                <TextInput 
                    
                    placeholder="Ej: 09:00, 11:30, 14:00"
                    placeholderTextColor="#666666"
                    style={[styles.textInput, {
                        color: colors.text
                    }]}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChange(val)}
                />
                </SafeAreaView>
                {data.check_textInputChange ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    

                </Animatable.View>
                : null}
            </View>
    </View>

    <View style={{marginHorizontal: 15, marginBottom: 30}}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Martes</Text>
      <View style={styles.action}>
            <SafeAreaView style={styles.input}>    
                <TextInput 
                     placeholder="Ej: 09:00, 11:30, 14:00"
                    placeholderTextColor="#666666"
                    style={[styles.textInput, {
                        color: colors.text
                    }]}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChange(val)}
                />
                </SafeAreaView>
                {data.check_textInputChange ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    

                </Animatable.View>
                : null}
            </View>
    </View>

    <View style={{marginHorizontal: 15, marginBottom: 30}}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Miercoles</Text>
      <View style={styles.action}>
            <SafeAreaView style={styles.input}>    
                <TextInput 
                   placeholder="Ej: 09:00, 11:30, 14:00"
                    placeholderTextColor="#666666"
                    style={[styles.textInput, {
                        color: colors.text
                    }]}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChange(val)}
                />
                </SafeAreaView>
                {data.check_textInputChange ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    

                </Animatable.View>
                : null}
            </View>
    </View>

    <View style={{marginHorizontal: 15, marginBottom: 30}}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Jueves</Text>
      <View style={styles.action}>
            <SafeAreaView style={styles.input}>    
                <TextInput 
                    placeholder="Ej: 09:00, 11:30, 14:00"
                    placeholderTextColor="#666666"
                    style={[styles.textInput, {
                        color: colors.text
                    }]}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChange(val)}
                />
                </SafeAreaView>
                {data.check_textInputChange ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    

                </Animatable.View>
                : null}
            </View>
    </View>

    <View style={{marginHorizontal: 15, marginBottom: 30}}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Viernes</Text>
      <View style={styles.action}>
            <SafeAreaView style={styles.input}>    
                <TextInput 
                   placeholder="Ej: 09:00, 11:30, 14:00"
                    placeholderTextColor="#666666"
                    style={[styles.textInput, {
                        color: colors.text
                    }]}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChange(val)}
                />
                </SafeAreaView>
                {data.check_textInputChange ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    

                </Animatable.View>
                : null}
            </View>
    </View>

    <View style={{marginHorizontal: 15, marginBottom: 30}}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Sabado</Text>
      <View style={styles.action}>
            <SafeAreaView style={styles.input}>    
                <TextInput 
                    placeholder="Ej: 09:00, 11:30, 14:00"
                    placeholderTextColor="#666666"
                    style={[styles.textInput, {
                        color: colors.text
                    }]}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChange(val)}
                />
                </SafeAreaView>
                {data.check_textInputChange ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    

                </Animatable.View>
                : null}
            </View>
    </View>

    <View style={{marginHorizontal: 15}}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Domingo</Text>
      <View style={styles.action}>
            <SafeAreaView style={styles.input}>    
                <TextInput 
                    placeholder="Ej: 09:00, 11:30, 14:00"
                    placeholderTextColor="#666666"
                    style={[styles.textInput, {
                        color: colors.text
                    }]}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChange(val)}
                />
                </SafeAreaView>
                {data.check_textInputChange ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    

                </Animatable.View>
                : null}
            </View>
    </View>

    <View style={styles.sectionReserve}>
       
       <TouchableOpacity
                   style={styles.signIn}
                   
               >
       <LinearGradient
                   colors={['#ff2167', '#ff2167']}
                   style={styles.signIn}
               >
                   <Text style={[styles.textSign, {
                       color:'#fff'
                   }]}>Guardar información</Text>
               </LinearGradient>

               </TouchableOpacity>
              
               </View>


    </View>
  );
};

export default ProfileScreenServicesProfesional;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  image: {
    height: MAX_HEIGHT,
    width: Dimensions.get('window').width,
    alignSelf: 'stretch',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  name: {
    fontWeight: 'bold',
  },
  section: {
    padding: 20,
   
    borderBottomColor: '#cccccc',
    backgroundColor: 'white',
  },
  sectionDesc: {
    padding: 20,
    paddingTop: 0,
    marginTop: -10,
    borderBottomColor: '#cccccc',
    backgroundColor: 'white',
  },
  sectionReserve: {
    padding: 15,
    paddingTop: 30, 
    borderBottomColor: '#cccccc',
    backgroundColor: 'white',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionContent: {
    fontSize: 16,
    textAlign: 'justify',
  },
  categories: {
    flexDirection: 'row',
    
  },
  categoryContainer: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 10,
  },
  category: {
    fontSize: 14,
    color: '#fff',
    marginLeft: 5,
    paddingRight: 4
  },
  titleContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageTitle: {
    color: 'white',
    backgroundColor: 'transparent',
    fontSize: 24,
  },
  navTitleView: {
    height: MIN_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 40 : 5,
    opacity: 0,
  },
  navTitle: {
    color: 'white',
    fontSize: 18,
    backgroundColor: 'transparent',
  },
  sectionLarge: {
    minHeight: 50,
  },
  cardDiscount:{
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'red',
    marginHorizontal: 8,
    fontSize: 15
  },
  categoryListContainerDesc: {
    flexDirection: 'row',
    marginBottom: 20,
    marginTop: 10,
    justifyContent: 'space-between',
  },
  categoryListContainerComment: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryListText: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  iconContainer: {
    height: 60,
    width: 60,
    position: 'absolute',
    marginTop: 285,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    right: 20,
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonDesc: {
    alignItems: 'center',
    color: '#ff2167',
    fontSize: 18,
    fontWeight: 'bold'
},
buttonComent: {
  alignItems: 'center',
  color: '#ff2167',
  fontSize: 18,
  fontWeight: 'bold',
  marginLeft: 40
},
signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
},
textSign: {
    fontSize: 20,
    fontWeight: 'bold'
},
categoryIcon: {
  borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 70,
    height: 70,
    backgroundColor: '#ff2167',
    borderRadius: 50,
},
categoryBtnTxt: {
  alignSelf: 'center',
  marginTop: 5,
  color: '#ff2167',
  fontSize: 18,
  marginLeft: 0
},
categoryBtn: {
  flex: 1,
    width: '30%',
    marginHorizontal: 0,
    alignSelf: 'center',
},
input: {
  height: 30,
  width: '100%',
  borderWidth: 1,
  borderColor: '#cccccc',
  paddingHorizontal: 10,
  marginRight: 0
},
action: {
  flexDirection: 'row',
  marginLeft: 100,
  position: 'absolute',
  borderBottomWidth: 0,
  borderBottomColor: '#f2f2f2',
  paddingBottom: 20
},
textInput: {
  flex: 1,
  marginTop: Platform.OS === 'ios' ? 0 : 0,
  color: '#05375a',
  fontSize: 20,
},
});
*/

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import React, {useRef,  useState}  from 'react';
import COLORS from '../consts/colors';
import {LinearGradient} from 'expo-linear-gradient';
import {useTheme} from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import StarRating2 from '../components/StarRating2';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  StatusBar,
  Platform,
  Animated,
  TouchableOpacity,
  FlatList,
  ScrollView,
   ImageBackground,
   Modal,
   TextInput,
   SafeAreaView,
} from 'react-native';
import HeaderImageScrollView, {
  TriggeringView,
} from 'react-native-image-header-scroll-view';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {comments} from '../model/comments';
import CardComments from '../components/CardComments';
import { Container, Content, List, ListItem, Header, Item, Input } from 'native-base';
import { useEffect } from 'react';
import {beautyServices} from '../model/beautyServices';
import CardServicesProf from '../components/CardServicesProf';
import { LogBox } from 'react-native';
const MIN_HEIGHT = Platform.OS === 'ios' ? 90 : 55;
const MAX_HEIGHT = 350;

 
  const ProfileScreenServicesProfesional = ({navigation}) => {
    const renderItem = ({item}) => {
      
      return (
          <CardServicesProf 
              itemData={item}
             
          />
      );
      
  };
    const {colors} = useTheme();
    const [data, setData] = React.useState({
      username: '',
      password: '',
      confirm_password: '',
      check_textInputChange: false,
      secureTextEntry: true,
      confirm_secureTextEntry: true,
    });
    
    
    const textInputChange = (val) => {
        if( val.length !== 0 ) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false
            });
        }
    }
    
    const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);
    useEffect(() => {
      LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }, [])
  const navTitleView = useRef(null);
  const theme = useTheme();
  const categories = ['Descripción', 'Servicios', 'Turnos'];
  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(1);
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />   
        <View
          style={styles.section}
          onHide={() => navTitleView.current.fadeInUp(200)}
          onDisplay={() => navTitleView.current.fadeOut(100)}>

<View style={styles.categoryListContainerDesc2}>
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setSelectedCategoryIndex(index)}>
            <View>
              <Text
                style={{
                  ...styles.categoryListText,
                  color:
                    selectedCategoryIndex == index
                      ? COLORS.rubik
                      : COLORS.grey,
                }}>
                {item}
              </Text>
              {selectedCategoryIndex == index && (
                <View
                  style={{
                    height: 3,
                    width: 30,
                    backgroundColor: COLORS.rubik,
                    marginTop: 2,
                  }}
                />
              )}
            </View>
          </TouchableOpacity>
        ))}
      </View>
           </View>
           <Container> 
       
           <View style={styles.sectionReserve}>
       
       <TouchableOpacity
                   style={styles.signIn}
                   
               >
                 
       <LinearGradient
                   colors={['#ff2167', '#ff2167']}
                   style={styles.signIn}
               >
                 
                   <Text style={[styles.textSign, {
                       color:'#fff'
                   }]}>Añadir servicio</Text>
               </LinearGradient>

               </TouchableOpacity>
               <TouchableOpacity>
               <ImageBackground
              source={require('../assets/discount.png')}
              resizeMode="center"
              style={styles.categoryIcon2}  
            />
            </TouchableOpacity>
              </View>
            
              
              

          


        
       <View style={styles.container}>
         <FlatList 
             data={beautyServices}
             renderItem={renderItem}
             keyExtractor={item => item.id}
         />

       </View>

       </Container>

    </View>
  );
};

export default ProfileScreenServicesProfesional;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  image: {
    height: MAX_HEIGHT,
    width: Dimensions.get('window').width,
    alignSelf: 'stretch',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  name: {
    fontWeight: 'bold',
  },
  section: {
    padding: 20,
   
    borderBottomColor: '#cccccc',
    backgroundColor: 'white',
  },
  sectionDesc: {
    padding: 20,
    paddingTop: 0,
    marginTop: -10,
    borderBottomColor: '#cccccc',
    backgroundColor: 'white',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionContent: {
    fontSize: 16,
    textAlign: 'justify',
  },
  categories: {
    flexDirection: 'row',
    
  },
  categoryContainer: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 10,
  },
  category: {
    fontSize: 14,
    color: '#fff',
    marginLeft: 5,
    paddingRight: 4
  },
  titleContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageTitle: {
    color: 'white',
    backgroundColor: 'transparent',
    fontSize: 24,
  },
  navTitleView: {
    height: MIN_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 40 : 5,
    opacity: 0,
  },
  navTitle: {
    color: 'white',
    fontSize: 18,
    backgroundColor: 'transparent',
  },
  sectionLarge: {
    minHeight: 50,
  },
  cardDiscount:{
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'red',
    marginHorizontal: 8,
    fontSize: 15
  },
  categoryListContainerDesc2: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  categoryListContainerComment: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryListText: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  iconContainer: {
    height: 60,
    width: 60,
    position: 'absolute',
    marginTop: 285,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    right: 20,
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonDesc: {
    alignItems: 'center',
    color: '#ff2167',
    fontSize: 18,
    fontWeight: 'bold'
},
buttonComent: {
  alignItems: 'center',
  color: '#ff2167',
  fontSize: 18,
  fontWeight: 'bold',
  marginLeft: 40
},

categoryBtnTxt: {
  alignSelf: 'center',
  marginTop: 5,
  color: '#ff2167',
  fontSize: 18,
  marginLeft: 0
},
input: {
  height: 30,
  width: '100%',
  borderWidth: 1,
  borderColor: '#cccccc',
  paddingHorizontal: 10,
  marginRight: 0
},
action: {
  flexDirection: 'row',
  marginLeft: 100,
  position: 'absolute',
  borderBottomWidth: 0,
  borderBottomColor: '#f2f2f2',
  paddingBottom: 20
},
textInput: {
  flex: 1,
  marginTop: Platform.OS === 'ios' ? 0 : 0,
  color: '#05375a',
  fontSize: 20,
},
sectionReserve: {
  paddingHorizontal: 5, 
  borderBottomColor: '#cccccc',
  backgroundColor: 'white',
  marginTop: 10,
  flexDirection: 'row',
  justifyContent: 'space-between'
},
signIn: {
    height: 50,
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: 10
},
textSign: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10
},

categoryBtn2: {
},
categoryIcon2: {
  width: 40,
  height: 40,
  borderRadius: 50,
  marginRight: 10,
},
});