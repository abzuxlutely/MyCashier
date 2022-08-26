import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from '../view/Dashboard';
import AddItem from '../component/AddItem';

const Stack = createNativeStackNavigator();

const Main = () => {
  // @ts-ignore
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Dashboard"
          //component error
          //TS2322: Type 'typeof Dashboard' is not assignable to type 'ScreenComponentType<ParamListBase, "Dashboard"> | undefined'.   Type 'typeof Dashboard' is not assignable to type 'ComponentClass<{}, any>'.     Types of parameters 'props' and 'props' are incompatible.       Type '{}' is not assignable to type 'props | Readonly<props>'
          //stuck here :""""
          component={Dashboard}
          options={{title: 'MyCashier'}}
        />
        <Stack.Screen
          name="AddItem"
          //component error
          //TS2322: Type 'typeof Dashboard' is not assignable to type 'ScreenComponentType<ParamListBase, "Dashboard"> | undefined'.   Type 'typeof Dashboard' is not assignable to type 'ComponentClass<{}, any>'.     Types of parameters 'props' and 'props' are incompatible.       Type '{}' is not assignable to type 'props | Readonly<props>'
          //stuck here :""""
          component={AddItem}
          options={{title: 'MyCashier'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

//const styles = StyleSheet.create({});

export default Main;
