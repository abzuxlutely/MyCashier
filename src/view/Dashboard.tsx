import React from 'react';
import {
  Image,
  // ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
// import DataServices from '../service/DataServices';
interface props {
  navigation: any;
}
class Dashboard extends React.Component<props> {
  state = {
    name: '',
    email: '',
    address: '',
    dataItem: [],
    selectedItem: {},
    kodeItem: '',
    namaItem: '',
    hargaItem: 0,
    kuantitasItem: '',
    satuanItem: '',
    modaltoggle: false,
  };

  private handleDateTime() {
    const timestamp = new Date().getTime();
    const date = new Date(timestamp);
    const local = date.toLocaleString();

    return local;
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.title}>MyCashier</Text>
        <Text style={{fontWeight: 'bold', marginBottom: 8}}>
          {this.handleDateTime()}
        </Text>
        <TextInput
          placeholder="Nama"
          style={styles.form}
          value={this.state.name}
          onChangeText={value => this.setState({name: value})}
        />
        <View style={{flexDirection: 'column'}}>
          <Text>Pembayaran</Text>
        </View>

        <TextInput
          placeholder="Email"
          style={styles.form}
          value={this.state.email}
          onChangeText={value => this.setState({email: value})}
        />

        <TextInput
          placeholder="Alamat"
          style={styles.form}
          value={this.state.address}
          onChangeText={value => this.setState({posisi: value})}
        />
        <View style={styles.line} />

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity onPress={this.props.navigation.navigate('AddItem')}>
            <View
              style={{
                width: 120,
                backgroundColor: 'rgba(43,87,178,0.5)',
                alignItems: 'center',
                padding: 8,
              }}>
              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/3405/3405668.png',
                }}
                style={styles.imageButton}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                width: 120,
                backgroundColor: 'rgba(173,48,48,0.5)',
                alignItems: 'center',
                padding: 8,
              }}>
              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/565/565491.png',
                }}
                style={styles.imageButton}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                width: 120,
                backgroundColor: 'rgba(56,173,48,0.5)',
                alignItems: 'center',
                padding: 8,
              }}>
              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/3439/3439406.png',
                }}
                style={styles.imageButton}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 16,
  },

  imageButton: {
    width: 30,
    height: 30,
  },
  wrapperButton: {
    alignSelf: 'baseline',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 30,
  },
  form: {
    borderWidth: 1,
    marginBottom: 12,
    marginTop: 8,
    borderRadius: 25,
    paddingHorizontal: 8,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'black',
  },
  line: {
    height: 2,
    backgroundColor: 'black',
    marginVertical: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    backgroundColor: '#f2f2f2',
    padding: 16,
    marginBottom: 10,
    borderRadius: 8,
  },
  delete: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
});

export default Dashboard;
