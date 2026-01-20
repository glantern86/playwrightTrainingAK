// fixtures/trello-test.ts
import { test as baseTest } from '@playwright/test';
import { GetStartedPage } from '../pages/get-started';
import { BoardPage } from '../pages/board';
import { MyBoardsPage } from '../pages/my-boards';

export const test = baseTest.extend<{
  getStartedPage: GetStartedPage;
  boardPage: BoardPage;
  myBoardsPage: MyBoardsPage;
}>({
  getStartedPage: async ({ page }, use) => {
    const getStartedPage = new GetStartedPage(page);
    await use(getStartedPage);
  },
  
  boardPage: async ({ page }, use) => {
    const boardPage = new BoardPage(page);
    await use(boardPage);
  },
  
  myBoardsPage: async ({ page }, use) => {
    const myBoardsPage = new MyBoardsPage(page);
    await use(myBoardsPage);
  },
});

export { expect } from '@playwright/test';