import React, {Component} from "react";
import { View, Animated } from "react-native";


class Ball extends Component{
    
    UNSAFE_componentWillMount(){
        this.position = new Animated.ValueXY(0,0);
        Animated.spring(this.position, 
            {
            toValue: {x: 200, y:500},
            
        }).start();

    }
    render(){

        return(
            
        <Animated.View style={this.position.getLayout()}> 
        <View style={styles.ball}>

        </View>
        </Animated.View>

        );
}
}
const styles ={
    ball:{
        height: 60,
        width: 60,
        borderRadius: 40,
        borderWidth: 40,
        borderColor: 'brown',
        transform: [{ scaleY: 0.5 }],
        // resizeTo
    }
}

export default Ball;