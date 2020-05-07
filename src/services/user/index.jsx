const users = [
  { id: 1, name: '张三', age: 28 },
  { id: 2, name: '李四', age: 38 },
];

export const getUserListPage = req => {
  return users;
};

export const deleteUserById = id => {};
