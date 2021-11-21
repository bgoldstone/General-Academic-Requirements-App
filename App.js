import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, ScrollView, StyleSheet, SafeAreaView, TextInput, Text, View, Image } from 'react-native';

export default function App() {
  const[text1, setText1] = useState('')
  const[text2, setText2] = useState('')
  const[text3, setText3] = useState('')
  const[text4, setText4] = useState('')
  const[text5, setText5] = useState('')
  const[text6, setText6] = useState('')
  const[text7, setText7] = useState('')
  const[text8, setText8] = useState('')
  const[text9, setText9] = useState('')
  const[text10, setText10] = useState('')
  const[text11, setText11] = useState('')
  const[text12, setText12] = useState('')
  
  return (
    <View><Text style={styles.h1}>GAR Requirements</Text>
    <View style={styles.container}>
      
      <ScrollView>
      <Text style={styles.item}>First-Year Seminar(FY)</Text>
      <Text style={styles.req}>Req. 1, Status:
          <TextInput style={styles.inp} placeholder='0' onChangeText={text1 => setText1(text1)}/><Text>/1</Text>
        </Text>
        <Text>{"\n"}</Text>

        <Text style={styles.item}>Writing(W)</Text>
      <Text style={styles.req}>Req. 2(1 in Major), Status:
          <TextInput style={styles.inp} placeholder='0' onChangeText={text2 => setText2(text2)}/><Text>/2</Text>
        </Text>
        <Text>{"\n"}</Text>

        <Text style={styles.item}>Language(FL)</Text>
      <Text style={styles.req}>Req. 2 in same Language, Status:
          <TextInput style={styles.inp} placeholder='0' onChangeText={text3 => setText3(text3)}/><Text>/2</Text>
        </Text>
        <Text>{"\n"}</Text>

        <Text style={styles.item}>Reasoning(RG)</Text>
      <Text style={styles.req}>Req. 1, Status:
          <TextInput style={styles.inp} placeholder='0' onChangeText={text4 => setText4(text4)}/><Text>/1</Text>
        </Text>
        <Text>{"\n"}</Text>

        <Text style={styles.item}>Arts(AR)</Text>
      <Text style={styles.req}>Req. 1, Status:
          <TextInput style={styles.inp} placeholder='0' onChangeText={text5 => setText5(text5)}/><Text>/1</Text>
        </Text>
        <Text>{"\n"}</Text>

        <Text style={styles.item}>Humanities(HU)</Text>
      <Text style={styles.req}>Req. 3(Diff Prefixes), Status:
          <TextInput style={styles.inp} placeholder='0' onChangeText={text6 => setText6(text6)}/><Text>/3</Text>
        </Text>
        <Text>{"\n"}</Text>


        <Text style={styles.item}>Natural Sciences and Mathematics(SC)</Text>
      <Text style={styles.req}>Req. 2(Diff Prefixes), Status:
          <TextInput style={styles.inp} placeholder='0' onChangeText={text7 => setText7(text7)}/><Text>/2</Text>
        </Text>
        <Text>{"\n"}</Text>

        <Text style={styles.item}>Social Sciences(SL)</Text>
      <Text style={styles.req}>Req. 2(Diff Prefixes), Status:
          <TextInput style={styles.inp} placeholder='0' onChangeText={text8 => setText8(text8)}/><Text>/2</Text>
        </Text>
        <Text>{"\n"}</Text>

        <Text style={styles.item}>Integrative Learning(IL)</Text>
      <Text style={styles.req}>Req. 1, Status:
          <TextInput style={styles.inp} placeholder='0' onChangeText={text9 => setText9(text9)}/><Text>/1</Text>
        </Text>
        <Text>{"\n"}</Text>

        <Text style={styles.item}>Human Difference and Global Engagement(DE)</Text>
      <Text style={styles.req}>Req. 2, Status:
          <TextInput style={styles.inp} placeholder='0' onChangeText={text10 => setText10(text10)}/><Text>/2</Text>
        </Text>
        <Text>{"\n"}</Text>

        <Text style={styles.item}>Culminating Undergraduate Experience(CUE)</Text>
      <Text style={styles.req}>Req. 1 in Major, Status:
          <TextInput style={styles.inp} placeholder='0' onChangeText={text11 => setText11(text11)}/><Text>/1</Text>
        </Text>
        <Text>{"\n"}</Text>

        <Text style={styles.item}>Personal and Professional Development(PPD)</Text>
      <Text style={styles.req}>Req. 1, Status:
          <TextInput style={styles.inp} placeholder='0' onChangeText={text12 => setText12(text12)}/><Text>/1</Text>
        </Text>
        <Text>{"\n"}</Text>
        
        <Text style={styles.total}>Total GARs Calculated 
        {": "}{calc(text1,text2,text3,text4,text5,text6,text7,text8,text9,text10,text11,text12)}/19</Text>
          <Text>{"\n"}</Text>
          <Image style={styles.image} source={{ uri: 'https://github.com/bgoldstone/General-Academic-Requirements-App/raw/main/muhlenberg.jpg'}}/>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
    </View>
  );
}

function calc(text1,text2,text3,text4,text5,text6,text7,text8,text9,text10,text11,text12){
  
  if (Number(text1) > 1){
    text1=1
  } else{
    text1 = Number(text1)
  }

  if (Number(text2) > 2){
    text2=2
  } else{
    text2 = Number(text2)
  }

  if (Number(text3) > 2){
    text3=2
  } else{
    text3 = Number(text3)
  }

  if (Number(text4) > 1){
    text4=1
  } else{
    text4 = Number(text4)
  }

  if (Number(text5) > 1){
    text5=1
  } else{
    text5 = Number(text5)
  }

  if (Number(text6) > 3){
    text6=3
  } else{
    text6 = Number(text6)
  }

  if (Number(text7) > 2){
    text7=2
  } else{
    text7 = Number(text7)
  }

  if (Number(text8) > 2){
    text8=2
  } else{
    text8 = Number(text8)
  }

  if (Number(text9) > 1){
    text9=1
  } else{
    text9 = Number(text9)
  }

  if (Number(text10) > 2){
    text10=2
  } else{
    text10 = Number(text10)
  }

  if (Number(text11) > 1){
    text11=1
  } else{
    text11 = Number(text11)
  }

  if (Number(text12) > 1){
    text12=1
  } else{
    text12 = Number(text12)
  }

  return Number(text1+text2+text3+text4+text5+
  text6+text7+text8+text9+text10+text11+text12)
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: 'white',
    
  },
  h1: {
    fontSize: 100,
    backgroundColor: 'darkred',
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Ariel',
    paddingBottom: 5,
  },
  item: {
    // 
    fontSize : 25,
    marginLeft: 5,
    fontFamily: 'Ariel'
  },
  total: {
    // 
    fontSize : 40,
    fontWeight: 'bold',
    marginLeft: 5,
    fontFamily: 'Ariel',
  },
  req: {
    // 
    fontSize : 18,
    marginLeft: 15,
    color: 'grey',
  },
  inp: {
    fontSize: 18,
    marginLeft: 15,
    borderWidth: 1,
    width : 35,
  },  
  image: {
    alignContent: 'left',
  }
});
