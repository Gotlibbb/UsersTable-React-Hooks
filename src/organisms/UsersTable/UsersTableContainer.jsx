import { UsersTable } from "./UsersTable";
import { useState } from "react";
import { v1 } from "uuid";

const initUsers = [
  {
    sername: "Иванов",
    name: "Иван",
    fatherName: "Иванович",
    email: "mail1@mail.com",
    login: "user1",
    id: v1()
  },
  {
    sername: "Петров",
    name: "Петр",
    fatherName: "Сергеевич",
    email: "mail2@mail.com",
    login: "user2",
    id: v1()
  },
  {
    sername: "Сергеев",
    name: "Григорий",
    fatherName: "Викторович",
    email: "mail3@mail.com",
    login: "user3",
    id: v1()
  },
  {
    sername: "Федоров",
    name: "Виктор",
    fatherName: "Федорович",
    email: "mail4@mail.com",
    login: "user4",
    id: v1()
  },
  {
    sername: "Хвастунов",
    name: "Сергей",
    fatherName: "Петрович",
    email: "mail5@mail.com",
    login: "user5",
    id: v1()
  },
  {
    sername: "Григорьев",
    name: "Федор",
    fatherName: "Григорьевич",
    email: "mail6@mail.com",
    login: "user6",
    id: v1()
  }
];

export const UsersTableContainer = () => {
  const [users, setUsers] = useState(initUsers);

  const AddUserHandler = (newUser) => {
    setUsers([
      ...users,
      {
        sername: newUser.sername,
        name: newUser.name,
        fatherName: newUser.fatherName,
        email: newUser.email,
        login: newUser.login,
        id: v1()
      }
    ]);
  };

  const UpdateUserHandler = (upUserData, userId) => {
    setUsers(
      users.map((u, i) => {
        if (u.id === userId) {
          return (u[i] = upUserData);
        }
        return u;
      })
    );
  };

  const DeleteUserHandler = (userId) => {
    setUsers(users.filter((u) => u.id !== userId));
  };

  return (
    <UsersTable
      users={users}
      AddUserHandler={AddUserHandler}
      UpdateUserHandler={UpdateUserHandler}
      DeleteUserHandler={DeleteUserHandler}
    />
  );
};
