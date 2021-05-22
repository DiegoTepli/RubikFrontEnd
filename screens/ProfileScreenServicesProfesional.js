/*import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import React, {useRef,  useState}  from 'react';
import COLORS from '../consts/colors';
import {LinearGradient} from 'expo-linear-gradient';
import {useTheme} from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import {beautyServices} from '../model/beautyServices';
import CardServicesProf from '../components/CardServicesProf';
import {Picker} from '@react-native-picker/picker';
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
import * as Animatable from 'react-native-animatable';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {comments} from '../model/comments';
import CardComments from '../components/CardComments';
import { Container, Content, List, ListItem, Header, Item, Input, Icon } from 'native-base';
import { useEffect } from 'react';
import { LogBox } from 'react-native';
const MIN_HEIGHT = Platform.OS === 'ios' ? 90 : 55;
const MAX_HEIGHT = 350;

 
  const ProfileScreenServicesProfesional = ({navigation}) => {
    const searchUser  = (textToSearch) => {
    alert(textToSearch);
  }
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
  const [modalOpen, setModalOpen] = useState(false);
    const [modalOpenInfo, setModalOpenInfo] = useState(false);

  const [modalOpenMon, setModalOpenMon] = useState(false);
  const [modalOpenTue, setModalOpenTue] = useState(false);
  const [modalOpenWed, setModalOpenWed] = useState(false);
  const [modalOpenThu, setModalOpenThu] = useState(false);
  const [modalOpenFri, setModalOpenFri] = useState(false);
  const [modalOpenSat, setModalOpenSat] = useState(false);
  const [modalOpenSun, setModalOpenSun] = useState(false);
  const categories = ['Descripción', 'Servicios', 'Turnos'];
  const [selectedLanguage, setSelectedLanguage] = useState();
   const [selectedLanguage2, setSelectedLanguage2] = useState();
   const [selectedLanguage3, setSelectedLanguage3] = useState();
   const [selectedLanguage4, setSelectedLanguage4] = useState();
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
sectionReserve2: {
  paddingHorizontal: 5, 
  borderBottomColor: '#cccccc',
  backgroundColor: 'white',
  marginTop: 10,
  flexDirection: 'row',
  justifyContent: 'space-between',
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

/*
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import React, {useRef,  useState, Component}  from 'react';
import COLORS from '../consts/colors';
import {beautyServices} from '../model/beautyServices';
import CardServicesProf from '../components/CardServicesProf';
import {LinearGradient} from 'expo-linear-gradient';
import {useTheme} from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import {Picker} from '@react-native-picker/picker';
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
import * as Animatable from 'react-native-animatable';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {comments} from '../model/comments';
import CardComments from '../components/CardComments';
import { Container, Content, List, ListItem, Header, Item, Input, Icon } from 'native-base';
import { useEffect } from 'react';
import { LogBox } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import SelectBox from 'react-native-multi-selectbox'
import { xorBy } from 'lodash'
import ModalDropdown from 'react-native-modal-dropdown';


const MIN_HEIGHT = Platform.OS === 'ios' ? 90 : 55;
const MAX_HEIGHT = 350;

 
  const ProfileScreenServicesProfesional = ({navigation}) => {
const searchUser  = (textToSearch) => {
    alert(textToSearch);
  }
    function onMultiChange() {
      return (item) => setSelectedTeams(xorBy(selectedTeams, [item], 'id'))
    }
  const [selectedTeams, setSelectedTeams] = useState([])

  function onMultiChange2() {
    return (item) => setSelectedTeams2(xorBy(selectedTeams2, [item], 'id'))
  }
const [selectedTeams2, setSelectedTeams2] = useState([])

function onMultiChange3() {
  return (item) => setSelectedTeams3(xorBy(selectedTeams3, [item], 'id'))
}
const [selectedTeams3, setSelectedTeams3] = useState([])

function onMultiChange4() {
  return (item) => setSelectedTeams4(xorBy(selectedTeams4, [item], 'id'))
}
const [selectedTeams4, setSelectedTeams4] = useState([])

function onMultiChange5() {
  return (item) => setSelectedTeams5(xorBy(selectedTeams5, [item], 'id'))
}
const [selectedTeams5, setSelectedTeams5] = useState([])

function onMultiChange6() {
  return (item) => setSelectedTeams6(xorBy(selectedTeams6, [item], 'id'))
}
const [selectedTeams6, setSelectedTeams6] = useState([])
  
function onMultiChange7() {
  return (item) => setSelectedTeams7(xorBy(selectedTeams7, [item], 'id'))
}
const [selectedTeams7, setSelectedTeams7] = useState([])

    const K_OPTIONS =
      
     [{
      id: '1',
      item: '07:00'
    }, {
      id: '2',
      item: '07:30'
    }, {
      id: '3',
      item: '08:00'
    }, {
      id: '4',
      item: '08:30'
    }, {
      id: '5',
      item: '09:00'
    }, {
      id: '6',
      item: '09:30'
    }, {
      id: '7',
      item: '10:00'
    }, {
      id: '8',
      item: '10:30'
    }, {
      id: '9',
      item: '11:00'
    }, {
      id: '10',
      item: '11:30'
    }, {
      id: '11',
      item: '12:00'
    }, {
      id: '12',
      item: '12:30'
    }, {
      id: '13',
      item: '13:00'
    }, {
      id: '14',
      item: '13:30'
    }, {
      id: '15',
      item: '14:00'
    }, {
      id: '16',
      item: '14:30'
    }, {
      id: '17',
      item: '15:00'
    }, {
      id: '18',
      item: '15:30'
    }, {
      id: '19',
      item: '16:00'
    }, {
      id: '20',
      item: '16:30'
    }, {
      id: '21',
      item: '17:00'
    }, {
      id: '22',
      item: '17:30'
    }, {
      id: '23',
      item: '18:00'
    }, {
      id: '24',
      item: '18:30'
    }, {
      id: '25',
      item: '19:00'
    }, {
      id: '26',
      item: '19:30'
    }, {
      id: '27',
      item: '20:00'
    }
  ]

    
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
  const [modalOpenMon, setModalOpenMon] = useState(false);
    const [modalOpenInfo, setModalOpenInfo] = useState(false);

  const [modalOpenTue, setModalOpenTue] = useState(false);
  const [modalOpenWed, setModalOpenWed] = useState(false);
  const [modalOpenThu, setModalOpenThu] = useState(false);
  const [modalOpenFri, setModalOpenFri] = useState(false);
  const [modalOpenSat, setModalOpenSat] = useState(false);
  const [modalOpenSun, setModalOpenSun] = useState(false);
  const categories = ['Descripción', 'Servicios', 'Turnos'];
  const [selectedLanguage, setSelectedLanguage] = useState();
   const [selectedLanguage2, setSelectedLanguage2] = useState();
   const [selectedLanguage3, setSelectedLanguage3] = useState();
   const [selectedLanguage4, setSelectedLanguage4] = useState();
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
    <View style={{ marginHorizontal: 18, marginBottom: 10, marginTop: 20}}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Lunes</Text>
      <View style={{flexDirection: 'row',marginLeft: 105,borderBottomWidth: 0,borderBottomColor: '#f2f2f2', marginTop: -7, position: 'absolute'}}>
      
       
       <TouchableOpacity
                   style={styles.signIn2}
                   onPress={() => setModalOpenMon(true)}
               >
       <LinearGradient
                   colors={['#ff2167', '#ff2167']}
                   style={styles.signIn2}
               >
                   <Text style={[styles.textSign2, {
                       color:'#fff'
                   }]}>Seleccionar turnos</Text>
               </LinearGradient>

               </TouchableOpacity>
              
               </View>
            </View>
            <Modal visible={modalOpenMon} animationType='slide' transparent = {true}>
        <View style={{backgroundColor: '#000000AA', flex: 1}}>
        <View style={{backgroundColor: 'white', marginTop: 180, marginHorizontal: 20, height: 350}}>
        <View style={{ marginHorizontal: 18, marginBottom: 10, marginTop: 20}}>
      <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 20}}>Lunes</Text>
      <View style={{flexDirection: 'row',marginLeft: 130,borderBottomWidth: 0,borderBottomColor: '#f2f2f2',paddingBottom: 20, marginTop: -27.5, position: 'absolute'}}>
      <SelectBox
        options={K_OPTIONS}
        selectedValues={selectedTeams}
        onMultiSelect={onMultiChange()}
        onTapClose={onMultiChange()}
        isMulti
      />
            </View>
    </View>          

        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 30, marginTop: 230, marginBottom: 20}}>
          <TouchableOpacity 
            style={{backgroundColor: '#ff2167', padding: 10}}
            onPress={() => setModalOpenMon(false)} 
          >
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          style={{backgroundColor: '#ff2167', padding: 10}}
            onPress={() => setModalOpenMon(false)} 
          >
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>Aceptar</Text>
          </TouchableOpacity>
        </View>
        </View>
        </View>
      </Modal>

      <View style={{ marginHorizontal: 18, marginBottom: 10, marginTop: 20}}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Martes</Text>
      <View style={{flexDirection: 'row',marginLeft: 105,borderBottomWidth: 0,borderBottomColor: '#f2f2f2', marginTop: -7, position: 'absolute'}}>
      
       
       <TouchableOpacity
                   style={styles.signIn2}
                   onPress={() => setModalOpenTue(true)}
               >
       <LinearGradient
                   colors={['#ff2167', '#ff2167']}
                   style={styles.signIn2}
               >
                   <Text style={[styles.textSign2, {
                       color:'#fff'
                   }]}>Seleccionar turnos</Text>
               </LinearGradient>

               </TouchableOpacity>
              
               </View>
            </View>
            <Modal visible={modalOpenTue} animationType='slide' transparent = {true}>
        <View style={{backgroundColor: '#000000AA', flex: 1}}>
        <View style={{backgroundColor: 'white', marginTop: 180, marginHorizontal: 20, height: 350}}>
        <View style={{ marginHorizontal: 18, marginBottom: 10, marginTop: 20}}>
      <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 20}}>Martes</Text>
      <View style={{flexDirection: 'row',marginLeft: 130,borderBottomWidth: 0,borderBottomColor: '#f2f2f2',paddingBottom: 20, marginTop: -27.5, position: 'absolute'}}>
      <SelectBox
        options={K_OPTIONS}
        selectedValues={selectedTeams2}
        onMultiSelect={onMultiChange2()}
        onTapClose={onMultiChange2()}
        isMulti
      />
            </View>
    </View>          

        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 30, marginTop: 230, marginBottom: 20}}>
          <TouchableOpacity 
            style={{backgroundColor: '#ff2167', padding: 10}}
            onPress={() => setModalOpenTue(false)} 
          >
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          style={{backgroundColor: '#ff2167', padding: 10}}
            onPress={() => setModalOpenTue(false)} 
          >
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>Aceptar</Text>
          </TouchableOpacity>
        </View>
        </View>
        </View>
      </Modal>

      <View style={{ marginHorizontal: 18, marginBottom: 10, marginTop: 20}}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Miercoles</Text>
      <View style={{flexDirection: 'row',marginLeft: 105,borderBottomWidth: 0,borderBottomColor: '#f2f2f2', marginTop: -7, position: 'absolute'}}>
      
       
       <TouchableOpacity
                   style={styles.signIn2}
                   onPress={() => setModalOpenWed(true)}
               >
       <LinearGradient
                   colors={['#ff2167', '#ff2167']}
                   style={styles.signIn2}
               >
                   <Text style={[styles.textSign2, {
                       color:'#fff'
                   }]}>Seleccionar turnos</Text>
               </LinearGradient>

               </TouchableOpacity>
              
               </View>
            </View>
            <Modal visible={modalOpenWed} animationType='slide' transparent = {true}>
        <View style={{backgroundColor: '#000000AA', flex: 1}}>
        <View style={{backgroundColor: 'white', marginTop: 180, marginHorizontal: 20, height: 350}}>
        <View style={{ marginHorizontal: 18, marginBottom: 10, marginTop: 20}}>
      <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 20}}>Miercoles</Text>
      <View style={{flexDirection: 'row',marginLeft: 130,borderBottomWidth: 0,borderBottomColor: '#f2f2f2',paddingBottom: 20, marginTop: -27.5, position: 'absolute'}}>
      <SelectBox
        options={K_OPTIONS}
        selectedValues={selectedTeams3}
        onMultiSelect={onMultiChange3()}
        onTapClose={onMultiChange3()}
        isMulti
      />
            </View>
    </View>          

        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 30, marginTop: 230, marginBottom: 20}}>
          <TouchableOpacity 
            style={{backgroundColor: '#ff2167', padding: 10}}
            onPress={() => setModalOpenWed(false)} 
          >
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          style={{backgroundColor: '#ff2167', padding: 10}}
            onPress={() => setModalOpenWed(false)} 
          >
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>Aceptar</Text>
          </TouchableOpacity>
        </View>
        </View>
        </View>
      </Modal>

      <View style={{ marginHorizontal: 18, marginBottom: 10, marginTop: 20}}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Jueves</Text>
      <View style={{flexDirection: 'row',marginLeft: 105,borderBottomWidth: 0,borderBottomColor: '#f2f2f2', marginTop: -7, position: 'absolute'}}>
      
       
       <TouchableOpacity
                   style={styles.signIn2}
                   onPress={() => setModalOpenThu(true)}
               >
       <LinearGradient
                   colors={['#ff2167', '#ff2167']}
                   style={styles.signIn2}
               >
                   <Text style={[styles.textSign2, {
                       color:'#fff'
                   }]}>Seleccionar turnos</Text>
               </LinearGradient>

               </TouchableOpacity>
              
               </View>
            </View>
            <Modal visible={modalOpenThu} animationType='slide' transparent = {true}>
        <View style={{backgroundColor: '#000000AA', flex: 1}}>
        <View style={{backgroundColor: 'white', marginTop: 180, marginHorizontal: 20, height: 350}}>
        <View style={{ marginHorizontal: 18, marginBottom: 10, marginTop: 20}}>
      <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 20}}>Jueves</Text>
      <View style={{flexDirection: 'row',marginLeft: 130,borderBottomWidth: 0,borderBottomColor: '#f2f2f2',paddingBottom: 20, marginTop: -27.5, position: 'absolute'}}>
      <SelectBox
        options={K_OPTIONS}
        selectedValues={selectedTeams4}
        onMultiSelect={onMultiChange4()}
        onTapClose={onMultiChange4()}
        isMulti
      />
            </View>
    </View>          

        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 30, marginTop: 230, marginBottom: 20}}>
          <TouchableOpacity 
            style={{backgroundColor: '#ff2167', padding: 10}}
            onPress={() => setModalOpenThu(false)} 
          >
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          style={{backgroundColor: '#ff2167', padding: 10}}
            onPress={() => setModalOpenThu(false)} 
          >
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>Aceptar</Text>
          </TouchableOpacity>
        </View>
        </View>
        </View>
      </Modal>

      <View style={{ marginHorizontal: 18, marginBottom: 10, marginTop: 20}}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Viernes</Text>
      <View style={{flexDirection: 'row',marginLeft: 105,borderBottomWidth: 0,borderBottomColor: '#f2f2f2', marginTop: -7, position: 'absolute'}}>
      
       
       <TouchableOpacity
                   style={styles.signIn2}
                   onPress={() => setModalOpenFri(true)}
               >
       <LinearGradient
                   colors={['#ff2167', '#ff2167']}
                   style={styles.signIn2}
               >
                   <Text style={[styles.textSign2, {
                       color:'#fff'
                   }]}>Seleccionar turnos</Text>
               </LinearGradient>

               </TouchableOpacity>
              
               </View>
            </View>
            <Modal visible={modalOpenFri} animationType='slide' transparent = {true}>
        <View style={{backgroundColor: '#000000AA', flex: 1}}>
        <View style={{backgroundColor: 'white', marginTop: 180, marginHorizontal: 20, height: 350}}>
        <View style={{ marginHorizontal: 18, marginBottom: 10, marginTop: 20}}>
      <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 20}}>Viernes</Text>
      <View style={{flexDirection: 'row',marginLeft: 130,borderBottomWidth: 0,borderBottomColor: '#f2f2f2',paddingBottom: 20, marginTop: -27.5, position: 'absolute'}}>
      <SelectBox
        options={K_OPTIONS}
        selectedValues={selectedTeams5}
        onMultiSelect={onMultiChange5()}
        onTapClose={onMultiChange5()}
        isMulti
      />
            </View>
    </View>          

        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 30, marginTop: 230, marginBottom: 20}}>
          <TouchableOpacity 
            style={{backgroundColor: '#ff2167', padding: 10}}
            onPress={() => setModalOpenFri(false)} 
          >
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          style={{backgroundColor: '#ff2167', padding: 10}}
            onPress={() => setModalOpenFri(false)} 
          >
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>Aceptar</Text>
          </TouchableOpacity>
        </View>
        </View>
        </View>
      </Modal>

      <View style={{ marginHorizontal: 18, marginBottom: 10, marginTop: 20}}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Sábado</Text>
      <View style={{flexDirection: 'row',marginLeft: 105,borderBottomWidth: 0,borderBottomColor: '#f2f2f2', marginTop: -7, position: 'absolute'}}>
      
       
       <TouchableOpacity
                   style={styles.signIn2}
                   onPress={() => setModalOpenSat(true)}
               >
       <LinearGradient
                   colors={['#ff2167', '#ff2167']}
                   style={styles.signIn2}
               >
                   <Text style={[styles.textSign2, {
                       color:'#fff'
                   }]}>Seleccionar turnos</Text>
               </LinearGradient>

               </TouchableOpacity>
              
               </View>
            </View>
            <Modal visible={modalOpenSat} animationType='slide' transparent = {true}>
        <View style={{backgroundColor: '#000000AA', flex: 1}}>
        <View style={{backgroundColor: 'white', marginTop: 180, marginHorizontal: 20, height: 350}}>
        <View style={{ marginHorizontal: 18, marginBottom: 10, marginTop: 20}}>
      <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 20}}>Sábado</Text>
      <View style={{flexDirection: 'row',marginLeft: 130,borderBottomWidth: 0,borderBottomColor: '#f2f2f2',paddingBottom: 20, marginTop: -27.5, position: 'absolute'}}>
      <SelectBox
        options={K_OPTIONS}
        selectedValues={selectedTeams6}
        onMultiSelect={onMultiChange6()}
        onTapClose={onMultiChange6()}
        isMulti
      />
            </View>
    </View>          

        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 30, marginTop: 230, marginBottom: 20}}>
          <TouchableOpacity 
            style={{backgroundColor: '#ff2167', padding: 10}}
            onPress={() => setModalOpenSat(false)} 
          >
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          style={{backgroundColor: '#ff2167', padding: 10}}
            onPress={() => setModalOpenSat(false)} 
          >
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>Aceptar</Text>
          </TouchableOpacity>
        </View>
        </View>
        </View>
      </Modal>

      <View style={{ marginHorizontal: 18, marginBottom: 10, marginTop: 20}}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Domingo</Text>
      <View style={{flexDirection: 'row',marginLeft: 105,borderBottomWidth: 0,borderBottomColor: '#f2f2f2', marginTop: -7, position: 'absolute'}}>
      
       
       <TouchableOpacity
                   style={styles.signIn2}
                   onPress={() => setModalOpenSun(true)}
               >
       <LinearGradient
                   colors={['#ff2167', '#ff2167']}
                   style={styles.signIn2}
               >
                   <Text style={[styles.textSign2, {
                       color:'#fff'
                   }]}>Seleccionar turnos</Text>
               </LinearGradient>

               </TouchableOpacity>
              
               </View>
            </View>
            <Modal visible={modalOpenSun} animationType='slide' transparent = {true}>
        <View style={{backgroundColor: '#000000AA', flex: 1}}>
        <View style={{backgroundColor: 'white', marginTop: 180, marginHorizontal: 20, height: 350}}>
        <View style={{ marginHorizontal: 18, marginBottom: 10, marginTop: 20}}>
      <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 20}}>Domingo</Text>
      <View style={{flexDirection: 'row',marginLeft: 130,borderBottomWidth: 0,borderBottomColor: '#f2f2f2',paddingBottom: 20, marginTop: -27.5, position: 'absolute'}}>
      <SelectBox
        options={K_OPTIONS}
        selectedValues={selectedTeams7}
        onMultiSelect={onMultiChange7()}
        onTapClose={onMultiChange7()}
        isMulti
      />
            </View>
    </View>          

        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 30, marginTop: 230, marginBottom: 20}}>
          <TouchableOpacity 
            style={{backgroundColor: '#ff2167', padding: 10}}
            onPress={() => setModalOpenSun(false)} 
          >
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          style={{backgroundColor: '#ff2167', padding: 10}}
            onPress={() => setModalOpenSun(false)} 
          >
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>Aceptar</Text>
          </TouchableOpacity>
        </View>
        </View>
        </View>
      </Modal>
    
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
                   }]}>Guardar turnos</Text>
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
sectionReserve2: {
  paddingHorizontal: 5, 
  borderBottomColor: '#cccccc',
  backgroundColor: 'white',
  marginTop: 10,
  flexDirection: 'row',
  justifyContent: 'space-between',
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
signIn2: {
  width: '100%',
  height: 40,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 10,
},
textSign2: {
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

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import React, { useRef, useState } from "react";
import COLORS from "../consts/colors";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
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
} from "react-native";
import HeaderImageScrollView, {
  TriggeringView,
} from "react-native-image-header-scroll-view";
import * as Animatable from "react-native-animatable";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { comments } from "../model/comments";
import CardComments from "../components/CardComments";
import {
  Container,
  Content,
  List,
  ListItem,
  Header,
  Item,
  Input,
  Icon,
} from "native-base";
import { useEffect } from "react";
import { beautyServices } from "../model/beautyServices";
import CardServicesProf from "../components/CardServicesProf";
import { LogBox } from "react-native";
const MIN_HEIGHT = Platform.OS === "ios" ? 90 : 55;
const MAX_HEIGHT = 350;

const ProfileScreenServicesProfesional = ({ navigation }) => {
  const searchUser = (textToSearch) => {
    alert(textToSearch);
  };
  const renderItem = ({ item }) => {
    return <CardServicesProf itemData={item} />;
  };
  const { colors } = useTheme();
  const [data, setData] = React.useState({
    username: "",
    password: "",
    confirm_password: "",
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });

  const textInputChange = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
      });
    }
  };

  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);
  const navTitleView = useRef(null);
  const theme = useTheme();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpenInfo, setModalOpenInfo] = useState(false);
  const [modalOpenMon, setModalOpenMon] = useState(false);
  const [modalOpenTue, setModalOpenTue] = useState(false);
  const [modalOpenWed, setModalOpenWed] = useState(false);
  const [modalOpenThu, setModalOpenThu] = useState(false);
  const [modalOpenFri, setModalOpenFri] = useState(false);
  const [modalOpenSat, setModalOpenSat] = useState(false);
  const [modalOpenSun, setModalOpenSun] = useState(false);
  const categories = ["Descripción", "Servicios", "Turnos"];
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [selectedLanguage2, setSelectedLanguage2] = useState();
  const [selectedLanguage3, setSelectedLanguage3] = useState();
  const [selectedLanguage4, setSelectedLanguage4] = useState();
  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(1);
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View
        style={styles.section}
        onHide={() => navTitleView.current.fadeInUp(200)}
        onDisplay={() => navTitleView.current.fadeOut(100)}
      >
        <View style={styles.categoryListContainerDesc2}>
          {categories.map((item, index) => (
            <TouchableOpacity
              key={index}
              activeOpacity={0.8}
              onPress={() => setSelectedCategoryIndex(index)}
            >
              <View>
                <Text
                  style={{
                    ...styles.categoryListText,
                    color:
                      selectedCategoryIndex == index
                        ? COLORS.rubik
                        : COLORS.grey,
                  }}
                >
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
        <View style={styles.sectionReserve2}>
          <TouchableOpacity
            style={styles.signIn}
            onPress={() => setModalOpen(true)}
          >
            <LinearGradient
              colors={["#ff2167", "#ff2167"]}
              style={styles.signIn}
            >
              <Text
                style={[
                  styles.textSign,
                  {
                    color: "#fff",
                  },
                ]}
              >
                Añadir servicio
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <Item style={{ marginLeft: 5 }}>
          <Icon name="ios-search" />
          <Input
            placeholder="Buscar servicio"
            onChangeText={(text) => {
              searchUser(text);
            }}
          />
        </Item>

        <Modal visible={modalOpen} animationType="slide" transparent={true}>
          <View style={{ backgroundColor: "#000000AA", flex: 1 }}>
            <View
              style={{
                backgroundColor: "white",
                marginTop: 180,
                marginHorizontal: 10,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    marginTop: 20,
                    color: "black",
                    marginLeft: 30,
                  }}
                >
                  Categoría:
                </Text>
                <Picker
                  style={{
                    width: "38%",
                    alignSelf: "flex-end",
                    marginLeft: 29,
                    height: "54%",
                    transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],
                  }}
                  selectedValue={selectedLanguage}
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectedLanguage(itemValue)
                  }
                >
                  <Picker.Item label="Peluquería" value="hairdressing" />
                  <Picker.Item label="Barbería" value="barbershop" />
                  <Picker.Item label="Estética" value="esthetic" />
                  <Picker.Item label="Manicuría" value="manicure" />
                  <Picker.Item label="Pedicuría" value="pedicure" />
                  <Picker.Item label="Maquillaje" value="makeup" />
                  <Picker.Item label="Depilación" value="hairRemoval" />
                  <Picker.Item label="Cuerpo" value="body" />
                  <Picker.Item label="Spa" value="spa" />
                </Picker>
              </View>

              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    marginTop: 20,
                    color: "black",
                    marginLeft: 30,
                  }}
                >
                  Servicio:
                </Text>
                <View style={{ width: "60%" }}>
                  <SafeAreaView style={styles.inputModal}>
                    <TextInput
                      placeholder=""
                      placeholderTextColor="#666666"
                      style={[
                        styles.textInput,
                        {
                          color: colors.text,
                        },
                      ]}
                      autoCapitalize="none"
                      onChangeText={(val) => textInputChange(val)}
                    />
                  </SafeAreaView>
                  {data.check_textInputChange ? (
                    <Animatable.View animation="bounceIn"></Animatable.View>
                  ) : null}
                </View>
              </View>

              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    marginTop: 20,
                    color: "black",
                    marginLeft: 30,
                  }}
                >
                  Precio:
                </Text>
                <View style={{ width: "25%", marginLeft: 15 }}>
                  <SafeAreaView style={styles.inputModal}>
                    <TextInput
                      placeholder=""
                      placeholderTextColor="#666666"
                      style={[
                        styles.textInput,
                        {
                          color: colors.text,
                        },
                      ]}
                      autoCapitalize="none"
                      onChangeText={(val) => textInputChange(val)}
                    />
                  </SafeAreaView>
                  {data.check_textInputChange ? (
                    <Animatable.View animation="bounceIn"></Animatable.View>
                  ) : null}
                </View>
              </View>

              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    marginTop: 20,
                    color: "black",
                    marginLeft: 30,
                  }}
                >
                  Descuento:
                </Text>
                <Picker
                  style={{
                    width: "26%",
                    alignSelf: "flex-end",
                    marginLeft: 18,
                    height: "54%",
                    transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],
                  }}
                  selectedValue={selectedLanguage2}
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectedLanguage2(itemValue)
                  }
                >
                  <Picker.Item label="0%" value="0" />
                  <Picker.Item label="5%" value="5" />
                  <Picker.Item label="10%" value="10" />
                  <Picker.Item label="15%" value="15" />
                  <Picker.Item label="20%" value="20" />
                  <Picker.Item label="25%" value="25" />
                  <Picker.Item label="30%" value="30" />
                  <Picker.Item label="35%" value="35" />
                  <Picker.Item label="40%" value="40" />
                  <Picker.Item label="45%" value="45" />
                  <Picker.Item label="50%" value="50" />
                  <Picker.Item label="55%" value="55" />
                  <Picker.Item label="60%" value="60" />
                  <Picker.Item label="65%" value="65" />
                  <Picker.Item label="70%" value="70" />
                  <Picker.Item label="75%" value="75" />
                  <Picker.Item label="80%" value="80" />
                  <Picker.Item label="85%" value="85" />
                  <Picker.Item label="90%" value="90" />
                  <Picker.Item label="95%" value="95" />
                </Picker>
              </View>

              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    marginTop: 20,
                    color: "black",
                    marginLeft: 30,
                  }}
                >
                  Modo:
                </Text>
                <Picker
                  style={{
                    width: "35%",
                    alignSelf: "flex-end",
                    marginLeft: 65,
                    height: "54%",
                    transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],
                  }}
                  selectedValue={selectedLanguage3}
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectedLanguage3(itemValue)
                  }
                >
                  <Picker.Item label="Gratuito" value="free" />
                  <Picker.Item label="Clásico" value="classic" />
                  <Picker.Item label="Premium" value="premium" />
                </Picker>

                <TouchableOpacity
                  onPress={() => {
                    setModalOpenInfo(true);
                    setModalOpen(false);
                  }}
                >
                  <ImageBackground
                    source={require("../assets/moreInfo.png")}
                    resizeMode="center"
                    style={styles.categoryIcon2}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    marginTop: 20,
                    color: "black",
                    marginLeft: 27,
                  }}
                >
                  {" "}
                  Pago:
                </Text>
                <Picker
                  style={{
                    width: "51%",
                    alignSelf: "flex-end",
                    marginLeft: 72,
                    height: "54%",
                    transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],
                  }}
                  selectedValue={selectedLanguage4}
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectedLanguage4(itemValue)
                  }
                >
                  <Picker.Item label="Tarjeta de crédito" value="creditCard" />
                  <Picker.Item label="Tarjeta de débito" value="debitCard" />
                </Picker>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginHorizontal: 30,
                  marginTop: 30,
                  marginBottom: 20,
                }}
              >
                <TouchableOpacity
                  style={{ backgroundColor: "#ff2167", padding: 10 }}
                  onPress={() => setModalOpen(false)}
                >
                  <Text
                    style={{ color: "white", fontWeight: "bold", fontSize: 18 }}
                  >
                    Cancelar
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{ backgroundColor: "#ff2167", padding: 10 }}
                  onPress={() => setModalOpen(false)}
                >
                  <Text
                    style={{ color: "white", fontWeight: "bold", fontSize: 18 }}
                  >
                    Aceptar
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        <Modal visible={modalOpenInfo} animationType="slide" transparent={true}>
          <View style={{ backgroundColor: "#000000AA", flex: 1 }}>
            <View
              style={{
                backgroundColor: "white",
                marginTop: 130,
                marginHorizontal: 20,
              }}
            >
              <View style={{ flexDirection: "row", marginTop: 10 }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    margin: 10,
                    color: "black",
                  }}
                >
                  Gratuito:{" "}
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    color: "black",
                    marginTop: 10,
                    paddingRight: 100,
                    marginLeft: 10,
                  }}
                >
                  Cargo mensual por alta del servicio: $0,00. Posicionamiento:
                  Bajo
                </Text>
              </View>

              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    margin: 10,
                    color: "black",
                  }}
                >
                  Clásico:{" "}
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    color: "black",
                    marginTop: 10,
                    paddingRight: 89,
                    marginLeft: 17,
                  }}
                >
                  Cargo mensual por alta del servicio: $100,00. Posicionamiento:
                  Alto
                </Text>
              </View>

              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    margin: 10,
                    color: "black",
                  }}
                >
                  Premium:{" "}
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    color: "black",
                    marginTop: 10,
                    paddingRight: 110,
                  }}
                >
                  Cargo mensual por alta del servicio: $200,00. Posicionamiento:
                  Máximo
                </Text>
              </View>

              <View
                style={{
                  width: "30%",
                  alignSelf: "center",
                  marginTop: 30,
                  marginBottom: 20,
                }}
              >
                <TouchableOpacity
                  style={{ backgroundColor: "#ff2167", padding: 10 }}
                  onPress={() => {
                    setModalOpenInfo(false);
                    setModalOpen(true);
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      fontSize: 18,
                      alignSelf: "center",
                    }}
                  >
                    Regresar
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        <View style={styles.container}>
          <FlatList
            data={beautyServices}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
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
    width: Dimensions.get("window").width,
    alignSelf: "stretch",
    resizeMode: "cover",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  name: {
    fontWeight: "bold",
  },
  section: {
    padding: 20,

    borderBottomColor: "#cccccc",
    backgroundColor: "white",
  },
  sectionDesc: {
    padding: 20,
    paddingTop: 0,
    marginTop: -10,
    borderBottomColor: "#cccccc",
    backgroundColor: "white",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  sectionContent: {
    fontSize: 16,
    textAlign: "justify",
  },
  categories: {
    flexDirection: "row",
  },
  categoryContainer: {
    flexDirection: "row",
    width: "90%",
    alignSelf: "center",
    marginTop: 25,
    marginBottom: 10,
  },
  category: {
    fontSize: 14,
    color: "#fff",
    marginLeft: 5,
    paddingRight: 4,
  },
  titleContainer: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  imageTitle: {
    color: "white",
    backgroundColor: "transparent",
    fontSize: 24,
  },
  navTitleView: {
    height: MIN_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Platform.OS === "ios" ? 40 : 5,
    opacity: 0,
  },
  navTitle: {
    color: "white",
    fontSize: 18,
    backgroundColor: "transparent",
  },
  sectionLarge: {
    minHeight: 50,
  },
  cardDiscount: {
    alignSelf: "center",
    fontWeight: "bold",
    color: "red",
    marginHorizontal: 8,
    fontSize: 15,
  },
  categoryListContainerDesc2: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    justifyContent: "space-between",
  },
  categoryListContainerComment: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  categoryListText: {
    fontSize: 17,
    fontWeight: "bold",
  },
  iconContainer: {
    height: 60,
    width: 60,
    position: "absolute",
    marginTop: 285,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    right: 20,
    elevation: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonDesc: {
    alignItems: "center",
    color: "#ff2167",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonComent: {
    alignItems: "center",
    color: "#ff2167",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 40,
  },

  categoryBtnTxt: {
    alignSelf: "center",
    marginTop: 5,
    color: "#ff2167",
    fontSize: 18,
    marginLeft: 0,
  },
  input: {
    height: 30,
    width: "100%",
    borderWidth: 1,
    borderColor: "#cccccc",
    paddingHorizontal: 10,
    marginRight: 0,
  },
  inputModal: {
    height: 30,
    borderWidth: 1,
    borderColor: "#cccccc",
    marginLeft: 37,
    marginTop: 18,
  },
  action: {
    flexDirection: "row",
    marginLeft: 100,
    position: "absolute",
    borderBottomWidth: 0,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 20,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : 0,
    color: "#05375a",
    fontSize: 20,
  },
  sectionReserve2: {
    paddingHorizontal: 5,
    borderBottomColor: "#cccccc",
    backgroundColor: "white",
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  signIn: {
    height: 50,
    justifyContent: "center",
    borderRadius: 10,
    marginBottom: 10,
  },
  textSign: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
  },

  categoryBtn2: {},
  categoryIcon2: {
    width: 20,
    height: 20,
    borderRadius: 50,
    marginTop: 24,
    marginLeft: 7,
  },
});
