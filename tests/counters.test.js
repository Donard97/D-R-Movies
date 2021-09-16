  import showsCount from '../src/__mocks__/mock.showCounts.js';
  import getCommentCount from '../src/__mocks__/mock.getCommentCount.js';

test('returns 6 when length of array is 6', () => {
  const list = [{ item: 1 }, { item: 3 }, { item: 2 }, { item: 5 }, { item: 4 }, { item: 10 }];
  const count = showsCount(list);
  expect(count).toBe(6);
});

test('returns 1 when array length is 1', () => {
  const list = [{ item: 4 }];
  const count = showsCount(list);
  expect(count).toBe(1);
});

test('returns 0 when array is empty', () => {
  const list = [];
  const count = showsCount(list);
  expect(count).toBe(0);
});


test('returns 1 when length is one', () => {
  const container = { textContent: 'lorem' };
  const arr = [{ item: 1 }];
  getCommentCount(container, arr);
  expect(container.textContent).toBe('Comments (1)');
});

test('returns 2 when length is two', () => {
  const container = { textContent: 'ipsum' };
  const arr = [{ item: 1 }, { item: 2 }];
  getCommentCount(container, arr);
  expect(container.textContent).toBe('Comments (2)');
});

test('returns 0 when length is 0', () => {
  const container = { textContent: 'hello' };
  const arr = [];
  getCommentCount(container, arr);
  expect(container.textContent).toBe('Comments (0)');
});