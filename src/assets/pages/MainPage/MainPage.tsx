import cn from 'classnames';

import Page from '@components/Page/Page';

import { useNotifications } from '@hooks/useNotifications';

import styles from './MainPage.module.scss';

const MainPage = () => {
  const { sendNotification } = useNotifications();

  return (
    <Page
      meta={{
        title: 'Main',
        description: 'Some description',
        keywords: '',
      }}
    >
      <h1 className={cn('font-bold text-2xl')}>Notification API</h1>
      <button
        onClick={() => {
          let ignore = sendNotification({
            title: 'Tauri app template',
            body: 'You got 1 message from app.',
          });
        }}
      >
        Send notification
      </button>
    </Page>
  );
};

export default MainPage;
