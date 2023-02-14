const authHeader = (thunkAPI) => {
  //burda headers: kismini mi iyilestirdi?
  return {
    headers: {
      authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
    },
  };
};

export default authHeader;
