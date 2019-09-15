import { clipboard } from 'electron';
import * as React from 'react';
import { observer } from 'mobx-react-lite';

import store from '~/renderer/app/store';
import { icons } from '~/renderer/constants';
import { MenuContainer, MenuItem } from '..';
import { MenuDivider } from '../style';

const onClose = () => {
  store.focusedTab.close();
}

const onCloseOthers = () => {
  const pageId = store.focusedTab.pageId;

  for (const tab of store.tabs.list) {
    if (tab.pageId !== pageId) {
      tab.close();
    }
  }
}

const onCloseLeft = () => {
  const tabIndex = store.tabs.list.indexOf(store.focusedTab);

  for (let i = 0; i < tabIndex; i++) {
    store.tabs.list[i].close();
  }
}

const onCloseRight = () => {
  const tabIndex = store.tabs.list.indexOf(store.focusedTab);

  for (let i = tabIndex + 1; i < store.tabs.list.length; i++) {
    store.tabs.list[i].close();
  }
}

const onCloseAll = () => {
  for (const tab of store.tabs.list) {
    tab.close();
  }
}

const onRefresh = () => {
  store.pages.current.fetchFiles();
};

const onCopyPath = () => {
  const page = store.pages.current;
  const path = page.path.toString();

  clipboard.writeText(path, 'clipboard')
}

export const TabMenu = observer(() => {
  return (
    <MenuContainer content='tab'>
      <MenuItem icon={icons.close} onClick={onClose}>
        Close
      </MenuItem>
      <MenuItem icon={' '} onClick={onCloseOthers}>
        Close others
      </MenuItem>
      <MenuItem icon={' '} onClick={onCloseRight}>
        Close to the right
      </MenuItem>
      <MenuItem icon={' '} onClick={onCloseLeft}>
        Close to the left
      </MenuItem>
      <MenuItem icon={' '} onClick={onCloseAll}>
        Close all
      </MenuItem>
      <MenuDivider />
      <MenuItem icon={icons.refresh} onClick={onRefresh}>
        Refresh
      </MenuItem>
      <MenuDivider />
      <MenuItem icon={icons.copy} onClick={onCopyPath}>
        Copy path
      </MenuItem>
    </MenuContainer>
  );
});
