const baseUrl = '';

const request = async (nodeId) => {
  try {
    const res = await fetch(`${baseUrl}/${nodeId ? nodeId : ''}`);

    if (!res.ok) {
      throw new Error('서버의 상태가 이상합니다!');
    }

    return res.json();
  } catch (error) {
    throw new Error(error.message);
  }
};
