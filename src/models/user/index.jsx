import { getUserListPage } from '@/services/user';

const initState = {
  data: [],
};

export default {
  //命名空间
  namespace: 'user',
  //数据
  state: initState,
  //异步调用方法
  effects: {
    *getUserListPage({ payload }, { call, put }) {
      const res = yield call(getUserListPage, payload);
      yield put({ type: 'show', payload: { data: res } });
    },
    *deleteById({ payload }, { call, put }) {},
  },
  //改变view ,相当于setState
  reducers: {
    show: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
  },
  // 初始化
  subscriptions: {
    setup({ dispatch }) {
      dispatch({ type: 'getUserListPage' });
      // dispatch({type:"getUserListPage",payload:{req:""}});
    },
  },
};
