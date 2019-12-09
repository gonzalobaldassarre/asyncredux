import React, { useEffect } from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import BlogPost from '../components/BlogPost';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import { FlatList } from 'react-native-gesture-handler';

const PostList = ({fetchPosts, posts}) => {
    
    useEffect( () => {
        fetchPosts();
    }, []);

    return(
        <SafeAreaView>
            <View>
                <Text style={styles.title}>Postlist: {posts.length} </Text>
                
                <FlatList
                data={posts}
                keyExtractor = { item => item.id.toString() }
                renderItem= { ({ item }) => {
                        
                        return (
                            <BlogPost number={item}/>
                        )
                }}            
                />
            </View>
        </SafeAreaView>
    );
};

PostList.navigationOptions = {
    header: null,
};

const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        alignSelf: 'center'
    }
});

const mapStateToProps = state => {
    return { posts: state.post};
};

export default connect(
    mapStateToProps,
    { fetchPosts }
    )(PostList);