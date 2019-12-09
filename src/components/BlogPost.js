import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Card } from 'react-native-elements';
import { fetchUser } from '../actions';
import { connect } from 'react-redux';
import _ from 'lodash'; 

let name='';

const BlogPost = ({ number, fetchUser, user }) => {
    useEffect( () => {  
       fetchUser(number.userId);
    }, []);

    return( 
        <View>
            { user ? (<Card title={user.name}>              
                <Text> {number.title} </Text>         
            </Card>) : <ActivityIndicator size="small" color="#00ff00" /> }
        </View>
    );
};

const styles = StyleSheet.create({});

const mapStateToProps = (state, ownProps) => {
    
    return { user : state.users.find( user => user.id === ownProps.number.userId ) }
}
export default connect(
    mapStateToProps,
    { fetchUser }
    )(BlogPost);