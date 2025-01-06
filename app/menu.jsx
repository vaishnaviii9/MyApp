import { StyleSheet, Appearance, Platform, SafeAreaView,ScrollView, FlatList, View, Text, Image } from "react-native";
import { Colors } from "@/constants/Colors";
import {MENU_ITEMS} from '@/constants/MenuItems'
import MENU_IMAGES from '@/constants/MenuImages' 

export default function MenuScreen(){
    const colorScheme = Appearance.getColorScheme()
    
    const theme = colorScheme=== 'dark' ? Colors.dark: Colors.light

    const styles = createStyles(theme, colorScheme)

    const Container  = Platform.OS === 'web' ? ScrollView : SafeAreaView;

    const separatorComponent = <View style={styles.separator} />

    // const headerComponent =  <Text> Top of List</Text>
    const footerComponent =  <Text style={{color: theme.text}}> End of Menu</Text>
    return (
        <Container>

            <FlatList
                data ={MENU_ITEMS}
                keyExtractor={(item)=> item.id.toString()}
                showsVerticalScrollIndicator ={false}
                contentContainerStyle ={styles.contentContainer}
                ItemSeparatorComponent={separatorComponent}
                // ListHeaderComponent={headerComponent}
                ListFooterComponent={footerComponent}
                ListFooterComponentStyle ={ styles.footerComponent}
                ListEmptyComponent={<Text>No Items</Text>}
                renderItem ={( {item})=>(
                        <View style={styles.row}>
                            <View style={styles.menuTextRow}>
                                <Text style={styles.menuItemTitle}>
                                    {item.title}
                                </Text>
                                <Text style={styles.menuItemText}>
                                    {item.description}
                                </Text>
                            </View>
                            <Image source={MENU_IMAGES[item.id -1]} 
                                style={styles.menuImage}
                            />
                        </View>
                )}

            />

        </Container>
    )

}

function createStyles(theme, colorScheme){
    return StyleSheet.create({
        contentContainer: {
            paddingTop: 20,
            paddingBottom: 30,
            paddingHorizontal: 15,
            backgroundColor: theme.background,
        },
        separator:{
            height: 1,
            backgroundColor: colorScheme === 'dark' ? 'papayawhip' : '#ccc',
            width: '80%',
            maxWidth: 300,
            marginHorizontal: 'auto',
            marginBottom: 15
        },
        footerComponent:{
            marginHorizontal: 'auto',
            marginTop: 20,
            fontSize: 16,
            textAlign: 'center',
            color: theme.text
        },
        row:{
            flexDirection: 'row',
            width: '100%',
            maxWidth: 600,
            height: 220,
            marginBottom: 15,
            borderStyle: 'solid',
            borderColor: colorScheme === 'dark' ? 'papayawhip' : '#ccc',
            borderWidth: 1,
            borderRadius: 15,
            overflow: 'hidden',
            marginHorizontal: 'auto',
            backgroundColor: colorScheme === 'dark' ? '#444' : '#f9f9f9',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 5,
            elevation: 3,
        },
        menuTextRow:{
            width: '60%',
            paddingTop: 15,
            paddingLeft: 15,
            paddingRight: 10,
            flexGrow: 1,
        },
        menuItemTitle:{
            fontSize: 22,
            fontWeight: 'bold',
            marginBottom: 5,
            color: theme.text
        },
        menuItemText:{
            color: theme.text,
            fontSize: 16,
            marginTop: 5, // Add margin to separate from title
        },
        menuImage:{
            width: 200,
            height: '100%',
            borderRadius: 10,
            margin: 10,
            resizeMode: 'cover' // Changed back to 'cover' for better appearance
        }
    })
}