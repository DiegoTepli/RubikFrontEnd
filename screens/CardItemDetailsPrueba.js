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
   SafeAreaView
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

 
  const CardItemDetailsPrueba = ({route, navigation}) => {
    const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);
    useEffect(() => {
      LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }, [])
  const itemData = route.params.itemData;
  const navTitleView = useRef(null);
  const theme = useTheme();
  const categories = ['Descripción', 'Comentarios y puntación'];
  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
  
  const desc = (item) =>
  {item == "Descripción" && (
    <View >
      <Text>Hola</Text>
    </View>
  )}
  {item == "Comentarios y puntación" && (
    <View>
      <Text>Chau</Text>
    </View>
  )}

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      
          <View style={{height: 330}}>
            <Image source={itemData.image} style={styles.image} />
            
            <View style={styles.iconContainer}>
            <TouchableOpacity>
          <Icon name="favorite" color={COLORS.red} size={30} />
          </TouchableOpacity>
        </View>
        
          </View>
          
        <View
          style={styles.section}
          onHide={() => navTitleView.current.fadeInUp(200)}
          onDisplay={() => navTitleView.current.fadeOut(100)}>

<View style={styles.categoryListContainerDesc}>
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            
            activeOpacity={0.8}
            onPress={() => {setSelectedCategoryIndex(index), desc(item)}}>
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
            
            

          </TouchableOpacity >
          
        )
        )
        }
        
      </View>
      </View> 
    </View>
  );
};

export default CardItemDetailsPrueba;

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
    paddingTop: 0,
    
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
    backgroundColor: '#ff2167',
    
    marginTop: 8,
    marginBottom: 8,
    marginRight: 10,
    borderRadius: 10,
    padding: 8,
    paddingHorizontal: 5,
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
  alignSelf: 'flex-end',
  width: 40,
  height: 40,
  borderRadius: 50,
  marginTop: 10,
  marginRight: 10,
  backgroundColor: '#ff2167'
},
categoryBtnTxt: {
  alignSelf: 'center',
  marginTop: 5,
  color: '#ff2167',
  fontSize: 18,
  marginLeft: 0
},
categoryBtn: {
  alignSelf: 'flex-end',
  

  position: 'absolute'
},
input: {
  height: 100,
  margin: 10,
  marginTop: 20,
  borderWidth: 1,
  borderColor: '#cccccc'
},
});


/*
import React, {useRef,  useState}  from 'react';
import COLORS from '../consts/colors';
import {LinearGradient} from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import {useTheme} from '@react-navigation/native';
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
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {comments} from '../model/comments';
import CardComments from '../components/CardComments';
import { Container, Content, List, ListItem, Header, Item, Input } from 'native-base';
import {data} from '../model/data';
import Card from '../components/Card';
import { useEffect } from 'react';
import { LogBox } from 'react-native';
const MIN_HEIGHT = Platform.OS === 'ios' ? 90 : 55;
const MAX_HEIGHT = 350;

 
  const CardItemDetailsPrueba = ({route, navigation}) => {
    const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    useEffect(() => {
      LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }, [])
  const itemData = route.params.itemData;
  const navTitleView = useRef(null);
  const theme = useTheme();
  const categories = ['Descripción', 'Comentarios y puntación'];
  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(1);

  const renderItem = ({item}) => {
      
    return (
        <CardComments
            itemData={item}
        />
    );
    
};


  return (
    
    <Container> 
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
     
          <View style={{height: 330}}>
            <Image source={itemData.image} style={styles.image} />
            <View style={styles.iconContainer}>
          <Icon name="favorite" color={COLORS.red} size={30} />
        </View>
        
          </View>
          

       

        <View
          style={styles.section}
          onHide={() => navTitleView.current.fadeInUp(200)}
          onDisplay={() => navTitleView.current.fadeOut(100)}>
            
<View style={styles.categoryListContainerComment}>
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
      
      <View style={styles.container}>
      <Modal visible={modalOpen} animationType='slide' transparent = {true}>
        <View style={{backgroundColor: '#000000AA', flex: 1}}>
        <View style={{backgroundColor: 'white', marginTop: 180, marginHorizontal: 20}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', alignSelf: 'center', marginTop: 20, color: '#ff2167'}}>Evaluar profesional</Text>
      <SafeAreaView style={styles.input}>
      
      <TextInput
        
        style={{fontSize: 20, fontWeight: 'bold', marginLeft: 5, marginTop: 5}}
        multiline
        placeholder="Deja tu comentario aquí"
        
      />
    </SafeAreaView>
    <Text style={{fontSize: 20, fontWeight: 'bold', alignSelf: 'center', marginTop: 10, color: '#ff2167'}}>Deja tu rating</Text>
    
        <View style={{alignSelf: 'center', marginTop: 20, flexDirection: 'row'}}>     

     <TouchableOpacity
     style={{marginHorizontal: 5}}>
       <FontAwesome name="star" size={30} color="#FF6347"/>
       </TouchableOpacity>
       <TouchableOpacity
     style={{marginHorizontal: 5}}>
       <FontAwesome name="star" size={30} color="#FF6347"/>
       </TouchableOpacity>
       <TouchableOpacity
     style={{marginHorizontal: 5}}>
       <FontAwesome name="star" size={30} color="#FF6347"/>
       </TouchableOpacity>
       <TouchableOpacity
     style={{marginHorizontal: 5}}>
       <FontAwesome name="star" size={30} color="#FF6347"/>
       </TouchableOpacity>
       <TouchableOpacity
     style={{marginHorizontal: 5}}>
       <FontAwesome name="star" size={30} color="#FF6347"/>
       </TouchableOpacity>
              
              </View> 
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 30, marginTop: 30, marginBottom: 20}}>
          <TouchableOpacity 
            style={{backgroundColor: '#ff2167', padding: 10}}
            onPress={() => setModalOpen(false)} 
          >
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          style={{backgroundColor: '#ff2167', padding: 10}}
            onPress={() => setModalOpen(false)} 
          >
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>Evaluar</Text>
          </TouchableOpacity>
        </View>
        </View>
        </View>
      </Modal>
        <FlatList 
            data={comments}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
        
        
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() => setModalOpen(true)}
          >
            <ImageBackground
              source={require('../assets/pencil.jpg')}
              resizeMode="center"
              style={styles.categoryIcon}
               
            />
      
        </TouchableOpacity>
        

      </View>
    </View>
    </Container>
    
  );
};

export default CardItemDetailsPrueba;

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
    paddingTop: 0,
   
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
    backgroundColor: '#ff2167',
    
    marginTop: 8,
    marginBottom: 8,
    marginRight: 10,
    borderRadius: 10,
    padding: 8,
    paddingHorizontal: 5,
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
  alignSelf: 'flex-end',
  width: 40,
  height: 40,
  borderRadius: 50,
  marginTop: 10,
  marginRight: 10,
  backgroundColor: '#ff2167'
},
categoryBtnTxt: {
  alignSelf: 'center',
  marginTop: 5,
  color: '#ff2167',
  fontSize: 18,
  marginLeft: 0
},
categoryBtn: {
 alignSelf: 'flex-end',
  

  position: 'absolute'
},
input: {
  height: 100,
  margin: 10,
  marginTop: 20,
  borderWidth: 1,
  borderColor: '#cccccc'
},
});
*/


