import React from 'react';
import {Text, View} from 'react-native';
import {BorderlessButton} from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

interface HeaderProps {
  title: string;
  showCancelButton?: boolean;
}

const Header: React.FC<HeaderProps> = ({title, showCancelButton = true}) => {
  const navigator = useNavigation();

  const goBackToHomepage = () => {
    navigator.navigate('OrphanagesMap');
  };

  return (
    <View style={styles.container}>
      <BorderlessButton>
        <Feather
          name="arrow-left"
          size={24}
          color="#15b6d6"
          onPress={navigator.goBack}
        />
      </BorderlessButton>

      <Text style={styles.title}>{title}</Text>

      {showCancelButton ? (
        <BorderlessButton>
          <Feather
            name="x"
            size={24}
            color="#ff669d"
            onPress={goBackToHomepage}
          />
        </BorderlessButton>
      ) : (
        <View style={styles.emptyView} />
      )}
    </View>
  );
};

export default Header;
