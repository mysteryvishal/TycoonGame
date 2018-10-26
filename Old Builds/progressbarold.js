render() 
    return(
        <View style={styles.item}>
        <View style={styles.container1}>
            <TouchableOpacity onPress={handlePress} >
                <View>
                    <Image style={styles.image} source={require('../static/orange-juice.png')} />
                </View>
            </TouchableOpacity>
            <View style={styles.container2}>
                <Text style={styles.itemHeader}>Orange Juice Stand</Text>
                <ProgressBar />
            </View>
        </View>
    </View>
    )