import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import axios, {AxiosResponse} from 'axios';

interface props {
  navigation: any;
}

class AddItem extends React.Component<props> {
  state = {
    dataItem: [],
  };
  private GetData() {
    axios
      .get('http://10.0.2.2:3004/data')
      .then((r: AxiosResponse) => r.data.stockItemResponses)
      .then((r: any) => {
        console.log(r);
        this.setState({
          dataItem: r,
        });
      });
  }

  componentDidMount() {
    this.GetData();
  }

  private Item = ({
    kodeItem,
    namaItem,
    hargaItem,
    kuantitasItem,
    satuanItem,
    onPress,
  }: {
    kodeItem: string;
    namaItem: string;
    hargaItem: number;
    kuantitasItem: number;
    satuanItem: string;
    onPress: {};
  }) => {
    return (
      <View>
        <View style={{flexDirection: 'row'}}>
          <Text>{kodeItem}</Text>
          <Text>{namaItem}</Text>
          <Text>{hargaItem}</Text>
          <Text>{kuantitasItem && satuanItem}</Text>
          <TouchableOpacity onPress={() => onPress}>
            <View style={{width: 100, backgroundColor: '#3ea7b4', padding: 8}}>
              <Text>tambah keranjang</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  private selectedItem(item: any) {
    console.log('selected item :', item);
    this.props.navigation.navigate('Dashboard', {
      title: item.title,
      img: item.image,
      price: item.price,
      desc: item.description,
    });
  }

  render() {
    return (
      <View>
        {this.state.dataItem.map(item => {
          return (
            <ScrollView>
              <this.Item
                key={item['stockItemId']}
                kodeItem={item['stockItemId']}
                namaItem={item['stockItemTitle']}
                hargaItem={item['sellPrice']}
                kuantitasItem={item['stockItemCategoryResponse[currentQty]']}
                satuanItem={item['stockItemCategoryResponse[metricType]']}
                onPress={() => this.selectedItem(item)}
              />
            </ScrollView>
          );
        })}
      </View>
    );
  }
}

export default AddItem;
