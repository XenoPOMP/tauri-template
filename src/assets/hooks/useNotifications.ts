import { ReplaceReturnType } from '@xenopomp/advanced-types';

import {
  isPermissionGranted,
  requestPermission,
  sendNotification,
} from '@tauri-apps/api/notification';

interface ITauriNotificationsHook {
  sendNotification: ReplaceReturnType<typeof sendNotification, Promise<void>>;
  isPermissionGranted: typeof isPermissionGranted;
  requestPermission: typeof requestPermission;
}

/**
 * This hook allows to use Tauri`s api to send notifications.
 *
 * @example
 * const { sendNotification } = useNotifications();
 *
 * // Function checks if access is granted automatically.
 * sendNotification('Tauri is awesome!');
 * sendNotification({ title: 'TAURI', body: 'Tauri is awesome!' });
 */
export const useNotifications = (): ITauriNotificationsHook => {
  const send: ITauriNotificationsHook['sendNotification'] = async options => {
    // Setup default options
    if (typeof options !== 'string') {
      options.sound = options.sound ?? 'default';
    }

    let permissionGranted = await isPermissionGranted();

    if (!permissionGranted) {
      const permission = await requestPermission();
      permissionGranted = permission === 'granted';
    }

    if (permissionGranted) {
      sendNotification(options);
    }
  };

  return {
    sendNotification: send,
    isPermissionGranted,
    requestPermission,
  };
};
