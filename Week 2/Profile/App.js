import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity,ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
export default function App() {
  const centerImgData = Math.floor(img.length / 2);
  return (
    <View style={styles.All}>

      {/* header */}
      <View style={styles.header}>
        {/* Avata */}
        <View style={styles.avata}>
          <Image
            source={{
              uri:
                "https://previews.123rf.com/images/rikkyal/rikkyal1712/rikkyal171200015/90908356-bearded-man-s-face-hipster-character-fashion-silhouette-avata.jpg"
            }}
            style={{
              width: 150,
              height: "100%"
            }}
            resizeMode="contain"
          />
        </View>
        {/* profile */}
        <View style={styles.profile}>
          <Text style={styles.profileText}>Hoàng Phương</Text>
          <Text style={{ fontWeight: "normal", marginTop: 2, fontSize: 17 }}>Developer</Text>
          {/* button */}
          <View style={{ flexDirection: 'row',marginTop: 10 }} >
            <TouchableOpacity style={{borderRadius:14,justifyContent:"center",alignItems:"center",height: 35, backgroundColor: "#5858FA", width: 90}}>
                  <Text style={{color:"white"}}>Follow</Text>
            </TouchableOpacity>
                
                 
            <TouchableOpacity style={{ justifyContent:'center',alignItems:'center',height: 35, backgroundColor: "#58FAF4", width: 50,marginLeft:10,borderRadius:14 }}>
            <Ionicons name="md-send" size={20} color="white" />
            </TouchableOpacity>
          </View>

        </View>
        {/* header-end */}
      </View>

      <View style={styles.reaction}>
            <View>
              <Text style={styles.numbers}>210</Text>
              <Text style={styles.title}>Photos</Text>
            </View>
           
            <View>
            <Text style={styles.numbers}>15k</Text>
              <Text style={styles.title}>Followers</Text>
            </View>

            <View>
            <Text style={styles.numbers}>605</Text>
              <Text style={styles.title}>Following</Text>
            </View>
      </View>
    <ScrollView style={{
      flex:0.7
    }}>
      <View style={styles.container}>
            <View style={{
              flexDirection:'column',

            }}>
              {img.slice(0,centerImgData).map(item =>{
                return <Image source={item.imgSource} style={{
                  width:150,
                  height:150
                }}></Image>
              })}
            </View>

            <View style={{
              flexDirection:'column',

            }}>
            {img.slice(centerImgData).map(item => {
                return <Image source={item.imgSource} style={{
                  width:150,
                  height:150
                }}></Image>
            })}

            </View>

           
      </View>
      </ScrollView>

    </View>
  );
}
 


const img = [
  {id: 1,imgSource: require('./assets/1.jpg')},
  {id: 2,imgSource: require('./assets/1.jpg')},
  {id: 3,imgSource: require('./assets/1.jpg')},
  {id: 4,imgSource: require('./assets/1.jpg')},
  {id: 5,imgSource: require('./assets/1.jpg')},
  {id: 6,imgSource: require('./assets/1.jpg')},
  {id: 7,imgSource: require('./assets/1.jpg')},
  {id: 8,imgSource: require('./assets/1.jpg')},
  {id: 9,imgSource: require('./assets/1.jpg')},
  {id: 10,imgSource: require('./assets/1.jpg')}

]

const styles = StyleSheet.create({
  All: {
    flex: 1,
  
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    flex: 0.3,
    backgroundColor: 'white',
    width: '100%',
    flexDirection: 'row',



  },

  profile: {
    height: '100%',
    backgroundColor: 'white',
    alignItems: "flex-start",
    marginTop: 15,


  },

  profileText: {
    fontWeight: 'bold',
    fontSize: 22
  },


  reaction: {
    flex: 0.2,
    backgroundColor: 'white',
    width: '100%',
    flexDirection:"row",
    justifyContent:'space-around',
    alignItems: 'center'
    
    
  },

  title: {
      fontSize:20,
      justifyContent:'center',
       alignItems: 'center',
      
  },

  numbers: {
      fontWeight:'bold',
      fontSize: 25,
      justifyContent:'center',
      alignItems: 'center'
  },

  container: {
    flex: 0.6,
    
    width: '100%',
    flexDirection:"row",
    justifyContent:'center',
    alignItems:"center",
    
  }

});
