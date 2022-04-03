import React from 'react';
import {CText} from '../common/c-text';
import {colors, layout, size, text} from '../styles';
import {
  SafeAreaView,
  View,
  StyleSheet,
  StatusBar,
  TextInput,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {OutlinedButton} from '../common/outlined-button';

export const RegisterScreen = ({route}) => {
  const {goBack, navigate} = useNavigation();

  const Item = ({title}) => (
    <View style={styles.item}>
      <CText
        style={[
          text.md,
          {color: 'white', marginLeft: size.md, marginVertical: 2},
        ]}>
        {title}
      </CText>
      <TextInput style={styles.input} secureTextEntry={true} />
    </View>
  );
  return (
    <SafeAreaView style={[styles.root, {backgroundColor: colors.primary}]}>
      <StatusBar barStyle="dark-content" />
      <ScrollView style={styles.header}>
        <CText style={[text.heading, {color: 'white'}]}>Бүртгүүлэх</CText>
        <CText style={[text.sm, {color: 'white'}]}>
          Шинээр бүртгэл үүсгэхийн тул та дараахын бүрэн бөглөсөн байх
          шаардлагатай
        </CText>
        <Item title="Нэр" />
        <Item title="Цахим шуудан" />
        <Item title="Шинэ нууц үг" />
        <Item title="Нууц үг давтах" />
        <Item title="Нас" />
        <Item title="Хүйс" />
        <Item title="Сонирхдог төрөл" />
        <OutlinedButton
          title="Бүртгүүлэх"
          bc={'white'}
          color={'white'}
          onPress={() => {
            navigate('LoginScreen');
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  root: {flex: 1},
  header: {
    paddingHorizontal: size.lg + 16,
    paddingTop: size.md,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
  },
  item: {
    marginVertical: size.sm,
  },
});
