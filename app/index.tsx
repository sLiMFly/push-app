import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { ThemedText } from '@/components/ThemedText'
import { usePushNotification } from '@/hooks/usePushNotification'

const PushApp = () => {

    const { expoPushToken, notifications } = usePushNotification();


    return (
        <View style={{ marginHorizontal: 10, marginTop: 5 }}>
            <ThemedText>Token: {expoPushToken} </ThemedText>

            <ThemedText
                style={{
                    marginTop: 10,
                    fontWeight: 'bold',
                    fontSize: 20,
                }}
            >Notificaciones </ThemedText>

            <ThemedText>

                <FlatList
                    data={notifications}
                    keyExtractor={(item) => item.request.identifier}
                    renderItem={({ item }) => (
                        <View>
                            <ThemedText style={{ fontWeight: 'bold' }}>
                                {item.request.content.title}
                            </ThemedText>
                            <ThemedText>
                                {item.request.content.body}
                            </ThemedText>
                            <ThemedText>
                                {JSON.stringify(item.request.content.data, null, 2)}
                            </ThemedText>
                        </View>
                    )}
                    ItemSeparatorComponent={() =>
                        <View
                            style={{ height: 1, backgroundColor: 'gray', opacity: 0.3 }}
                        />}
                />
            </ThemedText>
        </View>
    )
}

export default PushApp