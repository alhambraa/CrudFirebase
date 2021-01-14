import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';

import firestore from '@react-native-firebase/firestore';

const InputContent = () => {

  const inputTitle = React.createRef();
  const inputDesc = React.createRef();
  const inputAuthor = React.createRef();

  const [boardTitle, setBoardTitle] = useState();
  const [boardDesc, setBoardDesc] = useState();
  const [boardAuthor, setBoardAuthor] = useState();

  const onChangeBoardTitle = (boardTitle) => {
    setBoardTitle(boardTitle);
  };

  const onChangeBoardDesc = (boardDesc) => {
    setBoardDesc(boardDesc);
  };

  const onChangeBoardAuthor = (boardAuthor) => {
    setBoardAuthor(boardAuthor);
  };

  const handleAddContent = () => {
    
    firestore()
    .collection('content')
    .add({
      title: boardTitle,
      description: boardDesc,
      author: boardAuthor,
    })
    .then(function (docRef) {
      console.log('Document written with ID: ', docRef.id);
      inputTitle.current.clear();
      inputDesc.current.clear();
      inputAuthor.current.clear();
      alert('Content successfully added');
    })
    .catch(function (error) {
      console.error('Error adding document: ', error);
      alert(error);
    });

  };

    return (
      <SafeAreaView style={styles.container}>
      
      <Text style={styles.createTitle}>Create New Content</Text>
      <Input
        placeholder="Title"
        ref={inputTitle}
        onChangeText={(boardTitle) => onChangeBoardTitle(boardTitle)}
        rightIcon={
          <Icon
            name='adn'
            size={24}
            color='red'
          />
        }
        
      />
      <Input
        placeholder="Description"
        ref={inputDesc}
        onChangeText={(boardDesc) => onChangeBoardDesc(boardDesc)}
        rightIcon={
          <Icon
            name='book'
            size={24}
            color='red'
          />
        }
      />
      <Input
        placeholder="Author"
        ref={inputAuthor}
        onChangeText={(boardAuthor) => onChangeBoardAuthor(boardAuthor)}
        rightIcon={
          <Icon
            name='user-circle'
            size={24}
            color='red'
          />
        }
      />
      <TouchableOpacity style={styles.button} onPress={handleAddContent}>
        <Text>
          <Icon
            name='save'
            size={24}
            color='red'
          />  Save</Text>
      </TouchableOpacity>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#00a4e4',
    width: '50%',
    padding: 10,
  },

  createTitle: {
    alignItems: 'center',
    marginBottom : 10,
    fontWeight: "bold",
    padding: 10,
  },
});



export default InputContent;