import React from 'react';
import * as Notifications from 'expo-notifications';

export function requestPermissionsAsync() {
    return Notifications.requestPermissionsAsync({
        ios: {
            allowAlert: true,
            allowBadge: true,
            allowSound: true,
            allowAnnouncements: true,
        },
    });
}

export async function allowsNotificationsAsync() {
    const settings = await Notifications.getPermissionsAsync();
    return settings.granted || settings.ios?.status === Notifications.IosAuthorizationStatus.PROVISIONAL;
}
