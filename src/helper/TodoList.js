const url = "https://assets.breatheco.de/apis/fake/todos/user/chiqui";

const todoList = async () => {
  const result = await fetch(url);
  return await result.json();
};

const updateList = async (data) => {
  return await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

const createList = async () => {
  return await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify([]),
  });
};

const deleteList = async () => {
  return await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
export { todoList, updateList, deleteList, createList };
